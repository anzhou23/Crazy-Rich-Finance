import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function dividendYield() {
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
                    <span className="text-gray-700">Dividend Yield</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dividend Yield</h1>
                    <p className="mt-4">Dividend yield measures the annual dividend income earned from owning a particular stock relative to its current market price. It is expressed as a
                    percentage and is calculated by dividing the annual dividend per share by the current stock price.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The formula for dividend yield is: Dividend Yield = Annual Dividend Per Share / Current Stock Price * 100</p>
                    <p className="mt-2">For example, if a stock pays an annual dividend of $2 per share and its current market price is $50 per share, the dividend yield would be: $2 / $50 * 100 = 4%</p>
                    <p className="mt-2">A higher dividend yield implies a stock is providing a relatively higher return in the form of dividends compared to its stock price. It is often considered
                    attractive for income-oriented investors seeking a steady income stream from their investments.</p>
                    <p className="mt-2">Dividend yield helps investors assess how much income they can expect to earn from owning a specific stock based on its dividend payments. Investors use dividend
                    yield to compare the dividend income potential of different stocks within the same industry or across various sectors.</p>
                    <p className="mt-2">The dividend yield is not a fixed number; it fluctuates with changes in the stock&apos;s market price and the company&apos;s dividend policy. While a high dividend
                    yield can be attractive, it may also indicate the stock price has declined significantly, potentially signaling financial challenges or market concerns.</p>
                </section>
            </div>
        </div>
    )
}
