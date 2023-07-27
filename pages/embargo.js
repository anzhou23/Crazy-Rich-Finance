import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function embargo() {
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
                    <span className="text-gray-700">Embargo</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Embargo</h1>
                    <p className="mt-4">An embargo is a government-imposed restriction or prohibition on the trade of certain goods, services, or financial transactions with a specific country
                    or group of countries. It is a policy tool governments use to exert economic or political pressure on other nations for various reasons, such as addressing human rights
                    violations, promoting national security interests, or responding to international conflicts.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Governments may impose embargoes to achieve specific foreign policy goals, such as discouraging certain actions or compelling a country to change its
                    behavior. Embargoes can also be used to limit the flow of certain goods or technologies that could be used for military purposes or to support activities considered harmful.</p>
                    <p className="mt-2">There are different types of embargoes, including trade embargoes, financial embargoes, and arms embargoes. Trade embargoes restrict the import and export of
                    goods and services between the embargoing country and the targeted nation. Financial embargoes restrict financial transactions, such as freezing assets or restricting access to the
                    international financial system. Arms embargoes limit the sale and transfer of military equipment and weapons to a specific country.</p>
                    <p className="mt-2">Embargoes can have significant economic consequences for both the embargoing country and the targeted nation. They can disrupt trade relationships, impact industries
                    and businesses, and affect the livelihoods of people involved in international commerce. This can create tension in internatioanl relations and result in diplomatic conflicts between nations.</p>
                    <p className="mt-2">Embargoes are typically enforced through legal and regulatory measures, and violating an embargo can lead to penalties, fines, or other forms of sanctions. They can
                    vary in terms of duration, with some being temporary and others lasting for an extended period. They can also be broad and affect a wide range of goods and services or be targeted at specific
                    sectors or entities.</p>
                </section>
            </div>
        </div>
    )
}
