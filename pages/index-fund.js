import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function indexFund() {
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
                    <span className="text-gray-700">Index Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Index Fund</h1>
                    <p className="mt-4">An index fund is a type of mutual fund that aims to replicate the performance of a specific market index, such as the S&P 500. It does this by holding a diversified portfolio of securities
                    that closely matches the composition of the target index. Index funds offer investors broad market exposure, low costs, and a passive investment approach.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Index funds are known for their low expense ratios compared to actively managed funds. Since index funds aim to replicate the performance of an index rather than rely on active investment strategies, they typically
                    have lower operating expenses, such as management fees and transaction costs.</p>
                    <p className="mt-2">While index funds may not outperform the market, they offer the potential for consistent, market-matching returns over the long term. By eliminating the need for active investment decisions, index funds can reduce
                    the impact of trying to time the market and handpick individual stocks.</p>
                    <p className="mt-2">Index funds do not involve active buying or selling decisions based on market trends or individual security analysis. This passive approach appeals to investors who prefer a long-term, low-maintenance investment
                    strategy that aligns with the belief that markets are generally efficient and difficult to consistently outperform.</p>
                    <p className="mt-2">When choosing an index fund, investors should consider factors such as the expense ratio, tracking error (the degree to which the fund&apos;s returns deviate from the target index), the fund&apos;s history and
                    track record, and the index being tracked. Investors should also assess their investment goals, risk tolerance, and desired market exposure to select the index fund that best aligns with their investment objectives.</p>
                </section>
            </div>
        </div>
    )
}
