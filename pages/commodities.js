import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function commodities() {
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
                    <span className="text-gray-700">Commodities</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Commodities</h1>
                    <p className="mt-4">Commodities are raw materials or primary goods that are interchangeable with other goods of the same type. They include products such as metals (gold,
                    silver), energy resources (crude oil, natural gas), agricultural products (wheat, corn), and others. Commodities can be traded on commodity exchanges and are often subject to
                    price fluctuations driven by supply and demand dynamics.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Commodities often have a low correlation with traditional asset classes, such as stocks and bonds, which can help reduce overall portfolio risk. They can also
                    act as a hedge against inflation, as their prices may rise in response to inflationary pressures.</p>
                    <p className="mt-2">Commodity prices are influenced by supply and demand dynamics, which can be affected by factors such as weather conditions, geopolitical events, technological advancements,
                    and changes in global economic conditions. Understanding these factors is crucial for analyzing and predicting commodity price movements.</p>
                    <p className="mt-2">There are several ways to invest in commodities, including direct ownership, futures contracts, exchange-traded funds (ETFs), and commodity-focused mutual funds. Each approach
                    has its advantages and considerations, and investors should choose the method that aligns with their investment goals, risk tolerance, and preferred level of involvement. Make sure to understand market
                    fundamentals, including factors that impact supply and demand, production cycles, storage capacity, transportation networks, and regulatory considerations.</p>
                    <p className="mt-2">Investing in commodities provides exposure to global markets and allows investors to participate in the economic activities of various countries and industries. However, price
                    fluctuations can be significant, driven by various factors, including changes in global economic conditions, geopolitical tensions, and shifts in supply and demand dynamics.</p>
                </section>
            </div>
        </div>
    )
}

