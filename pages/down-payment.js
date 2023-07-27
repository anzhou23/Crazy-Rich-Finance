import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function downPayment() {
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
                    <span className="text-gray-700">Down Payment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Down Payment</h1>
                    <p className="mt-4">A down payment is a payment made upfront when purchasing a big-ticket item, such as a house or a car. It represents a percentage of the total purchase
                    price and is typically paid in cash or through a certified check. The purpose of a down payment is to reduce the amount of money borrowed or financed for the purchase,
                    thereby lowering the overall loan amount or monthly payments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A down payment reduces the loan amount required to finance a purchase. The more substantial the down payment, the smaller the loan needed, resulting in lower
                    monthly payments and potentially lower interest costs.</p>
                    <p className="mt-2">For example, when buying a house, a down payment is a portion of the property&apos;s total price that the buyer pays to the seller or lender. The remaining
                    balance is covered by a mortgage loan. It is an upfront cost for the buyer and is separate from other closing costs associated with the purchase, such as title insurance, appraisal
                    fees, and property taxes. It is typically paid at the closing of the purchase transaction, along with other required funds.</p>
                    <p className="mt-2">Many lenders require a minimum down payment percentage for home purchases. The percentage varies depending on the loan type and the buyer&apos;s financial
                    situation. In the United States, some government-backed loans, like FHA loans, may have lower down payment requirements for eligible borrowers.</p>
                    <p className="mt-2">Making a down payment builds equity in the purchased asset. Equity represents the portion of the asset&apos;s value owned by the buyer, not financed through a
                    loan. A substantial down payment can demonstrate to lenders that the buyer is financially responsible and capable of managing mortgage payments.</p>
                </section>
            </div>
        </div>
    )
}
