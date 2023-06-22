import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function dayTrading() {
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
                    <span className="text-gray-700">Day Trading</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Day Trading</h1>
                    <p className="mt-4">Day trading is the practice of buying and selling financial instruments, such as stocks, currencies, or derivatives, within the same trading day to capitalize on short-term
                    price fluctuations. Day traders aim to make profits by taking advantage of intraday market volatility. It is a high-risk, high-reward trading strategy that requires active monitoring, quick
                    decision-making, and in-depth knowledge of market dynamics.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Day traders engage in frequent buying and selling transactions, often executing multiple trades within a single day. Positions typically get closed out before the market closes to capitalize
                    on small price movements that occur within a short time frame. Day traders closely monitor market movements, use technical analysis tools and indicators, and make quick decisions based on short-term price patterns.</p>
                    <p className="mt-2">Day traders focus on liquid markets and securities that exhibit sufficient price volatility. Volatility creates opportunities for potential profits, while liquidity ensures that trades can be executed
                    quickly and at desired prices. Highly liquid assets, such as major stocks or currency pairs, are often preferred by day traders.</p>
                    <p className="mt-2">Day trading involves inherent risks due to the short-term nature of trades and potential rapid price movements. Effective risk management is crucial to protect against significant losses. Strategies
                    such as setting stop-loss orders, diversifying trades, and using risk-reward ratios help day traders limit losses and preserve capital.</p>
                </section>
            </div>
        </div>
    )
}
