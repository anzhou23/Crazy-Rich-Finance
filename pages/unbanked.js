import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function unbanked() {
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
                    <span className="text-gray-700">Unbanked</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Unbanked</h1>
                    <p className="mt-4">The term &quot;unbanked&quot; refers to individuals or households that do not have access to traditional banking services, such as a bank account, credit cards, or other financial
                    products offered by regulated financial institutions. The unbanked population is typically underserved by the formal banking sector and may face challenges in accessing financial services and participating
                    fully in the formal economy.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The unbanked may have limited access to traditional banking services for various factors, including a lack of identification documents, insufficient income, remote geographic locations,
                    distrust of formal financial institutions, or perceived barriers to entry. They often rely on alternative financial products and services to meet their financial needs, including cash transactions, money orders,
                    prepaid cards, mobile money accounts, and informal savings mechanisms like community-based savings groups. While these alternatives provide some level of financial inclusion, they may come with higher fees, limited
                    functionality, and less protection compared to regulated banking services.</p>
                    <p className="mt-2">Without access to formal banking services, the unbanked may encounter difficulties in managing their finances, securely storing money, building credit history, saving for the future, and accessing
                    affordable credit. The lack of financial inclusion can impede economic growth, limit opportunities for upward mobility, and exacerbate income inequality.</p>
                    <p className="mt-2">The unbanked population often includes individuals from low-income households, marginalized communities, and underserved regions. The lack of access to banking services can contribute to a cycle
                    of poverty, making it harder for individuals to save, invest, build assets, and access financial tools for economic empowerment.</p>
                    <p className="mt-2">According to various reports and studies, a significant proportion of the global population remains unbanked, particularly in developing countries and marginalized communities. Efforts are being
                    made to bridge this gap through innovative financial technologies, policy interventions, and collaborations between governments, financial institutions, and non-profits.</p>
                </section>
            </div>
        </div>
    )
}