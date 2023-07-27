import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function equity() {
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
                    <span className="text-gray-700">Equity</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Equity</h1>
                    <p className="mt-4">Equity is the ownership interest or claim individuals or entities have in an asset or business. It represents the residual value of an asset after deducting liabilities.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Equity represents ownership in a company or the value of an individual&apos;s ownership stake in an asset. For example, if you own shares of a publicly traded company, you
                    have equity in that company proportional to the number of shares you hold. The value of equity can fluctuate based on the company&apos;s performance, market conditions, and investor sentiment.</p>
                    <p className="mt-2">Home equity specifically is the value of ownership a homeowner has in their property. It is calculated by subtracting the outstanding mortgage or any other liens on the property
                    from its market value. Home equity can increase over time as the property appreciates in value or as the homeowner pays down the mortgage.</p>
                    <p className="mt-2">Net equity is the value of an individual&apos;s or company&apos;s assets after deducting liabilities. It indicates the overall financial health or net worth. Net equity is
                    calculated by subtracting total liabilities, such as debts and obligations, from total assets.</p>
                    <p className="mt-2">Social equity relates to fairness and justice in society. It focuses on equal access to opportunities, resources, and benefits for all individuals, regardless of their background
                    or circumstances.</p>
                </section>
            </div>
        </div>
    )
}