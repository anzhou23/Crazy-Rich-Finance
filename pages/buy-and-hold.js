import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function buyAndHold() {
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
                    <span className="text-gray-700">Buy and Hold</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Buy and Hold</h1>
                    <p className="mt-4">Buy and hold is an investment strategy where investors buy securities, such as stocks or bonds, and hold them for an extended period without
                    frequent buying or selling. The strategy is based on the belief that over the long term, the value of the investments will appreciate, generating positive returns.
                    It emphasizes patience, long-term perspective, and minimizing trading activity.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The goal of buying and holding is to benefit from the potential growth and compounding of investments over time, rather than trying to time market fluctuations
                    or make quick profits. Buy and hold investors want to benefit from the overall upward trajectory of the market over time, even though there may be short-term fluctuations and market
                    downturns along the way. Additionally, by minimizing trading activity, investors can reduce transaction costs, such as brokerage fees, and potentially mitigate the impact of taxes on
                    capital gains.</p>
                    <p className="mt-2">Buy and hold investors often focus on fundamental analysis to identify quality investments with strong underlying fundamentals. They look for companies or assets with
                    solid financials, competitive advantages, and sustainable growth prospects.</p>
                    <p className="mt-2">Although buy and hold investors hold investments for the long term, you should review your portfolio&apos;s performance periodically and make adjustments as needed.
                    This can involve rebalancing the portfolio to maintain the desired asset allocation or making changes based on changes in personal circumstances or investment goals.</p>
                </section>
            </div>
        </div>
    )
}
