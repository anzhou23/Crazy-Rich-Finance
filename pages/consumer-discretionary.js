import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function consumerDiscretionary() {
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
                    <span className="text-gray-700">Consumer Discretionary</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consumer Discretionary</h1>
                    <p className="mt-4">Consumer discretionary, also known as cyclical stocks, refers to a category of stocks in the financial markets that represent companies producing non-essential goods and
                    services. These goods and services are considered optional or discretionary, as they are not necessities required for basic living needs. Instead, they are products consumers typically
                    purchase when they have surplus income or during periods of economic prosperity.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Examples of consumer discretionary products and services include luxury items, entertainment, travel and leisure, dining out, apparel, electronics, and other non-essential
                    goods. Companies in this sector tend to be more sensitive to changes in the overall economic conditions and consumer sentiment. When the economy is performing well, these stocks can perform
                    strongly as consumers have more disposable income to spend. During economic downturns or recessions, consumer discretionary stocks may experience decreased demand and lower revenues as consumers
                    cut back on their spending.</p>
                    <p className="mt-2">In general, consumer discretionary stocks are an essential part of a diversified investment portfolio as they can offer the potential for higher returns during economic
                    expansions. However, investors should carefully consider their risk tolerance and investment goals when adding these stocks to their portfolios, as they may also be subject to greater volatility
                    and fluctuations in value compared to more stable sectors such as consumer staples or utilities.</p>
                </section>
            </div>
        </div>
    )
}
