import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function capitalGain() {
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
                    <span className="text-gray-700">Capital Gain</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Capital Gain</h1>
                    <p className="mt-4">Capital gain is the increase in a capital asset&apos;s value when it is sold or disposed of for a higher price than its original purchase price. It is the
                    profit realized from selling the asset.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A capital asset can be any property or investment held by an individual or business, such as stocks, bonds, real estate, or valuable personal possessions. It is typically
                    held for investment purposes or for personal use and not meant for regular business operations.</p>
                    <p className="mt-2">The capital gain is calculated by subtracting the original purchase price or &quot;cost basis&quot; of the asset from the selling price or &quot;proceeds&quot; received from its sale
                    (Capital Gain = Selling Price - Purchase Price).</p>
                    <p className="mt-2">Capital gains can be categorized as either long-term or short-term, depending on how long you hold the asset for. If the asset is held for more than a certain period, usually
                    1+ years, the resulting gain is considered a long-term capital gain. Long-term capital gains often receive preferential tax treatment, with lower tax rates than ordinary income.
                    If the asset is held for less than the specified period, typically less than 1 year, the gain is considered a short-term capital gain. Short-term capital gains are generally taxed
                    at the individual&apos;s ordinary income tax rates.</p>
                    <p className="mt-2">Capital gains are subject to taxation in most jurisdictions. The tax rates and rules regarding capital gains vary depending on the country and the holding period. Governments
                    often provide different tax rates for long-term and short-term capital gains to incentivize long-term investments.</p>
                    <p className="mt-2">If the selling price of an asset is lower than its original purchase price, it results in a capital loss. Capital losses can be used to offset capital gains, thereby reducing
                    the overall tax liability. The net capital gain (capital gains minus capital losses) is the amount subject to taxation.</p>
                </section>
            </div>
        </div>
    )
}
