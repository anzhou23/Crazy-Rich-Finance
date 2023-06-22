import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hoa() {
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
                    <span className="text-gray-700">Homeowners Association</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Homeowners Association</h1>
                    <p className="mt-4">A homeowners association (HOA) is an organization that governs and manages a residential community, such as a condo or a
                    planned neighborhood. HOAs are typically established to maintain common areas, enforce community rules and regulations, and collect fees or dues
                    from homeowners to fund various services and maintenance activities.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">HOAs establish and enforce rules and regulations to help maintain a certain standard of living and preserve property values. They often have
                    a board of directors or elected officials responsible for making decisions and managing the association&apos;s affairs.</p>
                    <p className="mt-2">Homeowners must comply with specific standards set by the HOA, such as architectural guidelines, landscaping restrictions, noise regulations,
                    pet policies, and more. Failure to comply with these rules can result in penalties or fines.</p>
                    <p className="mt-2">HOAs collect monthly fees or dues from homeowners to fund various expenses. These fees are typically used to cover maintenance and repairs of common
                    areas, landscaping, security services, utilities, insurance, and other communal amenities. Common amenities an HOA may provide include swimming pools, parks, playgrounds,
                    clubhouses, fitness centers, or services such as garbage collection, snow removal, or maintenance of common areas.</p>
                    <p className="mt-2">When considering a property within an HOA, review the HOA&apos;s governing documents, including bylaws, covenants, conditions, and
                    restrictions (CC&Rs) to understand the HOA&apos;s rules, fees, and responsibilities. HOAs can present challenges for homeowners, including potential disagreements with
                    neighbors or the HOA board, restrictions on property use, and increases in fees over time. Carefully evaluate the pros and cons of living in an HOA-managed community
                    before purchasing a property.</p>
                </section>
            </div>
        </div>
    )
}
