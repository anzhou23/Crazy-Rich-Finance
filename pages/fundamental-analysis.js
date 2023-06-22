import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fundamentalAnalysis() {
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
                    <span className="text-gray-700">Fundamental Analysis</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fundamental Analysis</h1>
                    <p className="mt-4">Fundamental analysis is a method used to evaluate the intrinsic value of a security or investment based on various factors, including financial statements, economic indicators, industry trends,
                    and company management. It involves analyzing qualitative and quantitative data to assess the financial health, competitive position, growth prospects, and overall value of an investment.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Fundamental analysis takes into account macroeconomic factors that can impact an investment. Analysts consider economic indicators, such as GDP growth, inflation rates, interest rates, and employment data, to
                    assess the broader economic environment and potential implications for the investment. Other factors fundamental analysts look at include the company&apos;s brand reputation, management quality, corporate governance, industry trends,
                    regulatory environment, technological advancements, and geopolitical factors. Qualitative analysis provides a broader understanding of the investment&apos;s potential opportunities and risks.</p>
                    <p className="mt-2">Tools like discounted cash flow (DCF) analysis, price-to-earnings (P/E) ratio, price-to-sales (P/S) ratio, price-to-book (P/B) ratio, and other financial ratios can be used to asset whether an
                    asset is undervalued, overvalued, or fairly valued. Note that fundamental analysis has its limitations, including the reliance on historical data and the potential for subjective interpretations. It does not provide guarantees of
                    future performance, as unforeseen events or changes in market conditions can impact investments. Additionally, fundamental analysis alone may not capture short-term market fluctuations or investor sentiment.</p>
                </section>
            </div>
        </div>
    )
}
