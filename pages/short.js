import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function short() {
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
                    <span className="text-gray-700">Short</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Short</h1>
                    <p className="mt-4">Shorting, or short selling, refers to a trading strategy where an investor borrows shares of a security from a broker and sells them on the market, aiming to buy them back at a
                    lower price in the future. By shorting a stock, traders can profit from a decline in its price.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">To execute a short sale, investors need to borrow shares of a stock from a broker. They then sell the borrowed shares on the market, creating a short position. The borrowed shares
                    are later repurchased and returned to the broker, closing out the short position. Short sellers pay interest or fees for borrowing the shares, which can impact their overall profitability.</p>
                    <p className="mt-2">Short selling involves substantial risks. Unlike buying shares with a limited downside, short selling has unlimited potential losses. If the stock price increases after a short sale,
                    the short seller may need to buy back the shares at a higher price, resulting in a loss. Short sellers need to manage risk through strategies such as setting stop-loss orders or having a well-defined exit plan.</p>
                    <p className="mt-2">Short selling can be used to hedge existing long positions or to speculate on price declines in specific stocks or sectors. It often involves margin trading, where traders borrow funds
                    from a broker to execute the trade. Margin requirements and regulations vary by jurisdiction and may impose restrictions on short selling.</p>
                    <p className="mt-2">In highly liquid markets with sufficient stock lending infrastructure, it is typically easier to find and borrow shares for short selling. However, in less liquid markets or with stocks
                    that have limited lending availability, finding shares to short may be more challenging.</p>
                    <p className="mt-2">Short selling can contribute to market dynamics, particularly during short squeezes. A short squeeze occurs when a heavily shorted stock experiences a rapid price increase, forcing short
                    sellers to cover their positions by buying back shares. This surge in buying activity can further drive up the stock price, creating a feedback loop that amplifies the price increase.</p>
                </section>
            </div>
        </div>
    )
}
