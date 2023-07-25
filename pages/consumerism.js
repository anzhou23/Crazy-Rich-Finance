import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function consumerism() {
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
                    <span className="text-gray-700">Consumerism</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consumerism</h1>
                    <p className="mt-4">Consumerism is the societal and cultural emphasis placed on acquiring and consuming goods and services, often driven by a desire for material possessions and the
                    pursuit of a higher standard of living. It is a social and economic phenomenon that encourages people to constantly purchase and use products, with the belief that increased consumption
                    leads to greater happiness and social status.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Consumerism is closely linked to materialism, where individuals measure of success, happiness, and self-worth by how much they own. It taps into psychological mechanisms,
                    such as the pursuit of happiness through consumption, known as the &quot;hedonic treadmill.&quot; However, research suggests long-term happiness is not necessarily linked to material wealth.</p>
                    <p className="mt-2">Consumerism is deeply ingrained in modern consumer culture, where people are encouraged to constantly buy things and spend money. This culture is reinforced through media,
                    peer influence, and societal norms. Companies use various marketing strategies to convince people their lives will be better or more fulfilling by owning their products or using their services.</p>
                    <p className="mt-2">While consumerism drives economic growth and supports industries, it can also have negative societal consequences. It can lead to overconsumption, income inequality, and
                    environmental degradation. It can encourage a disposable culture, where products are quickly discarded and replaced with newer versions or trends, resulting in increased waste and environmental impact.
                    Additionally, people may often use credit cards and loans to buy goods beyond their immediate financial means, leading to potential financial difficulties and indebtedness.</p>
                    <p className="mt-2">In response to consumerism&apos;s negative impacts, there have been movements advocating for more conscious and sustainable consumption, such as minimalism, ethical consumerism,
                    and responsible purchasing.</p>
                </section>
            </div>
        </div>
    )
}
