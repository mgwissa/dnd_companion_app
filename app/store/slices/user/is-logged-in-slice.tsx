import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { HYDRATE } from "next-redux-wrapper";

export interface IsLoggedInState {
  value: boolean;
}

const initialState: IsLoggedInState = {
  value: false,
};

export const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.value = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
