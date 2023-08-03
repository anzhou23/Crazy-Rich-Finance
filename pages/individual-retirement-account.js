import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ira() {
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
                    <span className="text-gray-700">Individual Retirement Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Individual Retirement Account</h1>
                    <p className="mt-4">An Individual Retirement Account (IRA) is a type of investment account that provides individuals with a tax-advantaged way to save for retirement.
                    IRAs are established and managed by individuals, allowing them to regularly contribute part their income into the account, with the goal of building a retirement nest
                    egg. IRAs offer various tax benefits, making them a popular choice for retirement planning.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">IRAs provide tax benefits that can help individuals save more effectively for retirement. The 2 main types of IRAs are Traditional IRAs and Roth IRAs:</p>
                    <ul className="list-disc ml-6">
                        <li>Traditional IRA: Contributions to a Traditional IRA are often tax-deductible in the year they are made, lowering your current taxable income. The funds in the
                        account grow tax-deferred until withdrawal, at which point they are subject to ordinary income tax.</li>
                        <li>Roth IRA: Contributions to a Roth IRA are not tax-deductible, but qualified withdrawals, including earnings, are tax-free. This means that when you withdraw funds
                        from a Roth IRA during retirement, you won&apos;t owe any taxes on the withdrawals.</li>
                    </ul>
                    <p className="mt-2">There are annual contribution limits for IRAs set by the Internal Revenue Service (IRS). These limits can change over time and vary based on your age and income.
                    IRAs offer a wide range of investment options, including stocks, bonds, mutual funds, exchange-traded funds (ETFs), real estate, and more. This allows you to create a diversified
                    portfolio tailored to your risk tolerance and financial goals.</p>
                    <p className="mt-2">IRAs are designed for retirement savings, and there are rules regarding when and how you can withdraw funds from the account. Withdrawals from a Traditional IRA
                    are generally subject to income tax, and there may be penalties for early withdrawals before age 59½. Roth IRAs offer more flexibility, allowing you to withdraw your contributions
                    (but not earnings) at any time without penalty. IRAs are portable, meaning you can transfer or roll over funds from one IRA to another without incurring taxes or penalties, as long
                    as you follow the rules and guidelines set by the IRS.</p>
                    <p className="mt-2">Traditional IRAs have RMDs, requiring you to start taking minimum distributions from the account after reaching age 72 (as of 2021). Roth IRAs do not have RMDs
                    during the account holder&apos;s lifetime.</p>
                </section>
            </div>
        </div>
    )
}