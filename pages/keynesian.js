import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function keynesian() {
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
                    <span className="text-gray-700">Keynesian Economics</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Keynesian Economics</h1>
                    <p className="mt-4">Keynesian economics is an economic theory and policy approach developed by the British economist John Maynard Keynes during the early 1900s. It focuses on
                    the government&apos;s role in stabilizing and managing the economy, particularly during a recession or depression.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">According to Keynesian economics, fluctuations in aggregate demand, caused by changes in consumption, investment, government spending, or net exports, can lead to
                    business cycles and economic instability.</p>
                    <p className="mt-2">Keynesians advocate for the use of fiscal policy, primarily through government spending and taxation, to manage the economy. During a recession, governments should engage
                    in deficit spending to stimulate demand and promote economic growth. Conversely, during periods of inflation, the government should reduce spending and increase taxes to control aggregate demand.
                    By stabilizing the economy in the short run, policymakers can create a conducive environment for long-term economic growth and development.</p>
                    <p className="mt-2">Keynesians also recognize the role of monetary policy in managing the economy. They believe that central banks should use interest rate adjustments and other monetary tools to
                    influence borrowing costs, investment levels, and overall spending in the economy.</p>
                    <p className="mt-2">Keynesian economics had a significant impact on economic policy-making, especially during the Great Depression and post-World War II era. The idea of government intervention to
                    stabilize the economy became widely accepted, leading to the adoption of Keynesian policies in many countries. However, critics argue that excessive government spending and intervention can lead to
                    inefficiencies, distortions in resource allocation, and long-term fiscal challenges. Additionally, there are debates about the effectiveness of fiscal and monetary policy tools in achieving desired
                    economic outcomes.</p>
                </section>
            </div>
        </div>
    )
}
