import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

export interface WordProps {
  word: string;
  guesses: number[];
}

const WordComp: React.FC<WordProps> = (props) => {
  const { word, guesses } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      {Array.from(word).map((char, index) => (
        <Typography key={index} variant="h2" color="text.primary">
          {guesses.includes(index) ? char : "_"}
        </Typography>
      ))}
    </Box>
  );
};

export const Word = observer(WordComp);
