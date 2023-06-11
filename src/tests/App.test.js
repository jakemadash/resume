/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../views/Home";

describe("Home component", () => {
  it("toggles hidden class on applicable elements when save or edit button clicked", () => {
    render(<Home />);
    userEvent.click(screen.getByRole("button", { name: "Save" }));
    userEvent.click(screen.getByRole("button", { name: "Download" }));
    // print preview window
    expect(document.querySelector("iframe")).toBeInTheDocument();
  });
});
