import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function oversold() {
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
                    <span className="text-gray-700">Oversold</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Oversold</h1>
                    <p className="mt-4">When a financial asset is considered oversold, it means that its price has experienced a significant and rapid decline, potentially indicating a buying opportunity or a potential price rebound.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">An oversold condition suggests that the selling pressure on the asset has pushed its price to potentially unsustainable levels on the downside. It may indicate that the asset is undervalued or that
                    market participants have become overly pessimistic. The downward momentum can be driven by factors such as negative market sentiment, selling pressure, or negative news surrounding the asset.</p>
                    <p className="mt-2">Identifying oversold conditions can be used as one factor in market timing and risk management strategies. It can help traders and investors make informed decisions about when to enter or add to
                    positions, take advantage of potentially undervalued assets, or implement risk mitigation strategies. However, oversold conditions alone do not guarantee a price rebound, and other fundamental or technical factors
                    should also be considered in conjunction with the oversold signal.</p>
                    <p className="mt-2">While oversold conditions often suggest a potential price rebound, it is also possible for an asset to remain oversold or continue its downward trend. In such cases, the asset may experience a period
                    of consolidation or further decline before any meaningful rebound occurs.</p>
                </section>
            </div>
        </div>
    )
}