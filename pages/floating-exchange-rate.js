import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function floatingExchangeRate() {
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
                    <span className="text-gray-700">Floating Exchange Rate</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Floating Exchange Rate</h1>
                    <p className="mt-4">A floating exchange rate, also known as a flexible exchange rate, is a system where the value of a country&apos;s currency is determined
                    by the foreign exchange market based on supply and demand. In this system, the exchange rate fluctuates freely and is not fixed or pegged to any specific value
                    against another currency or a basket of currencies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Under a floating exchange rate regime, the exchange rate can change frequently, reflecting changes in market conditions, economic factors, and
                    investor sentiment. For example, if a country&apos;s economy is performing well and attracts foreign investors, demand for its currency may increase, causing its
                    value to appreciate relative to other currencies. Conversely, if the country faces economic challenges or political uncertainty, the value of its currency may decrease.</p>
                    <p className="mt-2">With a floating exchange rate, the exchange rate can adjust automatically to changes in economic conditions, helping to maintain balance in
                    international trade and financial transactions. Countries with floating exchange rates have greater flexibility in conducting their monetary policies, as they are
                    not constrained by the need to defend a fixed exchange rate. A floating exchange rate is determined by market forces, which can lead to more efficient resource allocation
                    and better reflection of economic fundamentals.</p>
                    <p className="mt-2">However, frequent fluctuations in the exchange rate can introduce uncertainty for businesses engaged in international trade and investment. The absence
                    of a fixed rate can attract speculative trading, which may lead to excessive short-term volatility. Countries with floating exchange rates may be more exposed to external
                    economic shocks and market sentiment, which can impact their exchange rates.</p>
                    <p className="mt-2">Many countries around the world use floating exchange rate systems for its flexibility. But, some countries opt for fixed or pegged exchange rate
                    systems to provide more stability and predictability in their currency&apos;s value.</p>
                </section>
            </div>
        </div>
    )
}