'use client'
import React from 'react'

export default function Error() {
  return (
    <main className="flex items-center justify-center h-screen bg-yellow-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-900">Something went wrong.</h1>
        <p className="text-yellow-800 mb-6">Please try refreshing the page or come back later.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-yellow-600 hover:bg-yellow-700 text-yellow-50 px-6 py-3 rounded font-semibold"
          aria-label="Reload page"
        >
          Reload
        </button>
      </div>
    </main>
  )
}
