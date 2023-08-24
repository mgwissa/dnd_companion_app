"use client";

import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../store/slices/app/modal-reducer";

export default function Modal() {
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state: RootState) => state.app.modal.showModal
  );

  const handleModalClose = () => {
    dispatch(setShowModal(false));
  };

  return (
    showModal && (
      <div className="absolute w-screen h-screen top-0 flex justify-center items-center">
        <div
          className="bg-slate-600 opacity-80 absolute h-screen w-screen top-0"
          onClick={handleModalClose}
        ></div>
        <div className="bg-white text-black relative min-w-[500px] min-h-[600px] rounded-2xl p-4 shadow-black shadow-lg">
          <span
            className="cursor-pointer text-right font-bold text-2xl ml-auto"
            onClick={handleModalClose}
          >
            X
          </span>
          <h3 className="text-xl font-bold text-center">
            Login or Sign Up With Google
          </h3>
        </div>
      </div>
    )
  );
}
