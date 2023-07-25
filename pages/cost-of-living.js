import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function costOfLiving() {
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
                    <span className="text-gray-700">Cost of Living</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cost of Living</h1>
                    <p className="mt-4">Cost of living is the amount of money required to maintain a certain standard of living in a particular location or region. It includes the expenses associated with
                    essential goods and services, such as housing, food, transportation, healthcare, education, and other necessities. The cost of living can vary significantly from one place to another and
                    is influenced by factors such as geographic location, economic conditions, and local market dynamics.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">One of the most significant components of the cost of living is housing expenses, which encompass rent or mortgage payments, property taxes, and utilities. Another major
                    factor is the cost of groceries and dining out, which can vary based on local production, transportation costs, and demand.</p>
                    <p className="mt-2">The cost of transportation, including fuel, public transportation fares, vehicle maintenance, and insurance, also affects the cost of living. Urban areas with well-developed
                    public transit systems may have lower transportation costs compared to regions with limited options. Other factors to include are healthcare expenses (including insurance premiums, co-pays, and
                    prescription drugs), education costs (including school fees, tutoring, or private education), and local taxes (including income tax, sales tax, and property tax).</p>
                    <p className="mt-2">Inflation, or changes in the general price level of goods and services over time, can affect the cost of living. As inflation rises, the cost of goods and services will also
                    increase, making the cost of living more expensive.</p>
                    <p className="mt-2">The cost of living is often associated with the quality of life in a particular area. Regions with a higher cost of living may offer better amenities, infrastructure, and services.
                    Cost of living indexes and calculators are available to compare the relative expenses between different cities or regions. Additionally, employers may consider the cost of living when determining
                    salaries and compensation packages, especially for employees relocating to different regions.</p>
                    <p className="mt-2">Understanding the cost of living is crucial for financial planning, budgeting, and making informed decisions about where to live and work. Individuals and families need to assess
                    their own lifestyle preferences, financial capabilities, and long-term goals to determine how the cost of living may impact their financial well-being.</p>
                </section>
            </div>
        </div>
    )
}
