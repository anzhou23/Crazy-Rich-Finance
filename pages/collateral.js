import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function collateral() {
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
                    <span className="text-gray-700">Collateral</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Collateral</h1>
                    <p className="mt-4">Collateral is an asset or property a borrower pledges to a lender as security for a loan or credit. It serves as a form of protection for the lender in case the borrower can&apos;t
                    repay the loan as agreed. By providing collateral, the borrower offers an additional layer of assurance to the lender, reducing the lender&apos;s risk in extending credit.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The collateral can take various forms, such as real estate (e.g., a house or land), financial assets (e.g., stocks or bonds), valuable items (e.g., jewelry or valuable collectibles),
                    or even cash deposits. The specific type of collateral depends on the type of loan and the lender&apos;s requirements.</p>
                    <p className="mt-2">If the borrower defaults on the loan, meaning they fail to repay it as agreed, the lender has the legal right to seize the collateral and sell it to recover the outstanding amount owed.
                    The process of selling the collateral to recover the debt is known as foreclosure, repossession, or liquidation, depending on the type of collateral involved.</p>
                    <p className="mt-2">Collateral is common in various types of loans, including mortgages, auto loans, and business loans. The presence of collateral can offer advantages to borrowers, such as lower interest
                    rates or a higher likelihood of approval for the loan, especially for individuals or businesses with less favorable credit histories.</p>
                </section>
            </div>
        </div>
    )
}
