import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function flexibleSpendingAccount() {
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
                    <span className="text-gray-700">Flexible Spending Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Flexible Spending Account</h1>
                    <p className="mt-4">A Flexible Spending Account (FSA) allows individuals to set aside pre-tax dollars to pay for certain qualified expenses. It is offered by some employers as part of their employee benefits package.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">With an FSA, employees can contribute a portion of their salary to the account before taxes are deducted. The contributions are deducted automatically from the employee&apos;s paycheck, reducing
                     their taxable income for the year, and thus resulting in potential tax savings.</p>
                    <p className="mt-2">Healthcare FSAs can be used for various eligible medical, dental, and vision expenses not covered by insurance, such as deductibles, copayments, prescription medications, and certain medical equipment. Dependent
                    care FSAs can be used for expenses related to the care of dependent children, such as daycare or after-school programs.</p>
                    <p className="mt-2">FSAs typically operate on a &quot;use-it-or-lose-it&quot; basis. This means that funds contributed to the account must be used within the plan year or a grace period specified by the employer. Any remaining balance
                    at the end of the plan year is forfeited, although some employers may offer a limited rollover or grace period to use the funds.</p>
                    <p className="mt-2">The IRS sets annual contribution limits for FSAs. These limits can vary each year and depend on the type of FSA. Generally, healthcare FSAs have higher contribution limits compared to dependent care FSAs.</p>
                    <p className="mt-2">When you incur an eligible expense, you can submit a claim to your FSA administrator for reimbursement. This typically involves providing documentation, such as receipts or invoices, to prove the expense and its
                    eligibility. The FSA administrator then processes the claim and reimburses you from the funds in your account. Additionally, Many employers provide FSA participants with a debit card linked to their FSA account. This card can be used
                    to pay for eligible expenses directly at the point of sale, making it more convenient to access funds in the account.</p>
                </section>
            </div>
        </div>
    )
}