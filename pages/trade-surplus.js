import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function tradeSurplus() {
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
                    <span className="text-gray-700">Trade Surplus</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Trade Surplus</h1>
                    <p className="mt-4">A trade surplus occurs when a country&apos;s exports exceed its imports, resulting in a positive balance of trade. It represents the difference between the value of goods
                    and services a country exports to other countries and the value of goods and services it imports. A trade surplus can have economic implications, such as increasing foreign exchange reserves,
                    supporting domestic industries, and potentially stimulating economic growth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Factors that contribute to a trade surplus include a country&apos;s export competitiveness, comparative advantage in certain industries, technological advancements, high
                    domestic savings, strong domestic demand for domestically produced goods, trade policies that support exports, and global economic conditions. A trade surplus can indicate that a country&apos;s
                    industries are competitive and successful in global markets.</p>
                    <p className="mt-2">On the positive side, trade surpluses generate revenue from exports, increase foreign exchange reserves, and create employment opportunities in export-oriented industries. They
                    can also support domestic industries by allowing them to scale production, invest in research and development, and gain a competitive edge. However, excessive trade surpluses can lead to concerns about
                    currency appreciation, reduced domestic consumption, and potential trade disputes from countries with trade deficits.</p>
                    <p className="mt-2">Trade surpluses can influence currency exchange rates. When a country has a trade surplus, it typically receives more foreign currency from its exports than it needs to pay for its
                    imports. This increased supply of foreign currency can strengthen the country&apos;s currency relative to others. A stronger currency can make imports cheaper and exports relatively more expensive,
                    potentially affecting the competitiveness of export-oriented industries and reducing the trade surplus over time.</p>
                    <p className="mt-2">Governments often utilize trade policies and engage in negotiations to maintain or enhance trade surpluses. They may implement export promotion strategies, provide export incentives,
                    negotiate trade agreements that open up foreign markets, or address trade barriers in other countries. These measures aim to boost exports and maintain a favorable trade balance.</p>
                </section>
            </div>
        </div>
    )
}