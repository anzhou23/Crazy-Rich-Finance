import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function homeownersInsurance() {
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
                    <span className="text-gray-700">Homeowners Insurance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Homeowners Insurance</h1>
                    <p className="mt-4">Homeowners insurance, also known as home insurance or property insurance, is a type of insurance policy that provides financial protection to homeowners
                    against various risks and damages that may occur to their property or belongings. It is typically a package policy that combines multiple types of coverage, offering protection
                    for the structure of the home, personal belongings, liability, and additional living expenses.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Dwelling coverage covers the physical structure of the home itself, including the walls, roof, foundation, and other attached structures, such as garages and
                    fences. It provides financial protection against damage caused by fire, windstorms, hail, vandalism, and more.</p>
                    <p className="mt-2">Personal property coverage covers the homeowner&apos;s personal belongings, such as furniture, electronics, clothing, and other items inside the home or on the
                    property. It typically protects against theft and damage caused by events like fire or water damage.</p>
                    <p className="mt-2">Liability coverage protects the homeowner against legal liabilities and financial losses if someone is injured on their property or if the homeowner unintentionally
                    damages someone else&apos;s property. It may also cover legal defense costs if the homeowner is sued.</p>
                    <p className="mt-2">If the insured home becomes uninhabitable due to a covered peril, additional living expenses (ALE) coverage provides reimbursement for temporary living expenses, such
                    as hotel stays or rent for a temporary residence, until the home is repaired.</p>
                    <p className="mt-2">Other structures coverage covers other structures on the property that are not attached to the main dwelling, such as a detached garage, shed, or fence.</p>
                    <p className="mt-2">Homeowners insurance policies typically have certain limits and deductibles, which are the amounts the homeowner must pay out of pocket before the insurance coverage
                    kicks in. Additionally, not all perils may be covered, and specific exclusions might apply, so homeowners should carefully review their policy to understand what is and is not included.</p>
                </section>
            </div>
        </div>
    )
}