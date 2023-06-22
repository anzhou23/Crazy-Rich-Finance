import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function dca() {
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
                    <span className="text-gray-700">Dollar Cost Averaging</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dollar Cost Averaging</h1>
                    <p className="mt-4">Dollar cost averaging is an investment strategy where an investor systematically purchases a fixed amount of an investment, regardless of its price, at regular intervals (typically monthly or quarterly)
                    over a long period.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Since the investor is investing a set amount regularly, the number of shares or units purchased varies depending on the investment&apos;s price at each interval. When prices are high, the investor buys fewer shares,
                    and when prices are low, the investor buys more shares. This can result in a lower average cost compared to making a lump-sum investment at a single point in time.</p>
                    <p className="mt-2">Dollar cost averaging helps mitigate the impact of market volatility and reduces the risk associated with trying to time the market. Since investments are made consistently over time, the investor avoids the pressure of
                    making investment decisions based on short-term market fluctuations.</p>
                    <p className="mt-2">With dollar cost averaging, the investor benefits from the potential growth of the investment and the power of compounding returns while avoiding emotional reactions to market ups and downs. Dollar cost averaging can be
                    applied to various types of investments, such as stocks, mutual funds, exchange-traded funds (ETFs), and other investment vehicles.</p>
                </section>
            </div>
        </div>
    )
}