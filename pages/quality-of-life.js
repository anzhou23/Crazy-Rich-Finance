import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function qualityOfLife() {
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
                    <span className="text-gray-700">Quality of Life</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Quality of Life</h1>
                    <p className="mt-4">Quality of life refers to the overall well-being and satisfaction experienced by individuals or communities in various aspects of their lives. It encompasses a wide range of factors
                    that contribute to a person&apos;s happiness, health, social connections, personal fulfillment, and enjoyment of life.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Quality of life goes beyond financial wealth and includes physical health, mental and emotional well-being, social relationships, personal fulfillment, access to basic needs and services,
                    safety and security, work-life balance, environmental factors, and cultural and recreational opportunities. It is subjective, varies from person to person, and can be influenced by individual values,
                    beliefs, priorities, and life circumstances. What may enhance one person&apos;s quality of life may not have the same impact on someone else.</p>
                    <p className="mt-2">Numerous factors can influence an individual&apos;s quality of life. These include physical and mental health status, socioeconomic conditions, educational opportunities, employment and
                    income levels, access to healthcare and social services, housing quality, community safety, environmental quality, social support networks, leisure and recreational activities, and overall life satisfaction.</p>
                    <p className="mt-2">Assessing and improving quality of life requires a combination of objective and subjective measures. Objective measures include factors that can be quantified and measured, such as income
                    levels, health indicators, crime rates, or educational attainment. Subjective measures involve self-assessment and perceptions of one&apos;s own well-being and satisfaction.</p>
                    <p className="mt-2">Understanding the factors that contribute to a high quality of life can guide decision-making and resource allocation to enhance the well-being of individuals and communities. This can
                    involve initiatives related to healthcare, education, infrastructure development, social programs, environmental sustainability, and community engagement.</p>
                </section>
            </div>
        </div>
    )
}