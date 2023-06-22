import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function appreciation() {
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
                    <span className="text-gray-700">Appreciation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Appreciation</h1>
                    <p className="mt-4">Appreciation refers to an increase in an asset&apos;s value or worth over time. It is the opposite of <Link href="/depreciation" className="text-blue-500">depreciation</Link>, which
                    signifies a decrease in value. Appreciation can occur in various types of assets, such as real estate, stocks, bonds, and other investments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mb-2">In real estate, appreciation may result from factors such as improvements in the surrounding neighborhood, increased demand for housing, economic growth, or inflation. Over time,
                    these factors can contribute to an increase in the property&apos;s value.</p>
                    <p className="mb-2">In the case of stocks and bonds, appreciation can be influenced by factors such as the company&apos;s financial performance, industry trends, market conditions, and investor sentiment.
                    Positive developments, such as revenue growth, increased profitability, or favorable economic conditions, can drive the appreciation of these assets.</p>
                    <p className="mb-2">Commodities, such as gold, oil, or agricultural products, can also experience appreciation due to factors like supply and demand dynamics, geopolitical events, or changes in market conditions.</p>
                    <p className="mb-2">Appreciation represents the potential for capital gains. Investors seek assets that have the potential to appreciate over time, allowing them to sell the asset at a higher price than their
                    initial investment and realize a profit.</p>
                    <p className="mb-2">Appreciation is not guaranteed and can be influenced by numerous factors, including market fluctuations, economic conditions, and unforeseen events. Additionally, the rate and extent of
                    appreciation can vary widely across different assets and timeframes.</p>
                </section>
            </div>
        </div>
    )
}
