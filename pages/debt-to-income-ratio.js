import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function debtToIncomeRatio() {
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
                    <span className="text-gray-700">Debt-to-Income Ratio</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Debt-to-Income Ratio</h1>
                    <p className="mt-4">Debt-to-Income (DTI) ratio compares an individual or household&apos;s total debt to their gross income. Lenders and financial institutions use DTI to assess a borrower&apos;s ability to manage and repay
                    debt obligations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The DTI ratio is calculated by dividing the total monthly debt payments by the gross monthly income. The formula is: DTI Ratio = (Total Monthly Debt Payments / Gross Monthly Income) x 100. Total monthly debt payments
                    are typically include recurring obligations such as mortgage or rent payments, credit card debt, student loans, car loans, and other outstanding debts.</p>
                    <p className="mt-2">There are 2 main types of DTI ratios: the front-end ratio and the back-end ratio. The front-end ratio focuses only on housing-related expenses, including mortgage payments, property taxes, and insurance. The back-end
                    ratio takes into account all recurring debts, including housing expenses.</p>
                    <p className="mt-2">Lenders use the DTI ratio to assess a borrower&apos;s ability to handle additional debt. A lower DTI ratio indicates that a borrower has a lower level of debt relative to their income, suggesting they have more financial
                    capacity to take on additional debt. A high DTI ratio may result in loan denial or require additional documentation and explanation from the borrower to demonstrate their ability to handle the loan payments.</p>
                    <p className="mt-2">There is no universal DTI ratio limit that applies to all lenders, as different institutions may have varying requirements. However, a commonly used benchmark is a DTI ratio of 43% or lower for qualified mortgages under
                    the guidelines set by the Consumer Financial Protection Bureau (CFPB).</p>
                </section>
            </div>
        </div>
    )
}
