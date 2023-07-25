import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function badDebt() {
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
                    <span className="text-gray-700">Bad Debt</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bad Debt</h1>
                    <p className="mt-4">Bad debt is debt that does not lead to any long-term financial benefits and can create financial burdens for the borrower.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Debt incurred from credit cards, payday loans, or other high-interest loans to finance discretionary expenses like vacations or luxury items can be
                    considered bad debt. The interest rates on such debts are often significantly higher, and they do not contribute to building wealth or assets.</p>
                    <p className="mt-2">Borrowing to purchase items that quickly lose value, such as cars, electronics, or furniture, can result in bad debt, as the borrower may owe more on
                    the loan than the item is worth due to interest charges. This can lead to financial stress, high-interest costs, and a cycle of debt that is challenging to break. It is
                    essential to minimize bad debt and prioritize paying off high-interest debts to achieve better financial stability and freedom.</p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}
