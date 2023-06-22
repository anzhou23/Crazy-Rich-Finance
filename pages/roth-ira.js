import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function rothIRA() {
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
                    <span className="text-gray-700">Roth IRA</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Roth IRA</h1>
                    <p className="mt-4">A Roth IRA (Individual Retirement Account) is a type of retirement savings account that offers potential tax advantages to individuals in the U.S. Unlike traditional
                    IRAs, contributions to a Roth IRA are made with after-tax dollars, meaning you&apos;ve already paid taxes on the money before it goes into the account.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The earnings and investment gains within a Roth IRA grow tax-free. You won&apos;t owe any taxes on the capital gains, dividends, or interest earned within the account,
                    as long as you meet certain requirements. You can invest various financial instruments such as stocks, bonds, mutual funds, exchange-traded funds (ETFs), and more, depending on the brokerage
                    or financial institution that holds the account.</p>
                    <p className="mt-2">When you reach the age of 59½ and have held the Roth IRA for at least 5 years, you can make tax-free withdrawals of both your contributions and the accumulated earnings.
                    Unlike traditional IRAs, Roth IRAs are not subject to required minimum distributions (RMDs) during the account holder&apos;s lifetime. This allows you to maintain the funds in the account
                    and potentially pass them on to your heirs without being forced to take withdrawals.</p>
                    <p className="mt-2">While the primary purpose of a Roth IRA is for retirement savings, you can also withdraw your contributions (but not earnings) penalty-free before retirement age for
                    certain qualified reasons, such as a first-time home purchase or qualified education expenses.</p>
                    <p className="mt-2">Roth IRAs have income eligibility restrictions and contribution limits that may vary based on factors such as your marital status and modified adjusted gross income (MAGI).
                    For 2023, the contribution limit is $6,500 if you&apos;re under 50 and $7,500 if you are 50 or older.</p>
                </section>
            </div>
        </div>
    )
}
