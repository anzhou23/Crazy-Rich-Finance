import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function jointTenancy() {
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
                    <span className="text-gray-700">Joint Tenancy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Joint Tenancy</h1>
                    <p className="mt-4">Joint tenancy is a form of property ownership where 2 or more individuals, known as joint tenants, have an equal and undivided interest in the property.
                    It can be a popular form of property ownership among couples, famly members, or business partners as it offers benefits like the avoidance of probate, seamless transfer
                    of ownership, and simplified estate planning. In joint tenancy, each tenant holds an equal share of ownership and an equal right to occupy and use the entire property.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">One of joint tenancy&apos;s defining characteristics is the right of survivorship. If one joint tenant dies, their share automatically transfers to the
                    surviving joint tenants, without going through probate or being inherited by their heirs. The property remains with the surviving joint tenants until the last surviving tenant,
                    who then becomes the sole owner.</p>
                    <p className="mt-2">For joint tenancy to be valid, certain requirements must be met. These include the joint tenants acquiring their interests in the property simultaneously,
                    through the same title document, having an equal interest in the property, and having an equal right to possess and use the property.</p>
                    <p className="mt-2">Joint tenancy can be severed if one joint tenant decides to sell or transfer their interest to another party. This action converts the ownership from joint
                    tenancy to tenancy in common, where each owner has a distinct and separate share of the property that can be inherited or sold independently.</p>
                </section>
            </div>
        </div>
    )
}