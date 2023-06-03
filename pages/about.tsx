import React from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from "../components/Navbar"
import Image from 'next/image'
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

      <div className="mt-20 flex justify-center">
        <div className="text-center">
          <h1 className="text-lg text-gray-600">About Crazy Rich Finance</h1>
          <p className="mt-3 text-3xl font-bold">Design the life you&apos;ve always dreamed of.</p>
          <div className="mt-6">
            <Image
              src="/images/kawin-harasai-unsplash.jpg"
              alt="About image"
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 py-5 px-10">
        <h2 className="text-md text-gray-600">Vision</h2>
        <p className="mt-2.5 text-2xl font-bold">Live your rich life.</p>
        <hr className="my-8 border-gray-900" />
      </div>

      <div>
        <div className="py-5 px-10 flex flex-col md:flex-row">
          <div className="md:w-2/5 md:pr-5">
            <h2 className="text-md text-gray-600">Core behaviors</h2>
            <p className="mt-2.5 text-2xl font-bold">Every day is an opportunity.</p>
          </div>

          <div className="md:w-3/5 md:pl-5">
            <p className="text-lg font-semibold mt-3">Make dollars and sense of it all</p>
            <p className="text-md">Take your money and life to the next level.</p>

            <p className="text-lg font-semibold mt-3">Reframe your mindset</p>
            <p className="text-md">Spend on things that bring you joy and cut back on things that don&apos;t.</p>

            <p className="text-lg font-semibold mt-3">There is no limit to how much you can earn</p>
            <p className="text-md">Reframe your mindset. Take your money and life to the next level.</p>

            <p className="text-lg font-semibold mt-3">You are in control</p>
            <p className="text-md">Don&apos;t wait for someone to rescue you. Take control of your own finances.</p>

            <p className="text-lg font-semibold mt-3">Getting started is more important than being an expert</p>
            <p className="text-md">It&apos;s okay to make mistakes as long as you keep moving forward.</p>
          </div>
        </div>

        <div className="py-5 px-10 ">
          <hr className="my-8 border-gray-900" />
        </div>
      </div>

      <div className="py-5 px-10 flex flex-col md:flex-row">
        <div className="md:w-2/5 md:pr-5">
          <h2 className="text-md text-gray-600">
            <a href="https://www.magnifymoney.com/news/investing-by-generation-survey/" target=" _blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Magnify Money | March 2022</a>
          </h2>
          <p className="mt-2.5 text-2xl font-bold">The importance of investing early.</p>
        </div>

        <div className="md:w-1.5/5 md:pl-5">
          <p className="text-lg font-semibold mt-3">77% of Americans</p>
          <p className="text-md">regret not investing earlier.</p>

          <p className="text-lg font-semibold mt-3">57% of Gen Z</p>
          <p className="text-md">have investing regrets from the last year.</p>
        </div>

        <div className="md:w-1.5/5 md:pl-5">
          <p className="text-lg font-semibold mt-3">35% of Gen Z</p>
          <p className="text-md">say their top investing goal is to retire comfortably.</p>

          <p className="text-lg font-semibold mt-3">15% of Gen Z</p>
          <p className="text-md">wish they invested more money.</p>
        </div>
      </div>

      <Footer />

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-10 mt-20">
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
      </div> */}
    </div>
  )
}
