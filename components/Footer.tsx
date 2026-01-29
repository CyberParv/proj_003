'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-yellow-600 text-yellow-50 py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Bean and Brew. All rights reserved.</p>
      </div>
    </footer>
  )
}
