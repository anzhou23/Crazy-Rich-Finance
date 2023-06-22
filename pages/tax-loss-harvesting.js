import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function taxLossHarvesting() {
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
                    <span className="text-gray-700">Tax Loss Harvesting</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tax Loss Harvesting</h1>
                    <p className="mt-4">Tax loss harvesting is a strategy used by investors to offset capital gains taxes by selling investments that have experienced a loss. The purpose is to realize the losses on
                    those investments and use them to offset the taxable gains from other investments, thereby reducing the overall tax liability.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">If the capital losses exceed the capital gains in a given tax year, the excess losses can be carried forward to future years to offset future capital gains. In some cases,
                    losses can also be carried back to offset gains from previous years.</p>
                    <p className="mt-2">By strategically harvesting losses, investors can potentially reduce their overall tax liability and keep more of their investment returns. It allows for the realization of losses
                    in a tax-efficient manner, providing a valuable tax benefit. Tax loss harvesting is often used as part of a long-term investment strategy. It can be particularly beneficial for investors in higher tax
                    brackets or those with significant capital gains.</p>
                    <p className="mt-2">The wash-sale rule is an important consideration in tax loss harvesting. It prohibits investors from repurchasing the same or a substantially identical investment within 30 days
                    before or after the sale that generated the loss. Violating this rule would disallow the deduction of the loss for tax purposes.</p>
                </section>
            </div>
        </div>
    )
}