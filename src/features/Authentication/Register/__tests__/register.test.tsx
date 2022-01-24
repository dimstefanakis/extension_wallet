import React from "react";
import { render, screen, cleanup, fireEvent } from "../../../../../test-utils";
import userEvent from "@testing-library/user-event";
import RegisterPage from "../../../../../pages/register";

beforeEach(() => {
  // render(<RegisterPage />);
});

afterEach(() => {
  cleanup();
});

test("Register", () => {
  render(<RegisterPage />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs).toHaveLength(2);
  const continueButtons = screen.getAllByRole("button", {
    name: "Continue",
  }) as HTMLButtonElement[];
  continueButtons.forEach((continueButton) => {
    expect(continueButton.disabled).toEqual(true);
  });
});

test("Buttons should be disabled if there is no input", () => {
  render(<RegisterPage />);
  const tabs = screen.getAllByRole("tab");
  const emailInput = screen.getByTestId("email");
  let continueButtons = screen.getAllByRole("button", {
    name: "Continue",
  }) as HTMLButtonElement[];

  expect(continueButtons[0].disabled).toEqual(true);
  userEvent.type(emailInput, "test");
  expect(continueButtons[0].disabled).toEqual(false);
});
