import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function futures() {
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
                    <span className="text-gray-700">Futures</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Futures</h1>
                    <p className="mt-4">Futures are financial contracts that obligate the buyer to purchase an asset or the seller to sell an asset at a predetermined price and specified date
                    in the future. These contracts are standardized and traded on organized exchanges. Futures contracts cover a wide range of assets, including commodities (such as gold, oil,
                    and agricultural products), financial instruments (such as stock indices and currencies), and even interest rates.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The main purpose of futures contracts is to manage price risk. They allow producers, consumers, investors, and speculators to lock in future prices for the
                    underlying asset, providing a hedge against potential price fluctuations. For example, a farmer may use a futures contract to secure a fixed price for their crops before the
                    harvest, protecting themselves from the risk of falling market prices. On the other hand, investors and speculators use futures contracts to speculate on the future direction of
                    prices and potentially profit from price movements.</p>
                    <p className="mt-2">Futures trading involves 2 parties: the long position (the buyer) and the short position (the seller). When the contract reaches its expiration date, it can be
                    settled in 2 ways: through physically delivering the underlying asset (in the case of commodities) or through a cash settlement, where the difference between the contract price and
                    the market price gets paid.</p>
                    <p className="mt-2">Futures trading carries risks, as price movements can result in substantial gains or losses. Due to their leverage, small price fluctuations can have a significant
                    impact on traders&apos; positions. Therefore, futures trading requires careful consideration and risk management, making it more suitable for experienced investors and institutions
                    with a good understanding of the market dynamics.</p>
                </section>
            </div>
        </div>
    )
}