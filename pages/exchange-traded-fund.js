import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function exchangeTradedFund() {
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
                    <span className="text-gray-700">Exchange-Traded Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exchange-Traded Fund</h1>
                    <p className="mt-4">An exchange-traded fund (ETF) is a type of investment fund that trades on stock exchanges, representing a basket of underlying assets such as stocks, bonds, commodities, or other securities.
                    ETFs offer investors diversification, flexibility, and the ability to trade them throughout the trading day like individual stocks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">By investing in a single ETF, investors gain exposure to multiple underlying assets, which can help spread risk and reduce the impact of individual security performance. An ETF&apos;s value can fluctuate
                    based on the performance of its underlying assets. Additionally, investors may incur brokerage commissions or fees when buying or selling ETF shares.</p>
                    <p className="mt-2">Many ETFs are designed to track specific indexes, such as the S&P 500 or the NASDAQ. These are known as index ETFs and aim to replicate the performance of the underlying index. Other ETFs may follow specific
                    investment strategies, such as sector ETFs, bond ETFs, or commodity ETFs.</p>
                    <p className="mt-2">ETFs often have lower expense ratios compared to mutual funds, making them an attractive option for cost-conscious investors. The expense ratio represents the annual fees charged by the fund to cover operating
                    expenses. Additionally, ETFs generally have lower minimum investment requirements compared to some mutual funds.</p>
                </section>
            </div>
        </div>
    )
}
