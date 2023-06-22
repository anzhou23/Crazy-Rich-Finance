import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function traditionalIRA() {
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
                    <span className="text-gray-700">Traditional IRA</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Traditional IRA</h1>
                    <p className="mt-4">A traditional Individual Retirement Account (IRA) is a retirement savings account that allows individuals to contribute pre-tax income to the account, where it can grow tax-deferred until
                    withdrawals are made during retirement.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Contributions made to a traditional IRA are often tax-deductible, meaning they reduce the individual&apos;s taxable income in the year of contribution by the amount contributed to the IRA.
                    Investment earnings, such as interest, dividends, or capital gains, in a traditional IRA are not taxed immediately. Instead, when individuals retire and start withdrawing funds from their traditional IRA, the
                    withdrawals are treated as ordinary income and are subject to income tax at the individual&apos;s applicable tax rate. It&apos;s important to plan for the potential tax implications during retirement based on the
                    expected income and expenses.</p>
                    <p className="mt-2">Traditional IRAs have a requirement known as Required Minimum Distributions (RMDs). Starting at age 72 (as of 2022), individuals must withdraw a certain minimum amount from their account each year. These withdrawals are subject to income
          tax, and failure to take the RMD can result in penalties.</p>
                    <p className="mt-2">Withdrawals made from a traditional IRA before the age of 59½ are generally subject to an early withdrawal penalty of 10% in addition to income tax. However, there are some exceptions to the penalty, such as for certain qualified medical expenses,
          higher education expenses, or first-time homebuyers.</p>
                    <p className="mt-2"></p>
                    <p className="mt-2">Traditional IRAs have annual contribution limits set by the Internal Revenue Service (IRS). The contribution limit for 2023 is $6,500 if you are under the age of 50, with an additional catch-up contribution of $1,000 for individuals aged 50 and above. Eligibility to contribute to a traditional IRA depends on several factors, including income and participation in an employer-sponsored retirement plan.</p>
                </section>
            </div>
        </div>
    )
}