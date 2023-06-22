import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function angelInvesting() {
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
                    <span className="text-gray-700">Angel Investing</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Angel Investing</h1>
                    <p className="mt-4">Angel investing refers to the practice of high-net-worth individuals or groups providing capital to early-stage startups in exchange for equity ownership. Angels typically offer more than just funding,
                    often providing mentorship, industry connections, and expertise to help the startups grow. It&apos;s a high-risk, high-reward investment strategy with the potential for substantial returns if the startups succeed.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Angel investments typically require a longer time horizon, as it can take several years for startups to reach maturity or generate significant returns.</p>
                    <p className="mt-2">Angel investing carries the risk of potential losses, as not all startups will succeed. In fact, more than 90% of startups fail. It&apos;s essential to be prepared for the possibility of losing the entire
                    investment or a significant portion of it.</p>
                    <p className="mt-2">Given the high-risk nature of angel investing, it&apos;s important to diversify your portfolio by investing in multiple startups and other asset types. Additionally, thorough due diligence is crucial to
                    assess each startup&apos;s market potential, team, and business model before investing.</p>
                    <p className="mt-2">Engaging with other angel investors and joining angel networks or communities can provide valuable learning experiences, deal flow, and opportunities for collaboration. Networking can also lead to
                    co-investment possibilities and shared due diligence efforts.</p>
                </section>
            </div>
        </div>
    )
}
