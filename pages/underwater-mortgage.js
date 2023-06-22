import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function underwaterMortgage() {
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
                    <span className="text-gray-700">Underwater Mortgage</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Underwater Mortgage</h1>
                    <p className="mt-4">An underwater mortgage occurs when the outstanding balance on a mortgage loan exceeds the current market value of the property securing the loan. In other words, the
                    homeowner owes more on the mortgage than the home is worth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">An underwater mortgage indicates negative equity, where the homeowner&apos;s property value has declined below the outstanding loan balance. This situation often arises due to
                    a decline in the local housing market, economic downturns, or factors specific to the property. If the housing market recovers and property values increase over time, homeowners may gradually regain
                    equity and eventually move into a positive equity position.</p>
                    <p className="mt-2">Being underwater on a mortgage can make it difficult to sell the property or refinance the mortgage. When selling, the proceeds from the sale may not be sufficient to pay off the mortgage
                    entirely, resulting in a shortfall that the homeowner must cover. Refinancing options may be limited as lenders typically require a certain level of equity in the property to qualify for favorable loan terms.</p>
                    <p className="mt-2">Accessing home equity through options like home equity loans or lines of credit may be difficult. These financing methods typically require sufficient equity as collateral. The lack of
                    equity restricts homeowners&apos; ability to tap into their home&apos;s value for purposes such as home improvements, debt consolidation, or other financial needs.</p>
                    <p className="mt-2">Negative equity may delay homeowners&apos; ability to build wealth through property appreciation. It can also limit their ability to move or relocate for job opportunities, downsizing, or
                    other personal reasons, as the sale proceeds may not cover the mortgage balance. Homeowners facing an underwater mortgage may stay in the home and continue mortgage payments, negotiate with the lender for a loan
                    modification, pursue a short sale where the lender agrees to accept less than the full amount owed, or in some cases, consider foreclosure as a last resort.</p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}
