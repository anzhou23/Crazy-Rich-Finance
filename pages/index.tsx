import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HomePage() {
  const navigation = [
    { name: 'Learn', href: '/learn' },
    { name: 'Dictionary', href: '/dictionary' },
    { name: 'About', href: '/about' },
  ]

  return (
    <div className="flex flex-col bg-white min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/subtle-cinematics-unsplash.jpg')" }}>
      <Navbar navigation={navigation} />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Take control of your financial future
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Live your best life ☺
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
