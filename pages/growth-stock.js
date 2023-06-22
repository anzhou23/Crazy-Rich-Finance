import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function growthStocks() {
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
                    <span className="text-gray-700">Growth Stocks</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Growth Stocks</h1>
                    <p className="mt-4">A growth stock refers to a publicly traded company whose earnings and revenues are expected to
                    increase at an above-average rate compared to the overall market. Growth stocks typically reinvest their earnings back
                    into the company to fuel expansion, rather than distributing dividends to shareholders.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Growth stocks often operate in sectors or industries experiencing rapid expansion or have disruptive business models that drive substantial growth such as tech
                    and healthcare. Investors are drawn to growth stocks based on their belief that the company&apos;s earnings and revenues will continue to increase at an accelerated pace. The market
                    often assigns higher valuations to growth stocks as a reflection of their anticipated future growth potential.</p>
                    <p className="mt-2">Because the focus is on driving long-term growth and maximizing shareholder value through capital appreciation, growth stocks typically do not pay dividends
                    or pay minimal dividends. However, successful investments in growth stocks can deliver significant rewards, as the companies continue to expand, increase market share, and generate
                    strong returns. Well-chosen growth stocks have the potential to outperform the broader market and provide attractive returns for investors.</p>
                    <p className="mt-2">Growth stocks can be subject to higher levels of volatility and risk compared to more established, dividend-paying companies. Since their valuations are
                    often based on future expectations, any negative news or failure to meet growth expectations can lead to significant price fluctuations.</p>
                </section>
            </div>
        </div>
    )
}
