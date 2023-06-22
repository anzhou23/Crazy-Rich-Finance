import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function personalLoan() {
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
                    <span className="text-gray-700">Personal Loan</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Personal Loan</h1>
                    <p className="mt-4">A personal loan is a type of loan that individuals can obtain from banks, credit unions, or online lenders to meet their personal financial needs. It is typically an unsecured loan, meaning it
                    does not require collateral, and the borrower receives a lump sum of money that is repaid over a fixed period with interest.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Personal loans can be used for various purposes, such as consolidating high-interest debt, financing home improvements, funding education expenses, covering medical bills, or taking a vacation.
                    They often come with fixed interest rates, meaning the interest rate remains the same throughout the loan term. This provides predictability and allows borrowers to budget and plan their repayments. Loan terms
                    typically range from one to five years, but can vary depending on the lender and the borrower&apos;s creditworthiness.</p>
                    <p className="mt-2">Lenders assess a borrower&apos;s creditworthiness to determine their eligibility for a personal loan. This evaluation includes factors such as credit score, income, employment history,
                    debt-to-income ratio, and overall financial stability. Borrowers with a higher credit score and a strong financial profile are more likely to qualify for favorable loan terms, including lower interest rates.</p>
                    <p className="mt-2">Personal loans are repaid through regular monthly installments over the loan term. Each installment consists of both principal and interest portions. Borrowers must make timely payments to avoid
                    late fees, penalties, and potential negative impacts on their credit score. Automatic payments or setting up reminders can help borrowers stay on track with their repayments.</p>
                    <p className="mt-2">Borrowers&apos; repayment behavior on personal loans can significantly impact their credit history and credit score. Making timely payments can help build a positive credit history, while late or
                    missed payments can have adverse effects. Responsible management of personal loans can improve creditworthiness and open doors to better loan options and interest rates in the future.</p>
                    <p className="mt-2">Some personal loans may come with origination fees, application fees, or prepayment penalties. Carefully review the terms and conditions of the loan agreement and understand all associated costs
                    before accepting the loan.</p>
                </section>
            </div>
        </div>
    )
}