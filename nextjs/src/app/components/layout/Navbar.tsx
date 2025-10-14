"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link href="/">Brand Logo</Link>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
