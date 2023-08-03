import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function incomeTax() {
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
                    <span className="text-gray-700">Income Tax</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Income Tax</h1>
                    <p className="mt-4">Income tax is levied by the government on an individual&apos;s or entity&apos;s earnings or income. It is a key source of revenue for governments and is
                    used to fund public services and programs such as education, healthcare, infrastructure, and social welfare. Income tax is typically calculated based on a person&apos;s total
                    income, which can come from various sources such as wages, salaries, investments, and business profits.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Income tax is usually calculated on the taxable income, which is the amount left after deducting certain allowable expenses, exemptions, and deductions from
                    the total income. Income tax rates are often structured progressively, where higher income levels are subject to higher tax rates. Different tax brackets apply to different income ranges.</p>
                    <p className="mt-2">Individuals and businesses are required to file an income tax return annually, reporting their income, deductions, and credits. The tax return helps determine
                    the amount of tax owed or the potential refund. Many employees have income tax withheld from their paychecks by their employers. This is known as tax withholding and spreads out
                    the tax liability over the course of the year.</p>
                    <p className="mt-2">Taxpayers may be eligible for various deductions and tax credits that reduce their overall tax liability. Deductions lower the taxable income, while credits
                    directly reduce the amount of tax owed. Different types of income may be subject to different tax rates or rules. For example, investment income (capital gains, dividends) may
                    have different tax treatment than earned income (wages, salaries).</p>
                    <p className="mt-2">Income tax returns are typically due by a specific deadline, often April 15th in many countries. Failure to file on time may result in penalties and interest.
                    Countries can have different tax systems, such as flat tax rates, progressive tax rates, or regressive tax rates, which impact how income tax is calculated. Certain events, such as
                    selling assets or receiving gifts, can trigger a tax liability. These are known as taxable events.</p>
                </section>
            </div>
        </div>
    )
}