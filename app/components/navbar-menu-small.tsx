import { useState } from "react";
import Link from "next/link";

export default function NavbarMenuSmall() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center">
      <div>
        {!open && (
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            onClick={() => setOpen(true)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {open && (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={() => setOpen(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {open && (
        <div className="static h-screen w-screen ease-in duration-300">
          <div>
            <Link href="/notes" className="hover:bg-gray-700 px-3 py-1 rounded">
              Notes
            </Link>
          </div>
          <div>
            <Link
              href="/backstory"
              className="hover:bg-gray-700 px-3 py-1 rounded"
            >
              Backstory
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:bg-gray-700 px-3 py-1 rounded">
              Character Sheet
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
