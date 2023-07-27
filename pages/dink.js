import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function dink() {
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
                    <span className="text-gray-700">Dual Income, No Kids</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dual Income, No Kids</h1>
                    <p className="mt-4">&quot;DINK&quot; stands for &quot;Dual Income, No Kids.&quot; It is used to describe a household or couple where both partners have incomes, and they have chosen
                    not to have children. DINK couples are often characterized by their higher disposable incomes, as they don&apos;t have the financial responsibilities associated with raising children.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">DINK households may have more flexibility in their financial decisions and lifestyle choices compared to households with children. They often have more discretionary
                    income, which can be allocated to various expenses, such as travel, hobbies, saving for retirement, or investing.</p>
                    <p className="mt-2">Since they don&apos;t have the financial demands of raising children, DINK couples may have greater opportunities for career advancement, further education, and pursuing
                    personal interests. Additionally, they may have more time and resources to focus on their relationship and personal development.</p>
                    <p className="mt-2">The decision to be a DINK couple is a personal one and can be influenced by various factors, such as career goals, lifestyle preferences, and individual priorities.
                    Some couples may choose to be DINK for a period of time before starting a family, while others may decide to remain child-free throughout their lives.</p>
                </section>
            </div>
        </div>
    )
}
