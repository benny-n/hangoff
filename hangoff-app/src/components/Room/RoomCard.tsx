import { Box, Card, CardContent, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { Timer } from "../Time/Timer";
import { ChatCard } from "./ChatCard";

const RoomCardComp: React.FC = () => {
  const {
    dataStore: { roomState },
  } = useStore();

  return (
    <Card sx={{ minWidth: "700px", minHeight: "400px", marginBottom: "-3px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "92.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <Typography variant="h5" color="text.primary">
            ROOM CODE: {roomState.roomCode}
          </Typography>
          <Timer />
        </Box>
        <ChatCard />
      </CardContent>
    </Card>
  );
};

export const RoomCard = observer(RoomCardComp);
