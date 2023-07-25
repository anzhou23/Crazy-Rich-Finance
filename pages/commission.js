import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function commission() {
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
                    <span className="text-gray-700">Commission</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Commission</h1>
                    <p className="mt-4">A  commission is a fee or payment charged by a financial professional or broker for facilitating a financial transaction on a client&apos;s behalf. It is a form of compensation
                    for the services provided by the professional in helping clients buy or sell financial products, such as stocks, mutual funds, insurance policies, or real estate.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Commissions can be structured in various ways, depending on the type of financial product and the specific arrangement between the client and the financial professional. It&apos;s
                    essential for individuals to be aware of commission fees when working with financial professionals, as these fees can impact the overall cost and performance of their investments or financial transactions.
                    High commission costs may reduce the returns on investments.</p>
                    <p className="mt-2">Recently, there has been a shift towards fee-based or fee-only financial advisory services, where advisors charge a flat fee or an hourly rate for their services, rather than relying on
                    commissions from product sales. This approach is intended to reduce conflicts of interest and ensure that financial professionals act in their clients&apos; best interests.</p>
                </section>
            </div>
        </div>
    )
}
