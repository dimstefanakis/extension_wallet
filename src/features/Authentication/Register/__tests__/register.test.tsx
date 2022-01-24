import React from "react";
import {render, screen, cleanup} from '../../../../../test-utils';
import RegisterPage from "../../../../../pages/register";


beforeEach(()=>{
  render(<RegisterPage />);
})

afterEach(()=>{
  cleanup();
})

test("Register", () => {
  render(<RegisterPage />);
  const tabs = screen.getAllByRole("tablist");
  expect(tabs).toHaveLength(2);
  const continuteButtons = screen.getAllByRole("button", {name: 'Continue'}) as HTMLButtonElement[];
  continuteButtons.forEach((continueButton) => {
    expect(continueButton.disabled).toEqual(true);
  });
});
