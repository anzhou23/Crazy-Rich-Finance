import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function income() {
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
                    <span className="text-gray-700">Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Income</h1>
                    <p className="mt-4">Income is the money or earnings an individual, business, or entity receives from various sources as compensation for providing goods, services, or
                    resources. It represents the total financial inflow generated over a specific period and is a fundamental component of personal and economic well-being.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Income can be derived from various sources and can take different forms:</p>
                    <ul className="list-disc ml-6">
                        <li>Earned Income: This is income earned through actively participating in work or business activities. It includes wages, salaries, bonuses, commissions, and
                        self-employment income.</li>
                        <li>Unearned Income: Also known as passive income, unearned income is derived from sources other than direct labor or active work. Examples include rental income from
                        real estate, dividends from investments, interest earned from savings accounts or bonds, and royalties from intellectual property.</li>
                        <li>Capital Gains: Capital gains are profits earned from selling assets such as stocks, real estate, or valuable items. If the selling price is higher than the purchase
                        price, the difference is considered a capital gain.</li>
                        <li>Gifts and Inheritance: Money or assets received as gifts or inheritance are considered income, although they may not be subject to income tax in some cases.</li>
                        <li>Government Payments: Income can include government payments such as Social Security benefits, unemployment benefits, veterans&apos; benefits, and welfare assistance.</li>
                        <li>Business Income: For businesses, income includes revenues generated from selling products or services. It is calculated by subtracting costs and expenses from total revenues.</li>
                        <li>Interest and Dividends: Interest income is earned from loans or investments, while dividends are distributions of profits paid to shareholders of a company.</li>
                        <li>Royalties: Royalties are payments received by the owner of intellectual property, such as patents, copyrights, or trademarks, for using their creations.</li>
                        <li>Pensions and Retirement Plans: Payments received from pension plans, retirement accounts (e.g., 401(k), IRA), or annuities contribute to an individual&apos;s income
                        during retirement.</li>
                    </ul>
                    <p className="mt-2">Income is a crucial factor in determining an individual&apos;s financial stability, ability to meet expenses, save, invest, and achieve financial goals.
                    It plays a significant role in personal budgeting, tax calculations, and overall financial planning. Different forms of income may be subject to varying tax rates and regulations,
                    which can impact an individual&apos;s net income after taxes.</p>
                </section>
            </div>
        </div>
    )
}