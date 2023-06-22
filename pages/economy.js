import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economy() {
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
                    <span className="text-gray-700">Economy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economy</h1>
                    <p className="mt-4">The economy refers to the system of production, distribution, and consumption of goods and services within a region or a country. It encompasses all the activities and interactions related to
                    producing, exchanging, and using resources to satisfy human wants and needs.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The economy involves creating goods and services through various economic activities, such as manufacturing, agriculture, construction, and services like healthcare, education, and finance. These activities
                    involve using resources such as labor, capital, and natural resources.</p>
                    <p className="mt-2">The distribution of goods and services involves the movement of products from producers to consumers. This includes transportation, logistics, marketing, and retail activities that facilitate the exchange of goods and services.</p>
                    <p className="mt-2">The economy provides employment opportunities, where individuals work to earn income that enables them to participate in economic activities and consume goods and services. Employment levels and wages are important
                    indicators of the overall health and performance of the economy.</p>
                    <p className="mt-2">Economies can operate under different economic systems, such as market economies, command economies, mixed economies, or traditional economies. These systems determine the roles of government, private sector,
                    and individuals in economic decision-making and resource allocation.</p>
                    <p className="mt-2">Various economic indicators, such as gross domestic product (GDP), inflation rates, unemployment rates, and consumer confidence, are used to assess the performance, growth, and stability of the economy. These
                    indicators provide insights into the overall health of the economy and help guide economic policies and decision-making.</p>
                    <p className="mt-2">Individuals, businesses, and governments engage in consumption by using goods and services to satisfy their needs and desires. Consumer spending plays a crucial role in driving economic growth and overall economic activity.</p>
                </section>
            </div>
        </div>
    )
}
