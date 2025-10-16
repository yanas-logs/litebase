'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return(
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} My Next.js App. All rights reserved.</p>
        <nav className="mt-2">
          <Link href="/" className="mx-2 hover:underline">Home</Link>
          <Link href="/about" className="mx-2 hover:underline">About</Link>
          <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>   
  )
}