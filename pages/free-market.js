import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function freeMarket() {
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
                    <span className="text-gray-700">Free Market</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Free Market</h1>
                    <p className="mt-4">The free market is an economic system where individuals and businesses exchange goods, services, and resources are exchanged voluntarily without
                    significant government intervention or regulation. In a free market, supply and demand determine prices, production, and distribution of goods and services.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In this system, individuals and businesses are free to make their own economic decisions based on their self-interest, pursuing profit or personal
                    satisfaction. Sellers can offer their products at prices they choose, and buyers can make choices based on their preferences and budget. Competition among various
                    sellers and buyers drives efficiency and innovation, as businesses strive to attract customers with better products or lower prices.</p>
                    <p className="mt-2">Key characteristics of a free market include private ownership of resources and means of production, minimal government interference, and the
                    absence of price controls. The market is governed by the principles of supply and demand, and prices are determined by the equilibrium between what producers are
                    willing to supply and what consumers are willing to buy.</p>
                    <p className="mt-2">While a free market offers advantages such as economic efficiency and innovation, critics argue it may lead to income inequality, market failures,
                    and environmental concerns. To strike a balance, many economies adopt a mixed economic system that incorporates both free market elements and government intervention
                    to address public goods, externalities, and other social issues.</p>
                </section>
            </div>
        </div>
    )
}