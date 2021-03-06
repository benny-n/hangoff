import { Box, Grow } from "@mui/material";
import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import { HangmanState } from "../../types";

const renderHangmanPart = (state: HangmanState, responsiveWidth: number) => {
  const hangmanPartAlt = "hangman";
  const hangmanPartStyle = {
    height: responsiveWidth / 2 + "px",
    width: responsiveWidth + "px",
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

const renderHangman = (
  hangman: HangmanState[],
  responsiveWidth: number,
  timeout: number = 500
) => {
  return hangman.length > 0 ? (
    <Box sx={{ display: "grid" }}>
      {hangman.map((state, index) => (
        <Box key={index} sx={{ gridRow: 1, gridColumn: 1 }}>
          <Grow in={true} timeout={timeout}>
            {renderHangmanPart(state, responsiveWidth)}
          </Grow>
        </Box>
      ))}
    </Box>
  ) : (
    <></>
  );
};

interface HangmanProps {
  state?: HangmanState;
  isFaded: boolean;
}

const Hangman: React.FC<HangmanProps> = (props) => {
  const { state, isFaded } = props;
  const { isTablet, isMobile } = useDeviceType();
  const responsiveWidth = isMobile ? 200 : isTablet ? 400 : 700;
  const [hangman, setHangman] = React.useState<HangmanState[]>([
    HangmanState.None,
  ]);
  React.useEffect(() => {
    if (state !== undefined && state !== HangmanState.None) {
      let newHangman = [];
      newHangman = Array.from(Array(state + 1).keys());
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
        justifyContent: "center",
        opacity: isFaded ? 0.25 : 1,
        filter: isFaded ? "blur(2.5px)" : "none",
      }}
    >
      {isFaded
        ? renderHangman(completeHangman, responsiveWidth, 5000)
        : renderHangman(hangman, responsiveWidth)}
    </Box>
  );
};

export default Hangman;
