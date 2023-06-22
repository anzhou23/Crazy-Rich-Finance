import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function overvalued() {
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
                    <span className="text-gray-700">Overvalued</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Overvalued</h1>
                    <p className="mt-4">When a financial asset is considered overvalued, it means that its current price is perceived to be higher than its intrinsic or fundamental value, suggesting that it may be due
                    for a price correction or a period of underperformance.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Oversold conditions can occur when investor enthusiasm, market sentiment, or speculative activity drive prices higher, potentially disconnecting them from the asset&apos;s intrinsic
                    value. Evaluating the intrinsic value of an asset through fundamental analysis, which includes factors such as earnings, cash flows, growth prospects, and industry trends, can help determine whether it is
                    overvalued. Comparing the asset&apos;s current price to its fair value estimation can provide insights into its potential overvaluation.</p>
                    <p className="mt-2">An overvalued condition suggests that the asset&apos;s price may not be sustainable in the long term and could be prone to a price correction. This correction can occur through a gradual
                    decline in price, a sudden market sell-off, or a shift in market sentiment that leads to a reevaluation of the asset&apos;s value. Traders and investors often view overvalued conditions as a signal to exercise
                    caution and consider potential downside risks.</p>
                    <p className="mt-2">Recognizing overvalued conditions is essential for risk management and prudent investing. Investors may consider strategies such as profit-taking, reducing exposure to overvalued assets, or
                    implementing hedging strategies to protect against potential price declines. Maintaining a disciplined approach to valuation and avoiding the temptation to chase overvalued assets can help manage risk and avoid
                    potential losses. Note that while overvalued conditions suggest caution, they can also present opportunities for investors.</p>
                </section>
            </div>
        </div>
    )
}
