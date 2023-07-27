import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function extrinsicValue() {
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
                    <span className="text-gray-700">Extrinsic Value</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Extrinsic Value</h1>
                    <p className="mt-4">Extrinsic value, also known as time value, is a concept used in financial markets, particularly in options trading. It represents the portion of an option&apos;s
                    premium influenced by factors other than the intrinsic value. The intrinsic value of an option is the difference between the current market price of the underlying asset and the
                    option&apos;s strike price (in the case of a call option) or the option&apos;s strike price minus the current market price (in the case of a put option).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Extrinsic value takes various factors into account, such as time to expiration, market volatility, and interest rates. The longer the time remaining until an
                    option&apos;s expiration, the higher its extrinsic value, as there is a greater chance the option may move further into a profitable position before it expires. Similarly, higher
                    market volatility tends to increase extrinsic value since there is a higher likelihood of significant price swings in the underlying asset, which can result in more favorable outcomes
                    for the option holder.</p>
                    <p className="mt-2">Extrinsic value is important for both option buyers and sellers. For option buyers, it represents the potential cost of holding the option until expiration. For option
                    sellers, it is the potential income they can earn by selling the option and taking on the corresponding risk.</p>
                    <p className="mt-2">As an option approaches its expiration date, its extrinsic value tends to decrease, ultimately converging to zero at expiration. At that point, the option&apos;s value
                    is entirely determined by its intrinsic value (if any). This is because there is no longer any time for the option to potentially move into a profitable position.</p>
                </section>
            </div>
        </div>
    )
}