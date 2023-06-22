import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function costBasis() {
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
                    <span className="text-gray-700">Cost Basis</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cost Basis</h1>
                    <p className="mt-4">Cost basis is the original purchase price or value of an asset, such as stocks, bonds, real estate, or other investments. It is a reference point for determining the capital gain or
                    loss when the asset is eventually sold or disposed of.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The cost basis represents the amount of money or value that was initially invested in acquiring the asset. It includes the purchase price, transaction fees, and any other expenses directly related
                    to the acquisition.</p>
                    <p className="mt-2">Over time, an asset&apos;s cost basis may be adjusted or increased to account for certain events or transactions. For example, if an investor makes significant improvements to a property, the cost basis
                    can be increased to reflect the additional investment.</p>
                    <p className="mt-2">When an asset is sold or disposed of, the difference between the selling price and the cost basis determines the capital gain or loss. If the selling price is higher than the cost basis, it results in
                    a capital gain. Conversely, if the selling price is lower, it leads to a capital loss.</p>
                    <p className="mt-2">The cost basis plays a crucial role in determining the tax liability associated with the sale of an asset. The capital gain or loss is subject to taxation, with different tax rates and rules depending
                    on the holding period and the type of asset.</p>
                    <p className="mt-2">In the case of investments like stocks, the cost basis may need adjustments to account for dividends, stock splits, or distributions received during the holding period. These adjustments can affect the
                    cost basis and subsequently impact the capital gain or loss.</p>
                </section>
            </div>
        </div>
    )
}