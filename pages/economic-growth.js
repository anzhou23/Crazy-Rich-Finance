import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economicGrowth() {
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
                    <span className="text-gray-700">Economic Growth</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economic Growth</h1>
                    <p className="mt-4">Economic growth is the increase in a country&apos;s production of goods and services over time. It measures an economy&apos;s expansion and is
                    typically expressed as a percentage change in a nation&apos;s gross domestic product (GDP).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When an economy experiences economic growth, the country is producing more goods and services than in the past. This expansion is often associated
                    with positive developments such as higher employment rates, increased wages, improved living standards, and greater opportunities for businesses and individuals.</p>
                    <p className="mt-2">Economic growth is influenced by several factors, including investments in capital goods, infrastructure, and human capital, new technologies and
                    innovations, consumer spending, government policies, and international trade and globalization. It is an essential goal for policymakers and economists, as it is seen
                    as a key indicator of a nation&apos;s prosperity and well-being. However, economic growth does not always evenly benefit all segments of society, and sustainable growth
                    requires careful management of resources and consideration of social and environmental factors.</p>
                </section>
            </div>
        </div>
    )
}
