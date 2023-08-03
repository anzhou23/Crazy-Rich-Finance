import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function illiquid() {
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
                    <span className="text-gray-700">Illiquid</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Illiquid</h1>
                    <p className="mt-4">Illiquid assets and investments cannot be quickly or easily converted into cash without potentially losing money. They typically have limited marketability
                    and may take a long time to find a buyer willing to purchase them at a reasonable price.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Illiquid assets may not have an active market where they can be easily bought or sold. This can result in longer waiting periods to find a buyer or
                    seller. Because illiquid assets lack market demand, sellers often need to offer a discount or accept a lower price than the asset&apos;s intrinsic value to attract potential
                    buyers. Real estate properties, private company shares, collectibles, certain types of bonds, and some types of investments with restrictions on trading are examples of
                    illiquid assets. Selling illiquid assets may take weeks, months, or even years to complete, depending on market conditions and the type of asset.</p>
                    <p className="mt-2">Illiquid assets can offer potentially higher returns compared to more liquid investments but come with the trade-off of reduced liquidity. Investors need to
                    carefully consider their risk tolerance and investment objectives before investing in illiquid assets. While illiquid assets can provide portfolio diversification, they can also
                    limit the ability to access funds quickly during times of financial need.</p>
                    <p className="mt-2">Some illiquid assets have secondary markets or specialized exchanges where they can be traded, but these markets may have limited participation and lower
                    trading volumes. Investments in private companies or startups through private equity or venture capital funds are often considered illiquid, as these investments typically have
                    restrictions on when and how they can be sold.</p>
                </section>
            </div>
        </div>
    )
}