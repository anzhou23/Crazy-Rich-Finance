import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function freeTrade() {
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
                    <span className="text-gray-700">Free Trade</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Free Trade</h1>
                    <p className="mt-4">Free trade is a policy that promotes the unrestricted exchange of goods and services between countries without imposing tariffs,
                    quotas, or other barriers. It aims to promote economic growth, efficiency, and specialization by allowing countries to focus on producing the goods and
                    services where they have a comparative advantage, and then trading those goods with other nations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In a free trade environment, countries can import and export goods without facing excessive restrictions, making it easier for businesses
                    and consumers to access a wide range of products and services at competitive prices. Free trade agreements between countries are often established to further
                    facilitate and regulate trade relationships, reducing tariffs and promoting harmonization of regulations.</p>
                    <p className="mt-2">Advocates of free trade argue that it stimulates competition, encourages innovation, and leads to a more efficient allocation of resources,
                    ultimately benefiting consumers with more choices and lower prices. It can also foster global economic growth and help alleviate poverty in developing countries
                    by creating opportunities for export-driven industries.</p>
                    <p className="mt-2">Critics raise concerns about potential job losses in certain sectors, especially when industries in developed countries face competition from
                    lower-cost producers abroad. They also highlight the risk of unfair trade practices and environmental degradation in the pursuit of economic gains.</p>
                    <p className="mt-2">In recent years, discussions about free trade have become more complex due to concerns over labor rights, environmental sustainability, and the
                    need to strike a balance between economic interests and social welfare. As a result, some countries have adopted selective trade policies to address specific issues
                    while continuing to participate in the broader global trade landscape.</p>
                </section>
            </div>
        </div>
    )
}