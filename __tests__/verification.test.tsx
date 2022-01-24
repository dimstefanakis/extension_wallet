import React from "react";
import { render, screen, cleanup, fireEvent } from "../test-utils";
import userEvent from "@testing-library/user-event";
import VerificationPage from "../pages/verification";

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Verification", () => {
  render(<VerificationPage />);
  expect(screen.getByText("Enter verification code")).toBeTruthy();
  const continueButton = screen.getByRole("button", {
    name: "Continue",
  }) as HTMLButtonElement;
  expect(continueButton.disabled).toEqual(true);
});
