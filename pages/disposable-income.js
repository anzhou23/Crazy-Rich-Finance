import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function disposableIncome() {
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
                    <span className="text-gray-700">Disposable Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Disposable Income</h1>
                    <p className="mt-4">Disposable income is the amount of money individuals or households have available for spending, saving, or investing after deducting taxes and other
                    mandatory expenses from their total income. It is the income &quot;left over&quot; after all essential living expenses, such as taxes, housing costs, utilities, and other
                    necessary bills, have been paid.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Disposable income is calculated by subtracting all taxes, including income tax and payroll taxes, from a person&apos;s gross income or salary. It represents
                    the actual income available to spend or save after the government has taken its share. Additionally, disposable income factors in essential expenses like housing, food,
                    transportation, and healthcare.</p>
                    <p className="mt-2">Disposable income is a critical measure of financial flexibility for individuals and families. It represents the funds that can be used for discretionary
                    spending, such as entertainment, vacations, and non-essential purchases, as well as for building savings and investments.</p>
                    <p className="mt-2">From an economic standpoint, disposable income is an important indicator of consumer purchasing power. Higher disposable income generally leads to increased
                    consumer spending, which can boost economic growth. Disposable income also provides individuals with the opportunity to save for future goals or invest in various financial
                    instruments, such as stocks, bonds, mutual funds, or retirement accounts.</p>
                    <p className="mt-2">Changes in tax rates and government policies can significantly impact disposable income. Tax cuts or tax credits can increase disposable income, while tax
                    increases may reduce it.</p>
                </section>
            </div>
        </div>
    )
}
