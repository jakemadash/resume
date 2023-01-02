import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

describe("Input component", () => {
  it("renders input element correctly based on props", () => {
    render(<Input label="Test Label" type="text" />);
    expect(screen.getByRole("textbox").type).toBe("text");
    expect(screen.getByRole("textbox").id).toBe("TestLabel");
    expect(screen.getByRole("textbox").placeholder).toBe("Test Label");
  });

  it("updates text value on change", () => {
    render(<Input label="Test Label" type="text" />);
    expect(screen.getByRole("textbox").value).toBe("");
    screen.getByRole("textbox").focus();
    userEvent.keyboard("test");
    expect(screen.getByRole("textbox").value).toBe("test");
  });
});
