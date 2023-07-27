import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function earnings() {
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
                    <span className="text-gray-700">Earnings</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnings</h1>
                    <p className="mt-4">Earnings are the profits or net income a business, individual, or investment generates during a specific period. It represents the money left over after
                    deducting all expenses, taxes, and other costs from the total revenue earned.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">For businesses, earnings are a crucial metric reflecting the company&apos;s financial health and profitability. It provides insight into how efficiently
                    the company is operating and how successful it is in generating profits from its core operations.</p>
                    <p className="mt-2">There are different types of earnings:</p>
                    <ul className="list-disc ml-6">
                        <li>Gross Earnings: Total revenue earned by a business before deducting any expenses.</li>
                        <li>Operating Earnings: The earnings generated from the core business operations, excluding any non-operating income or expenses.</li>
                        <li>Net Earnings: Also known as net income or the bottom line, it is the final profit earned after all expenses, taxes, interest, and other costs have been deducted from the total revenue.</li>
                    </ul>
                    <p className="mt-2">For individuals, earnings represent the income they receive from various sources, such as wages, salaries, bonuses, investments, and business profits.</p>
                    <p className="mt-2">Earnings are a key factor in various financial decisions, such as assessing investment opportunities, determining the creditworthiness of individuals or companies, and evaluating
                    the performance of businesses. Investors, analysts, and stakeholders should closely monitor earnings to understand the financial well-being and growth prospects of a company or individual.</p>
                </section>
            </div>
        </div>
    )
}
