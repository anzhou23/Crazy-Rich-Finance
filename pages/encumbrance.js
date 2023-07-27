import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function encumbrance() {
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
                    <span className="text-gray-700">Encumbrance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Encumbrance</h1>
                    <p className="mt-4">An encumbrance in the context of real estate is any claim, lien, restriction, or liability that affects the title or use of a property. It is a
                    legal right or interest held by a party other than the property owner, and it can limit the owner&apos;s ability to transfer or sell the property. Encumbrances can
                    arise due to various reasons, such as outstanding debts, liens, easements, restrictions, or other legal obligations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Encumbrances can take several forms, including mortgages, property taxes, mechanics&apos; liens, easements (e.g., rights-of-way for utilities),
                    restrictive covenants, and judgments. Each type of encumbrance imposes different rights and restrictions on the property.</p>
                    <p className="mt-2">Encumbrances typically get recorded in public records, such as the county clerk&apos;s office, and become part of the property&apos;s title history.
                    Prospective buyers or lenders will review these records during the due diligence process to understand any potential risks or limitations associated with the property.</p>
                    <p className="mt-2">Some encumbrances may restrict the property owner&apos;s ability to use or develop the land, such as zoning regulations or homeowners&apos; association
                    rules. These restrictions can affect the property&apos;s marketability and value. In some instances, encumbrances can be removed or cleared by fulfilling specific legal
                    requirements. For example, a mortgage can be discharged after the loan is paid off, or a lien can be released after settling a debt.</p>
                    <p className="mt-2">In cases where multiple encumbrances exist on a property, the order of priority can be crucial in determining which party&apos;s claim takes precedence.
                    For example, a mortgage lender typically has a first lien on the property, meaning they have the first right to recover their debt if the property is sold or foreclosed.</p>
                    <p className="mt-2">Buyers typically purchase title insurance to protect against undiscovered encumbrances or defects in the property&apos;s title. Title companies conduct
                    thorough title searches to identify any existing encumbrances and assess their impact on the property.</p>
                </section>
            </div>
        </div>
    )
}
