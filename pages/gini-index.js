import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function giniIndex() {
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
                    <span className="text-gray-700">Gini Index</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gini Index</h1>
                    <p className="mt-4">The Gini index, also known as the Gini coefficient, measures income or wealth inequality within a population. It is named after the Italian statistician Corrado Gini,
                    who developed the concept in 1912. The Gini index ranges from 0 to 1, where 0 represents perfect equality (everyone has the same income or wealth), and 1 represents perfect inequality
                    (one person or household has all the income or wealth, while others have none).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Economists and policymakers often use the Gini index to analyze and compare income or wealth distribution among different countries or regions. It helps identify disparities
                    in economic well-being and assess the degree of inequality within a society. However, it is a snapshot of inequality at a specific point in time and does not provide insights into the underlying
                    causes of inequality.</p>
                    <p className="mt-2">Here&apos;s how the Gini index is calculated:</p>
                    <ul className="list-disc ml-6">
                        <li>A population is ranked from lowest to highest income or wealth.</li>
                        <li>The cumulative share of income or wealth is calculated for each percentile.</li>
                        <li>The Gini index is then computed as the area between the Lorenz curve (the actual cumulative income/wealth distribution) and the line of perfect equality (a diagonal line representing equal
                            distribution), divided by the total area under the line of perfect equality.</li>
                    </ul>
                    <p className="mt-2">A Gini index close to 0 indicates more equal distribution, while a Gini index closer to 1 suggests greater inequality. For instance, a Gini index of 0.25 indicates relatively low
                    inequality, while an index of 0.50 or higher indicates significant inequality.</p>
                </section>
            </div>
        </div>
    )
}