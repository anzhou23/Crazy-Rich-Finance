import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fractionalShare() {
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
                    <span className="text-gray-700">Fractional Share</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fractional Share</h1>
                    <p className="mt-4">Fractional shares, also known as fractional ownership or fractional stock, is a division of a single share of stock into smaller, more affordable units. In
                    traditional investing, shares of stock are usually bought and sold as whole units. However, fractional shares enable investors to purchase a portion of a share, allowing them to
                    invest in high-priced stocks without needing to buy a full share.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Fractional shares are particularly beneficial for investors with limited funds or those interested in diversifying their portfolio across multiple stocks without
                    large capital requirements. For example, if a single share of a company&apos;s stock is worth $1,000, an investor with only $100 could buy 0.1 (1/10th) of a share of that stock.</p>
                    <p className="mt-2">This concept is made possible through various financial technology platforms and brokerage services that offer fractional investing. These platforms pool investors&apos;
                    money together to buy whole shares, and investors are then allocated fractional shares proportionally based on their contributions.</p>
                    <p className="mt-2">Fractional shares provide greater accessibility to the stock market, allowing individuals to invest in companies they believe in, regardless of the stock&apos;s price
                    per share. It democratizes investing and opens up opportunities for a broader range of people to participate in the financial markets, even with small amounts of capital.</p>
                </section>
            </div>
        </div>
    )
}