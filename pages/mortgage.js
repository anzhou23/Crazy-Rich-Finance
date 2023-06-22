import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function mortgage() {
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
                    <span className="text-gray-700">Mortgage</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mortgage</h1>
                    <p className="mt-4">A mortgage is a type of loan specifically designed for purchasing or refinancing real estate. It is typically used by individuals or households to finance the purchase of a
                    home, where the property itself serves as collateral for the loan.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Mortgages provide individuals with a way to finance their home purchase. Rather than paying the full purchase price upfront, borrowers can secure a mortgage from a lender, which
                    covers a significant portion of the property&apos;s cost. The borrower then repays the loan over time, typically in monthly installments, including both principal (the amount borrowed) and interest
                    (the cost of borrowing).</p>
                    <p className="mt-2">Using the purchased property as collateral allows lenders to mitigate their risk if the borrower fails to repay the loan as agreed. In the event of default, the lender may initiate
                    foreclosure proceedings to recover the outstanding debt.</p>
                    <p className="mt-2">Mortgages come with specific terms and conditions, including the loan duration (such as 15 or 30 years), interest rate type (fixed or adjustable), and repayment structure. The interest
                    rate determines the cost of borrowing, and borrowers may have the option to choose between fixed rates, which remain constant throughout the loan term, or adjustable rates, which can change periodically
                    based on market conditions.</p>
                    <p className="mt-2">When obtaining a mortgage, borrowers are typically required to make a down payment, which is an upfront payment made towards the purchase price of the property. The down payment amount
                    is usually a percentage of the total purchase price and can vary depending on factors such as loan type, lender requirements, and borrower qualifications. A higher down payment can result in a lower loan
                    amount and potentially more favorable loan terms.</p>
                    <p className="mt-2">Depending on the terms of the mortgage, borrowers may have the option to make additional payments or pay off the loan early without incurring prepayment penalties. Additionally, borrowers
                    may choose to refinance their mortgage at a later stage to take advantage of lower interest rates, change the loan term, or access equity in the property. Refinancing involves obtaining a new loan to replace
                    the existing mortgage.</p>
                </section>
            </div>
        </div>
    )
}
