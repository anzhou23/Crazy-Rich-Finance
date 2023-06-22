import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function sp500() {
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
                    <span className="text-gray-700">S&P 500</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">S&P 500</h1>
                    <p className="mt-4">The S&P 500 is a widely followed stock market index that measures the performance of 500 large-cap U.S. companies. It is often used as a benchmark for the overall performance
                    of the U.S. stock market. </p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The S&P 500 is a market-capitalization-weighted index, meaning that the companies with larger market values have a greater influence on the index&apos;s movements. This weighting
                    scheme reflects the relative importance of these companies in the overall U.S. stock market. As such, the performance of larger companies can have a significant impact on the index.</p>
                    <p className="mt-2">The S&P 500 includes companies from various sectors such as technology, healthcare, financials, consumer goods, and more. This sector diversification helps to spread risk and provides
                    exposure to different areas of the economy. Changes in the performance of specific sectors can influence the overall performance of the S&P 500.</p>
                    <p className="mt-2">Investors can gain exposure to the S&P 500 through index funds or ETFs that track the index&apos;s performance. These investment vehicles allow individuals to invest in a diversified
                    portfolio of stocks that mirror the composition of the S&P 500. Investors can also use the S&P 500 track the performance of their investments against the broader market. It provides a basis for comparing the
                    returns of individual stocks, funds, or portfolios to the overall market performance.</p>

                </section>
            </div>
        </div>
    )
}


