import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function annualPercentageRate() {
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
                    <Link href="/" class="text-green-400 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-400 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Annual Percentage Rate</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Annual Percentage Rate</h1>
                    <p className="mt-4">Annual Percentage Rate (APR) represents the annualized cost of borrowing, including both the interest rate and any additional fees or charges associated with a loan or credit product, such as upfront fees,
                    points, or closing costs. It is expressed as a percentage and helps borrowers compare the true cost of different financial offers.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Lenders are required by law in many countries to disclose the APR to borrowers so they can understand the complete cost of credit. When comparing loan offers, borrowers should consider the APR rather than just the nominal
                    interest rate, as it gives a more comprehensive picture of the total borrowing expenses.</p>
                    <p className="mt-2">APRs may vary depending on the type of loan or credit product. For example, mortgages, personal loans, credit cards, and auto loans may have different APR structures due to the specific terms and conditions associated with
                    each type of financing.</p>
                    <p className="mt-2">APR does not include compounding, which is the effect of earning or paying interest on previously accrued interest. Instead, APR represents a simple interest rate that allows for easier comparison between different loan offers.</p>
                </section>
            </div>
        </div>
    )
}
