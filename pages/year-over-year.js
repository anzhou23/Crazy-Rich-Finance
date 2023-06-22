import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function yoy() {
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
                    <span className="text-gray-700">Year Over Year</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Year Over Year</h1>
                    <p className="mt-4">Year-over-year (YOY) is a financial comparison method used to analyze data or measure performance over a 12-month period. It refers to comparing data or metrics from the same
                    time period in consecutive years to identify trends, changes, or growth rates.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">YOY analysis is particularly useful in identifying long-term trends and patterns that may occur within a specific industry or market. It helps highlight seasonality effects by
                    comparing data for corresponding periods in different years and takeing into account the natural fluctuations in business cycles that may affect performance. This allows for a more comprehensive
                    assessment of how a business or market has performed relative to previous years, considering both positive and negative impacts.</p>
                    <p className="mt-2">YOY analysis enables the calculation of growth rates or changes in percentages. By comparing data over a full year, it provides a broader perspective on the rate of change and
                    helps evaluate the effectiveness of strategies or initiatives implemented over time</p>
                </section>
            </div>
        </div>
    )
}
