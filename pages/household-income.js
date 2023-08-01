import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function householdIncome() {
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
                    <span className="text-gray-700">Household Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Household Income</h1>
                    <p className="mt-4">Household income is the total amount of money earned by all members of a household from various sources, such as employment, investments, and other forms of
                    income. It represents the collective financial resources available to a family or group of individuals living together under one roof.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Household income encompasses both earned income and unearned income, and it can come from multiple sources, including:</p>
                    <ul className="list-disc ml-6">
                        <li>Earned Income: This is the income earned through active participation in work or employment. It includes salaries, wages, bonuses, tips, and any other compensation received
                        in exchange for providing goods or services.</li>
                        <li>Investment Income: Income generated from investments, such as dividends from stocks, interest from savings accounts or bonds, and capital gains from selling assets.</li>
                        <li>Rental Income: Money received from renting out property, such as a house, apartment, or commercial space.</li>
                        <li>Business Income: Profits earned from running a business or being self-employed.</li>
                        <li>Government Assistance: Benefits received from government programs, such as social security, unemployment benefits, disability payments, and other public aid programs.</li>
                        <li>Pensions and Retirement Plans: Regular payments received from pension plans, 401(k)s, IRAs, or other retirement accounts.</li>
                        <li>Alimony and Child Support: Payments received as alimony or child support following a divorce or separation.</li>
                        <li>Other Sources: Income from sources like royalties, royalties, and any other form of regular payments.</li>
                    </ul>
                    <p className="mt-2">Household income is an important indicator of a family&apos;s financial well-being and can impact their ability to cover daily expenses, save for the future, and
                    achieve financial goals. It is often used to determine eligibility for various financial services, assistance programs, and credit applications. Tracking and managing household income is
                    crucial for budgeting and financial planning, helping individuals and families make informed decisions about spending, saving, and investing.</p>
                </section>
            </div>
        </div>
    )
}