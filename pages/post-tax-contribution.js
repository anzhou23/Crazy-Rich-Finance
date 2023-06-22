import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function postTaxContribution() {
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
                    <span className="text-gray-700">Post-Tax Contribution</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Post-Tax Contribution</h1>
                    <p className="mt-4">Post-tax contributions are funds that are deposited into a retirement account after income taxes have been paid on them.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Unlike pre-tax contributions, which are made with pre-tax income and reduce your taxable income for the year, post-tax contributions are made with income that has already
                    been taxed. These contributions are typically made to Roth retirement accounts, such as a Roth IRA or Roth 401(k).</p>
                    <p className="mt-2">The advantage of making post-tax contributions is that qualified withdrawals from Roth accounts are tax-free in retirement. This means that the investment growth and earnings
                    on those contributions can be withdrawn without incurring additional taxes, provided certain conditions are met. While post-tax contributions do not provide an immediate tax benefit like pre-tax
                    contributions, they can offer tax advantages in the future when you withdraw the funds in retirement.</p>
                </section>
            </div>
        </div>
    )
}