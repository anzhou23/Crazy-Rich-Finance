import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function defaul() {
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
                    <span className="text-gray-700">Default</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Default</h1>
                    <p className="mt-4">A default refers to the failure to fulfill a legal obligation or financial agreement. It occurs when a borrower or debtor fails to make timely payments or meet the terms and conditions outlined in a loan
                    or agreement, bond, or other contractual arrangement.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the context of debt, default typically refers to the failure to make scheduled payments. This can happen when a borrower misses 1+ payments, fails to pay the required amount, or consistently falls behind on their payment
                    obligations. Defaulting on a debt can have serious consequences, as it indicates a breach of the agreed-upon terms and may result in penalties, fees, and legal actions by the lender or creditor.</p>
                    <p className="mt-2">Defaults can occur in various types of financial agreements, including loans, mortgages, credit cards, bonds, and other forms of debt instruments. The specific terms and conditions, such as grace periods and remedies, are
                    typically outlined in the original agreement.</p>
                    <p className="mt-2">The consequences of default can vary depending on the type of debt and the legal jurisdiction. In many cases, creditors have the right to take actions to recover the outstanding debt, such as initiating collection efforts,
                    imposing penalties, reporting the default to credit bureaus, and even pursuing legal action, including seeking judgments and enforcing collateral or liens.</p>
                    <p className="mt-2">Defaulting on debt can have long-lasting effects on an individual&apos;s credit history and credit score, making it more challenging to secure future loans or credit on favorable terms. It can also harm a borrower&apos;s
                    reputation and trustworthiness in the financial community.</p>
                </section>
            </div>
        </div>
    )
}