import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function gentrification() {
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
                    <span className="text-gray-700">Gentrification</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gentrification</h1>
                    <p className="mt-4">Gentrification occurs when a historically disadvantaged or low-income neighborhood undergoes significant economic and demographic changes, typically resulting
                    in an influx of wealthier residents and businesses. It often involves the renovation and redevelopment of properties, the arrival of upscale businesses, and an overall improvement
                    in the neighborhood&apos;s infrastructure and amenities. As a consequence, property values tend to rise, which can lead to increased rent and property prices.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The term &quot;gentrification&quot; is sometimes associated with both positive and negative connotations. On one hand, it can lead to increased economic investment,
                    improved public services, and a reduction in crime rates. It can also lead to the preservation of historic buildings and the revitalization of neglected urban areas.</p>
                    <p className="mt-2">However, gentrification is also controversial as long-term residents who may not be able to afford the rising costs of living get displaced. As the neighborhood
                    becomes more affluent, the original community&apos;s cultural identity and social fabric may erode, leading to social inequality and loss of community cohesion.</p>
                </section>
            </div>
        </div>
    )
}