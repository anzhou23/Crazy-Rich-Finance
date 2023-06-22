import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function accreditedInvestor() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Amortization</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Accredited Investor</h1>
                    <p className="mt-4">An accredited investor is an individual or entity that meets specific financial criteria defined by regulatory bodies, such as the Securities and Exchange
                    Commission (SEC), allowing them to participate in certain investment opportunities that are restricted to accredited investors.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Criteria for becoming an accredited investor may include minimum income levels, minimum net worth, or professional experience in the financial industry. The exact requirements can vary
                    by jurisdiction, but they are designed to ensure that accredited investors have sufficient financial means or expertise to understand and bear the risks associated with certain types of investments.</p>
                    <p className="mt-2">Accredited investors have access to a broader range of investment opportunities that are typically unavailable to non-accredited investors. These opportunities may include private equity offerings,
                    hedge funds, venture capital funds, private placements, and other types of investments that are considered higher risk, illiquid, or have higher minimum investment requirements.</p>
                    <p className="mt-2">Regulatory bodies impose certain rules and regulations on investment offerings to accredited investors to promote investor protection and maintain fair and transparent markets. Accredited investors may
                    be subject to additional disclosure requirements, filing obligations, or restrictions when participating in certain investment opportunities.</p>
                    <p className="mt-2">Being an accredited investor comes with the responsibility of ongoing evaluation and due diligence. Accredited investors should continuously assess their investment strategies, monitor the performance
                    of their investments, and stay informed about changes in market conditions or regulations that may affect their investment decisions.</p>
                </section>
            </div>
        </div>
    )
}