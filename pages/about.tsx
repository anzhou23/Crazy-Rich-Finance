import React from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HomePage() {
  const navigation = [
    { name: 'Learn', href: 'learn' },
    { name: 'Dictionary', href: 'dictionary' },
    { name: 'About', href: 'about' },
  ]

  return (
    <div className="flex flex-col bg-white min-h-screen relative">
      <Navbar navigation={navigation} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-10 mt-20">
        <div className="bg-blue-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-white text-2xl font-semibold mb-4">Make dollars and sense of it all</h2>
          <p className="text-white leading-relaxed mb-6">Design the live you&apos;ve always dreamed of.</p>
        </div>

        <div className="bg-indigo-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Live your rich life</h3>
          <p className="text-white leading-relaxed mb-6">Reframe your mindset and take your money and life to the next level.</p>
        </div>

        <div className="bg-yellow-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">77% of Americans feel anxious about their finances</h3>
          <p className="text-white leading-relaxed mb-6">Spend on things that bring you joy and cut back on things that don&apos;t.</p>
        </div>

        <div className="bg-green-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">There is no limit to how much you can earn</h3>
          <p className="text-white leading-relaxed mb-6">Earn more by negotiating your salary, investing, and starting businesses.</p>
        </div>

        <div className="bg-red-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">You are in control</h3>
          <p className="text-white leading-relaxed mb-6">Don&apos;t wait for someone to rescue you. Take control of your own finances.</p>
        </div>

        <div className="bg-orange-300 text-white shadow-md p-8 md:p-12 flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Getting started is more important than being an expert</h3>
          <p className="text-white leading-relaxed mb-6">It&apos;s okay to make mistakes as long as you keep moving forward.</p>
        </div>
      </div>

    </div>
  )
}
