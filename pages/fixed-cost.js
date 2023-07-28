import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fixedCost() {
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
                    <span className="text-gray-700">Fixed Cost</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fixed Cost</h1>
                    <p className="mt-4">Fixed cost, also known as overhead or indirect cost, are expenses that remain constant and do not vary with changes in a business&apos;s
                    production level or sales volume. These costs are incurred regardless of whether the company produces or sells anything. Fixed costs are part of the company&apos;s
                    total operating expenses and must be paid regularly, regardless of its performance.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Examples of fixed costs include rent or lease payments for office space, employee salaries, insurance premiums, property taxes, and certain utility
                    expenses like internet and phone bills. These costs do not change in the short term, even if the company experiences fluctuations in production or sales.</p>
                    <p className="mt-2">If a company produces more goods or services, the total variable costs (costs that vary with production) will increase, but the fixed costs will
                    remain the same. Conversely, if production decreases, the total variable costs will decrease, but the fixed costs will still be incurred.</p>
                    <p className="mt-2">Understanding fixed costs is crucial for businesses as they play a significant role in determining a company&apos;s breakeven point—the level of sales
                    at which total revenue equals total costs, and the company neither makes a profit nor incurs a loss. Additionally, businesses need to manage fixed costs effectively to
                    maintain financial stability and plan their budgets and pricing strategies. In the long term, businesses can make strategic decisions to adjust or reduce fixed costs to
                    improve their profitability and competitiveness.</p>
                </section>
            </div>
        </div>
    )
}