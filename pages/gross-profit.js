import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grossProfit() {
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
                    <span className="text-gray-700">Gross Profit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gross Profit</h1>
                    <p className="mt-4">Gross profit is a financial metric representing the revenue a company earns from its sales minus the cost of goods sold (COGS). It reflects the
                    amount of money left over after accounting for the direct costs associated with producing the goods or services sold by the company. In other words, gross profit
                    measures the profitability of a company&apos;s core business operations before taking into account other expenses like operating expenses, taxes, and interest.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The formula for calculating gross profit is: Gross Profit = Revenue - Cost of Goods Sold (COGS)</p>
                    <p className="mt-2">Revenue includes all the income generated from the sale of goods or services, while COGS includes the direct costs incurred to produce or purchase
                    those goods or services. COGS typically includes expenses like raw materials, direct labor, and manufacturing costs.</p>
                    <p className="mt-2">Gross profit is a key indicator of a company&apos;s ability to efficiently produce and sell its products or services. It helps assess the profitability
                    of the company&apos;s core operations and its ability to cover fixed costs and generate net income. A high gross profit margin indicates a company is effectively managing
                    its production costs, which can be a positive sign for investors and stakeholders.</p>
                    <p className="mt-2">Note that gross profit is different from net profit, which represents the final profitability of a company after all expenses, including operating
                    expenses, taxes, and interest, are deducted. Gross profit provides a more focused view of a company&apos;s operational efficiency, while net profit reflects the company&apos;s
                    overall financial health.</p>
                </section>
            </div>
        </div>
    )
}