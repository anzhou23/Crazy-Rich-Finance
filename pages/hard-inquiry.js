import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hardInquiry() {
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
                    <span className="text-gray-700">Hard Inquiry</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hard Inquiry</h1>
                    <p className="mt-4">A hard inquiry, also known as a hard credit check or hard pull, occurs when a lender or creditor requests to review your credit report to assess your
                    creditworthiness. Hard inquiries typically happen when you apply for new credit, such as a credit card, personal loan, or mortgage. The purpose is for the lender to determine
                    your credit risk and decide whether to approve your application.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Hard inquiries can have a temporary negative impact on your credit score. Each hard inquiry typically results in a small decrease in the credit score, usually up to
                    5 points. The impact varies depending on your overall credit history and other factors.</p>
                    <p className="mt-2"> If you are shopping for the best loan or credit terms, multiple hard inquiries from similar types of lenders within a short timeframe (usually 14 to 45 days, depending on
                    the credit scoring model) are typically treated as one inquiry. This practice allows you to compare loan offers without significantly damaging your credit.</p>
                    <p className="mt-2">While hard inquiries have a temporary effect on credit scores, they are just one factor lenders consider when evaluating creditworthiness. Other factors, such as payment history,
                    credit utilization, and length of credit history, also play significant roles in the credit approval process.</p>
                    <p className="mt-2">It is essential to be mindful of the number of hard inquiries you accumulate, as excessive inquiries within a short period can signal higher credit risk to potential lenders. To
                    maintain a healthy credit score, it&apos;s best to apply for new credit only when necessary and to monitor credit reports regularly to ensure accuracy and detect any unauthorized inquiries.</p>
                </section>
            </div>
        </div>
    )
}