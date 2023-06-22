import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function welfareState() {
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
                    <span className="text-gray-700">Welfare State</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welfare State</h1>
                    <p className="mt-4">In a welfare state, the government plays an active role in promoting the economic and social well-being of its citizens. It typically involves the provision of various social
                    programs and benefits aimed at ensuring a minimum standard of living, healthcare, education, and social security for the population.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A welfare state establishes a social safety net by providing social programs and benefits to support individuals and families in need. This may include unemployment benefits,
                    healthcare coverage, income support, housing assistance, and access to education and training programs. It is built on the premise of social solidarity, with the belief that collective efforts and
                    support can improve the overall well-being of society. It promotes social cohesion by providing a safety net and ensuring basic needs are met, which can contribute to a more stable and harmonious society.</p>
                    <p className="mt-2">A welfare state typically involves redistributive policies, where resources are collected through taxes and used to fund social programs and benefits. The aim is to reduce income
                    disparities and promote social equity by reallocating resources from those who have more to those who have less. Welfare services are available to all citizens, regardless of their income or social
                    status, ensuring a basic level of support and equal opportunities for all.</p>
                    <p className="mt-2">The sustainability of a welfare state relies on adequate financing through taxes, contributions, or other revenue sources. Balancing the costs of social programs with economic growth and
            fiscal responsibility is crucial to ensure the long-term viability of the welfare state model.</p>
                </section>
            </div>
        </div>
    )
}
