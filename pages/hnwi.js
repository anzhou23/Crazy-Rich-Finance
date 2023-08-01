import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hnwi() {
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
                    <span className="text-gray-700">High-Net-Worth Individual</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">High Net Worth Individual</h1>
                    <p className="mt-4">A high net worth individual (HNWI) is someone with substantial financial assets and wealth, typically over $1M. The specific threshold to be classified as an
                    HNWI may vary depending on the financial institution, country, or context, but generally, it refers to those who have accumulated a significant amount of wealth beyond what
                    is considered typical for the average population.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">HNWIs often possess diverse investment portfolios, real estate holdings, business interests, and other valuable assets. They have a considerable net worth, which
                    is calculated by subtracting their total liabilities (debts and obligations) from their total assets.</p>
                    <p className="mt-2">HNWIs have unique financial needs and often require specialized financial services, investment strategies, and wealth management to preserve and grow their assets.
                    They may work with private banks, wealth management firms, or financial advisors who specialize in serving high net worth clients to achieve their financial goals and protect their wealth.</p>
                    <p className="mt-2">As a demographic, HNWIs play a significant role in the economy and financial markets. They are major contributors to investments, philanthropy, and economic growth.
                    Additionally, they are often subject to specific tax regulations and financial laws that may differ from those applicable to individuals with less money.</p>
                </section>
            </div>
        </div>
    )
}