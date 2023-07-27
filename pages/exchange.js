import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function exchange() {
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
                    <span className="text-gray-700">Exchange</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exchange</h1>
                    <p className="mt-4">An exchange is a platform or marketplace where financial instruments, assets, or commodities get bought and sold. It serves as an intermediary
                    facilitating the trading of these assets between buyers and sellers.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">There are various types of exchanges, depending on the specific financial instruments being traded. The most well-known exchange is the stock exchange,
                    where shares of publicly traded companies get bought and sold. Examples of prominent stock exchanges include the New York Stock Exchange (NYSE) and the Nasdaq in the United
                    States, the London Stock Exchange (LSE) in the UK, and the Tokyo Stock Exchange (TSE) in Japan.</p>
                    <p className="mt-2">In addition to stock exchanges, there are also commodity exchanges, where various commodities such as gold, oil, agricultural products, and metals are
                    traded. These exchanges enable producers, consumers, and investors to hedge against price fluctuations and manage risk. Furthermore, there are currency exchanges or foreign
                    exchange markets (forex), where currencies are bought and sold to facilitate international trade and investment.</p>
                    <p className="mt-2">Exchanges provide liquidity, transparency, and price discovery for the financial markets. They operate under specific rules and regulations to ensure fair
                    and orderly trading, and they are subject to oversight by regulatory authorities to maintain market integrity and protect investors.</p>
                    <p className="mt-2">In recent years, with technological advancements, some exchanges have become digital or electronic, allowing for seamless trading through computer networks
                    and online platforms. This evolution has further increased accessibility and efficiency in the global financial markets.</p>
                </section>
            </div>
        </div>
    )
}
