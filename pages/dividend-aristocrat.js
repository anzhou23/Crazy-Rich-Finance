import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function dividendAristocrat() {
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
                    <span className="text-gray-700">Dividend Aristocrat</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dividend Aristocrat</h1>
                    <p className="mt-4">The Dividend Aristocrats are a select group of S&P 500 companies with a remarkable track record of consistently increasing their dividend payouts to
                    shareholders for at least 25 consecutive years. These companies are known for their commitment to rewarding shareholders through regular dividend increases, even during
                    challenging economic conditions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">To be included in the list of Dividend Aristocrats, a company must meet specific criteria:</p>
                    <ul className="list-disc ml-6">
                        <li>S&P 500 Membership: The company must be part of the S&P 500 index, which includes the 500 largest publicly traded companies in the United States.</li>
                        <li>Dividend Increase Streak: The company must have increased its dividend payout to shareholders every year for a minimum of 25 consecutive years. This demonstrates the
                            company&apos;s ability to generate consistent cash flow and sustainably grow its dividends over time.</li>
                        <li>Financial Health: The company should have sound financial fundamentals, including strong revenue growth, profitability, and manageable levels of debt. These characteristics
                            indicate a stable and resilient business.</li>
                    </ul>
                    <p className="mt-2">Investing in Dividend Aristocrats is attractive to income-oriented investors who want reliable streams of passive income from their investments. These companies
                    are often considered to be more stable and mature, making them suitable for conservative investors looking to preserve and grow their wealth over the long run.</p>
                    <p className="mt-2">While Dividend Aristocrats are known for their dividend stability, they are not completely risk-free investments. Factors such as changes in industry dynamics,
                    economic conditions, or corporate performance can impact their dividend policies. Investing in Dividend Aristocrats is more suited for long-term investors who value consistent income
                    and are willing to hold their positions for extended periods.</p>
                </section>
            </div>
        </div>
    )
}
