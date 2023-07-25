import React from 'react'
import Navbar from "../components/Navbar"
import Helmet from 'react-helmet'

export default function Home() {
  const navigation = [
    { name: 'Learn', href: '/learn' },
    { name: 'Dictionary', href: '/dictionary' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-green-300 to-90%">
      <Helmet>
        <link rel="icon" href="../public/images/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Navbar navigation={navigation} />

      <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">Take control of your financial future</h1>
            <p className="mt-6 text-2xl leading-8 text-white">Live your best life ☺</p>
          </div>
        </div>
      </div>
    </div>
  )
}
