import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "../views/Home";

describe("Resume component", () => {
  it("renders placeholder if no value, value otherwise", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      "Full Name"
    );

    screen.getByPlaceholderText("Full Name").focus();
    userEvent.keyboard("a");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch("a");
  });
});
