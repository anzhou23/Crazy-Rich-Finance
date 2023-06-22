import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function tooBigToFail() {
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
                    <span className="text-gray-700">Too Big to Fail</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Too Big to Fail</h1>
                    <p className="mt-4">&quot;Too big to fail&quot; refers to the concept that certain large financial institutions are considered so vital to the economy that their failure would have severe and
                    widespread consequences. These institutions are often seen as having implicit government support or guarantees due to their systemic importance.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Institutions deemed &quot;too big to fail&quot; are considered crucial to the stability and functioning of the financial system. Their failure can cause disruptions to the broader
                    economy, financial markets, and the livelihoods of individuals and businesses. These institutions often have extensive interconnectedness and a significant influence on the overall financial landscape.</p>
                    <p className="mt-2">The &quot;too big to fail&quot; concept implies that in times of financial distress, the government or central bank may intervene to prevent the collapse of these institutions. This
                    intervention can take various forms, including financial assistance, bailouts, guarantees, or other measures aimed at preventing widespread panic and systemic risks. The rationale behind such intervention
                    is to mitigate the potential negative impact on the economy and protect the stability of the financial system.</p>
                    <p className="mt-2">The potential failure of institutions deemed &quot;too big to fail&quot; can create a moral hazard, as they may take on excessive risks, knowing that they are likely to be bailed out by
                    the government to prevent a broader economic crisis. Regulatory frameworks, such as increased capital requirements, stress testing, and resolution plans, have been implemented to enhance the resilience and
                    stability of these institutions.</p>
                    <p className="mt-2">Critics argue that the perception of government support for large institutions creates an unfair advantage, as smaller competitors may not receive the same level of assistance in times of
                    distress. This can contribute to a perception of an uneven playing field and exacerbate income and wealth inequality.</p>
                </section>
            </div>
        </div>
    )
}