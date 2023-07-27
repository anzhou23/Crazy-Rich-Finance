import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function deflation() {
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
                    <span className="text-gray-700">Deflation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Deflation</h1>
                    <p className="mt-4">Deflation is an economic phenomenon characterized by a sustained and general decline in the overall price levels of goods and services in an economy.
                    In other words, you can buy more goods and services over time with the same amount of money.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Deflation occurs when the supply of goods and services exceeds the demand for them, leading to reduced prices. This can be caused by various factors,
                    such as a decrease in consumer spending, reduced business investment, or an economic recession. Deflation can also be triggered by technological advancements that increase
                    productivity and lower production costs, leading to lower prices for goods.</p>
                    <p className="mt-2">While deflation may sound beneficial as it increases consumers&apos; purchasing power, it can have negative economic consequences. One major concern is
                    that deflation can lead to a deflationary spiral. As prices fall, consumers may delay purchases, expecting even lower prices in the future. This reduction in consumer spending
                    can lead to lower demand, further decreasing prices, and creating a self-reinforcing cycle of falling prices and economic stagnation.</p>
                    <p className="mt-2">Deflation can also hurt borrowers because the real value of their debts increases over time, making it more challenging to repay loans. It can also lead to
                    reduced profits for businesses, which may result in layoffs and lower wages.</p>
                    <p className="mt-2">Central banks and policymakers often aim to prevent deflation or mitigate its effects by implementing expansionary monetary policies, such as lowering interest
                    rates, and adopting fiscal measures to stimulate demand and economic activity. In contrast, moderate inflation is typically targeted as it encourages spending and investment while
                    preserving the stability of prices and the overall economy.</p>
                </section>
            </div>
        </div>
    )
}
