import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function blueChip() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Blue Chip Stocks</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Blue Chip Stocks</h1>
                    <p className="mt-4">Blue chip stocks are shares of well-established and financially stable companies that have a long history of reliable performance and are considered to be leaders in their
                    respective industries. These companies are typically large, well-known, and have a strong market presence.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The term &quot;blue chip&quot; is derived from the highest-value poker chip, which is traditionally blue in color. Similarly, blue chip stocks are perceived as high-value
                    investments due to their solid reputation, stability, and potential for long-term growth.</p>
                    <p className="mt-2">Blue chip companies generally have strong balance sheets, consistent revenue streams, and solid financial fundamentals. They are known for their ability to weather economic
                    downturns and maintain profitability even during challenging times. Typically, blue chip stocks have a competitive advantage over their peers, a strong market share, and a proven track record of
                    success. These companies often have recognizable brand names and enjoy customer loyalty.</p>
                    <p className="mt-2">Many blue chip stocks pay regular dividends to their shareholders. These dividends can provide a steady income stream for investors, making blue chip stocks attractive to
                    income-focused investors seeking stable returns. While blue chip stocks are known for their stability, they can also offer long-term growth opportunities. These companies have a history of generating
                    consistent earnings and have the potential to deliver capital appreciation over time.</p>
                    <p className="mt-2">Blue chip stocks are commonly included in major stock market indices, such as the Dow Jones Industrial Average or the S&P 500, which are used as benchmarks to measure the
                    performance of the overall market. They are considered to have a lower risk profile compared to smaller or riskier companies. Examples of blue chip stocks include American Express, Microsoft, Apple,
                    Costco, and Home Depot.</p>
                </section>
            </div>
        </div>
    )
}