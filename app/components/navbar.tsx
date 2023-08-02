"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";

import NavbarLinksLarge from "./navbar-links-large";
import NavbarMenuSmall from "./navbar-menu-small";

export default function Navbar() {
  const [largeView, setLargeView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setLargeView(true);
      } else {
        setLargeView(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      {!largeView && <NavbarMenuSmall />}
      <Link href="/">
        <Image src={Logo} alt="logo" width={106} height={50} />
      </Link>
      {largeView && <NavbarLinksLarge />}
    </div>
  );
}
