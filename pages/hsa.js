import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hsa() {
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
                    <span className="text-gray-700">Health Savings Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Health Savings Account</h1>
                    <p className="mt-4">A Health Savings Account (HSA) is a type of tax-advantaged savings account that allows individuals to save money specifically for medical expenses. It is designed to
                    be used in conjunction with a high-deductible health insurance plan.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">To open and contribute to an HSA, you must be enrolled in a high-deductible health insurance plan that meets the criteria set by the IRS. This means your insurance plan must have a
                    minimum deductible amount and a maximum out-of-pocket limit. Not all health insurance plans qualify for an HSA, so make sure to check if you are eligible.</p>
                    <p className="mt-2">Contributions to an HSA are tax-deductible, and the earnings grow tax-free, while qualified medical expense withdrawals are also tax-free, making HSAs a triple tax-advantaged savings
                    option. You can contribute to your HSA on a pre-tax basis, meaning the contributions are deducted from your paycheck before taxes are applied. Alternatively, you can make after-tax contributions
                    and claim a tax deduction when filing your annual tax return. The IRS sets annual contribution limits for HSAs, which can vary depending on whether you have individual or family coverage.</p>
                    <p className="mt-2">HSAs can be used to pay for a wide range of qualified medical expenses, including doctor visits, prescription medications, hospital stays, dental and vision care, and certain medical equipment.
                    The IRS provides a detailed list of eligible expenses, and it&apos;s important to keep records and receipts to substantiate the withdrawals made from your HSA.</p>
                    <p className="mt-2">HSAs are portable, which means the account stays with you even if you change jobs or health insurance plans. The funds in the account roll over from year to year, and there is no time limit
                    on when you must use the money. This allows you to accumulate savings over time and use them for future medical expenses.</p>
                    <p className="mt-2">Some HSA providers offer the option to invest the funds in your account once a certain balance threshold is reached. This allows you to potentially grow your savings through investment returns, but
                    it may come with risks and fees. HSAs can also serve as a retirement savings tool. Once you reach the age of 65, you can withdraw funds from your HSA for any purpose without penalty (although non-medical withdrawals
                    are subject to income tax).</p>
                </section>
            </div>
        </div>
    )
}
