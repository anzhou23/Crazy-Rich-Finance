import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grossEarnings() {
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
                    <span className="text-gray-700">Gross Earnings</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gross Earnings</h1>
                    <p className="mt-4">Gross earnings, also known as gross income or gross revenue, is the total income an individual, business, or entity earns before any deductions or expenses are
                    subtracted. It represents the full amount of money generated from all sources, including sales, wages, interest, dividends, rental income, and any other form of revenue.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">For individuals, gross earnings include wages or salary earned from employment, bonuses, tips, rental income, interest earned on investments, and other income sources.
                    For businesses, gross earnings comprise total revenue from sales of goods or services before deducting any cost of goods sold, operating expenses, taxes, and other deductions.</p>
                    <p className="mt-2">Gross earnings are a key financial metric and serve as the starting point for calculating various financial ratios and measures. From gross earnings, deductions such
                    as taxes, production costs, operating expenses, and other relevant expenses are subtracted to arrive at net earnings or net income, which represents the actual profit or income after all
                    deductions have been accounted for.</p>
                    <p className="mt-2">It is essential to differentiate gross earnings from net earnings, as the latter provides a more accurate picture of the profitability or personal income after expenses
                    are considered. Gross earnings provide valuable insights into an individual or business&apos;s overall revenue-generating capacity, making it a fundamental figure in financial analysis and
                    decision-making processes.</p>
                </section>
            </div>
        </div>
    )
}