import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function marketCap() {
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
                    <span className="text-gray-700">Market Capitalization</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Market Capitalization</h1>
                    <p className="mt-4">Market capitalization, also known as market cap, measures a company&apos;s value in the stock market. It is calculated by multiplying the company&apos;s total outstanding shares by the
                    current market price per share.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Market capitalization is often used to categorize companies into different size segments. The most common classifications are large-cap, mid-cap, and small-cap. While the boundaries can
                    vary, large-cap companies typically have the highest market capitalization, mid-cap companies have intermediate market cap, and small-cap companies have the lowest market cap. Investors can use market cap to
                    assess a company&apos;s relative size and value compared to its peers. It provides a benchmark for evaluating the performance and growth potential of a company within its industry. Market cap can also be used
                    to compare the overall size and performance of stock markets or indexes.</p>
                    <p className="mt-2">Market cap is influenced by various factors such as the company&apos;s financial performance, growth prospects, industry conditions, and investor sentiment. Different investors may have
                    preferences for certain market cap segments based on their risk appetite, investment objectives, and investment style. Large-cap stocks are often perceived as more stable and less volatile, while small-cap stocks
                    are considered to have higher growth potential but with increased risk. Investors should consider their risk tolerance, time horizon, and diversification strategy when selecting investments across different market
                    cap segments.</p>
                    <p className="mt-2">Changes in a company&apos;s market capitalization can reflect market dynamics and investor sentiment. A significant increase or decrease in market cap can indicate shifts in investor confidence,
                    changes in company fundamentals, or market-wide trends. Market cap can be influenced by various factors such as earnings reports, news events, product launches, regulatory developments, and overall market conditions.</p>
                    <p className="mt-2">While market capitalization is widely used, it has certain limitations. It does not provide a comprehensive view of a company&apos;s financial health or intrinsic value. Market cap is based on the
                    current market price, which can be subject to short-term fluctuations and may not always reflect the true underlying value of the company. Other fundamental analysis metrics, such as earnings, revenue, and cash flow,
                    should be considered alongside market capitalization to gain a more comprehensive understanding of a company&apos;s investment potential.</p>
                </section>
            </div>
        </div>
    )
}