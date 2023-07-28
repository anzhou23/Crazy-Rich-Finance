import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function freeRider() {
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
                    <span className="text-gray-700">Free Rider Problem</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Free Rider Problem</h1>
                    <p className="mt-4">The free rider problem is a concept in economics and public goods theory that refers to a situation where some individuals benefit
                    from a public good or service without contributing to its production or cost. In other words, free riders enjoy the benefits of a resource or service
                    collectively provided by others, without having to pay for it themselves.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Public goods are non-excludable and non-rivalrous, meaning that once they are provided, individuals cannot be excluded from using them,
                    and one person&apos;s use of the good does not diminish its availability to others. Examples of public goods include national defense, street lighting,
                    clean air, and public parks.</p>
                    <p className="mt-2">Because of the non-excludability of public goods, individuals may freeload, as they can still benefit from the good regardless
                    of whether they pay for it or not. This leads to a collective action problem, where individuals may choose not to contribute, assuming others will bear the costs.</p>
                    <p className="mt-2">The free rider problem can lead to under-provision of public goods or their inefficient allocation, as the lack of sufficient contributions
                    can hinder their production or maintenance. To address this problem, governments and organizations often use taxation, subsidies, or other mechanisms to encourage
                    contributions and ensure the continued provision of public goods. Additionally, voluntary collective action and social norms can foster cooperation and reduce free
                    riding tendencies.</p>
                </section>
            </div>
        </div>
    )
}