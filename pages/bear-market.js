import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bearMarket() {
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
                    <span className="text-gray-700">Bear Market</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bear Market</h1>
                    <p className="mt-4">A bear market refers to a period of declining prices and pessimism in the financial markets, typically associated with a downward trend in stock prices. It is characterized by
                    widespread selling and a lack of confidence in the market. Bear markets are often driven by economic downturns, negative sentiment, or significant geopolitical events.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During bear markets, it&apos;s important to manage emotions, avoid panic selling, and maintain a long-term perspective. While bear markets can be difficult, they also present
                    opportunities for long-term investors. Lower stock prices may offer attractive entry points for quality companies, and potential bargains can be found in undervalued sectors.</p>
                    <p className="mt-2">Diversification, risk management, and a focus on high-quality assets can help navigate the challenges of a bear market. Understanding your investment horizon and risk tolerance is crucial.
                    Short-term investors with imminent financial goals may need to reassess their investment plans, while long-term investors may choose to stay invested and ride out the market volatility.</p>
                    <p className="mt-2"></p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}