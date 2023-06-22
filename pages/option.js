import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function option() {
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
                    <span className="text-gray-700">Option</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Option</h1>
                    <p className="mt-4">An option is a financial derivative contract that gives the holder the right, but not the obligation, to buy (call option) or sell (put option) an underlying asset at a
                    predetermined price (strike price) within a specific period of time (expiration date).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Options provide investors with flexibility and leverage in their investment strategies. By purchasing or selling options, investors can gain exposure to the price movements of the underlying asset without actually owning it. Options allow
            for potential profit from both upward (call options) and downward (put options) price movements, and the leverage inherent in options contracts can amplify returns, but it also increases the potential risk.</p>
                    <p className="mt-2">Buyers of options have the right, but not the obligation, to exercise the option contract. They can choose whether to exercise the option and buy or sell the underlying asset at the strike price before the expiration date. Sellers of options,
            on the other hand, have the obligation to fulfill the terms of the contract if the buyer decides to exercise the option.</p>
                    <p className="mt-2">Investors can use options to protect their existing positions from adverse price movements by buying put options as a form of insurance. Options can also be used for speculative purposes, where investors aim to profit from anticipated price movements.</p>
                    <p className="mt-2">The price of an option is influenced by several factors, including the price of the underlying asset, the strike price, the time remaining until expiration, market volatility, and interest rates. These factors collectively affect the intrinsic
            value and time value of the option.</p>
                    <p className="mt-2">Common options strategies include buying or selling options outright (long or short positions), covered call writing, protective puts, straddles, strangles, and spreads. Each strategy has its own risk and reward profile and is suited for
            different market conditions and investor objectives.</p>
                    <p className="mt-2">Options have a limited lifespan and expire on a specific date. Once an option expires, it becomes worthless, and the investor loses the premium paid. It is important to carefully manage option positions and consider the time remaining until
            expiration to avoid losses from time decay.</p>
                </section>
            </div>
        </div>
    )
}
