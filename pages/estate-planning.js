import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function estatePlanning() {
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
                    <span className="text-gray-700">Estate Planning</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Estate Planning</h1>
                    <p className="mt-4">Estate planning is the process of arranging and preparing to distribute a person&apos;s assets and wealth after their death. It involves creating a
                    comprehensive plan that ensures the smooth transfer of assets to the intended beneficiaries while minimizing taxes, legal fees, and potential conflicts among family members.
                    Estate planning is not solely focused on wealthy individuals; it is important for anyone wants control over how their assets get distributed and managed upon their passing.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">A will is a legal document outlining how a person&apos;s assets and property will get distributed after their death. It names beneficiaries, appoints an
                    executor to carry out the instructions, and may also specify guardianship for minors. Trusts are legal entities that hold and manage assets on behalf of beneficiaries.
                    They can be used to avoid probate, provide ongoing support to family members, and protect assets from creditors and taxes.</p>
                    <p className="mt-2">Certain assets, such as life insurance policies and retirement accounts, allow the account holder to designate beneficiaries. These designations override the
                    instructions in a will, so they need to be carefully considered and updated as circumstances change.</p>
                    <p className="mt-2">A power of attorney is a legal document that grants someone the authority to make financial or medical decisions on behalf of another person in case of incapacitation.
                    Healthcare directives, such as living wills and healthcare proxies, outline a person&apos;s medical preferences and appoint someone to make medical decisions on their behalf if
                    they become unable to do so.</p>
                    <p className="mt-2">Estate planning also involves strategies to minimize estate and gift taxes, ensuring that as much of the estate as possible goes to the intended beneficiaries.
                    They may include provisions for charitable donations, which can benefit both the charity and the estate by reducing taxes.</p>
                </section>
            </div>
        </div>
    )
}
