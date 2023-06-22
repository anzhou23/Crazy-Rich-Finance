import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function taxDeferred() {
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
                    <span className="text-gray-700">Tax-Deferred</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tax-Deferred</h1>
                    <p className="mt-4">Tax-deferred refers to a financial arrangement or investment account where taxes on income, gains, or contributions are postponed until a later date. In a tax-deferred account,
                    such as a retirement account or certain annuities, individuals can contribute pre-tax income or make tax-deductible contributions, allowing them to defer paying taxes on that income until they
                    withdraw the funds in the future.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Contributions made to tax-deferred accounts are typically made with pre-tax income, meaning they are deducted from the individual&apos;s taxable income for the year. The investment
                    earnings and capital gains generated within a tax-deferred account can grow and compound over time, allowing the investments to potentially grow faster than if they were subject to annual taxation.</p>
                    <p className="mt-2">While taxes are deferred, they are not waived entirely. Individuals will eventually have to pay taxes on the contributions and earnings when they withdraw the funds from the tax-deferred
                    account. Withdrawals are typically subject to income tax at the individual&apos;s tax rate at the time of withdrawal.</p>
                    <p className="mt-2">Tax-deferred accounts are commonly associated with retirement savings like Traditional IRAs, 401(k) plans, 403(b) plans, and deferred annuities. The tax-deferred status is maintained until
                    a certain age, typically 72 years old. At that point, individuals are required to start taking withdrawals, known as Required Minimum Distributions (RMDs), and pay taxes on those distributions. However,
                    tax-deferred arrangements can also apply to other financial products or investments, such as certain annuities or specific educational savings accounts like 529 plans.</p>
                </section>
            </div>
        </div>
    )
}
