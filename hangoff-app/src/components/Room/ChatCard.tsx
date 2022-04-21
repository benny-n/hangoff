import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import useEventListener from "@use-it/event-listener";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../hooks/useStore";

const ChatCardComp: React.FC = () => {
  const {
    dataStore: { player, roomState, updateRoom },
    uiStore: { chatFocused, setChatFocused },
  } = useStore();

  const [message, setMessage] = React.useState("");

  const handleClickSend = () => {
    if (message.length === 0) {
      return;
    }
    // FIXME - should be POST api
    let newRoomState = { ...roomState };
    let newMessage = { player, text: message };
    newRoomState.chatMessages = newRoomState.chatMessages.concat([newMessage]);
    updateRoom(newRoomState);
    setMessage("");
  };

  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [roomState.chatMessages]);

  useEventListener("keydown", (event: Event) => {
    if (!chatFocused) {
      return;
    }
    const key = (event as any).key;
    if (key === "Enter") {
      handleClickSend();
    }
  });
  return (
    <Card
      sx={{
        textAlign: "left",
        backgroundColor: "#252525",
      }}
    >
      <CardContent
        sx={{
          height: "200px",
          overflow: "auto",
        }}
      >
        {roomState.chatMessages.map((msg, idx) =>
          msg.player ? (
            <Typography
              key={idx}
              color="text.primary"
            >{`${msg.player}: ${msg.text}`}</Typography>
          ) : (
            <Typography
              key={idx}
              color="text.secondary"
              fontWeight="bold"
            >{`${msg.text}`}</Typography>
          )
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TextField
            sx={{ borderColor: "#fff", width: "100%" }}
            label={"Send a message"}
            value={message}
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setChatFocused(true)}
            onBlur={() => setChatFocused(false)}
          />
          <IconButton
            color={chatFocused ? "primary" : undefined}
            onClick={() => handleClickSend()}
          >
            <SendIcon sx={{ height: "40px", width: "40px" }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export const ChatCard = observer(ChatCardComp);
