import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function quarter() {
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
                    <span className="text-gray-700">Quarter</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Quarter</h1>
                    <p className="mt-4">A fiscal quarter, also known as a financial quarter or simply a quarter, refers to a specific 3-month period on a company&apos;s financial calendar. It is commonly used
                    to organize and report financial information, track performance, and make financial decisions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Each fiscal quarter represents 1/4th of a company&apos;s financial year and is typically designated by a sequential number, such as Q1 (1st quarter), Q2 (2nd quarter),
                    Q3 (3rd quarter), and Q4 (4th quarter). A company&apos;s fiscal year may or may not align with the calendar year.</p>
                    <p className="mt-2">During each fiscal quarter, companies prepare and release financial statements and reports to provide stakeholders, investors, and analysts with insights into their financial
                    performance. These reports include information such as revenue, expenses, profits, cash flows, and other relevant financial data.</p>
                    <p className="mt-2">Fiscal quarters serve as a way to break down a company&apos;s financial activities into manageable periods, allowing for easier tracking, analysis, and comparison of financial
                    performance over time. They also help in strategic planning, budgeting, and evaluating progress towards financial goals. In addition to financial reporting, fiscal quarters may impact various
                    aspects of a company&apos;s operations, including dividend payments, investor expectations, stock market performance, compliance with regulatory requirements, and long-term planning.</p>
                </section>
            </div>
        </div>
    )
}
