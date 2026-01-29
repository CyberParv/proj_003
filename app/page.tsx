'use client'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Menu />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
