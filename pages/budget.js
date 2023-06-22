import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function budget() {
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
                    <span className="text-gray-700">Budget</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Budget</h1>
                    <p className="mt-4">A budget is a financial plan that outlines projected income and expenses over a specific period, typically on a monthly or
                    annual basis. It serves as a tool for managing and allocating resources to meet financial goals, track spending, and make informed financial decisions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Budgeting enables individuals to track their expenses and identify areas of overspending or potential savings. By setting limits or targets for each
                    expense category, individuals can exercise control over their spending habits and make adjustments as needed.</p>
                    <p className="mt-2">A budget allows individuals to set financial goals, such as saving for retirement, paying off debt, or buying a home. By allocating funds towards these
                    goals, budgeting helps prioritize financial objectives and provides a roadmap for achieving them.</p>
                    <p className="mt-2">Budgeting emphasizes the importance of saving money regularly. By setting aside a portion of income for savings, individuals can build emergency funds,
                    create a cushion for unexpected expenses, and work towards long-term financial security.</p>
                    <p className="mt-2">Budgets are not fixed and can be adjusted as circumstances change. Unexpected expenses or changes in income can be accommodated by modifying the budget to
                    maintain financial stability and meet evolving needs.</p>
                </section>
            </div>
        </div>
    )
}
