import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function peRatio() {
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
                    <span className="text-gray-700">Price-to-Earning Ratio</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Price-to-Earning Ratio</h1>
                    <p className="mt-4">The price-to-earnings ratio (P/E ratio) is used to evaluate the relative value of a company&apos;s stock. It is calculated by dividing the current market price per
                    share of a stock by the earnings per share (EPS) of the company over a specific period, usually the most recent fiscal year.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Investors typically use the P/E ratio to assess whether a stock is overvalued or undervalued. It provides insights into how much investors are willing to pay for each dollar
                    of earnings generated by the company. A higher P/E ratio generally indicates that investors have higher expectations for future earnings growth, while a lower P/E ratio may suggest lower growth
                    expectations or undervaluation.</p>
                    <p className="mt-2">Comparing the P/E ratio of a company to its industry peers or the overall market can provide insights into its valuation relative to similar companies or the broader market.
                    However, the P/E ratio should not be used as the sole indicator of a stock&apos;s attractiveness. Other factors such as the company&apos;s financial health, industry dynamics, growth prospects,
                    and competitive position should also be considered.</p>
                    <p className="mt-2"></p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}
