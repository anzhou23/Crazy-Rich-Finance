import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function inferiorGoods() {
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
                    <span className="text-gray-700">Inferior Goods</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Inferior Goods</h1>
                    <p className="mt-4">Inferior goods exhibit a unique relationship between their demand and consumer income. Unlike normal goods, the demand for inferior goods decreases
                    as consumer income increases. In other words, as people&apos;s income rises, they tend to buy less of these goods, and as their income falls, they buy more.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The decrease in demand for inferior goods when income rises is due to the income effect. As people&apos;s income increases, they can purchase higher-quality
                    goods or substitute them with better alternatives, causing them to decrease their consumption of inferior goods. On the other hand, during economic downturns, when people&apos;s
                    income decreases, the demand for some inferior goods might actually increase.</p>
                    <p className="mt-2">Examples of inferior goods include generic or lower-priced brands of certain food items (like instant noodles), public transportation, used clothing, and
                    lower-end modes of transportation. For instance, as people&apos;s income increases, they may opt for more nutritious or higher-quality foods and choose to buy their own cars
                    rather than rely on public transportation.</p>
                    <p className="mt-2">Consumer preferences play a role in defining goods as inferior. An inferior good for one individual may not be inferior for another. Some people might continue
                    to purchase certain goods even when their income increases, simply because they prefer them over more expensive alternatives.</p>
                    <p className="mt-2">The status of a good as inferior can change over time and across different economic situations. In some cases, advancements in technology or changes in consumer
                    preferences may elevate a good from being considered inferior to becoming a normal or even superior good.</p>
                    <p className="mt-2">On a demand curve graph, inferior goods have a negative income elasticity of demand, meaning the percentage change in quantity demanded is negative when income
                    changes. This is in contrast to normal goods, where income elasticity is positive.</p>
                </section>
            </div>
        </div>
    )
}