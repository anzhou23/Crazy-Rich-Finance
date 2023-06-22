import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function institutionalInvestor() {
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
                    <span className="text-gray-700">Institutional Investor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Institutional Investor</h1>
                    <p className="mt-4">An institutional investor is an organization or entity that pools together large amounts of money to invest in various financial markets and securities on behalf of its clients or members.
                    These investors are typically professional financial institutions, such as pension funds, insurance companies, mutual funds, hedge funds, endowments, and investment banks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Institutional investors manage significant amounts of money, often in the billions of dollars. Their large pool of capital allows them to make substantial investments in various asset classes,
                    including stocks, bonds, real estate, commodities, and alternative investments. Due to their large size and significant holdings, institutional investors have the potential to influence financial markets. Their
                    buying or selling activities can impact stock prices, bond yields, and market sentiment. Institutional investors are sometimes referred to as &quot;market movers&quot; because their actions can have a notable effect
                    on market dynamics.</p>
                    <p className="mt-2">Experienced investment professionals analyze market trends, conduct research, and make investment decisions on behalf of the organization. These professionals use a range of investment strategies
                    and tools to optimize returns and manage risk.</p>
                    <p className="mt-2">Institutional investors are subject to regulatory oversight to ensure compliance with applicable laws and regulations. Authorities monitor their activities to maintain market integrity, protect
                    investors, and promote fair practices.</p>
                </section>
            </div>
        </div>
    )
}