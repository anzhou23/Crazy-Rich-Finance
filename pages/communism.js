import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function communism() {
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
                    <span className="text-gray-700">Communism</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Communism</h1>
                    <p className="mt-4">Communism is a political and economic ideology based on the principle of common ownership of the means of production and the absence of private property. In a communist system,
                    the government or a centralized authority controls the resources and distribution of goods and services, aiming to achieve a classless society where wealth and resources are shared equally among
                    all members of the community.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">All resources, including land, factories, and businesses, are owned and controlled by the community or the state. There is no private ownership of property. A centralized authority
                    (usually the government) makes all economic decisions, such as production levels, distribution of goods, and resource allocation, rather than by market forces.</p>
                    <p className="mt-2"> Communism seeks to eliminate social classes and create a society where everyone&apos;s needs are met, and there is no exploitation or oppression of one group by another. Everyone
                    contributes according to their abilities and receives according to their needs.</p>
                    <p className="mt-2">Historically, communist movements have been associated with figures like Karl Marx and Friedrich Engels, who outlined their ideas in the famous Communist Manifesto published in 1848.
                    Countries such as the Soviet Union, China, Cuba, and North Korea have implemented communist systems to varying degrees, but its practical implementation has often been accompanied by authoritarian governance
                    and limitations on individual freedoms.</p>
                    <p className="mt-2">Critics argue centralized planning can lead to inefficiencies, lack of innovation, and economic stagnation. Additionally, some argue the concentration of power in a central authority
                    can lead to abuses of power and human rights violations.</p>
                </section>
            </div>
        </div>
    )
}
