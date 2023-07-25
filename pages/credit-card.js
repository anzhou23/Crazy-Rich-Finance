import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function creditScore() {
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
                    <span className="text-gray-700">Credit Card</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Credit Card</h1>
                    <p className="mt-4">A credit card allows people to make purchases on credit, meaning they can borrow money from a card issuer up to a predetermined credit limit. Unlike a debit card, which
                    deducts funds directly from a checking account, a credit card does not require immediate payment at the time of purchase. Instead, cardholders receive a monthly statement detailing their
                    transactions and the amount owed, which must be paid by a specific due date.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Each credit card comes with a credit limit, which is the maximum amount of money the cardholder can borrow from the card issuer. The credit limit is determined by the lender
                    based on the applicant&apos;s creditworthiness, income, and other financial factors.</p>
                    <p className="mt-2">Cardholders receive monthly statements with a detailed list of all transactions made with the credit card during that billing cycle, along with the minimum payment due
                    and the due date. The statement also includes the total outstanding balance and the available credit remaining. While cardholders do not have to pay the full balance, they are typically required
                    to make a minimum payment by the due date. The minimum payment is a small percentage of the total balance, but paying only the minimum can result in accruing high-interest charges.</p>
                    <p className="mt-2">If the cardholder does not pay the full outstanding balance by the due date, the remaining amount incurs interest charges. Interest is the cost of borrowing money from the
                    card issuer and is calculated based on the annual percentage rate (APR) specified in the credit card agreement.</p>
                    <p className="mt-2">Proper use of a credit card, including making timely payments and keeping credit utilization low, can build the cardholder&apos;s credit score. Conversely, missing payments or
                    maxing out the credit limit can hurt the credit score. To avoid accumulating excessive debt and managing credit responsibly, it&apos;s crucial to pay all bills on time, keep credit utilization low,
                    and use credit cards for expenses one can afford to repay.</p>
                    <p className="mt-2">There are various types of credit cards available, including rewards cards that offer cashback, points, or travel benefits for eligible purchases. Other types include low-interest
                    cards, balance transfer cards, and secured cards, which require a refundable security deposit as collateral.</p>
                    <p className="mt-2">Credit cards come with security features such as chip technology and contactless payments to protect against fraud. Cardholders are typically not liable for unauthorized charges if
                    promptly reported to the card issuer.</p>
                </section>
            </div>
        </div>
    )
}
