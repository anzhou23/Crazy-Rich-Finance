import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function limitOrder() {
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
                    <span className="text-gray-700">Limit Order</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Limit Order</h1>
                    <p className="mt-4">A limit order is a type of order placed by an investor to buy or sell a security at a specific price or better. Unlike a market order that executes immediately at the current market price,
                    a limit order instructs the broker to execute the trade at a set price point. Limit orders provide control over the execution price but do not guarantee immediate execution.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A buy limit order is placed at a price below the current market price, indicating the maximum price the investor is willing to pay. A sell limit order is placed at a price above the current
                    market price, indicating the minimum price the investor is willing to accept. Limit orders provide an opportunity to buy at a lower price or sell at a higher price than the current market levels.</p>
                    <p className="mt-2">Limit orders are executed only when the specified price or better is reached. If the market price does not reach the specified limit price, the order remains open and unfilled until the price
                    reaches the desired level. The execution of limit orders is dependent on market conditions and the availability of counterparty orders at or better than the specified price. By setting a specific limit price,
                    investors can avoid buying or selling a security at a significantly different price than intended. Limit orders can be particularly useful during periods of high market volatility or when trading illiquid securities.</p>
                    <p className="mt-2">There is a risk that the order may not be executed if the market does not reach the specified price. Investors may miss out on a trade opportunity if the market price moves away from the limit
                    price and does not return. However, this risk can be managed by setting realistic and competitive limit prices based on market conditions and the investor&apos;s desired entry or exit points.</p>
                    <p className="mt-2">Limit orders require patience as they may take some time to be executed. Investors must be willing to wait for the market to reach the specified limit price. Timing is crucial when using limit
                    orders, as the market may not always reach the desired price or may quickly move away from it. Careful analysis and understanding of market trends and price levels can help determine appropriate limit prices and
                    timing for placing orders.</p>
                </section>
            </div>
        </div>
    )
}