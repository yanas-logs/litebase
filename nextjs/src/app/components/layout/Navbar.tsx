"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      {/* Left - Brand Logo */}
      <div className="text-xl font-semibold">
        <Link href="/">Brand Logo</Link>
      </div>

      {/* Middle - Menu */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/components/About" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/components/Contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
