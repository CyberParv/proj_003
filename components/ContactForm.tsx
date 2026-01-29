'use client'
import React, { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('All fields are required.')
      return
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Here, hook for actual submission logic like sending to backend API
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (e) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-yellow-100 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-900">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold text-yellow-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold text-yellow-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 font-semibold text-yellow-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            aria-required="true"
          />
        </div>
        {error && <p className="mb-4 text-red-600 font-semibold" role="alert">{error}</p>}
        {success && <p className="mb-4 text-green-600 font-semibold" role="status">Thank you for contacting us! We will get back to you shortly.</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-bold py-3 rounded transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
