import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function encroachment() {
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
                    <span className="text-gray-700">Encroachment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Encroachment</h1>
                    <p className="mt-4">Encroachment is the unauthorized intrusion or extension of a property owner&apos;s structure, such as a building, fence, or other improvements, onto an
                    adjacent owner&apos;s property. It occurs when a physical boundary, such as a property line or easement, is crossed or violated, resulting in a portion of one person&apos;s
                    property overlapping onto another person&apos;s land.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Encroachment can take various forms, such as a neighbor&apos;s fence extending beyond their property line, a building encroaching onto an adjacent property,
                    or vegetation from one property growing onto another. It can happen unintentionally, such as when property boundaries are unclear or disputed. In some cases, it may also be
                    deliberate, where a property owner knowingly encroaches on a neighbor&apos;s land without permission.</p>
                    <p className="mt-2">Encroachments can lead to legal disputes between property owners. The affected party may attempt to rectify the situation through negotiations, boundary
                    agreements, or legal action, depending on the severity of the encroachment and the willingness of the parties to resolve the issue amicably. In some cases, a professional land
                    survey may be necessary to determine the accurate property lines and assess the extent of the encroachment. Property records and title documents can also be examined to clarify
                    ownership boundaries.</p>
                    <p className="mt-2">In certain situations, an easement may allow one party to use or access a portion of another party&apos;s property. However, even with an easement, there are
                    usually specific restrictions on the use and limitations to prevent excessive encroachment.</p>
                    <p className="mt-2">If an encroachment is confirmed, potential remedies include removing the encroaching structure, compensating the affected party for using the encroached land, or
                    establishing a legal agreement to address the encroachment.</p>
                </section>
            </div>
        </div>
    )
}
