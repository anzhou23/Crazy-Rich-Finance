import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function consumerPriceIndex() {
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
                    <span className="text-gray-700">Consumer Price Index</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consumer Price Index</h1>
                    <p className="mt-4">The Consumer Price Index (CPI) is a widely used economic indicator that measures changes in the average prices of a basket of goods and services purchased by consumers over time.
                    This basket includes items such as food, housing, transportation, healthcare, education, clothing, and other goods and services. It serves as a crucial tool for understanding inflation and assessing
                    the cost of living for consumers.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The CPI measures the percentage change in the price of the basket of goods and services over a specific period, typically on a monthly or annual basis. It uses a designated base year
                    as a reference point to calculate price changes. The index value in the base year is set to 100. Subsequent CPI values are expressed relative to the base year, making it easier to compare changes in
                    prices over time.</p>
                    <p className="mt-2">The CPI is a weighted average, meaning that the prices of individual items in the basket are weighted according to their significance in typical consumer spending. Items with higher
                    spending importance have a greater influence on the overall CPI.</p>
                    <p className="mt-2">Economists, policymakers, and businesses use the CPI to gauge the inflation rate and adjust wages, pensions, and social security benefits. Central banks also use the CPI to formulate
                    monetary policy.</p>
                    <p className="mt-2">The CPI has some limitations, such as the inability to fully capture changes in consumer behavior or account for the quality improvements in products over time. Additionally, individual
                    spending patterns may differ from the average consumer basket.</p>
                </section>
            </div>
        </div>
    )
}
