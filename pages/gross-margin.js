import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grossMargin() {
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
                    <span className="text-gray-700">Gross Margin</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gross Margin</h1>
                    <p className="mt-4">Gross margin, also known as gross profit margin, is a financial metric representing the percentage of revenue left after subtracting the cost of goods sold (COGS)
                    from total revenue. It measures the profitability of a company&apos;s core business operations and indicates how efficiently it produces and sells its products or services.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The formula to calculate gross margin is: Gross Margin = (Total Revenue - Cost of Goods Sold) / Total Revenue * 100</p>
                    <p className="mt-2">In this formula, &quot;Total Revenue&quot; is the total sales or revenue the company generated, and &quot;Cost of Goods Sold&quot; represents the direct costs incurred
                    in producing the goods or services sold by the company, including raw materials, labor, and manufacturing expenses.</p>
                    <p className="mt-2">A higher gross margin indicates a company is effectively managing its production and sales processes, as it retains a larger portion of each dollar of revenue after
                    accounting for production costs. Conversely, a lower gross margin may indicate inefficiencies in production, pricing, or cost management.</p>
                    <p className="mt-2">Gross margin provides insights into the profitability of their core operations and helps management make decisions related to pricing strategies, cost control, and
                    overall business performance. Additionally, it is often compared to industry benchmarks to assess a company&apos;s competitive position and financial health.</p>
                </section>
            </div>
        </div>
    )
}