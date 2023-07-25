import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function currency() {
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
                    <span className="text-gray-700">Currency</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Currency</h1>
                    <p className="mt-4">Currency is the system of money used as a medium of exchange in a particular country or region. It is the commonly accepted form of payment for goods, services, and
                    debts within an economy. Currencies come in various forms, such as coins and banknotes, and their values are typically determined by governments or central banks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Currencies play a vital role in the functioning of economies by facilitating transactions, providing a standard unit of measurement for economic activities, and enabling
                    savings and investments. Stable and widely accepted currencies are essential for economic growth, trade, and financial stability.</p>
                    <p className="mt-2">People use money to buy goods and services, making it easier to exchange value without the need for bartering or direct trade. They also act as a store of value, allowing
                    individuals and businesses to hold wealth over time, and provide a standard unit of measurement for pricing and valuing goods, services, assets, and liabilities. Prices of goods and services
                    are expressed in terms of the currency&apos;s value.</p>
                    <p className="mt-2">Currencies are specific to individual countries or regions. Each country typically has its own national currency, such as the United States dollar (USD), Euro (EUR), or
                    Japanese Yen (JPY). In some cases, a group of countries may share a common currency, like the Euro used by Eurozone countries. When dealing with international trade or travel, currencies need to
                    be exchanged based on their exchange rates, which represent the relative value of one currency compared to another.</p>
                    <p className="mt-2">The supply of currency and its circulation is often regulated by a country&apos;s central bank or monetary authority. They control factors like money supply, interest rates,
                    and inflation to stabilize the economy.</p>
                </section>
            </div>
        </div>
    )
}
