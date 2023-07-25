import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function annualReturn() {
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
                    <span className="text-gray-700">Annual Return</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Annual Return</h1>
                    <p className="mt-4">Annual return is the percentage change in an investment&apos;s value over one year, expressed as a percentage. It is a key measure used to
                    assess an investment or portfolio&apos;s performance, indicating how much the investment has gained or lost during a specific 12-month period.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Annual return considers both capital appreciation (change in the investment&apos;s value) and income generated from the investment. Investments with higher
                    annual returns generally experience higher levels of price volatility, meaning they may have larger price swings during the year.</p>
                    <p className="mt-2">Annual returns are often used for historical performance analysis, enabling investors to evaluate how an investment has performed in previous years. While
                    annual returns are helpful in analyzing short-term performance, investors often focus on long-term annualized returns, which provide a more comprehensive view of an investment&apos;s
                    performance over several years.</p>
                    <p className="mt-2">Past performance, including annual returns, does not guarantee future results. Investments are subject to market fluctuations and risk, and an investment&apos;s
                    performance may vary from year to year. Investors typically use annual returns as part of their investment evaluation process, along with other performance metrics, risk assessments,
                    and investment goals. It helps them gauge how effective their investment strategy is, understand how their portfolio is performing, and make informed investment decisions.</p>
                </section>
            </div>
        </div>
    )
}
