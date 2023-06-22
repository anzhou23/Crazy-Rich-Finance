import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function tradeDeficit() {
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
                    <span className="text-gray-700">Trade Deficit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Trade Deficit</h1>
                    <p className="mt-4">A trade deficit occurs when a country&apos;s imports exceed its exports, resulting in a negative balance of trade. It represents the difference between the value of goods
                    and services a country imports from other countries and the value of goods and services it exports. A persistent trade deficit can have economic implications, such as affecting currency exchange
                    rates, domestic industries, and overall economic growth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Factors such as a country&apos;s domestic consumption patterns, relative cost of production, exchange rates, competitiveness of industries, trade policies, and global economic
                    conditions can contribute to a trade deficit. For example, if a country has a high demand for imported goods or if its domestic industries struggle to compete globally, it can lead to a trade deficit.</p>
                    <p className="mt-2">On one hand, trade deficits allow consumers to access a wide range of goods and services from around the world, promoting consumer choice and potentially keeping prices lower. On
                    the other hand, persistent trade deficits may indicate a loss of competitiveness in domestic industries, job displacement, and potential threats to national security if a country becomes overreliant on
                    imports for critical goods.</p>
                    <p className="mt-2">Trade deficits can affect currency exchange rates. When a country has a trade deficit, it typically requires more foreign currency to pay for its imports than it receives from its
                    exports. This can lead to a depreciation of the country&apos;s currency relative to others. A weaker currency can make exports more competitive and imports more expensive, potentially helping to reduce
                    the trade deficit over time.</p>
                    <p className="mt-2">Governments often implement trade policies and engage in negotiations to address trade deficits. These may include measures to promote exports, such as export subsidies or trade agreements
                    that provide preferential access to foreign markets. Additionally, countries may impose tariffs, import quotas, or trade restrictions to protect domestic industries and reduce reliance on imports.</p>
                </section>
            </div>
        </div>
    )
}