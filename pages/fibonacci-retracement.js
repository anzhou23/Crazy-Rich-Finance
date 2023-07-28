import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fibonacciRetracement() {
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
                    <span className="text-gray-700">Fibonacci Retracement</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fibonacci Retracement</h1>
                    <p className="mt-4">Fibonacci retracement is a technical analysis tool used to identify potential support and resistance levels in a financial market.
                    It is based on the Fibonacci sequence, a series of numbers where each number is the sum of the 2 preceding ones (e.g., 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Fibonacci retracement levels are drawn by identifying a significant price move (either an uptrend or a downtrend) and then dividing that move
                    into specific ratios derived from the Fibonacci sequence. The most common retracement levels are 23.6%, 38.2%, 61.8%, and 78.6%.</p>
                    <p className="mt-2">When a financial asset experiences a pullback or correction after a significant move, traders and analysts often look to these Fibonacci levels as
                    potential areas of support or resistance. The idea is that these levels may act as natural points where the price could reverse its direction or encounter buying or selling pressure.</p>
                    <p className="mt-2">Traders use Fibonacci retracement levels in conjunction with other technical indicators and chart patterns to make trading decisions. For example,
                    if a stock is in an uptrend and starts to pull back, a trader may look for potential support at one of the Fibonacci levels as a potential buying opportunity. Conversely,
                    in a downtrend, a trader may consider the Fibonacci retracement levels as potential areas where the price could encounter resistance and provide an opportunity to sell.</p>
                </section>
            </div>
        </div>
    )
}