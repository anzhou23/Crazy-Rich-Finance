import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bailout() {
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
                    <span className="text-gray-700">Bailout</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bailout</h1>
                    <p className="mt-4">A bailout is a financial assistance or rescue package the government or a financial institution provides to a company, organization, or country facing
                    severe financial distress or insolvency. The goal is to prevent the entity receiving the aid from collapsing, as its failure could have widespread negative effects on the
                    economy, financial system, or other related industries.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Bailouts can take different forms, such as loans, grants, guarantees, or equity investments. The funds provided are intended to stabilize the troubled
                    entity, enable it to meet its financial obligations, and continue its operations.</p>
                    <p className="mt-2">Bailouts can be controversial because they often involve using taxpayer money to support struggling entities. Critics argue they can encourage reckless
                    behavior by providing a safety net for companies that take excessive risks, known as moral hazard. On the other hand, proponents argue bailouts are necessary in certain
                    situations to prevent systemic risks and maintain economic stability.</p>
                    <p className="mt-2">Examples of bailouts include government assistance to large financial institutions during the 2008 global financial crisis, financial support to industries
                    affected by the COVID-19 pandemic, and international aid packages to countries facing severe economic crises.</p>
                </section>
            </div>
        </div>
    )
}
