import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grossIncome() {
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
                    <span className="text-gray-700">Gross Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gross Income</h1>
                    <p className="mt-4">Gross income is the total earnings or revenues an individual or business receives before any deductions or taxes are applied. It represents
                    the total income generated from all sources, including wages, salaries, business profits, rental income, interest, dividends, and other revenue sources.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">For individuals, gross income includes all forms of taxable income, such as wages from employment, self-employment income, investment income,
                    rental income, and any other income sources. It is the starting point for calculating taxable income, from which deductions and exemptions are subtracted to determine the
                    individual&apos;s taxable income.</p>
                    <p className="mt-2">For businesses, gross income is the total revenue generated from the sale of goods or services before any expenses or costs, such as the cost of goods
                    sold (COGS) and operating expenses, are deducted. Gross income serves as a crucial indicator of a person&apos;s or business&apos;s financial position and is a fundamental
                    element in various financial calculations, tax filings, and financial planning.</p>
                    <p className="mt-2">It is important to distinguish between gross income and net income. Net income represents the amount left after deducting all expenses, taxes, and other
                    deductions from gross income. Net income is often referred to as &quot;the bottom line&quot; as it shows the actual profit or loss after accounting for all costs and taxes.
                    Gross income, on the other hand, reflects the total revenue before any deductions or adjustments are made.</p>
                </section>
            </div>
        </div>
    )
}