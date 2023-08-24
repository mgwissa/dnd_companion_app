"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IModal {
  value: boolean;
  showModal: boolean;
}

const initialState = { showModal: false } as IModal;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal(state, action: PayloadAction<boolean>) {
      state.showModal = action.payload;
    },
  },
});

export const { setShowModal } = modalSlice.actions;
export default modalSlice.reducer;
