/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import List from "../components/List";

describe("List component", () => {
  it("renders one blank education component or one blank experience component by default", () => {
    render(<List label="Work History" place="jobs" />);
    const experience = screen.getByRole("generic", { name: "Work History" });
    expect(experience.children.length).toBe(1);
    // only Experience component has className 'job'
    expect(experience.children[0].children[0].className).toBe("job");
  });

  it("renders a remove button for each generated component and one add button at end of list", () => {
    render(<List label="Education" place="schools" />);
    const componentElements = [
      ...screen.getByRole("generic", { name: "Education" }).children[0]
        .children,
    ];
    const remove = screen.getByRole("button", { name: "Remove" });
    const add = screen.getByRole("button", { name: "Add" });

    // remove button is part of component section
    expect(componentElements.includes(remove)).toBe(true);

    // add button exists
    expect(add).toBeInTheDocument();

    // but is not part of component section
    expect(componentElements.includes(add)).not.toBe(true);
  });

  it("renders new component section when add button clicked", () => {
    render(<List label="Education" place="schools" />);
    expect(
      screen.getByRole("generic", { name: "Education" }).children.length
    ).toBe(1);
    userEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(
      screen.getByRole("generic", { name: "Education" }).children.length
    ).toBe(2);
  });

  it("removes component section when remove button clicked", () => {
    render(<List label="Education" place="schools" />);
    expect(
      screen.getByRole("generic", { name: "Education" }).children.length
    ).toBe(1);
    userEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(
      screen.getByRole("generic", { name: "Education" }).children.length
    ).toBe(0);
  });
});
