import React from 'react'

export default function Header() {
  return (
    <>
        <header className="flex items-center justify-between w-full p-8 mx-auto bg-amber-400">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
            <ul className="flex items-center gap-4">
                <li>
                <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                <a href="/about" className="hover:underline">About</a>
                </li>
                <li>
                <a href="/projects" className="hover:underline">Projects</a>
                </li>
            </ul>
            </nav>
        </header>
    </>
  )
}
