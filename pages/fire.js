import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fire() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ]

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Financial Independence, Retire Early</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Financial Independence, Retire Early</h1>
                    <p className="mt-4">The FIRE movement, which stands for Financial Independence, Retire Early, is a lifestyle and financial philosophy that emphasizes extreme savings,
                    frugality, and investing to achieve early retirement and financial independence. The goal is to accumulate enough wealth and passive income so they no longer have to
                    rely on traditional employment for income and can choose to retire much earlier than the conventional retirement age.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">FIRE followers aim to save a significant portion of their income, often 50% or more, by cutting expenses, making mindful spending choices, and living
                    below their means. Living a minimalist and frugal lifestyle is common within the FIRE community.</p>
                    <p className="mt-2">The savings accumulated through high savings rates are invested wisely to generate passive income and grow wealth over time. Once financial independence
                    is attained, individuals in the FIRE movement can choose to retire early from traditional employment and pursue activities they are passionate about.</p>
                    <p className="mt-2">Achieving FIRE requires discipline, careful planning, and a long-term outlook. It may not be suitable for everyone, as it often involves making
                    significant lifestyle changes and accepting some level of sacrifice in the short term to achieve long-term financial freedom. Additionally, the specifics of how individuals
                    approach the FIRE movement may vary, as there is no one-size-fits-all approach.</p>
                </section>
            </div>
        </div>
    )
}