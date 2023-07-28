import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fallingknife() {
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
                    <span className="text-gray-700">Falling Knife</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Falling Knife</h1>
                    <p className="mt-4">The term &quot;falling knife&quot; is a situation where the price of a particular asset, such as a stock or a cryptocurrency, rapidly declines in value
                    over a short period. It is often used to describe a security whose price is in a freefall, and investors are wary of catching it as it falls further.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Investing in a falling knife can be highly risky because there is no clear indication of where the asset&apos;s price will bottom out. Attempting to catch
                    a falling knife means buying the asset at its current declining price with the hope that it will rebound, but this strategy can lead to substantial losses if price keeps falling.</p>
                    <p className="mt-2">Investors and traders use the term &quot;falling knife&quot; as a cautionary metaphor to remind others of the potential dangers of trying to time the market or
                    speculate on assets in a downtrend. Instead, prudent investors often wait for signs of stabilization or a clear reversal pattern before considering an entry point in a declining asset.</p>
                </section>
            </div>
        </div>
    )
}