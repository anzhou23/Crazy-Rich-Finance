import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function swingTrade() {
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
                    <span className="text-gray-700">Swing Trade</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Swing Trade</h1>
                    <p className="mt-4">Swing trading is a short-to-medium-term trading strategy that aims to capture price movements or &quot;swings&quot; within a broader trend. Swing traders typically hold
                    positions for a few days to several weeks, taking advantage of short-term price fluctuations. The strategy involves identifying potential entry and exit points based on technical analysis,
                    market patterns, and momentum indicators.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Traders analyze price charts, patterns, trendlines, support and resistance levels, and various technical indicators to make informed trading decisions. Popular technical
                    indicators used in swing trading include moving averages, oscillators, and trend-following indicators.</p>
                    <p className="mt-2">Swing trading tends to work well in volatile markets with clear trends. Volatility provides opportunities for price swings, while trending markets offer a more predictable
                    environment for swing trading strategies. Swing traders aim to identify and capitalize on these short-term price swings within a broader trend and may enter positions when they anticipate a
                    reversal or continuation of the current trend. By trading within the trend, swing traders aim to increase the probability of success and maximize potential profits.</p>
                    <p className="mt-2">Swing traders actively monitor their positions, watching for price movements and potential exit signals. They may adjust their stop-loss orders and take-profit targets based on
                    evolving market conditions. Successful swing traders often have a disciplined approach to trade execution and use appropriate risk-reward ratios to assess potential trades.</p>
                    <p className="mt-2">Like any trading strategy, swing trading involves risk management. Traders set stop-loss orders to limit potential losses and protect their capital. These orders automatically
                    trigger a sell order if the price reaches a predetermined level, helping to control downside risk.</p>
                </section>
            </div>
        </div>
    )
}
