import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function zoneOfResistance() {
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
                    <span className="text-gray-700">Zone of Resistance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Zone of Resistance</h1>
                    <p className="mt-4">The &quot;zone of resistance&quot; is a price range or level in technical analysis where a financial asset or security faces significant selling pressure. It is a zone
                    where the price historically struggles to break through or sustain upward movement, potentially leading to a reversal or a slowdown in price appreciation.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When the price of an asset reaches the zone of resistance, it may encounter increased selling activity, as traders and investors take profit or sell their holdings. This
                    can lead to a reversal in the price trend or a period of consolidation where the price remains range-bound within the resistance zone.</p>
                    <p className="mt-2">While the zone of resistance suggests a potential barrier to price advancement, it does not guarantee that the price will reverse or consolidate. If the price manages to
                    break through the resistance zone with significant buying pressure, it could lead to a bullish breakout and further upward movement.</p>
                    <p className="mt-2">The zone of resistance is often accompanied by a corresponding support level, which is a price level or range where the asset has historically found buying interest and
                    faced upward price support. Traders and investors consider both support and resistance levels to assess the overall price dynamics and potential trading opportunities.</p>
                </section>
            </div>
        </div>
    )
}
