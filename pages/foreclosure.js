import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function foreclosure() {
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
                    <span className="text-gray-700">Foreclosure</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Foreclosure</h1>
                    <p className="mt-4">Foreclosure is a legal process where a lender seizes and sells a property to recover the outstanding balance on a mortgage loan when the borrower fails to make the required mortgage payments. It is typically
                    initiated by the lender when the borrower is in default, meaning they have missed multiple mortgage payments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The specific number of missed payments required to initiate foreclosure can vary based on local laws and the terms of the mortgage contract. Before initiating foreclosure proceedings, the lender typically sends
                    a formal notice of default to the borrower. This notice informs the borrower about the delinquency, the amount owed, and provides a specific time period the borrower has to take corrective action to prevent foreclosure.</p>
                    <p className="mt-2">If the borrower fails to resolve the delinquency or reach a foreclosure alternative (such as loan modification or short sale), the lender will file a lawsuit or legal action to obtain a court order to foreclose
                    on the property. Once the court grants the foreclosure order, the property is typically sold at a public auction to recover the outstanding loan balance. If the property fails to sell at auction, it becomes bank-owned or real estate
                    owned (REO) and may be listed for sale by the lender. After the foreclosure sale, the new owner or lender may need to initiate an eviction process to remove any occupants from the property who have not voluntarily vacated.</p>
                    <p className="mt-2">Foreclosure has a significant negative impact on the borrower&apos;s credit history and credit score. It can make it challenging to obtain future loans and credit at favorable terms for several years.</p>
                </section>
            </div>
        </div>
    )
}