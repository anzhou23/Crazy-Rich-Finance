import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function volatility() {
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
                    <span className="text-gray-700">Volatility</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Volatility</h1>
                    <p className="mt-4">Volatility is the degree of fluctuation or variability in the price or value of a financial instrument, such as stocks, bonds, or commodities, over a certain period of time.
                    It measures the rate at which prices move up and down, indicating the level of uncertainty or risk in the market.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Volatility reflects the rapid and significant price movements of a financial instrument. Higher volatility suggests larger price swings, indicating greater uncertainty and potential
                    risk in the market. Lower volatility implies more stable prices and a relatively calmer market environment. Traders may take advantage of short-term price movements caused by volatility through strategies
                    like day trading or swing trading. Investors, on the other hand, may consider volatility when assessing risk and potential returns of long-term investment positions.</p>
                    <p className="mt-2">Volatility is often associated with market risk and uncertainty. It can be influenced by various factors, including economic indicators, geopolitical events, market sentiment, investor
                    behavior, or changes in supply and demand dynamics. Uncertain or unexpected events tend to increase volatility, as market participants react and adjust their expectations. Assets with different volatility
                    levels can help balance overall portfolio risk. Including assets with low or negative correlation to each other can potentially reduce the overall volatility of a portfolio.</p>
                    <p className="mt-2">Higher volatility increases the likelihood of large price movements, which in turn increases the value of options. Option traders often monitor and assess volatility levels to make
                    informed decisions about buying or selling options. But, while high volatility can offer trading opportunities for those who can effectively navigate price swings, it also poses risks for those who are not
                    adequately prepared or lack risk management strategies.</p>
                </section>
            </div>
        </div>
    )
}
