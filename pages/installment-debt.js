import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function installmentDebt() {
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
                    <span className="text-gray-700">Installment Debt</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Installment Debt</h1>
                    <p className="mt-4">Installment debt is a type of loan or credit arrangement where a borrower receives a specific amount of money from a lender and agrees to repay the loan over a set
                    period through regular payments, known as installments. Each installment typically consists of both principal (the original amount borrowed) and interest (the cost of borrowing).
                    Installment debt is commonly used for purchasing vehicles, financing education, and buying durable goods.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Installment debt is typically established through a legal agreement that outlines the terms and conditions of the loan, including the repayment schedule, interest rate,
                    and any applicable fees. In most cases, installment debt comes with a fixed interest rate, meaning the interest rate remains constant over the loan&apos;s lifetime. This allows borrowers to
                    accurately budget for their monthly payments. Common examples of installment debt include auto loans, mortgages, personal loans, and student loans.</p>
                    <p className="mt-2">Secured loans are backed by collateral, such as a car or property, which the lender can repossess if the borrower defaults on payments. Unsecured loans, on the other hand,
                    do not require collateral but may have higher interest rates.</p>
                    <p className="mt-2">Installment debt usually follows an amortization schedule that outlines each payment&apos;s allocation toward reducing the principal balance and paying the interest.
                    Initially, a larger portion of each payment goes toward interest, while over time, more of the payment is applied to reducing the principal. Some installment loans may allow borrowers to
                    make prepayments or pay off the loan early without penalties. This can help borrowers save on interest costs and pay off the debt sooner.</p>
                    <p className="mt-2">Responsible management of installment debt, including making timely payments, can have a positive impact on an individual&apos;s credit score. On-time payments demonstrate
                    creditworthiness and financial responsibility.</p>
                </section>
            </div>
        </div>
    )
}