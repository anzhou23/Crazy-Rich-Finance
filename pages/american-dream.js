import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function americanDream() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">American Dream</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">American Dream</h1>
                    <p className="mt-4">The American Dream is the belief that every individual, regardless of their background or social status, has the opportunity to achieve success, prosperity, and upward
                    mobility through hard work, determination, and merit. It is a concept deeply rooted in the ideals of freedom, equality, and opportunity that have shaped the United States.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The American Dream often involves achieving financial stability, economic success, and a comfortable standard of living. It embodies the notion that individuals can improve
                    their socioeconomic status and provide a better life for themselves and their families. Anyone can move up the social ladder based on their abilities and efforts and should have equal opportunity
                    to pursue their dreams, regardless of their social or economic background, race, or gender.</p>
                    <p className="mt-2">Education plays a significant role in the American Dream. It is seen as a pathway to personal and professional growth, providing individuals with the knowledge and skills needed
                    to pursue their goals and aspirations. Owning a home is a symbol of achieving the American Dream. It represents stability, security, and the ability to build wealth over time.</p>
                    <p className="mt-2">The concept of the American Dream is subjective and can vary from person to person. While it has been a central theme in American culture and society, there are ongoing debates
                    about its attainability and whether it remains accessible to all individuals, considering factors such as income inequality, systemic barriers, and economic challenges.</p>
                </section>
            </div>
        </div>
    )
}