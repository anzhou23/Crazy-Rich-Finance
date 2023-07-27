import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function earningsReport() {
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
                    <span className="text-gray-700">Earnings Report</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnings Report</h1>
                    <p className="mt-4">An earnings report is a financial statement that provides a detailed summary of a company&apos;s financial performance over a specific period, typically
                    a quarter (3 months) or a year. It is a key component of a company&apos;s financial reporting and plays a crucial role in informing investors, analysts, and the public about
                    the company&apos;s profitability and overall financial health.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The earnings report includes various financial metrics, such as revenue, net income, earnings per share (EPS), operating expenses, gross margin, operating margin,
                    EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization), and cash flow.</p>
                    <p className="mt-2">Earnings reports are typically released on a quarterly basis for publicly traded companies and are subject to regulatory requirements, such as filing with the
                    Securities and Exchange Commission (SEC) in the U.S. Investors, analysts, and financial media closely monitor these reports because they provide insights into a company&apos;s financial
                    trajectory, growth prospects, and overall business performance. Positive or negative surprises in earnings reports can significantly impact a company&apos;s stock price and investor sentiment.</p>
                </section>
            </div>
        </div>
    )
}
