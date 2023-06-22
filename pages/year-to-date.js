import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ytd() {
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
                    <span className="text-gray-700">Year to Date</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Year to Date</h1>
                    <p className="mt-4">Year to date (YTD) is a financial term used to describe the period from the beginning of the current calendar year up to the present date. It provides a snapshot of performance or data for the
                    time elapsed since the start of the year.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">YTD analysis enables the comparison of current performance against the same period in previous years. By examining how metrics or data have changed over the same timeframe, trends and patterns
                    can be identified.</p>
                    <p className="mt-2">YTD analysis takes into account any seasonality effects that may be present in the data by considering the specific time period within the calendar year and accounting for fluctuations that may
                    occur in different seasons. It helps assess the progress made towards specific goals or targets set for the year. Additionally, it provides a benchmark for measuring achievements or gaps in performance and allows
                    for adjustments or corrective actions to be made as necessary.</p>
                </section>
            </div>
        </div>
    )
}