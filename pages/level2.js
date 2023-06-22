import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function level2() {
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
                    <span className="text-gray-700">Level 2 Data</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Level 2 Data</h1>
                    <p className="mt-4">Level 2 data, also known as market depth or order book data, provides detailed information about the current buy and sell orders for a particular security on an exchange. It reveals the quantity
                    and price at different bid and ask levels, allowing traders to gauge market liquidity, identify supply and demand dynamics, and make more informed trading decisions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Level 2 data is typically provided in real-time, showing the most up-to-date information about the order book. Traders can see the standing buy and sell orders at various price levels and observe
                    how they change over time. Real-time access to this data enables traders to react quickly to changing market conditions and adjust their trading strategies accordingly. The transparency also helps traders gauge market
                    sentiment, identify potential support and resistance levels, and assess the likelihood of price movements.</p>
                    <p className="mt-2">Level 2 data enables order flow analysis, which involves tracking the incoming orders and their impact on the order book. By monitoring the addition or removal of buy and sell orders, traders can
                    infer the buying or selling pressure in the market.</p>
                    <p className="mt-2">Traders who have access to Level 2 data can make more informed trade execution decisions. By analyzing the depth of the order book and identifying significant buy or sell imbalances, traders can
                    gauge the potential impact of their orders on the market and adjust their trading strategies accordingly.</p>
                </section>
            </div>
        </div>
    )
}
