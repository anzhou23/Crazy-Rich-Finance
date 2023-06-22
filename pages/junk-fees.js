import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function junkFees() {
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
                    <span className="text-gray-700">Junk Fees</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Junk Fees</h1>
                    <p className="mt-4">Junk fees, in the context of financial transactions and specifically mortgage lending, refer to additional or excessive fees charged to borrowers beyond the
                    legitimate and necessary costs associated with the loan. These fees are often considered unnecessary, inflated, or non-transparent, and they can significantly increase the overall
                    cost of borrowing.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Junk fees can include charges for admin tasks, document preparation, application processing, rate lock extensions, courier services, or excessive underwriting fees.
                    Essentially, they are fees that seem excessive or unrelated to the actual cost of providing the loan. They can significantly increase the closing costs associated with a mortgage loan,
                    adding hundreds or even thousands of dollars to the total amount the borrower needs to pay at closing.</p>
                    <p className="mt-2">Because junk fees are often not clearly disclosed or explained to borrowers during the loan application process, it can be difficult for borrowers to understand the
                    true cost of the loan and compare offers from other lenders. To avoid paying excessive fees, borrowers should carefully review the Loan Estimate and Closing Disclosure provided by the lender.
                    These documents outline the estimated costs associated with the loan, including itemized fees. Asking questions and seeking clarification from the lender or loan officer can help identify any
                    potential junk fees and negotiate their removal or reduction.</p>
                </section>
            </div>
        </div>
    )
}
