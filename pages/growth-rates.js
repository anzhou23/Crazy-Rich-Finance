import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function growthRates() {
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
                    <span className="text-gray-700">Growth Rates</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Growth Rates</h1>
                    <p className="mt-4">Growth rate is a measure that indicates the percentage change in a specific variable, such as revenue, profit, or population, over a defined period.
                    It is used to assess the rate of expansion or contraction of a particular metric, reflecting how quickly it has increased or decreased.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The formula for calculating growth rate is: Growth Rate = ((Current Value - Previous Value) / Previous Value) * 100</p>
                    <p className="mt-2">The current value is the most recent measurement of the variable being analyzed. For example, if we are calculating a company&apos;s revenue growth rate,
                    the current value would be the latest revenue figure. The previous value is  the value of the variable at a previous point in time. It could be the revenue figure for the same
                    company in the previous quarter, year, or any other designated period.</p>
                    <p className="mt-2">By comparing the current value to the previous value and applying the formula, we get the growth rate as a percentage. A positive growth rate indicates an
                    increase in the variable, while a negative growth rate indicates a decrease.</p>
                    <p className="mt-2">For example, if a company&apos;s revenue was $10M in the previous year and has now increased to $12M this year, the growth rate would be: Growth Rate =
                    (($12M - $10M) / $10M) * 100 = 20%. This means the company&apos;s revenue has grown by 20% from the previous year.</p>
                    <p className="mt-2">Growth rate is a valuable tool for investors, businesses, and policymakers to assess the performance and trends of various metrics over time. It helps in
                    evaluating a business&apos;s success, the pace of economic expansion, and the overall health of an industry or market.</p>
                </section>
            </div>
        </div>
    )
}