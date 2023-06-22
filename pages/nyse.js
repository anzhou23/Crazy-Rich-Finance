import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function NYSE() {
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
                    <span className="text-gray-700">NYSE</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">NYSE</h1>
                    <p className="mt-4">The New York Stock Exchange (NYSE) is one of the world&apos;s largest and most well-known stock exchanges. It is located on Wall Street in New York City and has a long
                    history dating back to its establishment in 1792. The NYSE provides a platform for buying and selling stocks, bonds, exchange-traded funds (ETFs), and other financial instruments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The NYSE facilitates the trading of publicly traded companies&apos; stocks listed on the exchange. It serves as a marketplace where buyers and sellers can come together to
                    execute trades. The NYSE operates as an auction market, where trading is conducted in a centralized physical location known as the trading floor.</p>
                    <p className="mt-2">The NYSE plays a vital role in the global financial system and serves as a barometer for the stock market&apos;s overall health. It is known for its iconic opening and closing
                    bell ceremonies, which mark the beginning and end of each trading day. In recent years, the NYSE has embraced technological advancements and introduced electronic trading platforms alongside its
                    traditional floor trading. This has allowed for greater efficiency, speed, and accessibility in the trading process.</p>
                    <p className="mt-2">Companies must meet specific listing requirements to have their stocks listed and traded on the exchange. These requirements include criteria related to a company&apos;s market
                    cap, share price, financial performance, and corporate governance standards. Companies listed on the NYSE often benefit from increased visibility, liquidity, and credibility in the financial markets.</p>
                    <p className="mt-2"></p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}