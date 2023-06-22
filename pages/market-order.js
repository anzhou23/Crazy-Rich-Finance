import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function marketOrder() {
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
                    <span className="text-gray-700">Market Order</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Market Order</h1>
                    <p className="mt-4">A market order is an instruction given by an investor to buy or sell a security at the current market price. When a market order is placed, the order is executed as quickly
                    as possible at the prevailing market price, ensuring a prompt execution but without guaranteeing a specific price.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Market orders are typically used when speed of execution is more important than the exact price at which the trade is executed. Because market orders do not specify a specific
                    price at which the trade should be executed, they are subject to price slippage, which means the executed price may differ slightly from the expected or displayed price at the time the order was
                    placed. Market conditions and liquidity can impact the extent of price slippage.</p>
                    <p className="mt-2">Market orders are particularly susceptible to price volatility, especially in fast-moving or illiquid markets. The execution price can deviate significantly from the last traded
                    price or the displayed price at the time of order placement, particularly during periods of high market activity or low liquidity.</p>
                    <p className="mt-2">Market orders are typically given priority over other types of orders, such as limit orders, in terms of execution. This is because market orders are considered &quot;at market&quot;
                    and require immediate execution based on the best available prices.</p>
                    <p className="mt-2">Unlike limit orders, market orders do not provide control over the execution price. Investors are price-takers. This lack of price control can be a disadvantage when trading in
                    volatile markets or during price gaps, as the executed price may deviate significantly from the expected price.</p>
                </section>
            </div>
        </div>
    )
}