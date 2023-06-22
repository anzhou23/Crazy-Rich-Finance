import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function propertyTax() {
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
                    <span className="text-gray-700">Property Tax</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Property Tax</h1>
                    <p className="mt-4">Property tax is imposed by local governments, such as municipalities or counties, on the value of real estate or immovable property owned by individuals or entities. It is
                    typically based on the property&apos;s assessed value and is used to fund local services and public infrastructure.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Property tax is levied on real estate properties, including residential homes, commercial buildings, vacant land, and sometimes certain types of personal property, such as
                    boats or aircraft. Local tax authorities determine a property&apos;s value through a property assessment process, which may include physical inspections, market analysis, and other factors. The
                    assessed value can be different from the property&apos; market value or sale price.</p>
                    <p className="mt-2">Local governments use property tax revenue to support various public services and infrastructure, including schools, police and fire departments, road maintenance, parks, and
                    other community resources. The tax rate is set by local authorities and can vary depending on the jurisdiction and property type. It is calculated by multiplying the assessed value of the
                    property by the local tax rate. The tax amount is typically payable annually, although payment schedules and methods may vary by jurisdiction. Property owners receive tax bills or assessments detailing
                    the amount owed and due dates for payment.</p>
                    <p className="mt-2">Some jurisdictions offer exemptions or deductions that can reduce property tax liability. Common examples include exemptions for primary residences, senior citizens, veterans,
                    or properties used for certain purposes such as agriculture or conservation.</p>
                    <p className="mt-2">Property tax amounts can change over time due to reassessments, changes in tax rates, or improvements made to the property. Property owners have the right to appeal their assessments
                    if they believe they are incorrect or unfair. This process typically involves providing evidence to support a different valuation or challenging the assessment methodology. Understanding the property tax
                    obligations associated with owning real estate can help individuals plan for the cost and ensure they are prepared to meet their tax obligations.</p>
                </section>
            </div>
        </div>
    )
}

