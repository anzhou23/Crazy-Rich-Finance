import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function quote() {
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
                    <span className="text-gray-700">Quote</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Quote</h1>
                    <p className="mt-4">In the context of trading and investing, a quote is the current price at which a financial instrument, such as a stock, bond, commodity, or currency pair, is being bought
                    or sold in the market. It provides information about the current market value of the asset and is typically displayed as a bid and ask price.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The bid price represents the highest price buyers are willing to pay for the asset, while the ask price represents the lowest price at which sellers are willing to sell the
                    asset. The difference between the bid and ask price is known as the spread and reflects the transaction costs associated with trading the asset.</p>
                    <p className="mt-2">Quotes are constantly updated in real-time as market conditions change and trading activity takes place. They are widely available through financial platforms, brokerage accounts,
                    and financial news sources, though they may vary due to factors like market liquidity, order size, and trading venues. Traders and investors rely on quotes to make informed decisions regarding buying
                    or selling assets.</p>
                    <p className="mt-2">Quotes also provide additional information, such as trading volume, the previous closing price, the day&apos;s range, and other relevant data. This information helps traders assess
                    market trends, volatility, liquidity, and potential trading opportunities.</p>
                </section>
            </div>
        </div>
    )
}