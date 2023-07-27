import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function disinflation() {
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
                    <span className="text-gray-700">Disinflation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Disinflation</h1>
                    <p className="mt-4">Disinflation is a decrease in the inflation rate. It occurs when the general price levels in an economy is still rising, but at a slower rate
                    compared to previous periods. In other words, the inflation rate is decelerating.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Disinflation is not the same as deflation, where prices actually decline. Instead, it is a period of decreasing inflation, where prices are rising but
                    at a reduced rate. It is often seen as an economic indicator reflecting the economy cooling down. Additionally, it can be a sign of weaker demand for goods and
                    services, which can lead to reduced business activity.</p>
                    <p className="mt-2">Disinflation can be influenced by monetary policy, particularly the actions the central bank takes to control inflation. Central banks use various tools,
                    such as interest rates and open market operations, to manage inflation levels and stabilize the economy. While moderate disinflation may be desirable for stabilizing prices,
                    prolonged disinflation or deflation can hurt the economy. Policymakers aim to strike a balance between controlling inflation and ensuring economic growth.</p>
                    <p className="mt-2">On one hand, disinflation may provide some relief from rapidly increasing prices. On the other hand, if disinflation persists and turns into deflation,
                    it can lead to decreased consumer spending as people postpone purchases in anticipation of even lower prices. Companies may adjust their pricing strategies and production
                    decisions during a disinflationary period. They may be cautious about raising prices to avoid losing customers, and may also limit production to match reduced demand.</p>
                </section>
            </div>
        </div>
    )
}
