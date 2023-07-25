import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function consumerCredit() {
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
                    <span className="text-gray-700">Consumer Credit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consumer Credit</h1>
                    <p className="mt-4">Consumer credit is a form of borrowing where individuals can purchase goods and services on credit, with the promise to repay the borrowed amount, typically with interest,
                    over time. It provides consumers with the ability to make immediate purchases even if they don&apos;t have sufficient cash on hand. Consumer credit plays a crucial role in driving consumption and
                    economic activity, as it enables people to access funds for various purposes, such as buying a car, financing education, or covering unexpected expenses.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Common types of consumer credit include credit cards, personal loans, auto loans, and installment plans. When a consumer obtains credit, they enter into a contractual agreement
                    with the lender, outlining the repayment terms, interest rates, and any applicable fees. The lender assesses the borrower&apos;s creditworthiness, which includes factors such as credit history,
                    income, and debt-to-income ratio, to determine the interest rate and credit limit.</p>
                    <p className="mt-2">Consumer credit is subject to various regulations to protect consumers from unfair practices and ensure transparency in lending. The interest rates and terms must be disclosed
                    clearly, and borrowers have the right to dispute inaccurate information on their credit reports.</p>
                    <p className="mt-2">Consumers should use credit responsibly and avoid accumulating excessive debt. Managing credit wisely involves making timely payments, keeping credit utilization low, and being
                    mindful of the overall debt burden. Failing to repay consumer credit obligations can negatively impact the borrower&apos;s credit score, making it harder to secure future credit and potentially
                    lead to higher interest rates on future loans. On the other hand, using credit responsibly can help individuals build a positive credit history, achieve financial goals, and obtain better credit terms
                    in the future.</p>
                </section>
            </div>
        </div>
    )
}
