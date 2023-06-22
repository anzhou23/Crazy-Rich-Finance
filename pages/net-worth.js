import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function netWorth() {
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
                    <span className="text-gray-700">Net Worth</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Net Worth</h1>
                    <p className="mt-4">Net worth measure an individual&apos;s or entity&apos;s financial value by calculating the difference between their assets and liabilities. It is a comprehensive
                    assessment of one&apos;s financial position and serves as an indicator of wealth or financial health.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Assets include cash, investments, real estate, vehicles, personal belongings, and other valuable possessions. Liabilities, on the other hand, include debts, loans, mortgages,
                    and other financial obligations. The difference between total assets and total liabilities represents the net worth.</p>
                    <p className="mt-2">Net worth reflects the accumulated value of assets and helps assess financial progress over time. A positive net worth indicates that assets exceed liabilities, implying financial
                    stability and a certain level of wealth. Conversely, a negative net worth indicates that liabilities exceed assets, signifying financial obligations and potential financial challenges. Lenders,
                    financial institutions, and investors may use net worth to assess creditworthiness, evaluate financial stability, and make investment decisions.</p>
                    <p className="mt-2">By regularly monitoring your net worth, you can track your progress toward financial goals, such as building wealth, reducing debt, or saving for retirement. It provides a baseline
                    for evaluating the effectiveness of financial decisions and can guide strategies for wealth accumulation and debt management.</p>
                    <p className="mt-2">Factors such as career progression, business ventures, investment returns, and changes in property values can contribute to increasing net worth. Conversely, factors like job loss,
                    excessive spending, poor investment choices, or economic downturns can negatively impact net worth.</p>
                </section>
            </div>
        </div>
    )
}