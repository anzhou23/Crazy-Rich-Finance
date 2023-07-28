import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fsbo() {
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
                    <span className="text-gray-700">For Sale By Owner</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">For Sale By Owner</h1>
                    <p className="mt-4">For Sale By Owner (FSBO) is a real estate transaction where a owner property decides to sell it without hiring a real estate agent or broker. Instead of
                    relying on a real estate professional to handle the selling process, the homeowner takes on the responsibility of marketing, negotiating, and finalizing the sale themselves.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In an FSBO arrangement, the homeowner typically lists their property for sale using various methods such as yard signs, online listings, local advertisements,
                    and word-of-mouth. They may also arrange open houses and handle inquiries from potential buyers directly.</p>
                    <p className="mt-2">The primary motivation behind choosing to sell a property as FSBO is to avoid paying real estate agent commissions, which can amount to a significant percentage
                    of the sale price. By selling on their own, homeowners aim to save money and have more control over the entire selling process.</p>
                    <p className="mt-2">However, selling a property as FSBO comes with its challenges and potential drawbacks. Some of these include:</p>
                    <ul className="list-disc ml-6">
                        <li>Limited Marketing Reach: Homeowners may not have the same marketing resources and reach as real estate agents, which could result in fewer potential buyers viewing the property.</li>
                        <li>Lack of Expertise: Real estate transactions involve legal, financial, and negotiation complexities that homeowners may not be well-versed in, potentially leading to mistakes or issues.</li>
                        <li>Time and Effort: Selling a property as FSBO can be time-consuming and requires significant effort on the part of the homeowner to handle all aspects of the sale.</li>
                        <li>Pricing Challenges: Determining the right asking price for the property without professional guidance may lead to overpricing or underpricing, affecting the speed and success of the sale.</li>
                        <li>Limited Access to Buyer Pool: Some buyers prefer to work with real estate agents and may not consider FSBO properties, reducing the pool of potential buyers.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}