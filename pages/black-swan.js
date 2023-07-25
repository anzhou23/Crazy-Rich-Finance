import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function blackSwan() {
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
                    <span className="text-gray-700">Black Swan</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Black Swan</h1>
                    <p className="mt-4">A &quot;black swan event&quot; is an unpredictable and highly impactful event that comes as a surprise, has a severe impact on the financial markets,
                    and is often inappropriately rationalized in hindsight. The term &quot;black swan&quot; originates from the belief that all swans are white, as that was the only color
                    observed historically. However, the discovery of black swans in Australia challenged this assumption and became a metaphor for unforeseen and rare occurrences.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Black swan events are characterized by their extreme rarity, high impact, and the difficulty of predicting or preparing for them using standard models
                    or risk assessment techniques. These events can have significant consequences for financial markets, economies, and businesses, causing large price movements, market crashes,
                    or even systemic failures.</p>
                    <p className="mt-2">Examples of black swan events include the 2008 global financial crisis, the dot-com bubble burst in the early 2000s, and the COVID-19 pandemic&apos;s impact
                    on global markets in 2020. These events were highly unexpected, and their effects reverberated throughout the global financial system, causing widespread disruption and losses.</p>
                    <p className="mt-2">The concept of black swan events highlights the inherent limitations of traditional risk management and investment strategies, which often rely on historical
                    data and probabilistic models. Black swan events underscore the importance of incorporating robust risk management practices, diversification, and stress testing to better prepare
                    for unforeseen and extreme events that can disrupt financial markets and portfolios.</p>
                </section>
            </div>
        </div>
    )
}
