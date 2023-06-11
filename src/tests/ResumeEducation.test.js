/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../views/Home";

describe("ResumeEducation component", () => {
  it("renders placeholder value if no value from props, value otherwise", () => {
    render(<Home />);
    expect(screen.getByRole("generic", { name: "degree" }).textContent).toBe(
      "Bachelor of Science"
    );
    screen.getByPlaceholderText("Degree").focus();
    userEvent.keyboard("a");
    expect(screen.getByRole("generic", { name: "degree" }).textContent).toMatch(
      "a"
    );
  });

  it("renders same number of component sections as corresponding form element", async () => {
    render(<Home />);
    // form element
    const education = screen.getByRole("generic", { name: "Education" });
    // resume element
    const resumeEducation = screen.getByRole("generic", {
      name: "resume-education",
    });

    expect(education.children.length).toBe(1);
    expect(
      within(resumeEducation).getAllByRole("generic", {
        name: "education-entry",
      }).length
    ).toBe(1);

    userEvent.click(screen.getAllByRole("button", { name: "Add" })[1]);

    expect(education.children.length).toBe(2);
    await waitFor(() =>
      expect(
        within(resumeEducation).getAllByRole("generic", {
          name: "education-entry",
        }).length
      ).toBe(2)
    );
  });
});
