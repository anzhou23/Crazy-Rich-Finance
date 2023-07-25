import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function comparativeAdvantage() {
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
                    <span className="text-gray-700">Comparative Advantage</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Comparative Advantage</h1>
                    <p className="mt-4">Comparative advantage is an economic principle that describes a country, individual, or firm&apos;s ability to produce a particular good or service at a lower opportunity cost
                    compared to others. In simple terms, it means that a party can produce a product more efficiently, in terms of resources and time, relative to other goods they could produce or compared to the
                    production capabilities of other parties.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Economist David Ricardo first introduced the concept of comparative advantage in the early 19th century. It is based on the idea of specialization and trade between
                    countries to maximize overall production and consumption. Comparative advantage is determined by the opportunity cost of producing a good or service. Opportunity cost refers to the value of the next
                    best alternative that must be foregone when making a choice.</p>
                    <p className="mt-2">Countries, individuals, or firms should specialize in producing goods or services for which they have a comparative advantage. By doing so, they can produce more efficiently and
                    trade with others to obtain goods or services for which they have a higher opportunity cost. The principle allows for the specialization of resources, leading to increased overall output and access to
                    a wider variety of goods and services.</p>
                    <p className="mt-2">Comparative advantage can change over time due to various factors, such as technological advancements, changes in resource availability, and shifts in demand. It is a fundamental
                    concept in international trade and plays a crucial role in shaping global economic relations. Countries are encouraged to focus on producing goods and services where they have a relative efficiency,
                    which can lead to more efficient allocation of resources and increased economic welfare for all parties involved.</p>
                </section>
            </div>
        </div>
    )
}
