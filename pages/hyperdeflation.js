import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hyperdeflation() {
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
                    <span className="text-gray-700">Hyperdeflation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hyperdeflation</h1>
                    <p className="mt-4">Hyperdeflation, also known as hyperdeflationary spiral or deflationary collapse, is an extreme and rapid decrease in prices across an economy.
                    It is the opposite of inflation, where prices rise over time. Hyperdeflation is characterized by a self-reinforcing cycle of declining demand, falling prices, reduced
                    economic activity, and further price reductions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Hyperdeflation involves an exceptionally fast and severe drop in the general price level of goods and services. This can lead to a situation where
                    consumers delay purchases in anticipation of even lower prices, exacerbating the deflationary spiral and creating a negative feedback loop. Falling prices can reduce consumer
                    spending and business investment as people wait for better deals, causing a decline in demand. This, in turn, can lead to reduced production, job losses, and further economic
                    contraction as businesses delay investments and spending.</p>
                    <p className="mt-2">Hyperdeflation can increase the real value of debt, making it more difficult for borrowers to repay loans. This can lead to defaults and bankruptcies, further
                    weakening economic activity. As hyperinflation worsens in one country, it can have spillover effects on the global economy, impacting trade, investment, and financial stability.</p>
                    <p className="mt-2">Central banks typically use monetary policy tools, such as lowering interest rates or implementing quantitative easing, to stimulate demand, restore confidence,
                    and promote economic recovery. However, in cases of hyperdeflation, these measures may become less effective, as interest rates may already be near zero and consumer and business
                    confidence remains low.</p>
                </section>
            </div>
        </div>
    )
}