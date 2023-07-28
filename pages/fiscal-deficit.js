import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fiscalDeficit() {
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
                    <span className="text-gray-700">Fiscal Deficit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fiscal Deficit</h1>
                    <p className="mt-4">Fiscal deficit, also known as a budget deficit, is a situation where a government&apos;s total expenditures exceed its total revenues (income) in a specific
                    period, typically a fiscal year. In other words, it is the difference between what the government spends and what it earns through taxes, fees, and other revenue sources.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A fiscal deficit arises when a government needs to finance its spending through borrowing, which can be achieved by issuing government bonds or other forms of
                    debt. Governments often incur fiscal deficits to fund various programs, public services, infrastructure projects, and social welfare initiatives, especially during economic downturns
                    or when facing unforeseen expenses.</p>
                    <p className="mt-2">While a fiscal deficit can help stimulate economic growth and support the economy during challenging times, persistent and large deficits can lead to concerns
                    about the government&apos;s ability to manage its finances effectively. High fiscal deficits may result in increased public debt, leading to interest payments on that debt, which can
                    strain the government&apos;s financial resources and lead to economic instability.</p>
                    <p className="mt-2">Governments typically aim to strike a balance between providing necessary public services and maintaining fiscal discipline. They use various fiscal policies and
                    measures to control deficits, such as increasing tax revenues, reducing expenses, promoting economic growth to boost revenues, and implementing budgetary reforms.</p>
                </section>
            </div>
        </div>
    )
}