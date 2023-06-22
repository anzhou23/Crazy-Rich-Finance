import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function taxCredit() {
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
                    <span className="text-gray-700">Tax Credit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tax Credit</h1>
                    <p className="mt-4">A tax credit is a financial incentive provided by the government that directly reduces the amount of tax you owe. It is a dollar-for-dollar reduction in your tax liability,
                    meaning that each dollar of tax credit reduces your tax bill by an equivalent amount.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Unlike tax deductions, which reduce your taxable income, tax credits directly reduce the amount of tax you owe. For example, if you have a $1,000 tax credit and your tax liability
                    is $5,000, the credit would reduce your tax bill to $4,000. Tax credits can result in significant tax savings, as they directly reduce your tax liability. Depending on the specific credit and your circumstances,
                    the savings can vary from a few hundred dollars to several thousand dollars. Tax credits can be offered by federal, state, and local governments. Each government entity may have its own set of credits.</p>
                    <p className="mt-2">There are different types of tax credits available, covering a wide range of expenses and situations. Some common examples include the Child Tax Credit, Earned Income Tax Credit, Education
                    Tax Credits, and Renewable Energy Tax Credits. Each credit has specific eligibility requirements and limitations, such as income limits, family size, or educational qualifications.</p>
                    <p className="mt-2">There are 2 types of tax credit. A refundable tax credit means that if the credit amount exceeds your tax liability, you can receive the excess as a refund. Non-refundable tax
                    credits can only reduce your tax liability to zero but cannot result in a refund.</p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}