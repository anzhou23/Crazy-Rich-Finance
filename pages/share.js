import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function share() {
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
                    <span className="text-gray-700">Share</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Share</h1>
                    <p className="mt-4">A share is a unit of ownership in a company, typically represented by a certificate or digital record. When individuals or entities purchase shares of a company,
                    they become shareholders and hold a proportionate ownership stake in the company.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Shares of stock represent ownership in a company, entitling shareholders to certain rights and privileges. Shareholders have the right to participate in corporate decision-making,
                    such as voting on important matters, electing the board of directors, and approving significant corporate actions. The number of shares held by a shareholder determines their voting power and influence
                    within the company.</p>
                    <p className="mt-2">Shareholders may receive dividends, which are a portion of the company&apos;s profits distributed to shareholders. Dividends are typically paid on a per-share basis, and the
                    amount depends on the company&apos;s financial performance and dividend policy. Additionally, shareholders can benefit from capital appreciation if the value of their shares increases over time. Share
                    prices fluctuate based on market conditions, company performance, and investor sentiment.</p>
                    <p className="mt-2">Shares are typically bought and sold on stock exchanges, such as the New York Stock Exchange (NYSE) or NASDAQ. Stock exchanges provide a platform for investors to trade shares,
                    facilitating liquidity and price discovery. Investors can place buy or sell orders through brokerage accounts to participate in the buying and selling of shares. Share prices are influenced by various
                    factors, such as economic conditions, industry trends, company-specific news, and market sentiment.</p>
                </section>
            </div>
        </div>
    )
}