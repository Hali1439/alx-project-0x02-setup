// components/layout/Header.tsx

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </nav>
    </header>
  )
}
