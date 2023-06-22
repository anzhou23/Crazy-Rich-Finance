import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bullMarket() {
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
                    <span className="text-gray-700">Bull Market</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bull Market</h1>
                    <p className="mt-4">A bull market refers to a period of rising prices and optimism in the financial markets, typically associated with an upward trend in
                    stock prices. It is characterized by widespread buying, investor confidence, and expectations of future growth. Bull markets are often fueled by positive economic
                    indicators, favorable market conditions, or significant developments in industries or sectors.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Investors typically experience gains and see the value of their investments increase during a bull market. Stocks and other growth-oriented assets tend to
                    perform well during this phase, rewarding investors who have positioned their portfolios accordingly.</p>
                    <p className="mt-2">Timing the market and accurately predicting the duration of a bull market can be challenging. While bull markets can last for extended periods, they are not
                    indefinite. It is important to exercise caution, avoid excessive speculation, and maintain a long-term perspective rather than succumbing to short-term
                    market fluctuations.</p>
                    <p className="mt-2">Bull markets can lead to exuberance and a tendency to chase returns. It is crucial to remain disciplined, avoid getting caught up in market hype, and make
                    investment decisions based on sound analysis and long-term goals rather than succumbing to emotional reactions.</p>
                    <p className="mt-2">Bull markets are part of market cycles, which include periods of growth, stability, decline, and recovery. Eventually, they will transition into more
                    challenging market environments, such as bear markets or market corrections.</p>
                </section>
            </div>
        </div>
    )
}