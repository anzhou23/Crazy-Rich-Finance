import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function interestRates() {
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
                    <span className="text-gray-700">Interest Rates</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Interest Rates</h1>
                    <p className="mt-4">An interest rate refers to the percentage of the loan amount or investment principal that is charged or earned over a specific period. It represents the cost of
                    borrowing money or the return earned on an investment.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When you borrow money, the interest rate is the additional amount you must pay back to the lender in addition to the original loan amount. It is a fee charged for
                    the use of funds. Interest rates can vary based on factors such as the borrower&apos;s creditworthiness, the type and term of the loan, prevailing market conditions, and the lender&apos;s policies.</p>
                    <p className="mt-2">From an investment perspective, the interest rate represents the return earned on the amount invested. It is the compensation received for lending money or investing in financial
                    products such as bonds, certificates of deposit (CDs), or savings accounts. Higher interest rates typically indicate a higher return on investment.</p>
                    <p className="mt-2">There are various types of interest rates. A fixed interest rate remains constant throughout the loan or investment term, providing stability in payment or return amounts. On the
                    other hand, a variable interest rate can change over time, usually tied to a benchmark rate such as the prime rate or the central bank&apos;s policy rate.</p>
                    <p className="mt-2">Interest rates play a crucial role in the economy and are influenced by central banks&apos; monetary policy. Central banks adjust interest rates to manage inflation, stimulate economic
                    growth, control borrowing and spending, and promote price stability. Changes in interest rates can impact borrowing costs, consumer spending, business investment, and overall economic activity. Lower
                    interest rates can encourage borrowing, stimulate economic activity, and make loans more affordable, while higher interest rates can slow borrowing and control inflation but may increase borrowing costs.</p>
                </section>
            </div>
        </div>
    )
}