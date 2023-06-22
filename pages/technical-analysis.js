import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function technicalAnalysis() {
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
                    <span className="text-gray-700">Technical Analysis</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Technical Analysis</h1>
                    <p className="mt-4">Technical analysis is a method used to evaluate investments by analyzing statistical trends and patterns in price and volume data. It focuses on studying historical market data,
                    such as charts and indicators, to make predictions about future price movements. Technical analysts believe that past price behavior can provide insights into future price movements and use various
                    tools and techniques to identify potential buying or selling opportunities.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Technical analysis assumes that market prices reflect the collective psychology and behavior of market participants. It believes that historical price patterns and trends repeat
                    themselves due to recurring human emotions, such as fear and greed. Technical analysts study investor sentiment and market psychology to gauge the supply and demand dynamics and identify potential
                    turning points in the market.</p>
                    <p className="mt-2">Technical analysts employ various indicators and oscillators to generate trading signals and confirm their analysis. These tools include moving averages, Relative Strength Index (RSI),
                    Moving Average Convergence Divergence (MACD), and many others. These indicators help identify overbought and oversold conditions, trend strength, momentum, and potential trend reversals.</p>
                    <p className="mt-2">Support and resistance levels are key concepts in technical analysis. Support levels are price levels at which an asset tends to find buying interest and prevent further price declines.
                    Resistance levels, on the other hand, are price levels at which an asset tends to encounter selling pressure and prevent further price increases. Technical analysts identify these levels based on historical
                    price data and consider them as potential areas for buying or selling opportunities.</p>
                    <p className="mt-2">Different technical analysts may analyze the same chart and come up with different conclusions. Technical analysis cannot predict future events or external factors that may impact market
                    prices, such as economic data, geopolitical events, or company news. It should be used in conjunction with other forms of analysis and risk management techniques.</p>
                </section>
            </div>
        </div>
    )
}
