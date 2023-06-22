import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function zoneOfSupport() {
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
                    <span className="text-gray-700">Zone of Support</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Zone of Support</h1>
                    <p className="mt-4">The &quot;zone of support&quot; is a price range or level in technical analysis where a financial asset or security encounters significant buying interest. It is a zone where
                    the price historically finds support and experiences a rebound or a slowdown in price decline. </p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When the price of an asset approaches the zone of support, it may encounter increased buying activity, as traders and investors see the price as attractive for initiating or
                    adding to positions. This can lead to a rebound in the price or a period of consolidation where the price remains range-bound within the support zone.</p>
                    <p className="mt-2">The concept of the zone of support is commonly used in technical analysis to identify potential areas where price movements may find buying interest and face upward pressure.
                    Traders and investors use various technical indicators and chart patterns
                    to identify and confirm these support zones. While the zone of support suggests a potential floor for the price, it does not guarantee that the price will rebound or consolidate. If the price breaks
                    through the support zone with significant selling pressure, it could lead to a bearish breakdown and further downward movement.</p>
                    <p className="mt-2">The zone of support is often accompanied by a corresponding resistance level, which is a price level or range where the asset has historically encountered selling pressure and faced
                    downward price resistance. Traders and investors consider both support and resistance levels to assess the overall price dynamics and potential trading opportunities.</p>
                </section>
            </div>
        </div>
    )
}