"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { setShowModal } from "../store/slices/app/modal-reducer";

export default function Navbar() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleModalOpen = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <Image src="/DnD-Symbol.png" alt="D&D" width={128} height={77} />
      </div>
      <div className="flex justify-evenly w-1/2">
        <Link href="/">Home</Link>
        <Link href="/next">Next</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/sign-up">
          <button>Sign Up/Login</button>
        </Link>
        <div onClick={handleModalOpen} className="cursor-pointer">
          show modal
        </div>
      </div>
    </div>
  );
}
