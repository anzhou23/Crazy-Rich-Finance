import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function assetAllocation() {
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
                    <span className="text-gray-700">Asset Allocation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Asset Allocation</h1>
                    <p className="mt-4">Asset allocation is a crucial investment strategy that involves dividing your investment portfolio among different asset classes, such as stocks, bonds,
                    cash, real estate, and other investments, to achieve specific financial goals while managing risk.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Asset allocation helps diversify your investments, spreading the risk across various asset classes. Diversification reduces the impact of potential losses
                    in any single investment, as different asset classes often respond differently to market conditions.</p>
                    <p className="mt-2">When deciding your portfolio&apos;s asset allocation, consider your risk tolerance, which is your ability and willingness to handle fluctuations in the value of
                    your investments. You should also factor in your investment goals, such as capital growth, income generation, or a balance of both. Younger investors with long-term goals may have
                    a higher allocation to growth-oriented assets, while retirees may prioritize income-generating assets.</p>
                    <p className="mt-2">Your individual circumstances, such as age, income, financial obligations, time horizon, and liquidity needs, should play a role as well. For example, longer
                    time horizons may allow for more aggressive asset allocation strategies, while shorter horizons may require more conservative approaches.</p>
                    <p className="mt-2">Over time, the performance of different asset classes may cause your portfolio to deviate from its original allocation. Rebalancing involves periodically adjusting
                    your investments to maintain the desired asset allocation.</p>
                    <p className="mt-2">Asset allocation involves finding a balance between risk and potential return. Typically, higher-risk assets offer the potential for greater returns but come with
                    increased volatility, while lower-risk assets tend to be more stable but may yield lower returns. Common asset allocation models include conservative, moderate, and aggressive portfolios,
                    each with varying proportions of stocks, bonds, and other assets. As your financial situation evolves and market conditions change, you may adjust your asset allocation to align with your
                    evolving goals and risk tolerance.</p>
                </section>
            </div>
        </div>
    )
}
