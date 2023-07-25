import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bidAsk() {
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
                    <span className="text-gray-700">Bid and Ask</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bid and Ask</h1>
                    <p className="mt-4">In financial markets, the terms &quot;bid&quot; and &quot;ask&quot; refer to the prices at which buyers and sellers are willing to buy
                    and sell a particular asset, such as a stock, bond, or fund.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The bid price represents the highest price a buyer is willing to pay for the asset. Buyers place bids to express their interest in acquiring
                    the asset at a specific price. The ask price, on the other hand, represents the lowest price a seller is willing to accept for the asset. Sellers set the ask price
                    to indicate the minimum price they are willing to receive for the asset.</p>
                    <p className="mt-2">The difference between the bid and ask prices is known as the bid-ask spread. This spread represents the transaction cost and the profit margin
                    for market makers or intermediaries facilitating the trades. A narrower bid-ask spread usually indicates higher liquidity in the market, meaning the asset can be bought
                    or sold more easily with less impact on the price. Conversely, a wider spread may suggest lower liquidity and may lead to higher transaction costs for buyers and sellers.</p>
                    <p className="mt-2">Traders and investors use bid and ask prices to determine the best prices to execute their trades. If a trader wants to buy an asset, they will
                    typically pay the ask price. If a trader wants to sell an asset, they will typically accept the bid price.</p>
                </section>
            </div>
        </div>
    )
}
