import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function foreignAid() {
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
                    <span className="text-gray-700">Foreign Aid</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Foreign Aid</h1>
                    <p className="mt-4">Foreign aid is the financial, technical, or humanitarian aid one country provides to another country or group of countries. The primary objective
                    is to support the development and welfare of recipient nations and address challenges like poverty, healthcare, education, infrastructure, and disaster relief.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Foreign aid can be offered in various forms, including grants, loans, technical expertise, training programs, and humanitarian aid. Donor countries,
                    international organizations, and non-governmental organizations (NGOs) are typical sources of foreign aid.</p>
                    <p className="mt-2">Governments provide foreign aid as part of their foreign policy objectives, promoting diplomatic ties, economic partnerships, and regional stability.
                    Developed nations often offer aid to less developed or crisis-affected countries to foster their economic growth and social progress.</p>
                    <p className="mt-2">Foreign aid plays a crucial role in addressing global issues like hunger, disease outbreaks, natural disasters, and refugee crises. It also supports
                    initiatives to improve healthcare systems, build schools and infrastructure, and promote sustainable development. However, critics argue that it can create dependency,
                    corruption, and inefficient use of resources in recipient countries. Others believe that aid effectiveness can be improved through transparency, accountability, and
                    alignment with recipient nations&apos; priorities and strategies.</p>
                </section>
            </div>
        </div>
    )
}