import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function personalProperty() {
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
                    <span className="text-gray-700">Personal Property</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Personal Property</h1>
                    <p className="mt-4">Personal property refers to movable assets that individuals own, excluding real estate or land. It includes tangible items such as vehicles, furniture, electronics, jewelry,
                    collectibles, and other possessions that are not permanently affixed to a property.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Personal property is owned and possessed by individuals or entities, providing them with the right to use, transfer, or dispose of the assets as they see fit. Ownership of personal
                    property is typically established through purchase, inheritance, gifting, or other legal means.</p>
                    <p className="mt-2">Personal property is subject to risks such as theft, damage, or loss. It is important to take measures to protect personal property, such as implementing security systems, storing
                    valuable items in secure locations, and obtaining appropriate insurance coverage. Homeowners or renters insurance policies often provide coverage for personal property, but additional coverage may be
                    necessary for high-value items.</p>
                    <p className="mt-2">Determining the value of personal property can be important for insurance purposes, estate planning, selling assets, or dividing assets during a divorce. Professional appraisers or
                    experts can assess the value of unique or high-value items, while market research, online resources, and valuation guides can provide estimates for more common items.</p>
                    <p className="mt-2">Managing personal property involves organizing, maintaining, and decluttering possessions to ensure they are properly utilized and do not become burdensome. Regular evaluation and
                    assessment of personal property can help individuals identify items they no longer need or use, leading to more efficient use of space and potential opportunities to sell, donate, or dispose of unnecessary
                    items. Personal property ownership is subject to local laws and regulations. Some assets may require registration, licensing, or compliance with specific regulations.</p>
                </section>
            </div>
        </div>
    )
}