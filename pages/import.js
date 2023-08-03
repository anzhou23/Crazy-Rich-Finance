import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function imports() {
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
                    <span className="text-gray-700">Import</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Import</h1>
                    <p className="mt-4">An import is the process of bringing goods, products, or services into a country from another country for consumption, distribution, or resale. Imports
                    are an integral part of international trade and commerce, allowing countries to access goods and services that may not be domestically produced or are more cost-effective to
                    obtain from abroad.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Imports enable countries to exchange goods and services with each other, promoting economic growth, diversifies consumer choices, and fosters competition.
                    They often occur when there is a demand for a particular product or service that cannot be met by domestic production. This can be due to factors such as price differences,
                    quality, availability, or technological capabilities.</p>
                    <p className="mt-2">The concept of comparative advantage plays a significant role in imports. Countries specialize in producing goods and services where they have a comparative
                    advantage (lower opportunity cost) and trade with others to obtain items in which they may not have an advantage. Balance of trade is key. When a country&apos;s
                    imports exceed its exports, it has a trade deficit. Conversely, when a country exports more than it imports, it has a trade surplus.</p>
                    <p className="mt-2">Importing goods can be subject to tariffs (taxes on imported goods) or other trade restrictions imposed by governments, which can impact the cost and
                    availability of imported products. Imports contribute to a diverse range of products available to consumers, leading to greater choices and potential benefits in terms of quality,
                    variety, and affordability.</p>
                    <p className="mt-2">Many countries enter into trade agreements or treaties to facilitate and promote imports and exports between nations. These agreements may reduce or eliminate
                    trade barriers to encourage smoother international trade relations. Modern supply chains often involve components and materials sourced from various countries, making imports crucial
                    for manufacturing and production processes.</p>
                </section>
            </div>
        </div>
    )
}