import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function forbearance() {
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
                    <span className="text-gray-700">Forbearance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Forbearance</h1>
                    <p className="mt-4">Forbearance is a temporary arrangement between a lender and a borrower that allows the borrower to pause or reduce their loan payments for a
                    specified period. It is typically offered during times of financial hardship or unexpected circumstances when the borrower can&apos;t make their regular loan payments.
                    The forbearance agreement is an alternative to defaulting on the loan or facing foreclosure, and it provides temporary relief to the borrower.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During the forbearance period, the borrower is not required to make full or partial payments on the loan. However, interest may continue to accrue during
                    this time, depending on the forbearance agreement terms. The missed payments usually get added to the end of the loan term or repaid later through an agreed-upon plan.</p>
                    <p className="mt-2">Forbearance is commonly used for various types of loans, such as mortgage loans, student loans, and auto loans. It is particularly relevant during economic
                    downturns, natural disasters, or personal financial crises, when borrowers may experience a loss of income or increased financial burdens.</p>
                    <p className="mt-2">Note that forbearance is not loan forgiveness; the borrower is still responsible for repaying the missed payments after the forbearance period ends. Therefore,
                    borrowers should carefully review the forbearance agreement terms with their lenders to understand the impact on their loan, including the length of the forbearance period, the
                    repayment terms, and any additional costs or fees.</p>
                    <p className="mt-2">Forbearance can provide temporary relief to borrowers facing financial difficulties, allowing them to avoid defaulting on their loans and protecting their
                    credit scores. However, borrowers should communicate with their lenders first and explore all available options before entering into a forbearance agreement to ensure that it is
                    the right solution for them.</p>
                </section>
            </div>
        </div>
    )
}