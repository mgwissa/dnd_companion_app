import Link from "next/link";

export default function NavbarLinksLarge() {
  return (
    <div className="flex items-center">
      <Link href="/notes" className="hover:bg-gray-700 px-3 py-1 rounded">
        Notes
      </Link>
      <Link href="/backstory" className="hover:bg-gray-700 px-3 py-1 rounded">
        Backstory
      </Link>
      <Link href="/" className="hover:bg-gray-700 px-3 py-1 rounded">
        Character Sheet
      </Link>
    </div>
  );
}
