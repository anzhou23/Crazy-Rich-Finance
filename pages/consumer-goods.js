import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function consumerGoods() {
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
                    <span className="text-gray-700">Consumer Goods</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consumer Goods</h1>
                    <p className="mt-4">Consumer goods are products and commodities individuals and households purchase for personal use and consumption. These goods are typically intended to satisfy consumers&apos;
                    wants and needs and are not meant for further production or resale.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Consumer goods can be classified into 2 main categories: durable goods and non-durable goods. Durable goods have a longer lifespan and are expected to be used over an extended
                    period. Examples include automobiles, furniture, appliances, electronics, and other items designed to withstand regular use for several years. Non-durable goods, also known as perishable or consumable
                    goods, are used up or consumed relatively quickly. These products are generally meant for one-time or short-term use. Examples include food and beverages, toiletries, cleaning supplies, and other items
                    that need frequent replenishment.</p>
                    <p className="mt-2">Consumer goods play a vital role in the economy as they drive consumer spending, which accounts for a significant portion of overall economic activity. They are distributed through
                    various channels, including retail stores, supermarkets, online platforms, specialty stores, and direct sales. Companies that produce and sell consumer goods are often focused on meeting consumers&apos;
                    demands and preferences, tailoring their products to suit various tastes and needs. Marketers and advertisers often employ targeted strategies to promote consumer goods and influence buying decisions.</p>
                </section>
            </div>
        </div>
    )
}
