import { render, screen } from "@testing-library/react";
import { HangmanStateToString } from "../../constants";
import { HangmanState } from "../../types";
import Hangman from "./Hangman";

test("renders hangman", () => {
  render(<Hangman {...{ state: HangmanState.Dead, isFaded: false }} />);
  const hangmanParts = screen.getAllByAltText(/hangman/i);
  expect(hangmanParts).toHaveLength(HangmanStateToString.length - 1); // w/o none
});

test("renders faded hangman", () => {
  render(<Hangman {...{ state: HangmanState.None, isFaded: true }} />);
  const hangmanParts = screen.getAllByAltText(/hangman/i);
  expect(hangmanParts).toHaveLength(HangmanStateToString.length - 2); // w/o none + w/o dead eyes
});
