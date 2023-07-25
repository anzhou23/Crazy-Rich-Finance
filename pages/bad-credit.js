import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function badCredit() {
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
                    <span className="text-gray-700">Bad Credit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bad Credit</h1>
                    <p className="mt-4">Bad credit refers to a low credit score or a negative credit history that indicates a person&apos;s higher risk of defaulting on loans or credit obligations.
                    Credit scores are numerical representations of an individual&apos;s creditworthiness, typically ranging from 300 to 850. A lower credit score, typically below 580-620, is considered
                    bad credit, while higher scores are viewed as good or excellent credit.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Factors that can affect your credit score include your payment history, credit utilization, average age of credit, credit mix, and new credit. For example, late or
                    missed payments can cause some serious damage to your credit. If you use a large portion of your available credit, that can also negatively impact your credit score. Lenders and financial
                    institutions assess creditworthiness based on credit scores, so maintaining a positive credit history and striving for a good credit score is important for obtaining better borrowing
                    opportunities and financial stability.</p>
                    <p className="mt-2">Having bad credit makes it challenging to obtain new credit, such as loans or credit cards, and it may lead to higher interest rates or limited access to financial
                    products. Bad credit can also affect other aspects of life, such as difficulty securing rental housing, higher insurance premiums, and potential challenges in getting a job.</p>
                    <p className="mt-2">Improving bad credit requires responsible financial behavior over time. Timely payments, reducing debt, and managing credit responsibly are essential steps to rebuilding
                    credit. You should regularly monitor credit reports and address any errors or inaccuracies that may be affecting your credit scores.</p>
                </section>
            </div>
        </div>
    )
}
