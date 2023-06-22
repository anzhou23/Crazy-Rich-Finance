import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function expenseRatio() {
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
                    <span className="text-gray-700">Expense Ratio</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Expense Ratio</h1>
                    <p className="mt-4">The expense ratio measures the costs associated with owning a mutual fund or an exchange-traded fund (ETF). It represents the percentage of a fund&apos;s assets used to cover various operating expenses,
                    such as management fees, administrative costs, marketing expenses, and other operational charges.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The expense ratio is calculated by dividing the total annual expenses of the fund by its average net assets. Over the long term, even seemingly small differences in expense ratios can have a significant
                    impact on investment performance. Lower expense ratios generally indicate that a higher percentage of an investor&apos;s money is working toward potential investment returns. A higher expense ratio can result in lower net
                    returns for investors.</p>
                    <p className="mt-2">The expense ratio is disclosed in a fund&apos;s prospectus and other regulatory documents. It provides investors with transparency and allows them to compare the costs of different funds before making investment decisions.</p>
                    <p className="mt-2">Expense ratios can vary depending on the type of fund. Passive funds, such as index funds or ETFs, which aim to replicate the performance of a specific market index, generally have low expense ratios. Active funds involve
                    more extensive research and management, leading to higher expense ratios.</p>
                    <p className="mt-2">Note that expense ratios do not capture all costs associated with investing, such as transaction fees or brokerage commissions. These additional costs can vary depending on the investor&apos;s trading activity and the
                    platform used. Additionally, when selecting funds, investors should consider the expense ratio in conjunction with other factors, such as fund performance, investment strategy, and risk profile, to make informed investment decisions.</p>
                </section>
            </div>
        </div>
    )
}