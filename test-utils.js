import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { store, testAuthenticatedStore } from "./src/store";

const queryClient = new QueryClient();

const render = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const renderAuthenticated = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={testAuthenticatedStore}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render, renderAuthenticated };
