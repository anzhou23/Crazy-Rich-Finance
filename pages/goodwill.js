import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function goodwill() {
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
                    <span className="text-gray-700">Goodwill</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Goodwill</h1>
                    <p className="mt-4">Goodwill, in the context of accounting and business, is an intangible asset representing the excess of a company&apos;s purchase price over the fair value of its
                    identifiable tangible and intangible assets, less liabilities. It occurs during business acquisitions, where one company acquires another company for a price higher than the sum
                    of its individual assets&apos; fair values.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Goodwill represents the reputation, brand value, customer loyalty, and other non-physical assets that contribute to a company&apos;s overall value but are not separately
                    identifiable. It is considered an intangible asset because it lacks physical substance and cannot be physically measured or seen.</p>
                    <p className="mt-2">When a company acquires another business, it pays a premium based on the target company&apos;s perceived value, which includes factors such as its customer base,
                    intellectual property, skilled workforce, or market position. The excess amount paid over the fair value of identifiable assets is recorded as goodwill on the acquiring company&apos;s balance sheet.</p>
                    <p className="mt-2">Goodwill is subject to periodic impairment tests to ensure its value is still accurate. If the value of goodwill declines over time due to changes in the business or market
                    conditions, an impairment charge may be recorded, reducing the goodwill value on the balance sheet.</p>
                </section>
            </div>
        </div>
    )
}