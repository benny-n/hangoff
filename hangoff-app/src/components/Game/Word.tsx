import { Box, Grow, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

export interface WordProps {
  word: string;
  guesses: number[];
}

const WordComp: React.FC<WordProps> = (props) => {
  const { word, guesses } = props;
  return (
    <Box sx={{ display: "grid", gap: 1.5 }}>
      {Array.from(word).map((char, index) =>
        guesses.includes(index) ? (
          <Box key={index} sx={{ gridRow: 1, gridColumn: index + 1 }}>
            <Grow in={true} timeout={500}>
              <Typography variant="h2" color="text.primary">
                {char}
              </Typography>
            </Grow>
          </Box>
        ) : (
          <Box key={index + "_"} sx={{ gridRow: 1, gridColumn: index + 1 }}>
            <Grow in={true} timeout={500}>
              <Typography variant="h2" color="text.primary">
                _
              </Typography>
            </Grow>
          </Box>
        )
      )}
    </Box>
  );
};

export const Word = observer(WordComp);
