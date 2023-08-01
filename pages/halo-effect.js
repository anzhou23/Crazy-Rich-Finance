import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function HaloEffect() {
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
                    <span className="text-gray-700">Halo Effect</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Halo Effect</h1>
                    <p className="mt-4">The halo effect is a cognitive bias that influences our perception of a person, brand, product, or company based on a single positive trait or attribute. It occurs
                    when a positive impression in one area of an individual or entity leads us to assume they have other positive qualities as well, regardless of whether we&apos;ve seen those qualities or
                    not. In other words, the halo effect can cause people to believe that because something is good in one aspect, it must be good in other aspects.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When we encounter something with a positive quality or trait, we tend to assume that other qualities related to it must also be positive. For example, if we think someone
                    is attractive, we may subconsciously assume they are also intelligent, kind, or talented, even if we have no direct evidence of these traits.</p>
                    <p className="mt-2">Companies often leverage the halo effect in advertising and branding to create a positive association with their products or services. For instance, they may use popular
                    celebrities or influential figures to endorse a product.</p>
                    <p className="mt-2">The halo effect can significantly impact decision-making processes. When evaluating a product, service, or individual, the positive perception from one characteristic can
                    overshadow other aspects, leading to biased judgments and faulty assumptions. People may overlook or downplay negative aspects or flaws due to the overall positive impression created by the halo effect.</p>
                    <p className="mt-2">Being aware of the halo effect can help individuals make more objective and rational judgments. It is essential to critically evaluate each attribute independently and avoid
                    making assumptions solely based on a single positive or negative trait.</p>
                </section>
            </div>
        </div>
    )
}