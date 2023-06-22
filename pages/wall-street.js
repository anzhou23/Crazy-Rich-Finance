import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function wallStreet() {
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
                    <span className="text-gray-700">Wall Street</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Wall Street</h1>
                    <p className="mt-4">Wall Street refers to the financial district in Lower Manhattan, New York City, where the New York Stock Exchange (NYSE) and many other financial institutions are located. It is
                    synonymous with the U.S. financial industry and is often used as a metonym for the broader financial markets and the activities associated with them.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Wall Street is a major financial hub that houses prominent financial institutions, including investment banks, commercial banks, brokerage firms, and asset management companies.
                    It serves as a central location for financial activities, such as trading, investment banking, asset management, and financial services. Investment banks located on Wall Street provide services such as
                    underwriting, mergers and acquisitions (M&A), initial public offerings (IPOs), corporate financing, and advisory services to corporations, governments, and institutional clients.</p>
                    <p className="mt-2">Over the years, Wall Street has become a symbol of finance and capitalism, representing the pursuit of wealth, success, and economic power. It is often associated with high-stakes trading,
                    intense competition, and the potential for substantial financial gains or losses. Additionally, Wall Street is closely associated with the stock market. It is where stocks, bonds, commodities, and other financial
                    instruments are traded. Traders, investors, and market participants gather on Wall Street or use electronic trading platforms to buy, sell, and exchange securities.</p>
                    <p className="mt-2">Wall Street is subject to regulatory oversight by various entities, including the U.S. Securities and Exchange Commission (SEC) and self-regulatory organizations like the Financial Industry
                    Regulatory Authority (FINRA). These regulatory bodies aim to maintain fair and transparent markets, enforce compliance with securities laws, and protect investors&apos; interests.</p>
                </section>
            </div>
        </div>
    )
}



