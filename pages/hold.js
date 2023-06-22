import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hold() {
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
                    <span className="text-gray-700">Hold</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hold</h1>
                    <p className="mt-4">&quot;Hold&quot; is a term commonly used in investing to indicate the decision to retain an investment for an extended
                    period rather than selling it. It suggests a long-term investment strategy where investors hold onto their positions with the expectation
                    of benefiting from potential future gains.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Investors who hold believe in the potential growth and value appreciation of the investment over time, rather than attempting to
                    time the market or take advantage of short-term price fluctuations. The &quot;hold&quot; strategy helps investors avoid making impulsive or emotionally driven
                    investment decisions. By staying committed to their investment plan, investors can avoid reacting to short-term market volatility or noise and maintain a more
                    objective and rational approach.</p>
                    <p className="mt-2">Before deciding to hold an investment, investors typically conduct fundamental analysis to assess the underlying value and growth
                    potential of the investment. They consider factors such as financial performance, industry trends, competitive advantages, management
                    quality, and overall market conditions. This analysis provides a foundation for the decision to hold the investment.</p>
                    <p className="mt-2">By staying invested over the long term, investors may benefit from compounding returns, reduced trading costs, and potentially lower tax
                    liabilities associated with short-term capital gains. However, while the &quot;hold&quot; strategy suggests maintaining investments for the long term, you should
                    periodically review your portfolio and reasses your holdings. Market conditions, industry dynamics, and individual company performance can change over time.</p>
                </section>
            </div>
        </div>
    )
}
