import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function exponentialGrowth() {
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
                    <span className="text-gray-700">Exponential Growth</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exponential Growth</h1>
                    <p className="mt-4">Exponential growth is a type of growth that occurs when a quantity increases at a constant percentage rate over a specific period. In this growth pattern,
                    the rate of increase gets progressively larger as the quantity itself increases. As a result, the total growth accumulates rapidly, creating a curve that rises sharply over time.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In exponential growth, the increase in quantity is not linear but rather multiplicative. For example, if a quantity grows at a constant rate of 10% per year, its
                    growth over multiple years would not be a simple addition of 10% each year. Instead, it would be a multiplication of the previous year&apos;s value by 1.10 (100% + 10%) each year,
                    leading to a compounding effect.</p>
                    <p className="mt-2">Exponential growth is often observed in natural phenomena, technological advancements, and financial investments. It can lead to substantial growth and significant
                    changes over relatively short periods, especially when compared to linear growth patterns.</p>
                    <p className="mt-2">The concept of exponential growth has both positive and negative implications. In positive cases, it can signify rapid progress, compound interest gains, and significant
                    expansion in various fields. However, it can also pose challenges when it comes to managing resource consumption, population growth, or environmental issues, where unchecked exponential
                    growth may become unsustainable.</p>
                </section>
            </div>
        </div>
    )
}
