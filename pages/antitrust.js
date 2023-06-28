import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function antitrust() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Antitrust</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Antitrust</h1>
                    <p className="mt-4">Antitrust refers to a set of laws and regulations designed to promote fair competition and prevent the creation or abuse of monopoly power, where a single company dominates
                    the market. The goal of antitrust laws is to protect consumers, maintain market competition, and ensure that businesses operate in a manner that benefits society as a whole.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Antitrust laws aim to prevent the abuse of market power by companies or individuals that could harm competition and lead to higher prices, reduced choices, and decreased innovation.
                    These laws typically apply to a range of activities, such as mergers and acquisitions, price-fixing, collusion, bid-rigging, and unfair business practices. They encourage competition among businesses as
                    it is believed to benefit consumers by promoting innovation, driving down prices, and increasing product quality and choice.</p>
                    <p className="mt-2">Antitrust laws prohibit various practices that could harm fair competition, such as agreements between competitors to fix prices, allocate markets, or manipulate supply and demand.
                    By preventing anti-competitive behavior, consumers can benefit from lower prices and better products.</p>
                    <p className="mt-2">Enforcement of antitrust laws typically falls under the jurisdiction of government agencies, such as the Federal Trade Commission (FTC) and the Department of Justice (DOJ) in the United
                    States. These agencies investigate and prosecute violations of antitrust laws and may take legal action to remedy anti-competitive practices, such as imposing fines, demanding divestitures, or seeking injunctions.</p>
                </section>
            </div>
        </div>
    )
}