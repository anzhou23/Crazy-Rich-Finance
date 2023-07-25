import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function assetClass() {
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
                    <span className="text-gray-700">Asset Class</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Asset Class</h1>
                    <p className="mt-4">An asset class is a group of financial instruments or investments that share similar characteristics and behave in a comparable way within the
                    financial markets. Investors use asset classes to categorize and organize their investments based on their risk and returns. Different asset classes have
                    distinct features, allowing investors to diversify their portfolios and manage risk effectively.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Asset classes provide the foundation for diversification in investment portfolios. By spreading investments across various asset classes, investors reduce
                    their exposure to the risks associated with any single asset. Some asset classes, like stocks, tend to offer higher returns but come with greater volatility, while others,
                    like bonds, may offer more stability but lower potential returns.</p>
                    <p className="mt-2">Asset classes may have varying levels of correlation with one another, meaning they respond differently to market events. Correlated assets tend to move in
                    the same direction, while uncorrelated or negatively correlated assets may move independently or in opposite directions. For example, stocks may excel during periods of economic
                    expansion, while bonds may shine during economic downturns when investors seek safer investments.</p>
                    <p className="mt-2">Common asset classes include stocks (equities), bonds (fixed income), cash or cash equivalents, real estate, and commodities. Within each asset class, there
                    may be subcategories with specific investment characteristics. For example, there are growth stocks, dividend stocks, blue-chip stocks, and value stocks.</p>
                    <p className="mt-2">Asset allocation involves dividing an investment portfolio among different asset classes based on your financial goals, risk tolerance, and investment time horizon.
                    The mix of asset classes chosen for a portfolio is a critical factor in determining overall portfolio performance.</p>
                </section>
            </div>
        </div>
    )
}
