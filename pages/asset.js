import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function asset() {
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
                    <span className="text-gray-700">Asset</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Asset</h1>
                    <p className="mt-4">An asset refers to something of value that an individual, company, or organization owns or controls, with the expectation that it will provide future economic benefits. Assets can take various forms and
                    encompass both tangible and intangible items.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Tangible assets are physical objects that can be touched, seen, and measured. Examples of tangible assets include real estate properties, vehicles, machinery, equipment, inventory, and cash.</p>
                    <p className="mt-2">Intangible assets lack physical substance but still hold value. They include intellectual property, such as patents, copyrights, trademarks, and trade secrets. Other examples of intangible assets are goodwill, brand recognition,
                    customer relationships, software, and licenses.</p>
                    <p className="mt-2">Current assets are those that are expected to be converted into cash or used up within one year or the operating cycle of a business. Common current assets include cash and cash equivalents, accounts receivable, inventory, and
                    short-term investments.</p>
                    <p className="mt-2">Fixed assets, also known as property, plant, and equipment (PP&E), are long-term assets held for productive use in the business. These assets have a useful life of more than one year and include items such as buildings, land,
                    vehicles, machinery, and furniture.</p>
                    <p className="mt-2">Financial assets are instruments representing ownership of an entity or a contractual right to receive future cash flows. Examples include stocks, bonds, mutual funds, derivatives, bank deposits, and other securities.</p>
                    <p className="mt-2">Assets play a crucial role in financial analysis, as they contribute to an entity&apos;s net worth, liquidity, and ability to generate income. Individuals and businesses aim to acquire and manage assets effectively to build
                    wealth, generate returns, and support their operational activities.</p>
                </section>
            </div>
        </div>
    )
}