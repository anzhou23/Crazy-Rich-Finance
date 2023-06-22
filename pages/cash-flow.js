import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function cashFlow() {
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
                    <span className="text-gray-700">Cash Flow</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cash Flow</h1>
                    <p className="mt-4">Cash flow is the movement of money into and out of a business or individual&apos;s finances over a specific period. It represents the inflow and outflow of cash,
                    capturing the actual cash transactions rather than accounting for accrued revenues or expenses.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Cash flow includes all sources of incoming cash, such as revenue from sales, loans, investments, or any other form of income. It also includes outgoing cash payments, such as
                    expenses, operating costs, taxes, loan repayments, and any other cash outflows.</p>
                    <p className="mt-2">Operating cash flow refers to the cash generated or consumed by a company&apos;s core business operations. It reflects the cash generated from sales, minus the operating expenses
                    required to maintain and run the business.</p>
                    <p className="mt-2">Investing cash flow represents the cash used for acquiring or selling long-term assets, such as property, equipment, or investments. It includes cash spent on purchasing assets and
                    cash received from the sale of assets.</p>
                    <p className="mt-2">Financing cash flow relates to the cash activities associated with raising capital or repaying debts. It includes cash received from issuing stock or borrowing, as well as cash paid
                    for dividends, loan repayments, or buying back shares.</p>
                    <p className="mt-2">A positive cash flow occurs when the cash inflows exceed the outflows, indicating a surplus of cash. Conversely, a negative cash flow occurs when cash outflows exceed the inflows,
                    indicating a deficit or financial strain.</p>
                    <p className="mt-2">Cash flow is crucial for individuals and businesses to meet their financial obligations, cover operating expenses, and invest in growth opportunities. It provides a clear picture of
                    a company&apos;s ability to generate cash and its overall financial health. Positive cash flow is generally desirable, as it provides financial stability and flexibility.</p>
                </section>
            </div>
        </div>
    )
}
