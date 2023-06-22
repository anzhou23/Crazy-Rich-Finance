import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function goldStandard() {
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
                    <span className="text-gray-700">Gold Standard</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gold Standard</h1>
                    <p className="mt-4">The gold standard is a monetary system where the value of a country&apos;s currency is directly linked to a fixed quantity of gold. Under the gold standard, each unit of currency represents a specific amount of gold, and
                    the currency can be freely converted into gold at a fixed exchange rate.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">One of the defining features of the gold standard is convertibility. It means that individuals or central banks can exchange their paper currency for gold at a fixed rate. This convertibility provides confidence and stability to the
                    currency, as it is backed by a tangible and valuable asset. Since the currency&apos;s value is linked to a fixed amount of gold, the supply of money is inherently limited by the availability of gold reserves. This tends to keep inflation in check and
                    promotes price stability over the long term.</p>
                    <p className="mt-2">Under the gold standard, exchange rates between different currencies are fixed. Countries set their currency&apos;s value in terms of gold, and the exchange rates between currencies are determined by their respective gold equivalencies.
                    This reduces currency volatility and facilitates international trade and investment. Additionally, since the money supply is tied to the availability of gold, governments are limited in their ability to create money at will. This constraint helps prevent
                    excessive money printing and the associated risks of inflation and currency devaluation.</p>
                    <p className="mt-2">The gold standard has been largely abandoned by countries around the world. The shift away from the gold standard began in the early 20th century, and today, most countries operate on a fiat currency system, where the value of money is not
                    directly linked to a physical commodity like gold. Critics argue that the gold standard limits a government&apos;s ability to respond to economic crises and that it can restrict economic growth and flexibility.</p>
                </section>
            </div>
        </div>
    )
}
