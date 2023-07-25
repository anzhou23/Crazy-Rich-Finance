import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function credit() {
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
                    <span className="text-gray-700">Credit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Credit</h1>
                    <p className="mt-4">Credit is the ability to borrow money or access goods and services with the promise of repayment in the future. It allows individuals, businesses, and governments to obtain funds
                    or resources they currently do not possess. Credit plays a crucial role in the economy, as it enables people to make purchases and investments even when they do not have enough cash on hand.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When someone is granted credit, they are essentially borrowing money from a lender or creditor. This borrowed amount is often referred to as a loan or credit line and will incur
                    interest charges and fees, which is the cost of borrowing money. The maximum amount of credit a lender is willing to extend to a borrower is known as the credit limit, typically based on the borrower&apos;s
                    creditworthiness and ability to repay.</p>
                    <p className="mt-2">Credit activity, such as borrowing, repayment, and credit utilization, is reported to credit bureaus. These bureaus compile credit reports that reflect an individual&apos;s credit history.
                    Lenders and creditors use these reports to assess the borrower&apos;s creditworthiness. Creditworthiness affects various financial decisions, including loan approvals, interest rates, insurance premiums,
                    rental agreements, and employment opportunities.</p>
                    <p className="mt-2">A credit score is calculated based on various factors, including payment history, credit utilization, length of credit history, new credit, and types of credit used. Properly managing credit
                    is essential for maintaining a good credit score and financial well-being, including making timely repayments, using credit responsibly, and avoiding excessive debt.</p>
                    <p className="mt-2">There are different types of credit, such as consumer credit (used for personal expenses), business credit (used for business operations), and government credit (used by governments to
                    fund projects or services). Credit agreements specify the terms and conditions under which credit is granted. These terms include the interest rate, repayment schedule, and any penalties for late payments.</p>
                    <p className="mt-2">Credit cards are a common form of credit individuals use to make purchases. Cardholders can use credit cards up to a predetermined credit limit and must repay the borrowed amount, along
                    with any interest or fees, by the due date.</p>
                </section>
            </div>
        </div>
    )
}
