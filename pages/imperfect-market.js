import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function imperfectMarkets() {
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
                    <span className="text-gray-700">Imperfect Markets</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Imperfect Markets</h1>
                    <p className="mt-4">Imperfect markets, also known as imperfectly competitive markets, are economic environments where certain conditions necessary for perfect competition are not met.
                    In a perfectly competitive market, there are numerous buyers and sellers, homogeneous products, perfect information, easy entry and exit, and no influence over market prices. Imperfect
                    markets deviate from these ideal conditions, leading to various forms of market power and inefficiencies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In imperfect markets, some participants, usually larger firms or monopolies, can influence prices and control supply. This can lead to higher prices and reduced consumer
                    welfare compared to perfectly competitive markets. Additionally, imperfect markets often have barriers that limit the entry of new competitors, including high startup costs, legal restrictions,
                    brand loyalty, or exclusive access to resources, allowing existing firms to maintain their market dominance.</p>
                    <p className="mt-2">Products in imperfect markets may have unique features or branding that differentiate them from competitors. This differentiation can reduce price sensitivity among consumers
                    and allow firms to charge higher prices. In imperfect markets, there may be disparities in information between buyers and sellers. This can lead to situations where one party has an advantage over
                    the other, resulting in less-than-optimal transactions.</p>
                    <p className="mt-2">Examples of imperfect markets include industries with few major players (oligopolies), such as telecommunications or automobile manufacturing, as well as sectors where product
                    differentiation is significant, like fashion or technology. An oligopoly is a market structure with a small number of large firms dominating the industry, while a monopoly involves a single firm as
                    the sole provider of a product or service. These forms of market concentration can lead to less competition and abuses of market power.</p>
                    <p className="mt-2">Imperfect markets often require government regulation to ensure fair competition, protect consumer interests, and prevent anticompetitive practices. Regulations may include price
                    controls, antitrust laws, and consumer protection measures.</p>
                </section>
            </div>
        </div>
    )
}