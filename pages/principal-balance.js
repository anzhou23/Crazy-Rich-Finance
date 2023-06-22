import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function principalBalance() {
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
                    <span className="text-gray-700">Principal Balance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Principal Balance</h1>
                    <p className="mt-4">The principal balance is the outstanding amount of money owed on a loan or debt. It represents the original amount borrowed or the initial balance of the debt, excluding any
                    interest or fees that have been added over time</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When a loan is taken out, the borrower is expected to repay both the principal amount borrowed and the interest charged by the lender. The principal balance decreases as the
                    borrower makes payments towards the loan, reducing the overall debt over time. For example, if someone takes out a mortgage for $200,000, the principal balance initially starts at $200,000. As the
                    borrower makes monthly mortgage payments, a portion of the payment goes towards reducing the principal balance, while the remaining portion covers the interest charged by the lender. Over time, as
                    more payments are made, the principal balance gradually decreases.</p>
                    <p className="mt-2">It&apos;s important to distinguish the principal balance from the total amount repaid, which includes the interest and any applicable fees. The principal balance reflects the
                    actual amount borrowed and serves as the basis for calculating interest charges and determining the remaining debt. When making extra payments towards a loan, the excess amount typically goes directly
                    towards reducing the principal balance, which can help pay off the debt faster and save on interest costs.</p>
                </section>
            </div>
        </div>
    )
}
