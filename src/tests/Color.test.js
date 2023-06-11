/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "../views/Home";

describe("Color component", () => {
  it("changes color of all applicable elements when color button pressed", () => {
    const { container } = render(<Home />);
    const coloredElements = container.querySelectorAll(".colored");
    const redButton = screen.getByRole("button", { name: "red" });
    const buttonStyle = getComputedStyle(redButton);
    const selectedColor = buttonStyle.getPropertyValue("background-color").toLowerCase();

    userEvent.click(screen.getByRole("button", { name: "Save" }));
    userEvent.click(redButton);
      coloredElements.forEach((element => {
        expect(element.style.color.toLowerCase() || element.style.borderColor.toLowerCase()).toMatch(selectedColor) 
      }))
  });
});
