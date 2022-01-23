import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../index";

describe("Register", () => {
  render(<Register />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs).toHaveLength(2);
});
