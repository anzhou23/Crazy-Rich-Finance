import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function rentControl() {
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
                    <span className="text-gray-700">Rent Control</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Rent Control</h1>
                    <p className="mt-4">Rent control refers to government regulations that limit the amount landlords can charge for rental properties. These regulations are typically implemented to protect
                    tenants from excessive rent increases and to ensure affordable housing options are available in certain areas.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">By setting limits on rent increases, these policies seek to protect tenants from substantial and sudden spikes in rental costs, particularly in high-demand areas where
                    housing affordability is a concern. Rent control can help tenants maintain housing stability and prevent displacement due to rising rents.</p>
                    <p className="mt-2">Rent control policies vary by jurisdiction, and the specific regulations can differ significantly. Some policies limit the amount landlords can increase rent annually, while
                    others may set specific formulas or criteria for determining permissible rent increases. Rent control may also include restrictions on evictions and provide additional tenant rights and protections.</p>
                    <p className="mt-2">Critics argue that rent control can create market distortions, reduce housing availability, and lead to unintended consequences such as reduced investment in rental properties. By
                    limiting the rental income landlords can receive, it may reduce the incentive for property owners to maintain or invest in their rental units. In some cases, rent control can discourage new housing
                    development or lead to a decline in the overall rental housing stock.</p>
                    <p className="mt-2">Rent control policies are often limited to specific geographic areas and may only apply to certain types of rental units or buildings. Additionally, some rent control policies may
                    have expiration dates or sunset provisions, meaning they may be in effect for a limited period and subject to review or renewal.</p>
                </section>
            </div>
        </div>
    )
}
