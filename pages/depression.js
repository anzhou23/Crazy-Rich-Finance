import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function depression() {
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
                    <span className="text-gray-700">Depression</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Depression</h1>
                    <p className="mt-4">A depression is a severe and prolonged economic downturn characterized by a significant decline in economic activity, widespread unemployment, reduced
                    consumer spending, and declining business investments. It is an extreme form of an economic recession that lasts for an extended period, often spanning several years.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During a depression, there is a sharp rise in unemployment as businesses struggle to stay afloat and reduce their workforce. Many people lose their jobs,
                    leading to a decrease in household income and reduced spending. Economic output, including production and consumption of goods and services, experiences a substantial and
                    sustained contraction. Industries may face substantial losses, resulting in reduced productivity.</p>
                    <p className="mt-2">Depressions are often associated with deflation, or a general decline in prices across the economy. As consumer demand drops, businesses may lower prices
                    to attract buyers, leading to a cycle of falling prices and reduced profits.</p>
                    <p className="mt-2">A depression can lead to significant financial turmoil, including bank failures, stock market crashes, and credit market freezes. Many businesses and individuals
                    may have trouble servicing their debts, leading to a credit crunch. One of the most infamous examples of an economic depression is the Great Depression that occurred in the 1930s,
                    which devastated the global economy.</p>
                    <p className="mt-2">Governments and central banks often implement various measures, such as fiscal stimulus and monetary policies, to mitigate the effects of a depression and support
                    economic recovery. Note that the term &quot;depression&quot; is not commonly used in official economic terminology, and economists often prefer the more precise and measured term
                    &quot;recession&quot; to describe economic downturns.</p>
                </section>
            </div>
        </div>
    )
}
