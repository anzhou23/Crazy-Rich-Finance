import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function preTaxContribution() {
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
                    <span className="text-gray-700">Pre-Tax Contribution</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pre-Tax Contribution</h1>
                    <p className="mt-4">Pre-tax contributions are funds contributed to a retirement account before income taxes are deducted from your paycheck. These contributions are made with pre-tax income,
                    meaning they reduce your taxable income for the year in which they are made.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Pre-tax contributions are commonly made to traditional retirement accounts, such as an employer-sponsored 401(k), Traditional IRA or a Traditional 401(k). The advantage of making
                    pre-tax contributions is that they provide an immediate tax benefit. By reducing your taxable income, you lower the amount of income tax you owe in the current year. This can result in a lower tax
                    bill and potentially increase your tax refund.</p>
                    <p className="mt-2">When you eventually withdraw funds from the pre-tax retirement account in retirement, the withdrawals are subject to income taxes. The idea behind pre-tax contributions is that
                    you will likely be in a lower tax bracket in retirement, so you will pay less in taxes on the withdrawals than you would have during your working years.</p>
                </section>
            </div>
        </div>
    )
}