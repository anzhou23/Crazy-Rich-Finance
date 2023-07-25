import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function candlestick() {
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
                    <span className="text-gray-700">Candlestick</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Candlestick</h1>
                    <p className="mt-4">In investing, a candlestick is a visual representation of an asset&apos;s price movement over a specific period, typically used in technical analysis of financial markets.
                    Each candlestick provides information about the opening, closing, high, and low prices of the asset during that timeframe.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A typical candlestick consists of a rectangular body and two thin lines, called wicks or shadows, extending from the top and bottom of the body. The body represents the price
                    range between the opening and closing prices of the asset. If the closing price is higher than the opening price, the body is usually filled or colored, often green or white, indicating a price
                    increase. Conversely, if the closing price is lower than the opening price, the body is typically hollow or colored, often red or black, indicating a price decrease.</p>
                    <p className="mt-2">The wicks or shadows represent the highest and lowest prices reached during the time period. The upper wick extends from the top of the body to the highest price, while the lower
                    wick extends from the bottom of the body to the lowest price.</p>
                    <p className="mt-2">Candlesticks are plotted on a price chart, and investors use various candlestick patterns and formations to analyze market trends and potential price movements. Different patterns,
                    such as doji, hammer, engulfing, and others, can provide insights into potential reversals, trends, or market sentiment.</p>
                    <p className="mt-2">Candlestick charts are widely used in technical analysis because they provide a clear and concise visual representation of price action, allowing investors to make informed trading
                    and investment decisions. Traders often combine candlestick analysis with other technical indicators to gain a comprehensive understanding of market conditions and make more informed trading decisions.</p>
                </section>
            </div>
        </div>
    )
}
