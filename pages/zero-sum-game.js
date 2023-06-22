import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function zeroSumGame() {
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
                    <span className="text-gray-700">Zero Sum Game</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Zero Sum Game</h1>
                    <p className="mt-4">A &quot;zero-sum game&quot; is a situation where the gains of one participant or entity are exactly offset by the losses of another participant or entity. In other
                    words, the total gains and losses within the system balance out, resulting in a net sum of zero.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Zero-sum games often occur when resources, rewards, or opportunities are limited and cannot be expanded. The total value available remains fixed, and participants compete to
                    secure a larger share of the existing value. In zero-sum games, participants typically focus on maximizing their own gains relative to others rather than creating overall value. Success is
                    measured in terms of outperforming or surpassing competitors rather than achieving absolute gains. Zero-sum games tend to foster a competitive and potentially adversarial environment, as
                    participants directly oppose each other to secure a greater portion of the limited resources. The interests of the participants are often in direct conflict.</p>
                </section>
            </div>
        </div>
    )
}