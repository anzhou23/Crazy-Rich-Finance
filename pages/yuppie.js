import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function yuppie() {
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
                    <span className="text-gray-700">Yuppie</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Yuppie</h1>
                    <p className="mt-4">Yuppie is a term used to describe young urban professionals who are typically characterized by their youth, affluence, and business success. They are often driven individuals who
                    have achieved financial stability at a relatively young age. Yuppies are commonly associated with a preppy style and a desire to display their success through their appearance and possessions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The term &quot;yuppie&quot; originated in the 1980s as a derogatory label for young, wealthy, and obnoxious business people. In the modern era, the term &quot;yuppie&quot; has
                    evolved to encompass a broader range of affluent professionals, including those in the tech industry. Yuppies are typically well-educated professionals working in industries like finance, tech,
                    academia, and the arts.</p>
                </section>
            </div>
        </div>
    )
}
