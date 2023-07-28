import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fortune() {
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
                    <span className="text-gray-700">Fortune 500</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fortune 500</h1>
                    <p className="mt-4">The Fortune 500 is an annual list Fortune magazine compiles and publishes that ranks the top 500 companies in the United States based on their total
                    revenue for their respective fiscal years. The list is a prestigious and widely recognized indicator of the largest and most successful corporations in the country.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">To qualify for the Fortune 500, a company must be based in the United States and be publicly traded or privately held but submit their financial data for
                    consideration. The rankings are based solely on revenue, and companies from various industries, including technology, finance, energy, retail, healthcare, and more, are featured
                    on the list.</p>
                    <p className="mt-2">The Fortune 500 list serves as a benchmark for business performance and provides insight into the economic landscape, competitiveness, and growth trends in
                    the corporate world. Investors, analysts, and the business community closely follow the list to gauge the financial strength and market dominance of the leading American companies.</p>
                    <p className="mt-2">Being included in the Fortune 500 is a significant achievement for companies as it reflects their financial success, market influence, and overall business
                    prominence. The rankings are updated annually, and companies may move up or down the list depending on their performance and revenue fluctuation</p>
                </section>
            </div>
        </div>
    )
}