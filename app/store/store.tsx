"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import modalReducer from "./slices/app/modal-reducer";

export const store = configureStore({
  reducer: {
    app: combineReducers({
      modal: modalReducer,
    }),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
