import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function homeEquity() {
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
                    <span className="text-gray-700">Home Equity</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home Equity</h1>
                    <p className="mt-4">Home equity is the portion of a property&apos;s value that belongs to the homeowner and is not owed to any lender or mortgage holder. It represents the difference
                    between the property&apos;s market value and the outstanding balance of any loans or mortgages secured against it. Home equity is an essential component of a homeowner&apos;s net worth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">To calculate home equity: Home Equity = Market Value of Property - Outstanding Mortgage Balance</p>
                    <p className="mt-2">For example, if the market value of a home is $300,000, and the homeowner still owes $200,000 on the mortgage, the home equity would be $100,000.</p>
                    <p className="mt-2">Home equity is built over time through a combination of factors, including making mortgage payments, property appreciation, and home improvements and renovations. Homeowners
                    can leverage home equity in various ways, including borrowing against their equity using a home equity loan or home equity line of credit (HELOC), refinancing their mortgage, and selling their home
                    in retirement.</p>
                </section>
            </div>
        </div>
    )
}