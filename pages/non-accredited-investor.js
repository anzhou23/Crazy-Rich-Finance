import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function nonAccreditedInvestor() {
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
                    <span className="text-gray-700">Non-Accredited Investor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Non-Accredited Investor</h1>
                    <p className="mt-4">A non-accredited investor is an individual or entity that does not meet the criteria set by regulatory bodies, such as the Securities and Exchange Commission (SEC), to participate
                    in certain investment opportunities that are limited to accredited investors.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Non-accredited investors are subject to certain investment limitations imposed by regulatory bodies. These limitations are intended to protect individuals with limited financial means
                    from potentially high-risk or complex investments. They may be restricted from participating in certain investment opportunities, such as private equity offerings, hedge funds, venture capital funds, and
                    certain crowdfunding campaigns.</p>
                    <p className="mt-2">Regulatory bodies, such as the SEC, have established rules and regulations to promote investor protection and maintain fair and transparent markets. The limitations placed on non-accredited
                    investors aim to ensure that they are not exposed to high-risk or complex investment products without the necessary financial means or knowledge to make informed investment decisions. Non-accredited investors
                    can still achieve diversification and build a well-rounded investment portfolio by focusing on more widely available investment options, such as stocks, bonds, exchange-traded funds (ETFs), etc.</p>
                    <p className="mt-2">For non-accredited investors, it is important to prioritize financial education and engage in comprehensive financial planning. By acquiring knowledge about investing, risk management, and
                    personal finance, non-accredited investors can make informed decisions, set achievable financial goals, and develop investment strategies aligned with their financial circumstances.</p>
                </section>
            </div>
        </div>
    )
}
