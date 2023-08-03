import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function impactInvesting() {
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
                    <span className="text-gray-700">Impact Investing</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Impact Investing</h1>
                    <p className="mt-4">Impact investors want to generate both positive social or environmental impacts and financial returns. The strategy involves allocating capital to businesses,
                    organizations, or projects addressing pressing social or environmental challenges while also aiming to make money.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Impact investments are typically assessed based on specific metrics and indicators that quantify the extent of the intended positive impact. These metrics help
                    investors track and evaluate how effective their investments are in tackling issues like poverty, sustainable agriculture, renewable energy, education, and healthcare access.
                    Impact investing spans various sectors, including but not limited to renewable energy, affordable housing, clean technology, healthcare, education, microfinance, and community
                    development. They often target underserved populations or regions that may not have easy access to traditional financial services or resources.</p>
                    <p className="mt-2">You can make impact investments through various financial instruments, including equity, debt, social impact bonds, and venture capital. They can be structured as
                    individual investments, funds, or blended finance models. The field of impact investing continues to evolve, with organizations and initiatives working to establish standardized
                    measurement and reporting frameworks to ensure transparency and accountability.</p>
                    <p className="mt-2">Impact investing has gained traction in recent years, attracting interest from a wide range of investors, including institutional investors, family offices,
                    foundations, and individual investors. While impact investments seek to create positive change, they are still subject to market fluctuations and other investment-related risks. Investors
                    should align their investments with their values and goals while considering their risk tolerance and long-term financial objectives.</p>
                </section>
            </div>
        </div>
    )
}