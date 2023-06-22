import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function balanceSheet() {
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
                    <span className="text-gray-700">Balance Sheet</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Balance Sheet</h1>
                    <p className="mt-4">A balance sheet is a financial statement that provides a snapshot of an entity&apos;s financial position at a specific point in time. It presents the company&apos;s
                    <Link href="/asset" className="text-blue-500">assets</Link>, <Link href="/liabilities" className="text-blue-500"> liabilities</Link>, and shareholders&apos; equity, providing a comprehensive
                    overview of its financial health.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Assets represent what the company owns or controls and include both tangible and intangible items. Tangible assets include cash, inventory, property, plant, and equipment, while
                    intangible assets include patents, trademarks, and goodwill.</p>
                    <p className="mt-2">Liabilities represent what the company owes to external parties, such as creditors and lenders. Examples of liabilities include accounts payable, loans, accrued expenses, and deferred revenues.</p>
                    <p className="mt-2">Shareholders&apos; equity, also known as owners&apos; equity or <Link href="/net-worth" className="text-blue-500">net worth</Link>, represents the residual interest in the assets of the company
                    after deducting liabilities. It includes issued share capital, retained earnings, and additional paid-in capital.</p>
                    <p className="mt-2">The balance sheet follows the fundamental accounting equation: Assets = Liabilities + Shareholders&apos; Equity. This equation ensures that the balance sheet remains in balance, where the
                    total assets equal the total liabilities plus shareholders&apos; equity.</p>
                    <p className="mt-2">Balance sheets are important for various stakeholders, including investors, creditors, and management. They provide insights into a company&apos;s financial position, its ability to meet
                    short-term obligations, and the level of shareholder investment. Comparing balance sheets over time allows stakeholders to analyze trends, assess financial stability, and make informed investment or lending decisions.</p>
                    <p className="mt-2">Note that a balance sheet does not provide information on changes in financial position or performance over a period. For a comprehensive understanding of a company&apos;s financial performance,
                    balance sheets are often analyzed in conjunction with income statements and cash flow statements.</p>
                </section>
            </div>
        </div>
    )
}
