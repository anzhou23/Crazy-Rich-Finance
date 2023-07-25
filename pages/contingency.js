import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function contingency() {
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
                    <span className="text-gray-700">Contingency</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contingency</h1>
                    <p className="mt-4">In personal finance, a contingency is a planned course of action or strategy designed to handle unforeseen events or uncertain circumstances that may impact one&apos;s
                    financial situation. Contingencies are essentially backup plans individuals or households create to protect themselves against unexpected financial challenges or emergencies.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Having a contingency plan for repaying loans or debts is crucial. Unexpected changes in financial circumstances, such as a job loss, can affect one&apos;s ability to make
                    loan payments. It is essential to have a strategy in place to handle such situations, such as deferring payments or negotiating with creditors.</p>
                    <p className="mt-2">One of the most common and important contingencies is an emergency fund. It is money set aside to cover unexpected expenses, such as medical emergencies, car repairs, or
                    job loss. The general recommendation is to have 3 to 6 months&apos; worth of living expenses saved in an emergency fund.</p>
                    <p className="mt-2">Insurance policies serve as financial contingencies by providing protection against various risks. For example, health insurance covers medical expenses, auto insurance
                    covers car-related damages and accidents, and homeowner&apos;s insurance protects against property damage and liability.</p>
                    <p className="mt-2">Saving for retirement is also a form of contingency planning. Building a robust retirement fund ensures financial security during the post-working years and reduces the
                    reliance on external support.</p>
                    <p className="mt-2">In investing, diversification is a contingency strategy. Spreading investments across different asset classes helps reduce risk and protects the portfolio from the negative
                    impact of market fluctuations.</p>
                    <p className="mt-2">Creating an estate plan is a contingency measure to ensure that one&apos;s assets and finances are managed and distributed according to their wishes in the event of disability or death.</p>
                </section>
            </div>
        </div>
    )
}
