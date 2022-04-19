import { Box, Grow } from "@mui/material";
import React from "react";

export enum HangmanState {
  None = 0,
  Ground = 1,
  ScaffoldBase = 2,
  ScaffoldPole = 3,
  ScaffoldWithRope = 4,
  Head = 5,
  Body = 6,
  RightLeg = 7,
  LeftLeg = 8,
  RightArm = 9,
  LeftArm = 10,
  Dead = 11,
}

const renderHangmanPart = (state: HangmanState) => {
  const hangmanPartAlt = "hangman";
  const hangmanPartStyle = {
    height: "200px",
    width: "650px",
  };

  switch (state) {
    case HangmanState.None:
      return (
        <div style={{ opacity: 0 }}>
          <img
            src="/ground.svg"
            alt={hangmanPartAlt}
            style={hangmanPartStyle}
          />
        </div>
      );
    case HangmanState.Ground:
      return (
        <img src="/ground.svg" alt={hangmanPartAlt} style={hangmanPartStyle} />
      );
    case HangmanState.ScaffoldBase:
      return (
        <img
          src="/scaffold_base.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.ScaffoldPole:
      return (
        <img
          src="/scaffold_pole.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.ScaffoldWithRope:
      return (
        <img
          src="/scaffold_with_rope.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.Head:
      return (
        <img src="/head.svg" alt={hangmanPartAlt} style={hangmanPartStyle} />
      );
    case HangmanState.Body:
      return (
        <img src="/body.svg" alt={hangmanPartAlt} style={hangmanPartStyle} />
      );
    case HangmanState.RightLeg:
      return (
        <img
          src="/right_leg.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.LeftLeg:
      return (
        <img
          src="/left_leg.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.RightArm:
      return (
        <img
          src="/right_arm.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.LeftArm:
      return (
        <img
          src="/left_arm.svg"
          alt={hangmanPartAlt}
          style={hangmanPartStyle}
        />
      );
    case HangmanState.Dead:
      return (
        <img src="/dead.svg" alt={hangmanPartAlt} style={hangmanPartStyle} />
      );
    default:
      return <></>;
  }
};

const completeHangman = [
  HangmanState.Ground,
  HangmanState.ScaffoldBase,
  HangmanState.ScaffoldPole,
  HangmanState.ScaffoldWithRope,
  HangmanState.Head,
  HangmanState.Body,
  HangmanState.RightLeg,
  HangmanState.LeftLeg,
  HangmanState.RightArm,
  HangmanState.LeftArm,
];

const renderHangman = (hangman: HangmanState[], timeout: number = 500) => {
  return hangman.length > 0 ? (
    <Box sx={{ display: "grid" }}>
      {hangman.map((state, index) => (
        <Box key={index} sx={{ gridRow: 1, gridColumn: 1 }}>
          <Grow in={true} timeout={timeout}>
            {renderHangmanPart(state)}
          </Grow>
        </Box>
      ))}
    </Box>
  ) : (
    <></>
  );
};

interface HangmanProps {
  state: HangmanState;
  isFaded: boolean;
}

const Hangman: React.FC<HangmanProps> = (props) => {
  const { state, isFaded } = props;
  const [hangman, setHangman] = React.useState<HangmanState[]>([
    HangmanState.None,
  ]);
  React.useEffect(() => {
    if (state !== HangmanState.None) {
      let newHangman = hangman.slice();
      newHangman.push(state);
      setHangman(newHangman);
    } else {
      setHangman([HangmanState.None]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: isFaded ? 0.25 : 1,
        filter: isFaded ? "blur(2.5px)" : "none",
      }}
    >
      {isFaded ? renderHangman(completeHangman, 5000) : renderHangman(hangman)}
    </Box>
  );
};

export default Hangman;
