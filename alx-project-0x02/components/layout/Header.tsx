// components/layout/Header.tsx

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-600">ALX Project 0x02</h1>
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link href="/home" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-blue-500 transition">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-blue-500 transition">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
