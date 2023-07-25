import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function algorithmicTrading() {
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
                    <span className="text-gray-700">Algorithmic Trading</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Algorithmic Trading</h1>
                    <p className="mt-4">Algorithmic trading, often referred to as algo trading or automated trading, is a method of executing financial transactions using pre-programmed computer algorithms.
                    These algorithms are designed to follow a set of rules and instructions, enabling the system to automatically place trades without manual intervention.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Algorithmic trading systems can execute trades at extremely high speeds, enabling them to take advantage of market opportunities in fractions of a second. Speed is key in
                    highly competitive and fast-moving financial markets.</p>
                    <p className="mt-2">Algorithmic trading algorithms use historical and real-time market data to analyze patterns, trends, and other indicators that may influence the market. These algorithms are
                    often based on complex mathematical models and statistical analyses rather than human emotions like fear, greed or panic. This can help prevent impulsive and irrational trading decisions.</p>
                    <p className="mt-2">Once the algorithms are programmed, the trading process becomes fully automated. The system can continuously monitor the market, identify potential trades based on predefined
                    criteria, and execute them automatically. Since algorithmic trading systems can handle large volumes of trades simultaneously, they are suitable for institutional investors and high-frequency
                    trading strategies.</p>
                    <p className="mt-2">Different types of algorithmic trading strategies include market making, statistical arbitrage, momentum trading, mean reversion, and news-based trading. While algorithmic
                    trading strategies can be complex and time-consuming to implement, they can also be highly profitable as they prioritizes speed, efficiency, accuracy, and consistency.</p>
                </section>
            </div>
        </div>
    )
}
