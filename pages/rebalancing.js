import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function rebalancing() {
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
                    <span className="text-gray-700">Rebalancing</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Rebalancing</h1>
                    <p className="mt-4">Rebalancing is process of adjusting the allocation of assets in an investment portfolio to bring it back to its desired target or strategic asset allocation. It involves
                    buying or selling assets within the portfolio to maintain the desired balance between different asset classes, such as stocks, bonds, and cash.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The purpose of rebalancing is to ensure that the portfolio remains in line with the investor&apos;s risk tolerance, investment goals, and overall investment strategy. Over time,
                    the value of different assets within a portfolio can fluctuate, causing the portfolio to deviate from its original asset allocation. Rebalancing helps to restore the intended balance and manage risk.</p>
                    <p className="mt-2">Investors typically rebalance their porfolio periodically, such as quarterly, semi-annually, or annually, depending on their preference and market conditions. Rebalancing helps to
                    control risk by preventing the portfolio from becoming too heavily weighted in a single asset class that may be experiencing excessive volatility or overvaluation.</p>
                    <p className="mt-2">By selling assets that have appreciated and buying assets that have declined, rebalancing allows investors to take advantage of the principle of &quot;buying low and selling high.&quot;
                    potentially enhancing long-term returns. Rebalancing enforces discipline in adhering to a predetermined investment plan, preventing emotional decision-making based on short-term market fluctuations.
                    However, it does not guarantee higher returns or protect against losses.</p>
                </section>
            </div>
        </div>
    )
}
