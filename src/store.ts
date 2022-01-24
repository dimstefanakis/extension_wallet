import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./features/Authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer
  },
});


export const testAuthenticatedStore = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
  },
  preloadedState: {
    authentication: {
      isLoggedIn: true,
      account: {
        email: "johndoe@gmail.com",
        full_name: "John doe",
        account_id: "johnd.near",
      },
      registerType: 'email',
      registerValue: {
        email: 'test',
        phone: '',
      },
      loading: false
    },
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
