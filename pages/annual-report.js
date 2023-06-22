import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function annualReport() {
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
                    <span className="text-gray-700">Annual Report</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Annual Report</h1>
                    <p className="mt-4">An annual report is a comprehensive document that provides shareholders and other stakeholders with a detailed overview of a company&apos;s financial performance, operations, and achievements over the past year. It typically includes
                    financial statements, management&apos;s discussion and analysis, corporate governance information, and future outlook. Annual reports are essential for transparency, accountability, and informed decision-making by investors and interested parties.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Annual reports provide a snapshot of a company&apos;s financial health, including revenue, expenses, profitability, and cash flow. Additionally, they provide details on the company&apos;s governance structure, board composition,
                    executive compensation, and risk management practices. Understanding a company&apos;s financial performance and internal practices helps investors assess the company&apos;s stability and growth potential.</p>
                    <p className="mt-2">Annual reports fulfill legal and regulatory obligations, ensuring that the company meets reporting standards and provides accurate and timely information to shareholders and regulatory authorities. Additional information like
                    auditor&apos;s reports, notes to financial statements, and sustainability or CSR reports may be included, providing a comprehensive view of what&apos;s happening at the company.</p>
                </section>
            </div>
        </div>
    )
}
