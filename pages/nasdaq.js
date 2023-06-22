import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function NASDAQ() {
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
                    <span className="text-gray-700">NASDAQ</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">NASDAQ</h1>
                    <p className="mt-4">NASDAQ, which stands for the National Association of Securities Dealers Automated Quotations, is a global electronic marketplace for buying and selling securities, primarily stocks. It
                    is one of the largest stock exchanges in the world, known for its focus on technology and growth-oriented companies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">NASDAQ is a fully electronic exchange, meaning that trading is conducted electronically without the need for physical trading floors. Orders are matched through a computerized system,
                    enabling fast and efficient trade executions. This electronic trading environment allows for increased transparency, speed, and accessibility.</p>
                    <p className="mt-2">NASDAQ has a reputation for being a technology-driven stock exchange. It is home to many high-profile technology giants, including Apple, Microsoft, Amazon, and Google. However, it also
                    includes companies from various sectors, such as healthcare, finance, consumer goods, and more.</p>
                    <p className="mt-2">Companies must meet certain requirements to be listed on NASDAQ, including financial standards, corporate governance criteria, and trading volume thresholds. NASDAQ has different tiers of
                    listing, including the NASDAQ Global Select Market, NASDAQ Global Market, and NASDAQ Capital Market, each with specific listing requirements. Meeting these requirements helps ensure a certain level of credibility
                    and quality among the companies listed on the exchange.</p>
                    <p className="mt-2">NASDAQ has a global presence and attracts investors and companies from around the world. It offers trading opportunities for international stocks through American Depositary Receipts (ADRs)
                    and provides a platform for global companies seeking access to the U.S. capital markets.</p>
                </section>
            </div>
        </div>
    )
}