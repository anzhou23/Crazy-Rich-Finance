import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function depreciation() {
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
                    <span className="text-gray-700">Depreciation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Depreciation</h1>
                    <p className="mt-4">Depreciation is the decrease in an asset&apos;s value over time due to wear and tear, obsolescence, or other factors. Businesses commonly use depreciation to allocate the cost of an asset over its useful life,
                    matching expenses with the revenue the asset generates.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">There are several methods used to calculate depreciation, including the straight-line method, declining balance method, and units of production method. The choice of method depends on factors such as the nature of the asset, its
                    estimated useful life, and applicable accounting regulations.</p>
                    <p className="mt-2">The straight-line method is the most common depreciation method. It evenly allocates the cost of the asset over its useful life. The formula for straight-line depreciation is: (Cost of Asset - Salvage Value) / Useful Life.</p>
                    <p className="mt-2">Factors that influence an asset&apos; depreciation include the initial cost of the asset, its estimated useful life, salvage value (the estimated value at the end of its useful life), and the chosen depreciation method.
                    Depreciation is a non-cash expense, meaning it does not involve an actual outflow of cash. Instead, it reflects the reduction in the value of an asset over time.</p>
                    <p className="mt-2">Depreciation affects both the balance sheet and income statement. On the balance sheet, it reduces the value of the asset over time, reflecting its decreased worth. On the income statement, depreciation expense reduces net income
                    and contributes to the calculation of operating income.</p>
                    <p className="mt-2">Governments often allow businesses to deduct depreciation expenses from their taxable income, resulting in lower tax obligations. This deduction recognizes that assets lose value over time and enables businesses to recover the cost
                    of acquiring assets.</p>
                </section>
            </div>
        </div>
    )
}
