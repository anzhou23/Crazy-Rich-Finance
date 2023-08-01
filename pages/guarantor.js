import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function guarantor() {
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
                    <span className="text-gray-700">Guarantor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Guarantor</h1>
                    <p className="mt-4">A guarantor, also known as a cosigner, is a person or entity who agrees to take on the responsibility of paying off a debt or fulfilling a financial obligation
                    if the primary borrower or debtor is unable to do so. By acting as a guarantor, this individual provides an additional level of security to the lender, assuring that the debt will
                    be repaid even if the original borrower defaults.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When someone becomes a guarantor, they essentially promise to cover the debt or financial obligation if the primary borrower fails to meet their obligations. This
                    could apply to various types of loans, such as personal loans, mortgages, student loans, or business loans.</p>
                    <p className="mt-2">Lenders often require a guarantor when the primary borrower has a limited credit history, poor credit score, or insufficient income to qualify for the loan on their own.
                    The guarantor typically needs to have a strong credit history and the financial capacity to fulfill the commitment if needed. Their agreement to take on the debt is a legally binding
                    commitment. If the primary borrower defaults, the lender can pursue the guarantor to collect the outstanding balance.</p>
                    <p className="mt-2">While being a guarantor can help someone secure a loan they wouldn&apos;t otherwise qualify for, it also comes with significant risks. If the primary borrower defaults, the
                    guarantor&apos;s credit score may get negatively affected, and they may face financial consequences and collection efforts from the lender. In some cases, a guarantor may be released from
                    their obligations after the primary borrower demonstrates a positive payment history or meets certain criteria outlined in the loan agreement.</p>
                </section>
            </div>
        </div>
    )
}