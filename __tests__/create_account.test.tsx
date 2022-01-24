import React from "react";
import { render, screen, cleanup, fireEvent } from "../test-utils";
import userEvent from "@testing-library/user-event";
import CreateAccountPage from "../pages/create_account";

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("Verification", () => {
  render(<CreateAccountPage />);
  const nameInput = screen.getByPlaceholderText("Ex. John doe");
  const idInput = screen.getByPlaceholderText("yourname");
  expect(nameInput).toBeTruthy();
  expect(idInput).toBeTruthy();
  let continueButton;
  try {
    continueButton = screen.getByRole("button", {
      name: "Continue",
    }) as HTMLButtonElement;
  } catch (e) {
    continueButton = screen.getByRole("button", {
      name: "Loading... Continue",
    }) as HTMLButtonElement;
  }
  expect(continueButton.disabled).toEqual(true);

  // expect error to popup if account with this id already exists
  userEvent.type(idInput, "johnd");

  // the mock api request runs for 1 second so this should wait
  setTimeout(() => {
    const alreadyExists = screen.getByText("Account ID already taken!");
    expect(alreadyExists).toBeTruthy();
  }, 1000);
});
