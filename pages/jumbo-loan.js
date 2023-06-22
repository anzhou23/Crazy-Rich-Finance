import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function jumboLoan() {
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
                    <span className="text-gray-700">Jumbo Loan</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Jumbo Loan</h1>
                    <p className="mt-4">A jumbo loan is a type of mortgage loan that exceeds the limits set by government-sponsored enterprises (GSEs) such as Fannie Mae and Freddie Mac. These
                    limits are established to regulate the maximum loan amount that these entities will purchase or guarantee.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In most areas of the U.S., a jumbo loan is generally considered to be any loan amount exceeding the limit for a conforming loan, which is currently $726,200
                    for a single-family home in all states (except Hawaii and Alaska, and a few federally designated high-cost markets, where the limit is $1,089,300), as of 2023. Jumbo loans are
                    considered higher risk by lenders and may have higher interest rates because they involve larger loan amounts. Lenders may require stricter qualification criteria, including higher
                    credit scores, lower debt-to-income ratios, and larger down payments compared to conforming loans.</p>
                    <p className="mt-2">Since jumbo loans exceed the limits set by the GSEs, they are considered non-conforming loans. This means they don&apos;t meet the standard criteria for conforming
                    loans and are not eligible for purchase or guarantee by Fannie Mae or Freddie Mac. As a result, jumbo loans are typically held by lenders in their own portfolios or sold to private investors.</p>
                </section>
            </div>
        </div>
    )
}
