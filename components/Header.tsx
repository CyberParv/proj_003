'use client'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-yellow-600 text-yellow-50 py-4 shadow-md">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Bean and Brew</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#menu" className="hover:underline">Menu</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
