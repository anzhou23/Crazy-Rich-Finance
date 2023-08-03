import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function investment() {
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
                    <span className="text-gray-700">Investment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Investment</h1>
                    <p className="mt-4"> Investments involve putting money to work in various assets, such as stocks, bonds, real estate, mutual funds, and businesses. The goal is to earn a
                    return on the capital invested to increase wealth, achieve financial goals, or secure long-term financial stability.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">All investments come with a degree of risk, and the potential return is typically influenced by the level of risk undertaken. Generally, investments with
                    higher risk have the potential for higher returns, while lower-risk investments tend to offer more modest returns.</p>
                    <p className="mt-2">Investments can be categorized into different asset classes, including equities (stocks), fixed income (bonds), real estate, commodities, cash equivalents,
                    and alternative investments (such as hedge funds or private equity). Some investments, such as bonds or dividend-paying stocks, provide regular income in the form of interest or
                    dividends. Others, like rental properties, can generate rental income.</p>
                    <p className="mt-2">Investments can appreciate in value over time. For example, the value of stocks, real estate, or certain collectibles may increase, allowing investors to sell
                    them at a higher price than what they initially paid. Investments are often made with a long-term perspective, taking advantage of the power of compounding over time. Compounding
                    allows earnings to generate additional earnings, leading to exponential growth. Investors often diversify their portfolios by holding a mix of different investments to manage risk
                    and reduce the impact of any single investment underperforming.</p>
                    <p className="mt-2">Liquidity refers to how quickly an investment can be converted into cash without significantly impacting its value. Some investments, like publicly traded stocks,
                    are highly liquid, while others, like real estate, may be less liquid.</p>
                    <p className="mt-2">Various investment vehicles facilitate participation in financial markets. These include brokerage accounts, retirement accounts (e.g., IRAs, 401(k)s), mutual funds,
                    exchange-traded funds (ETFs), and more. Successful investing often involves research, analysis, and due diligence. Investors assess an investment&apos;s potential risks, expected returns,
                    historical performance, and current market conditions.</p>
                    <p className="mt-2">Investment decisions are influenced by individual financial goals, risk tolerance, time horizon, and personal circumstances. They can also be influenced by market and
                    economic conditions, leading to fluctuations in value.</p>
                </section>
            </div>
        </div>
    )
}