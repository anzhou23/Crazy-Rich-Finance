import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function activeManagement() {
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
                    <span className="text-gray-700">Active Management</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Active Management</h1>
                    <p className="mt-4">Active management is an investment strategy where a portfolio manager or a team of professionals actively make decisions and adjustments to the portfolio
                    with the goal of outperforming a specific benchmark or the overall market. In active management, investment decisions are made based on market analysis, research, and the
                    manager&apos;s judgment, rather than simply replicating the performance of a market index or passive investment approach.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Active managers extensively analyze financial markets, economic data, and individual securities to identify investment opportunities they believe will lead
                    to superior returns. They frequently buy and sell securities to capitalize on short-term market movements and take advantage of perceived opportunities. Additionally, they manage
                    risk by adjusting holdings based on changing market conditions and their outlook for various asset classes. They have the flexibility to deviate from the composition of the benchmark
                    index, allowing them to overweight or underweight specific sectors or securities.</p>
                    <p className="mt-2">The aim is to generate above-average returns and beat the market. However, there is a risk of underperforming the market or the benchmark index. Additionally,
                    actively managed funds may come with higher fees compared to passive strategies, as the costs of research, analysis, and trading get passed on to the investors.</p>
                    <p className="mt-2">Active management is commonly found in actively managed mutual funds, hedge funds, and some separately managed accounts. Investors who choose active management believe
                    the portfolio manager&apos;s expertise and skill can lead to superior returns compared to passive strategies like index funds, where the goal is to match the performance of a specific market index.</p>
                </section>
            </div>
        </div>
    )
}
