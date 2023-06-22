import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function xenocurrency() {
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
                    <span className="text-gray-700">Xenocurrency</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Xenocurrency</h1>
                    <p className="mt-4">Xenocurrency refers to currency traded in markets outside of its domestic borders. The term &quot;zeno&quot; refers to something foreign or different.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The use of the term xenocurrency is uncommon in finance or economics because the prefix xeno tends to have negative connotations. For example, Xenophobia is an irrational fear or
                    hatred toward foreigners.</p>
                    <p className="mt-2">Xenocurrencies are subject to exchange rate fluctuations and volatility. When dealing with foreign currencies, changes in exchange rates can impact the value of investments,
                    international trade, and the cost of goods and services. Similarly, alternative currencies may experience significant price volatility due to factors like market sentiment, regulatory changes, or
                    technological developments.</p>
                    <p className="mt-2">The concept of xenocurrency highlights the interconnectedness of the global financial system and the increasing acceptance and use of diverse currencies beyond traditional borders.
                    It reflects the growing trend of cross-border transactions, international investments, and the emergence of new forms of currency facilitated by technology.</p>
                </section>
            </div>
        </div>
    )
}
