import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function exchangeRate() {
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
                    <span className="text-gray-700">Exchange Rate</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exchange Rate</h1>
                    <p className="mt-4">Exchange rate is the value of one currency in terms of another currency. It represents the rate at which one currency can be exchanged or converted into another.
                    Exchange rates are crucial in international trade and finance because they determine the cost of purchasing foreign goods and services and affect the value of investments and assets
                    denominated in different currencies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Exchange rates can be either fixed or floating. In a fixed exchange rate system, a currency&apos;s value is pegged to a specific value or a basket of other currencies,
                    and the country&apos;s central bank intervenes to maintain that value. On the other hand, in a floating exchange rate system, the value of a currency is determined by supply and demand,
                    and it can fluctuate continuously.</p>
                    <p className="mt-2">Exchange rates are quoted in pairs, representing the relative value of one currency to another. For example, if the exchange rate between the US dollar (USD) and the
                    euro (EUR) is 1 USD = 0.85 EUR, it means one US Dollar can be exchanged for 0.85 Euros.</p>
                    <p className="mt-2">Various factors, including interest rates, inflation rates, economic performance, geopolitical events, and market sentiment, can affect exchange rates. Governments and
                    central banks often use monetary policies to influence exchange rates and stabilize their economies.</p>
                    <p className="mt-2">For businesses engaged in international trade, exchange rate movements can impact import and export costs, affecting profitability and competitiveness. Investors with
                    assets denominated in foreign currencies face exchange rate risk, as changes in exchange rates can lead to gains or losses in the value of their investments when converted back to their
                    domestic currency.</p>
                </section>
            </div>
        </div>
    )
}
