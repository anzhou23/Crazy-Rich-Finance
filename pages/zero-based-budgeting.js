import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function zeroBasedBudgeting() {
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
                    <span className="text-gray-700">Zero-Based Budgeting</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Zero-Based Budgeting</h1>
                    <p className="mt-4">Zero-based budgeting (ZBB) is a financial management approach where budgeting starts from a base of zero for each budgeting period. ZBB requires every expense to be justified and
                    approved from scratch. The primary objective is to optimize resource allocation, eliminate unnecessary expenses, and ensure that every dollar spent aligns with the individual or organization&apos;s priorities.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Because all expenses are evaluated and justified based on their necessity and value, this ensures a thorough review of all expenditures and prevents the carryover of unnecessary or
                    inefficient spending from previous budgets. Zero-based budgeting ensures that budget decisions are aligned with the individual or organization&apos;s strategic goals. It provides a
                    framework to allocate resources in a way that supports the long-term vision of the organization and eliminates wasteful spending on activities that do not contribute to strategic outcomes.</p>
                    <p className="mt-2">Zero-based budgeting encourages a focus on value creation and prioritization. Resources are allocated based on the expected benefits and returns, ensuring that funds are directed
                    towards activities that generate the most value for the organization. By requiring detailed justifications for expenses, it becomes easier to track and measure the effectiveness of spending. This
                    transparency and accountability foster responsible financial management.</p>
                </section>
            </div>
        </div>
    )
}