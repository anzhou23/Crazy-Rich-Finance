import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function valuation() {
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
                    <span className="text-gray-700">Valuation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Valuation</h1>
                    <p className="mt-4">Valuation is the process of determining the financial worth or fair value of an asset, investment, company, or financial instrument. It involves assessing the economic value of
                    something based on various factors and methodologies. Valuation plays a crucial role in investment decision-making, financial analysis, mergers and acquisitions, and other financial transactions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Valuation aims to estimate an asset or investment&apos;s intrinsic value, which represents its true worth based on fundamental factors such as cash flows, earnings, assets, and
                    market conditions. The goal is to assess whether the price or value of an asset is overvalued, undervalued, or fairly valued. It is context-specific and can vary depending on the purpose and
                    perspective of the valuation. For example, a valuation for investment purposes may differ from a valuation for financial reporting or merger negotiations.</p>
                    <p className="mt-2">Various methods and approaches are used in valuation, depending on the nature of the asset or investment being evaluated. Common valuation methods include discounted cash flow (DCF)
                    analysis, comparable company analysis, market multiples, asset-based valuation, and options pricing models. Each method has its advantages, limitations, and suitability for different situations.</p>
                    <p className="mt-2">Market-based valuation looks at the prices and multiples of similar assets or investments in the market to derive a value. Intrinsic valuation, on the other hand, focuses on the
                    fundamental characteristics and future cash flows of the asset to determine its value.</p>
                    <p className="mt-2">Factors such as financial performance, industry dynamics, market conditions, growth prospects, competitive landscape, management quality, and risk can impact valuation. Valuation is not
                    an exact science and involves a degree of subjectivity and uncertainty. Different analysts or investors may arrive at different valuations based on their assumptions, methodologies, and  judgments.</p>
                </section>
            </div>
        </div>
    )
}