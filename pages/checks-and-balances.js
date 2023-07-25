import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function checksAndBalances() {
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
                    <span className="text-gray-700">Checks and Balances</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checks and Balances</h1>
                    <p className="mt-4">Checks and balances refer to a system of government or organization where separate branches or entities have powers to monitor, limit, and balance each other&apos;s actions
                    to prevent abuse of power and ensure accountability.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the context of a government, checks and balances are designed to distribute authority among different branches, such as the executive, legislative, and judicial branches.
                    Each branch has distinct powers and responsibilities, and they are meant to keep each other in check to avoid any single branch from becoming too dominant or acting beyond its authority.</p>
                    <p className="mt-2">For example, in a presidential system, the executive branch (led by the President) can veto legislation passed by the legislative branch (Congress), but Congress can override
                    the veto with a supermajority vote. Similarly, the judiciary can review and rule on the constitutionality of laws passed by the legislative branch or actions taken by the executive branch.</p>
                    <p className="mt-2">In other contexts, checks and balances can also apply to organizations and businesses. It involves establishing internal controls, separation of duties, and independent
                    oversight to ensure that no individual or department can operate without accountability, and no single person has complete control over important decisions.</p>
                </section>
            </div>
        </div>
    )
}
