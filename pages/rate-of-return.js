import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function rateOfReturn() {
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
                    <span className="text-gray-700">Rate of Return</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Rate of Return</h1>
                    <p className="mt-4">Rate of return is the gain or loss on an investment relative to the amount invested, expressed as a percentage. It measures an investment&apos;s profitability or performance over a
                    specific period of time.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Rate of return provides a standardized measure to compare the performance of different investments or assess the effectiveness of an investment strategy. It is calculated by dividing
                    the gain or loss on an investment by the initial investment amount, and then expressing it as a percentage. The time frame over which the rate of return is measured can vary, such as daily, monthly, annual, or
                    cumulative over a specific period. Consider the time frame when interpreting the rate of return, as shorter time frames may exhibit higher volatility and may not necessarily reflect long-term performance.</p>
                    <p className="mt-2">Rate of return can be presented as a total return or an annualized return. Total return represents the overall gain or loss on the investment over a specific period, while annualized return
                    calculates the average annual rate of return based on the investment&apos;s performance. Annualized return provides a standardized measure that allows for comparison with other investments or benchmarks.</p>
                    <p className="mt-2">Factors that can influence the rate of return include capital appreciation, dividends, interest payments, or realized gains or losses from buying or selling investments. Investments with
                    higher returns generally involve higher levels of risk. Consider risk factors, such as market fluctuations, economic conditions, and investment-specific risks, when assessing the rate of return.</p>
                </section>
            </div>
        </div>
    )
}

