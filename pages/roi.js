import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function roi() {
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
                    <span className="text-gray-700">Return on Investment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Return on Investment</h1>
                    <p className="mt-4">Return on Investment (ROI) is used to evaluate the profitability and efficiency of an investment. It measures the return or gain generated from an investment
                    relative to its cost. ROI is typically expressed as a percentage or ratio.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The formula to calculate ROI is: ROI = (Net Profit / Cost of Investment) x 100. Net profit refers to the total gain or profit obtained from the investment, which includes
                    any income, dividends, or capital appreciation. The cost of investment represents the total amount of money invested, including the initial purchase price and any associated expenses or fees.</p>
                    <p className="mt-2">Investors use ROI to compare different investments, projects, or business opportunities on a standardized basis and make more informed decisions about where to allocate their
                    resources. However, ROI does not take into account the time frame over which the investment is held or the timing of cash flows. It is a snapshot measure that focuses on the overall return relative
                    to the investment cost.</p>
                    <p className="mt-2">ROI can be calculated in various ways depending on the specific context or objective. For example, some variations of ROI may consider factors like average annual return, discounted
                    cash flows, or risk-adjusted returns. Other factors such as risk, liquidity, and long-term objectives should also be considered. ROI is just one tool among many used to assess investment performance and
                    guide investment strategies.</p>
                </section>
            </div>
        </div>
    )
}

