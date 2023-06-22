import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ipo() {
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
                    <span className="text-gray-700">Initial Public Offering</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Initial Public Offering</h1>
                    <p className="mt-4">An Initial Public Offering (IPO) is the process where a private company offers its shares to the public for the first time, becoming a publicly traded company. In an IPO, the company
                    sells a portion of its ownership to investors in exchange for capital, and the shares are listed on a stock exchange, allowing them to get bought and sold by the general public.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">An IPO is the primary method for private companies to transition into public companies. By going public, companies gain access to public capital markets, enabling them to raise funds for various
                    purposes, such as expansion, acquisitions, debt repayment, or working capital. It also provides liquidity for existing shareholders who may want to sell their shares.</p>
                    <p className="mt-2">Going public involves complying with regulatory requirements and disclosing detailed information about the company&apos;s financials, operations, management, and risks to potential investors. Companies
                    typically work with investment banks and legal advisors to navigate the complex process and meet regulatory obligations, such as filing a prospectus with the appropriate securities regulatory authorities.</p>
                    <p className="mt-2">During an IPO, shares are offered to institutional investors, retail investors, and sometimes employees or other stakeholders. The allocation process determines how shares are distributed among
                    these participants. Institutional investors, such as pension funds or mutual funds, often receive larger allocations due to their investment size and long-term investment objectives.</p>
                    <p className="mt-2">The initial trading day once the IPO is completeted is usually accompanied by significant investor interest and can result in price volatility. Market sentiment and investor perception of the company&apos;s
                    prospects play a significant role in determining the success of an IPO. Investors may be influenced by market conditions, the company&apos;s industry, financial performance, growth potential, and the overall economic climate.</p>
                </section>
            </div>
        </div>
    )
}
