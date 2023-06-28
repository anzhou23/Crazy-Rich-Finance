import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bottomLine() {
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
                    <span className="text-gray-700">Bottom Line</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bottom Line</h1>
                    <p className="mt-4">The term &quot;bottom line&quot; refers to the final figure on a company&apos;s income statement, specifically the net income or profit after deducting all expenses,
                    taxes, and other costs from the total revenue generated. It represents the financial outcome of a business&appos;s operations, indicating whether it has made a profit or incurred a loss
                    during a given period.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The bottom line is a crucial metric for evaluating a company&apos;s financial performance and overall profitability. It provides a snapshot of how effectively the company
                    manages its revenue and controls its expenses. A positive bottom line indicates that the company has generated more revenue than its expenses, resulting in a net profit. Conversely, a negative
                    bottom line reflects that the company&apos;s expenses have exceeded its revenue, leading to a net loss.</p>
                    <p className="mt-2">Investors, analysts, and stakeholders often use the bottom line figure to assess a company&apos;s financial health, efficiency, and growth potential. It serves as an important
                    benchmark for comparing the performance of different companies within an industry or evaluating a company&apos;s performance over time. In addition to net income, the bottom line can also encompass
                    other financial metrics derived from the income statement, such as earnings per share (EPS), which indicates the portion of the company&apos;s profit allocated to each outstanding share of common stock.</p>
                    <p className="mt-2">The concept of the bottom line extends beyond individual companies and can be applied to other contexts, such as personal finance or budgeting. In these cases, the bottom line
                    refers to the final result or the overall outcome after considering all income, expenses, savings, and expenditures.</p>
                </section>
            </div>
        </div>
    )
}
