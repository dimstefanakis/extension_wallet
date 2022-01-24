import React from "react";
import { renderAuthenticated, screen, cleanup, fireEvent } from "../test-utils";
import userEvent from "@testing-library/user-event";
import FrontPage from "../pages/index";

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("FrontPage", () => {
  renderAuthenticated(<FrontPage />);
  expect(screen.getByText("Recent Experiences")).toBeTruthy();
  expect(screen.getAllByTestId("experiencePreview").length).toEqual(2);
  
  expect(screen.getByText("Popular Categories")).toBeTruthy();
  expect(screen.getAllByTestId("categoryPreview").length).toEqual(4);
});
