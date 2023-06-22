import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hodl() {
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
                    <span className="text-gray-700">HODL</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">HODL</h1>
                    <p className="mt-4">&quot;HODL&quot; is a term derived from a misspelling of the word &quot;hold&quot; and is commonly used in the cryptocurrency community. It
                    refers to the strategy of holding onto cryptocurrencies for an extended period, regardless of short-term price fluctuations or market volatility.
                    HODLing is often associated with a long-term investment approach and a belief in the future growth and adoption of cryptocurrencies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">HODLers often demonstrate emotional resilience by remaining steadfast in their commitment to holding cryptocurrencies, even during periods of
                    market downturns or negative sentiment. They avoid making impulsive decisions based on market noise or fear, recognizing that cryptocurrencies
                    can experience significant price fluctuations in the short term.</p>
                    <p className="mt-2">HODLers typically have confidence in the underlying technology and potential benefits of cryptocurrencies. They believe in the transformative
                    power of blockchain technology, decentralized finance (DeFi), or other use cases that cryptocurrencies offer.</p>
                    <p className="mt-2">HODLing can be viewed as a risk management strategy for cryptocurrencies. By holding onto investments for the long term, HODLers aim to
                    mitigate the impact of short-term price volatility and potentially benefit from the overall growth and adoption of cryptocurrencies over time.
                    However, cryptocurrencies are inherently volatile, and the HODL strategy carries risks.</p>
                    <p className="mt-2">While HODLing suggests holding onto cryptocurrencies for the long term, HODLers still actively monitor the market and periodically review their
                    holdings. They stay informed about market developments, regulatory changes, and any updates related to their cryptocurrency investments. Periodic
                    review allows for adjustments to the portfolio if necessary or taking advantage of emerging opportunities.</p>
                </section>
            </div>
        </div>
    )
}
