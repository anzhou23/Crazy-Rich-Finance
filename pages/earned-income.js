import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function earnestIncome() {
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
                    <span className="text-gray-700">Earnest Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnest Income</h1>
                    <p className="mt-4">Earned income is money an individual receives for providing services or performing work. It is the income earned through active participation in employment,
                    self-employment, or any other form of labor or service.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Earned income can come from various sources, such as:</p>
                    <ul className="list-disc ml-6">
                        <li>Wages or salaries from a job: This is the most common form of earned income, where individuals receive regular pay for their work based on an hourly, weekly, or monthly rate.</li>
                        <li>Self-employment income: If someone runs their own business or works as an independent contractor, the money they earn from their business activities is considered earned income.</li>
                        <li>Bonuses and commissions: Additional payments based on performance or achievements at work are also considered part of earned income.</li>
                        <li>Tips and gratuities: For certain jobs, individuals may receive tips or gratuities from customers or clients, and this is considered earned income.</li>
                    </ul>
                    <p className="mt-2">Earned income is distinct from unearned income, which includes income from sources like investments, rental properties, or dividends. The distinction is important for
                    tax purposes, as earned income is generally subject to payroll taxes (e.g., Social Security and Medicare taxes) and may be eligible for certain tax deductions and credits.</p>
                </section>
            </div>
        </div>
    )
}
