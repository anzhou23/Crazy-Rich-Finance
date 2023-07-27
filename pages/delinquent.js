import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function delinquent() {
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
                    <span className="text-gray-700">Delinquent</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Delinquent</h1>
                    <p className="mt-4">Delinquent refers to the failure to fulfill a financial obligation or meet a payment deadline on time. It is commonly used in the context of loans, bills, or other
                    financial responsibilities. When a person or entity becomes delinquent, it means they have not made the required payment within the specified timeframe, leading to a past-due status.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">For example, if you fails to make a loan payment on or before the due date, the loan is considered delinquent. Similarly, if you do not make the minimum payment on
                    your credit card debt by the designated date, your credit card account becomes delinquent.</p>
                    <p className="mt-2">Being delinquent on financial obligations can have negative consequences, such as late fees, penalties, and a negative impact on one&apos;s credit score. Lenders and
                    creditors may report delinquencies to credit bureaus, affecting your credit history and making it harder to obtain credit in the future.</p>
                    <p className="mt-2">It&apos;s essential for individuals and businesses to manage their financial responsibilities responsibly and make timely payments to avoid being classified as delinquent.
                    If you find yourself in a situation where you may miss a payment, it is best to communicate with the creditor or lender to find a solution and avoid delinquency.</p>
                </section>
            </div>
        </div>
    )
}
