import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function stock() {
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
                    <span className="text-gray-700">Stock</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Stock</h1>
                    <p className="mt-4">Stocks represent ownership in a company. When an investor purchases shares of stocks, they become partial owners of the company and have the potential to profit from the
                    company&apos;s growth and success. Stocks are traded on stock exchanges, and their prices fluctuate based on market supply and demand.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Owning shares of stock gives investors certain rights and privileges. These rights may include voting on important company decisions, receiving dividends,
                    and participating in the company&apos;s growth and profitability. As the company grows and becomes more profitable, the value of its stock may increase. Investors can sell their shares at a higher
                    price than their initial purchase price, earning a profit. However, stock prices are subject to market fluctuations and can also decline, resulting in potential losses.</p>
                    <p className="mt-2">Some companies distribute a portion of their profits to shareholders in the form of dividends. Dividends provide a regular income stream for investors and can be an attractive
                    feature for income-oriented investors. Not all companies pay dividends, and the amount of dividends can vary based on the company&apos;s profitability and dividend policy.</p>
                    <p className="mt-2">Stocks are generally considered liquid investments as they can be bought and sold on stock exchanges. This liquidity allows investors to easily convert their investments into cash
                    if needed. The marketability of stocks depends on factors such as the company&apos;s size, reputation, and trading volume.</p>
                    <p className="mt-2">Successful stock investing requires thorough research and analysis. Investors need to assess the company&apos;s financial health, industry trends, competitive positioning, and management
                    team. Fundamental analysis, which involves evaluating a company&apos;s financial statements and business fundamentals, is commonly used to assess the value and potential of a stock. Technical analysis, on
                    the other hand, focuses on analyzing stock price patterns and market trends.</p>
                    <p className="mt-2">Stock prices can be volatile in response to market conditions, economic factors, and company-specific news. Short-term fluctuations in stock prices are common and can be influenced by
                    factors beyond an investor&apos;s control. Taking a long-term perspective when investing in stocks can help smooth out short-term market volatility and capture the potential growth and compounding benefits over time.</p>
                </section>
            </div>
        </div>
    )
}
