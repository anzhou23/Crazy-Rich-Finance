import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function franchise() {
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
                    <span className="text-gray-700">Franchise</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Franchise</h1>
                    <p className="mt-4">A franchise is a business model where an individual or group (the franchisee) is granted the right to use the branding, products, and services
                    of an established business (the franchisor) in exchange for payment of fees or royalties. It is a contractual arrangement that allows the franchisee to operate their
                    own business under the established brand and business system of the franchisor.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Franchising is a popular method for expanding a successful business because it allows the franchisor to grow without bearing the full cost and risks
                    associated with opening and operating new locations. The franchisee benefits from the support and expertise of an established brand, a proven business model, and ongoing
                    training and support from the franchisor.</p>
                    <p className="mt-2">There are various types of franchises, including fast-food chains, retail stores, service-based businesses, and more. Franchise agreements typically
                    outline the terms and conditions of the relationship, including the initial investment required, ongoing fees, operational guidelines, and the rights and responsibilities
                    of both parties.</p>
                    <p className="mt-2">Franchising has become a widespread business model worldwide, and it offers entrepreneurs an opportunity to own and operate a business with a higher
                    chance of success compared to starting an independent venture from scratch. However, potential franchisees should carefully review the franchise agreement, conduct due
                    diligence on the franchisor&apos;s track record, and thoroughly understand the financial obligations before committing to a franchise opportunity.</p>
                </section>
            </div>
        </div>
    )
}