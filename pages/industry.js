import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function industry() {
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
                    <span className="text-gray-700">Industry</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Industry</h1>
                    <p className="mt-4">An industry is a specific category or sector of the economy characterized by the production, manufacturing, or provision of similar types of goods or
                    services. Industries encompass a wide range of businesses and organizations that share common activities, technologies, or market segments. They play a crucial role in the
                    economy&apos;s overall structure and contribute to its growth and development.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Industries are composed of businesses engaging in similar activities or produce related products or services. They typically serve similar customer needs or
                    target the same market segments. For example, the auto industry includes companies involved in designing, manufacturing, and selling cars. The technology industry
                    includes companies that develop software, manufacture hardware, and provide IT services.</p>
                    <p className="mt-2">An industry&apos;s success can have ripple effects on other industries and the economy&apos;s overall health. They may be subject to specific regulations, standards,
                    and practices that ensure product quality, safety, and fair competition. Government agencies often oversee industries to protect consumers and maintain a level playing field.</p>
                    <p className="mt-2">Throughout history, major shifts in industries, known as industrial revolutions, have transformed economies and societies. These revolutions involve significant
                    technological advancements that lead to changes in production methods, labor practices, and economic structures.</p>
                    <p className="mt-2">Industries can be analyzed and categorized on a national or global scale. For example, the pharmaceutical industry operates internationally, with companies in
                    various countries contributing to drug research, development, and production. They are typically classified into sectors, such as manufacturing, technology, finance, healthcare,
                    and more. These sectors can be further divided into sub-sectors based on specific business activities. They are often interconnected and interdependent. For instance, the energy
                    industry supplies power to various sectors, including manufacturing, transportation, and residential sectors.</p>
                    <p className="mt-2">The performance of certain industries can serve as economic indicators. For example, the housing industry is closely watched as a metric for economic health,
                    as it reflects consumer spending, construction activity, and employment trends.</p>
                </section>
            </div>
        </div>
    )
}