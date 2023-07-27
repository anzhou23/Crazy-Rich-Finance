import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function endowment() {
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
                    <span className="text-gray-700">Endowment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Endowment</h1>
                    <p className="mt-4">An endowment is a financial asset or a pool of funds typically donated to a nonprofit, such as a university, charitable foundation, or cultural institution.
                    The purpose is to provide ongoing financial support for the organization&apos;s activities, programs, and initiatives. The endowment is invested, and the income or returns generated
                    from the investments are used to fund the organization&apos;s operations, scholarships, research, or other designated purposes.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Endowments are created through donations individuals, corporations, or other entities make. These donations are usually substantial and are intended to have a
                    lasting impact on the organization. They are often designed to be permanent to support the organization&apos;s mission and activities in perpetuity. The funds get invested in a
                    diversified portfolio to generate sustainable long-term income.</p>
                    <p className="mt-2">Managing an endowment&apos;s investments is critical to ensure its growth and stability. Endowment managers, often working with financial professionals, aim to
                    strike a balance between generating income and preserving the endowment&apos;s principal value.</p>
                    <p className="mt-2">Nonprofit organizations with endowments typically follow a spending policy that governs how much of the endowment&apos;s returns can be spent each year. This
                    policy helps maintain the endowment&apos;s purchasing power while providing consistent support for the organization.</p>
                    <p className="mt-2">Endowments may consist of both restricted and unrestricted funds. Restricted funds are earmarked for specific purposes, such as funding a particular scholarship or
                    program. Unrestricted funds allow the organization flexibility in using the income to support its general operations. Donors can specify how they want their contributions to be used
                    within the organization, subject to the organization&apos;s policies and mission. For example, donors may create named endowments to honor a loved one or support a specific area of interest.</p>
                    <p className="mt-2">Endowments play a crucial role in sustaining the long-term viability and impact of nonprofit organizations. By providing a stable source of income, endowments
                    enable these organizations to continue their work, advance their missions, and create positive change in society.</p>
                </section>
            </div>
        </div>
    )
}
