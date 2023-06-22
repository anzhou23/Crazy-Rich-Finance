import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function retailInvestor() {
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
                    <span className="text-gray-700">Retail Investor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Retail Investor</h1>
                    <p className="mt-4">A retail investor is an individual or small-scale investor who buys and sells securities, such as stocks, bonds, or mutual funds, for their personal investment
                    portfolio. Retail investors typically invest their own money rather than managing investments on behalf of others, as institutional investors do.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Retail investors make investment decisions based on their personal financial goals, risk tolerance, and available resources. They typically invest their own funds, whether
                    it be through a brokerage account, retirement account, or other investment vehicles. Compared to institutional investors or professional money managers, retail investors may have limited financial
                    resources and investment expertise. They often rely on publicly available information, research reports, financial news, and investment advice from brokers, financial advisors, or online platforms
                    to make informed investment decisions.</p>
                    <p className="mt-2">Many retail investors aim to build long-term wealth through investing. They often adopt a buy-and-hold strategy, investing in assets they believe will appreciate in value over
                    time. Retail investors may focus on asset appreciation, dividend income, or a combination of both to achieve their financial objectives.</p>
                    <p className="mt-2">Retail investors are protected by regulatory frameworks aimed at ensuring fair and transparent financial markets. Securities regulators enforce rules and regulations to safeguard
                    retail investors from fraudulent activities, misleading information, market manipulation, and other unethical practices.</p>
                </section>
            </div>
        </div>
    )
}
