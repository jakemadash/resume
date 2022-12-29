/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("SaveEdit component", () => {
  it("toggles hidden class on applicable elements when save or edit button clicked", () => {
    render(<App />);
    const hideableElements = [
      screen.getByRole("button", { name: "Edit" }),
      screen.getByRole("generic", { name: "color" }),
    ];

    // initial state
    hideableElements.forEach((element) => {
      expect(element.classList.contains("hidden")).toBe(true);
    });

    userEvent.click(screen.getByRole("button", { name: "Save" }));

    // saved state
    hideableElements.forEach((element) => {
      expect(element.classList.contains("hidden")).toBe(false);
    });

    userEvent.click(screen.getByRole("button", { name: "Edit" }));

    // edit state
    hideableElements.forEach((element) => {
      expect(element.classList.contains("hidden")).toBe(true);
    });
  });

  it("toggles disabled attribute and nohover class on applicable elements when save or edit button clicked", () => {
    render(<App />);
    const form = screen.getByRole("form");
    const resume = screen.getByRole("generic", { name: "resume" });
    const formElements = form.querySelectorAll("*");
    const resumeButtons = resume.querySelectorAll("button");

    // initial state
    formElements.forEach((element) => {
      expect(element).not.toHaveAttribute("disabled");
      expect(element.classList.contains("nohover")).toBe(false);
    });
    resumeButtons.forEach((button) => {
      expect(button.classList.contains("nohover")).toBe(true);
    });

    userEvent.click(screen.getByRole("button", { name: "Save" }));

    // saved state
    formElements.forEach((element) => {
      expect(element).toHaveAttribute("disabled");
      expect(element.classList.contains("nohover")).toBe(true);
    });
    resumeButtons.forEach((button) => {
      expect(button.classList.contains("nohover")).toBe(false);
    });

    userEvent.click(screen.getByRole("button", { name: "Edit" }));

    // edit state
    formElements.forEach((element) => {
      expect(element).not.toHaveAttribute("disabled");
      expect(element.classList.contains("nohover")).toBe(false);
    });
    resumeButtons.forEach((button) => {
      expect(button.classList.contains("nohover")).toBe(true);
    });
  });
});
