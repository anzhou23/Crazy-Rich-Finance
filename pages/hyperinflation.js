import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hyperinflation() {
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
                    <span className="text-gray-700">Hyperinflation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hyperinflation</h1>
                    <p className="mt-4">Hyperinflation refers to an extremely rapid and uncontrollable increase in the general price level of goods and services in
                    an economy. It typically occurs when a country experiences a significant and sustained increase in its money supply, leading to a loss of confidence
                    in the currency and a decline in its purchasing power.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During periods of hyperinflation, the value of money erodes and prices skyrocket. Individuals and businesses struggle to meet basic needs, and
                    savings quickly lose value, leading to a decline in the overall standard of living. This can create a vicious cycle where the erosion of the currency&apos;s value leads to
                    higher prices, which, in turn, prompts further devaluation and even higher prices.</p>
                    <p className="mt-2">Hyperinflation can be self-reinforcing and difficult to break, exacerbating the economic and social challenges within the affected country. This can lead
                    to social unrest, political instability, and a breakdown of the social fabric. It hurts business investment and disrupts the functioning of financial markets. Unemployment
                    rises, wages struggle to keep up with soaring prices, and poverty levels increase.</p>
                    <p className="mt-2">People often resort to using stable foreign currencies or alternative means of exchange, such as bartering or using commodities as a medium of exchange. This
                    further undermines the value and stability of the local currency, creating challenges for businesses and individuals conducting transactions within the country.</p>
                    <p className="mt-2">Hyperinflation is often a symptom of deep-rooted economic mismanagement, including excessive money printing, unsustainable fiscal policies, inadequate
                    monetary controls, or political instability. Addressing the underlying causes of hyperinflation requires comprehensive economic reforms, including restoring
                    fiscal discipline, implementing sound monetary policies, and rebuilding confidence in the currency and the overall economy.</p>
                    <p className="mt-2">Hyperinflation can have broader implications beyond the affected country&apos;s borders. It may disrupt international trade, affect neighboring economies, and
                    lead to refugee outflows as people seek stability and better economic prospects elsewhere. International financial institutions and neighboring countries may
                    need to provide assistance and support to mitigate the impact of hyperinflation.</p>
                </section>
            </div>
        </div>
    )
}
