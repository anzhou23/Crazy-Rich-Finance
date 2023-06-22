import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function emergencyFund() {
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
                    <span className="text-gray-700">Emergency Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Emergency Fund</h1>
                    <p className="mt-4">An emergency fund is a designated amount of money set aside to cover unexpected expenses or financial emergencies. It acts as a financial safety net, providing individuals or households
                    with a reserve to handle unforeseen circumstances without relying on credit cards or incurring debt.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">An emergency fund serves as a backup for situations such as medical emergencies, job loss, home repairs, or major car repairs. Having an emergency fund can help prevent a financial crisis and provide peace
                    of mind during challenging times.</p>
                    <p className="mt-2">An emergency fund should consist of liquid assets, such as cash or funds in a savings account, that can be accessed quickly and without penalties. It is essential to maintain the fund in a readily available
                    and low-risk account to ensure easy access when needed.</p>
                    <p className="mt-2">The size of an emergency fund varies depending on individual circumstances, such as income, expenses, and financial responsibilities. Financial experts recommend aiming for 3-6 months&apos; worth
                    of living expenses as a target for the emergency fund. However, individuals with more unstable income or specific financial obligations may need a larger fund to provide sufficient coverage.</p>
                    <p className="mt-2">Building an emergency fund requires consistent contributions over time. Allocate a portion of your income specifically for the fund and prioritize saving regularly. Even small contributions add up over time
                    and contribute to the overall goal of establishing a robust emergency fund.</p>
                    <p className="mt-2">Separating your emergency fund in a different account helps maintain the fund&apos;s integrity and ensures it remains dedicated solely to emergencies. Additionally, it&apos;s best practice to regularly review
                    and adjust the fund&apos;s size based on changes in financial circumstances, such as income fluctuations, new financial responsibilities, or changes in living expenses.</p>
                </section>
            </div>
        </div>
    )
}

