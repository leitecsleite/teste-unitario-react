import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { HomeLazyComponent } from "./index,";

test("toggles lazy component visibility on button click", async () => {
  render(<HomeLazyComponent />);
  expect(screen.queryByText(/Lc on screen/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByText(/show LC is off screen/i));

  expect(screen.getByText(/carregando.../i)).toBeInTheDocument();

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
  });
  act(() => {
    fireEvent.click(screen.getByText(/show Lc on screen/i));
  });

  expect(screen.queryByText(/Lc on screen/i)).not.toBeInTheDocument();
});
