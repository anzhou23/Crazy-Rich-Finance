import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function homeInspection() {
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
                    <span className="text-gray-700">Home Inspection</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home Inspection</h1>
                    <p className="mt-4">A home inspection is a thorough and detailed examination of a residential property&apos;s condition conducted by a qualified professional known as a home
                    inspector. The purpose is to assess the property&apos;s overall condition, identify any existing or potential issues, and provide the buyer or homeowner with a comprehensive
                    report about the property&apos;s structural integrity and systems.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During a home inspection, the inspector typically examines the following aspects:</p>
                    <ul className="list-disc ml-6">
                        <li>Structural components, including the foundation, walls, roof, and the building&apos;s overall structural integrity</li>
                        <li>Exterior, such as siding, windows, doors, and landscaping</li>
                        <li>Roofing, including roofing materials, condition, and potential issues, such as leaks or damage</li>
                        <li>Plumbing, including pipes, fixtures, faucets, water heaters, and drainage</li>
                        <li>Electrical, including the wiring, outlets, switches, and the electrical panel</li>
                        <li>HVAC (Heating, Ventilation, and Air Conditioning), including the heating and cooling systems, ventilation, and insulation</li>
                        <li>Interior, such as walls, ceilings, floors, and built-in appliances</li>
                        <li>Attic and crawl spaces are checked for insulation, ventilation, and signs of any issues</li>
                        <li>Basement or foundation is assessed for moisture, leaks, or structural problems</li>
                    </ul>
                    <p className="mt-2">The home inspector prepares a detailed report, usually with photographs, summarizing their findings. This report is typically shared with the homebuyer or homeowner,
                    helping them make informed decisions about the property&apos;s purchase or necessary repairs and improvements.</p>
                    <p className="mt-2">Potential homebuyers should attend the inspection if possible to better understanding the property&apos;s condition and ask questions. Home inspections are crucial for
                    identifying potential problems that might not be visible to the untrained eye, providing peace of mind and ensuring buyers are aware of the property&apos;s condition before finalizing the purchase.</p>
                </section>
            </div>
        </div>
    )
}