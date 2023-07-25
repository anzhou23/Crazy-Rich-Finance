import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function collusion() {
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
                    <span className="text-gray-700">Collusion</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Collusion</h1>
                    <p className="mt-4">Collusion is a secretive and often illegal agreement or cooperation between 2+ parties, typically competitors, to manipulate a market, gain an unfair advantage, or
                    engage in deceptive practices. The primary goal is to restrict competition, control prices, and maximize profits for the colluding parties, while harming consumers, other competitors, or
                    the overall market.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the context of antitrust laws and regulations, collusion is strictly prohibited because it undermines the principles of free and fair competition, which are essential
                    for a healthy and competitive market. Some common forms of collusion include price fixing, bid rigging, market allocation, and sharing sensitive business information between competitors.</p>
                    <p className="mt-2">Price fixing occurs when competitors agree to set prices at a certain level, preventing price competition and artificially inflating prices. Bid rigging involves conspiring
                    to manipulate the bidding process for contracts or projects, ensuring a specific party wins the bid. Market allocation involves dividing territories or customers among competitors to eliminate
                    competition in specific regions or segments.</p>
                    <p className="mt-2">Collusion can have significant negative effects on consumers, as it leads to higher prices, reduced product choices, and diminished innovation. Moreover, it undermines the
                    trust and integrity of the market, creating an uneven playing field for honest businesses.</p>
                    <p className="mt-2">Regulatory authorities and antitrust laws in many countries actively monitor and prosecute collusion cases to ensure fair competition and protect consumers&apos; interests.
                    Companies found guilty of collusion can face severe legal penalties, including fines and even criminal charges for those involved.</p>
                </section>
            </div>
        </div>
    )
}
