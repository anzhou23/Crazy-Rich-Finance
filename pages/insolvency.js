import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function insolvency() {
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
                    <span className="text-gray-700">Insolvency</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Insolvency</h1>
                    <p className="mt-4">Insolvency is a financial situation where an individual, company, or organization can&apos;t meet its financial obligations and pay off its debts
                    when they become due. In other words, it occurs when an entity&apos;s liabilities exceed its assets, and it doesn&apos;t have enough cash flow or available resources
                    to cover its debts and financial commitments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Insolvency occurs when an entity&apos;s total amount of debts and financial obligations is greater than the total value of its assets. This means
                    that even if all assets were liquidated, they would not be enough to pay off all debts. Insolvency can result from cash flow problems. Even if an entity has valuable
                    assets, it may not have the necessary liquidity to meet its immediate financial obligations, such as loan repayments, payroll, and bills.</p>
                    <p className="mt-2">In a business context, insolvency can lead to bankruptcy or restructuring processes. For individuals, insolvency may result in personal bankruptcy,
                    where a court-appointed trustee helps manage the individual&apos;s financial affairs. Creditors may take legal actions to recover their debts, including seizing assets
                    or initiating bankruptcy proceedings. Legal proceedings can vary depending on the jurisdiction and insolvency type.</p>
                    <p className="mt-2">Insolvency can result from various factors, including poor financial management, excessive debt, economic downturns, declining revenues, and unexpected
                    expenses. While insolvency refers to a financial state of being unable to meet obligations, an insolvent entity or individual may initiate bankruptcy to manage or eliminate
                    debts. Bankruptcy often involves court proceedings, asset liquidation, and debt restructuring.</p>
                    <p className="mt-2">Entities facing insolvency may explore options to address their financial challenges. This can include negotiating with creditors, restructuring debts,
                    selling assets, or seeking financial assistance.</p>
                </section>
            </div>
        </div>
    )
}