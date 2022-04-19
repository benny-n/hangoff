import { render, screen } from "@testing-library/react";
import { Word } from "./Word";

test("renders word without guesses", () => {
  render(<Word word={"HANGOFF"} guesses={[]}></Word>);
  const typographies = screen.getAllByText(/_/i);
  typographies.forEach((typography) => {
    expect(typography).toHaveTextContent("_");
  });
});

test("renders word with some guesses", () => {
  render(<Word word={"HANGOFF"} guesses={[0, 2, 4, 6]}></Word>);
  const typographies = screen.getAllByText(/[H|A|N|G|O|F|F|_]/i);
  typographies.forEach((typography, idx) => {
    if (idx % 2 === 0) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(typography).not.toHaveTextContent("_");
    } else {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(typography).toHaveTextContent("_");
    }
  });
});

test("renders word with all guesses", () => {
  render(<Word word={"HANGOFF"} guesses={[0, 1, 2, 3, 4, 5, 6]}></Word>);
  const typographies = screen.getAllByText(/[H|A|N|G|O|F|F]/i);
  typographies.forEach((typography) => {
    expect(typography).not.toHaveTextContent("_");
  });
});
