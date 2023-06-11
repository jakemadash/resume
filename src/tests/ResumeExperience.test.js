/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../views/Home";

describe("ResumeExperience component", () => {
  it("renders placeholder value if no value from props, value otherwise", () => {
    render(<Home />);
    expect(screen.getByRole("generic", { name: "position" }).textContent).toBe(
      "Software Developer"
    );
    screen.getByPlaceholderText("Position").focus();
    userEvent.keyboard("a");
    expect(
      screen.getByRole("generic", { name: "position" }).textContent
    ).toMatch("a");
  });

  it("renders same number of component sections as corresponding form element", async () => {
    render(<Home />);
    // form element
    const experience = screen.getByRole("generic", { name: "Work History" });
    // resume element
    const resumeExperience = screen.getByRole("generic", {
      name: "resume-experience",
    });

    expect(experience.children.length).toBe(1);
    expect(
      within(resumeExperience).getAllByRole("generic", {
        name: "experience-entry",
      }).length
    ).toBe(1);

    userEvent.click(screen.getAllByRole("button", { name: "Add" })[0]);

    expect(experience.children.length).toBe(2);
    await waitFor(() =>
      expect(
        within(resumeExperience).getAllByRole("generic", {
          name: "experience-entry",
        }).length
      ).toBe(2)
    );
  });
});
