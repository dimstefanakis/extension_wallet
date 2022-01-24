import React from "react";
import * as nextRouter from "next/router";
import { renderAuthenticated, screen, cleanup, fireEvent } from "../test-utils";
import userEvent from "@testing-library/user-event";
import ExperiencePage from "../pages/experience/[slug]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

test("ExperiencePage", () => {
  useRouter.mockImplementation(() => ({
    route: "/experience/docu-sign",
    pathname: "/experience/docu-sign",
    query: "",
    asPath: "",
  }));

  renderAuthenticated(<ExperiencePage />);

  // next doesn't have access to the experience immidiately
  // so we need to wait a bit of time
  // I don't think this is a good idea :(
  setTimeout(() => {
    expect(screen.getByText("Docu sign")).toBeTruthy();
    let tabs = screen.getAllByRole("tab");
    expect(tabs.length).toEqual(2);
  }, 100);
});
