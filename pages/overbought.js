import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function overbought() {
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
                    <span className="text-gray-700">Overbought</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Overbought</h1>
                    <p className="mt-4">When a financial asset is deemed overbought, it means that its price has risen too quickly and too high, potentially signaling a possible reversal or correction in the near future.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Overbought conditions occur when the price of a financial asset has experienced a significant and rapid increase over a relatively short period. This upward momentum can be driven by
                    factors such as strong investor demand, positive market sentiment, or positive news surrounding the asset.</p>
                    <p className="mt-2">Traders and analysts often use technical indicators, such as the Relative Strength Index (RSI), support and resistance, MACD, and VWAP, to identify overbought conditions. An overbought
                    condition suggests that the buying pressure on the asset has pushed its price to potentially unsustainable levels. It may indicate that the asset is overvalued or that market participants have become overly
                    optimistic. Traders and investors often interpret an overbought condition as a signal to be cautious and consider the possibility of a price reversal or a period of consolidation.</p>
                    <p className="mt-2">Identifying overbought conditions can be used as one factor in market timing and risk management strategies. It can help traders and investors make informed decisions about when to enter
                    or exit positions, take profits, or implement hedging strategies. However, overbought conditions alone do not guarantee a price reversal.</p>
                </section>
            </div>
        </div>
    )
}