import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function tradeWar() {
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
                    <span className="text-gray-700">Trade War</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Trade War</h1>
                    <p className="mt-4">A trade war is a situation where countries impose tariffs, trade barriers, or other restrictive measures on each other&apos;s imports and exports, leading to escalated trade
                    tensions. Trade wars can have wide-ranging economic consequences, such as higher costs for businesses and consumers, disrupted supply chains, reduced global trade, and potential impacts on economic
                    growth and geopolitical relations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Trade wars typically begin with trade disputes between countries, triggered by concerns about unfair trade practices, intellectual property rights violations, market access restrictions,
                    subsidies, or currency manipulation. In response, countries may implement protectionist measures, such as imposing tariffs, import quotas, or trade barriers on specific goods or industries. These measures
                    are aimed at protecting domestic industries, reducing imports, and promoting domestic production.</p>
                    <p className="mt-2">Trade wars often escalate as countries respond to each other&apos;s actions. One country&apos;s imposition of trade barriers can trigger retaliatory measures from other nations affected
                    by the trade restrictions. This retaliatory behavior can create a cycle of escalating trade actions, with each side attempting to protect its own economic interests. The tit-for-tat nature of trade wars can
                    lead to a substantial increase in tariffs and trade barriers between countries.</p>
                    <p className="mt-2">Some industries may benefit from protectionist measures, as they face less competition from imports and have a chance to expand domestic production. However, industries that rely heavily on
                    imports or have export-oriented business models may face challenges due to higher input costs, reduced market access, or retaliatory actions by trading partners.</p>
                    <p className="mt-2">Trade wars can disrupt global trade flows and hinder international cooperation. As countries impose trade barriers, global trade volumes may decline, impacting economies that heavily rely on
                    international trade. Trade tensions can strain diplomatic relations between countries, create political tension, and hinder multinational trade efforts. They can also lead to the formation of new trade alliances
                    or partnerships, as countries seek alternative markets and suppliers to mitigate the impacts. Additionally, they can spill over into other areas, such as technology, security, and intellectual property rights.</p>
                </section>
            </div>
        </div>
    )
}
