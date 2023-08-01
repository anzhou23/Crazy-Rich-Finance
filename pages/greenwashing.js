import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function reenwashing() {
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
                    <span className="text-gray-700">Greenwashing</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Greenwashing</h1>
                    <p className="mt-4">Greenwashing is a deceptive marketing practice companies or organizations use to portray themselves as environmentally friendly or socially responsible when,
                    in reality, their actions may not align with these claims. The term &quot;greenwashing&quot; blends &quot;green&quot; (referring to environmental concerns) and &quot;whitewashing&quot;
                    (meaning to cover up or gloss over negative aspects).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The purpose of greenwashing is to attract environmentally conscious consumers and investors by creating a positive image of sustainability and corporate responsibility.
                    Companies may use various tactics to greenwash their products, services, or practices, such as:</p>
                    <ul className="list-disc ml-6">
                        <li>Using terms like &quot;eco-friendly,&quot; &quot;natural,&quot; or &quot;green&quot; without clear definitions or independent certifications to back them up.</li>
                        <li>Highlighting isolated positive environmental efforts while ignoring broader negative impacts.</li>
                        <li>Making unverified assertions or exaggerating the environmental benefits of a product or service.</li>
                        <li>Associating a product or brand with unrelated environmental causes to create an illusion of eco-friendliness.</li>
                        <li>Using nature-related imagery or colors in branding and packaging to evoke environmental friendliness.</li>
                        <li>Withholding or providing insufficient information about a product&apos;s environmental impact or the company&apos;s sustainability practices.</li>
                    </ul>
                    <p className="mt-2">Greenwashing can mislead consumers and investors who genuinely seek eco-friendly choices and support responsible businesses. It undermines efforts to promote sustainability and
                    can dilute the impact of environmentally friendly products and practices. To counter greenwashing, consumers and investors should look for credible certifications, seek transparency, and do thorough
                    research on a company&apos;s environmental track record before making purchasing decisions or investments.</p>
                </section>
            </div>
        </div>
    )
}