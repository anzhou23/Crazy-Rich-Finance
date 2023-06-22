import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function kpi() {
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
                    <span className="text-gray-700">Key Performance Indicator</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Key Performance Indicator</h1>
                    <p className="mt-4">Key Performance Indicators (KPIs) are quantifiable metrics used to measure the performance and progress of an individual, team, department, or organization towards
                    achieving specific goals or objectives. They provide a way to track performance, identify areas for improvement, and make data-driven decisions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">KPIs can be financial, operational, customer-focused, or related to other key aspects of performance, depending on the organization&apos;s goals and priorities.
                    Effective KPIs are directly aligned with the goals and objectives of the individual, team, or organization. Well-defined KPIs help establish clarity and focus, ensuring that efforts and
                    resources are directed towards strategic priorities.</p>
                    <p className="mt-2">KPIs provide objective data that can drive informed decision making. By regularly monitoring and analyzing KPIs, organizations can identify trends, patterns, and areas
                    requiring attention. KPIs enable management to make data-driven decisions, allocate resources effectively, and take corrective actions when performance deviates from desired targets.</p>
                    <p className="mt-2">KPIs should be defined in a way that enables consistent and standardized measurement, often using quantifiable data points. Clear criteria and benchmarks are established
                    to assess whether performance is meeting, exceeding, or falling short of expectations.</p>
                </section>
            </div>
        </div>
    )
}