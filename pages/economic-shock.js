import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economicShock() {
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
                    <span className="text-gray-700">Economic Shock</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economic Shock</h1>
                    <p className="mt-4">An economic shock is a sudden and unexpected event or situation that significantly disrupts the normal functioning of an economy, leading to abrupt
                    changes in economic activity, financial markets, and consumer behavior. Economic shocks can be caused by various factors, such as natural disasters, geopolitical events,
                    financial crises, pandemics, technological disruptions, or policy changes.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Economic shocks are often unforeseen and catch businesses, governments, and individuals off guard. For example, GDP may experience a sharp contraction,
                    unemployment rates can rise rapidly, and financial markets may experience extreme volatility.</p>
                    <p className="mt-2">Economic shocks can have spillover effects across different sectors and regions of an economy. For instance, a shock in one industry may affect suppliers, customers,
                    and related businesses, causing a ripple effect throughout the economy. They create uncertainty and fear among consumers and investors, leading to changes in spending and investment
                    behavior. Consumers may reduce their spending, while investors may become risk-averse and withdraw their investments.</p>
                    <p className="mt-2">In response to economic shocks, governments and central banks often implement various policy measures to stabilize the economy and mitigate the impact of the shock.
                    These measures may include fiscal stimulus, monetary easing, and regulatory adjustments.</p>
                    <p className="mt-2">Examples of economic shocks include the global financial crisis of 2008, the COVID-19 pandemic, sudden changes in oil prices, natural disasters like hurricanes or
                    earthquakes, and unexpected political events that can disrupt trade and investment.</p>
                </section>
            </div>
        </div>
    )
}
