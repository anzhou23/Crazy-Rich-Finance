import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hazardInsurance() {
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
                    <span className="text-gray-700">Hazard Insurance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hazard Insurance</h1>
                    <p className="mt-4">Hazard insurance, also known as homeowners insurance or property insurance, is a type of insurance that provides homeowners or property owners financial protection
                    against damage or loss caused by specific perils or hazards. This insurance coverage helps protect the property itself and the possessions within it.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Hazard insurance typically covers damage or loss caused by fire, lightning, windstorms, hail, explosions, theft, vandalism, and certain types of water damage. If a
                    homeowner has a mortgage on the property, the lender will likely require hazard insurance as part of the loan agreement to protect their investment.</p>
                    <p className="mt-2">The insurance policy may have 2 components: one that covers the property structure (the house itself) and another that covers the contents inside (furniture,
                    appliances, personal belongings, etc.). It is important to understand the coverage limits and exclusions in the policy.</p>
                    <p className="mt-2">Homeowners pay a premium for hazard insurance, which is typically an annual or monthly fee. The premium amount is based on factors such as the property location, the
                    replacement cost of the home and its contents, and coverage level. The policy may also have a deductible, which is the amount the homeowner must pay out of pocket before the insurance
                    coverage kicks in.</p>
                    <p className="mt-2">While hazard insurance covers many common perils, some hazards may not be included in the standard policy. Homeowners can consider purchasing additional coverage or riders
                    to protect against specific risks, such as earthquakes or floods, depending on the location and individual needs.</p>
                    <p className="mt-2">In the event of damage or loss covered by the policy, the homeowner can file a claim with the insurance company. The insurance company will assess the claim and, if approved,
                    provide compensation to repair or replace the damaged property or possessions up to the policy&apos;s coverage limits.</p>
                    <p className="mt-2">Hazard insurance is essential for homeowners to protect their investment and financial security. It provides peace of mind by offering a safety net in case of unexpected
                    events that could cause significant damage to the property or belongings. It is important to review and understand your insurance policy, including its coverage, limits, and exclusions, to ensure
                    you have adequate protection for your specific needs.</p>
                </section>
            </div>
        </div>
    )
}