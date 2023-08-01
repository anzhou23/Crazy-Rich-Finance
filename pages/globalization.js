import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function globalization() {
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
                    <span className="text-gray-700">Globalization</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Globalization</h1>
                    <p className="mt-4">Globalization is the interconnectedness and integration of economies, societies, and cultures across the world. It is driven by advancements in technology,
                    communication, and transportation, which have facilitated the flow of goods, services, information, and people across national borders. Globalization has had a profound impact on
                    various aspects of life, including economics, politics, culture, and the environment.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Globalization has led to a significant increase in international trade, as countries exchange goods and services with one another to meet the demands of their
                    populations. Technological advancements, especially the internet, have facilitated the rapid and widespread exchange of information and ideas on a global scale.</p>
                    <p className="mt-2">Companies and individuals invest in businesses and assets outside their home countries, seeking new markets and opportunities for growth. Production processes have
                    become increasingly globalized, with different components of a product being manufactured in various countries and assembled elsewhere. Globalization has also given rise to multinational
                    corporations that operate in multiple countries, capitalizing on global markets and resources.</p>
                    <p className="mt-2">Globalization has enabled the exchange of cultural ideas, traditions, and practices, leading to a more interconnected and diverse world. People move across borders in
                    search of better economic opportunities, leading to increased international migration.</p>
                    <p className="mt-2">The concept of globalization has been a subject of ongoing debate. Proponents argue that it fosters economic development and cooperation, leading to increased economic
                    growth, access to a wider range of products and services, technological advancements, and cultural exchange. Critics raise concerns about its potential negative consequences, including
                    exacerbating income inequality, threatening local cultures and traditions, and leading to environmental challenges.</p>
                </section>
            </div>
        </div>
    )
}