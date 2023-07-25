import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function complement() {
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
                    <span className="text-gray-700">Complement</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Complement</h1>
                    <p className="mt-4">In economics, a complement is a good or service used together with another good or service to satisfy a particular need or desire. Complementary goods are typically consumed or
                    used jointly because they enhance the value or utility of each other when used together. When the price or availability of one of the complementary goods changes, it can impact the demand for the other.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">There are 2 main types of complements. Direct complements are goods typically consumed or used together in a fixed proportion. The demand for one directly complements the demand for
                    the other. For example, peanut butter and jelly are direct complements because they are often consumed together to make a peanut butter and jelly sandwich. Indirect complements are goods that are not used
                    directly together but are related in a way that affects their demand. For instance, if the price of cars decreases, it might increase the demand for gasoline (an indirect complement) because more people can
                    afford to drive cars and, therefore, need more fuel.</p>
                    <p className="mt-2">The concept of complements is essential in understanding consumer behavior, pricing strategies, and market dynamics. Changes in the price or availability of a complement can influence the
                    demand for the main product. For businesses, recognizing complements and how they interact with their products can be vital for setting prices, marketing, and overall business strategies.</p>
                </section>
            </div>
        </div>
    )
}
