import React from "react";
import Component from "./App";
import { render } from "@testing-library/react";

describe("<App />", () => {
  test("renderiza corretamente o bricks", async () => {
    const screen = render(<Component />);
    expect(screen.getByTestId("brick-container")).toBeInTheDocument();
  });
});

