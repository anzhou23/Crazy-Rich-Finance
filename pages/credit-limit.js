import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function creditLimit() {
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
                    <span className="text-gray-700">Credit Limit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Credit Limit</h1>
                    <p className="mt-4">A credit limit is the maximum amount of money a credit card issuer is willing to extend to a cardholder on a specific credit card account. The credit limit is determined
                    by the card issuer based on various factors, including the cardholder&apos;s creditworthiness, income, credit history, and overall financial profile.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The credit limit represents the total available credit that the cardholder can use for purchases, cash advances, or balance transfers. Credit card issuers assess an
                    applicant&apos;s creditworthiness before approving a credit card and determining the credit limit. Factors such as credit score, credit history, income level, existing debt, and payment history
                    all play a role in this evaluation.</p>
                    <p className="mt-2">Credit limits can vary widely depending on the type of credit card and the individual&apos;s financial situation. Some credit cards may have relatively low credit limits, while
                    others, such as premium or rewards cards, may have higher limits.</p>
                    <p className="mt-2">Credit utilization is the percentage of the credit limit a cardholder uses. For example, if a credit card has a $5,000 credit limit and the cardholder has a current balance of
                    $1,000, the credit utilization rate is 20% ($1,000 / $5,000). Credit bureaus favor lower credit utilization rates, which can positively impact a credit score.</p>
                    <p className="mt-2">As the cardholder makes purchases, the credit limit decreases by the amount charged. Once the cardholder makes payments and reduces the outstanding balance, the available credit
                    increases back up to the credit limit.</p>
                    <p className="mt-2">Credit card issuers may periodically review a cardholder&apos;s account to determine if they qualify for a credit limit increase. This can be based on factors such as consistent
                    on-time payments, an improved credit score, or a higher income.</p>
                    <p className="mt-2">If a cardholder exceeds their credit limit, the issuer may charge an over-the-limit fee. However, regulations now require cardholders to opt-in for this fee to be applied. Many
                    card issuers typically decline transactions that exceed the credit limit to avoid the fee and potential credit score impact.</p>
                </section>
            </div>
        </div>
    )
}
