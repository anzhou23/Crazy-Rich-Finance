import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function gdp() {
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
                    <span className="text-gray-700">Gross Domestic Product</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gross Domestic Product</h1>
                    <p className="mt-4">Gross Domestic Product (GDP) is a measure that represents the total value of all goods and services produced within a country&apos;s borders over a
                    specific period, typically a year. It serves as a key indicator of a country&apos;s economic performance and is used to assess and compare the size and growth of economies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">GDP measures the total economic output of a country. It takes into account the value of goods and services produced by various sectors, including agriculture,
                    manufacturing, services, and construction. Measuring GDP allows for international benchmarking and analysis of economic trends. However, other factors such as population size,
                    exchange rates, and purchasing power parity when making cross-country comparisons should also be considered.</p>
                    <p className="mt-2">Changes in GDP from one period to another indicate the rate of economic growth or contraction. Positive GDP growth suggests an expanding economy, while
                    negative growth indicates a shrinking economy. The growth rate of GDP  is often used to assess the health and trajectory of an economy, as higher growth rates are
                    generally associated with increased prosperity. While higher GDP per capita suggests the potential for higher levels of consumption and well-being, it does not
                    capture the distribution of income or quality of life factors.</p>
                </section>
            </div>
        </div>
    )
}