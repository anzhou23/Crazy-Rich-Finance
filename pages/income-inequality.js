import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function incomeInequality() {
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
                    <span className="text-gray-700">Income Inequality</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Income Inequality</h1>
                    <p className="mt-4">Income inequality is the unequal distribution of income among individuals or households within a society or economy. It is a measure of the disparity in
                    earnings and wealth between different segments of the population. Income inequality is often depicted using statistical tools such as the Gini coefficient, which quantifies
                    the degree of inequality within a given population.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Differences in wages and salaries across various industries, occupations, and skill levels can lead to significant income disparities. Higher levels of
                    education and skills often result in higher-paying jobs, creating an income gap between those with advanced degrees and those with less education. Technological progress can
                    lead to automation and the displacement of certain jobs, potentially widening the income gap. Meanwhile, global trade and outsourcing can affect wages and job opportunities,
                    impacting income distribution in both developed and developing countries. Additionally, unionization rates, minimum wage laws, and labor market policies, as well as
                    income from investments, capital gains, and assets such as real estate and stocks can all affect income inequality.</p>
                    <p className="mt-2">Income inequality has social, economic, and political implications. Excessive income inequality can lead to reduced social mobility, as those with fewer resources
                    may have limited access to education, healthcare, and other opportunities. It can also result in social unrest and political instability. Governments, policymakers, and organizations
                    often seek to address income inequality through progressive taxation, targeted social programs, education and training initiatives, and labor market reforms.</p>
                </section>
            </div>
        </div>
    )
}