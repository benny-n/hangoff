import { Box, Grow, List } from "@mui/material";
import React from "react";
import { TransitionGroup } from "react-transition-group";

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
    height: window.innerHeight / 3,
    width: window.innerWidth / 3,
  };

  switch (state) {
    case HangmanState.None:
      return <></>;
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

const renderHangman = (hangmen: HangmanState[]) => {
  return hangmen.length > 0 ? (
    <List>
      <TransitionGroup>
        <Box sx={{ display: "grid" }}>
          {hangmen.map((state, index) => (
            <Box sx={{ gridRow: 1, gridColumn: 1 }}>
              <Grow key={index} in={true} timeout={500}>
                {renderHangmanPart(state)}
              </Grow>
            </Box>
          ))}
        </Box>
      </TransitionGroup>
    </List>
  ) : (
    <></>
  );
};

const Hangman: React.FC<{ state: HangmanState }> = ({ state }) => {
  const [hangman, setHangman] = React.useState<HangmanState[]>([]);
  React.useEffect(() => {
    if (state !== HangmanState.None) {
      let newHangman = hangman.slice();
      newHangman.push(state);
      setHangman(newHangman);
    } else {
      setHangman([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {renderHangman(hangman)}
    </Box>
  );
};

export default Hangman;
