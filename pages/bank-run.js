import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bankRun() {
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
                    <span className="text-gray-700">Bank Run</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bank Run</h1>
                    <p className="mt-4">A bank run is a situation where a large number of bank customers rush to withdraw their deposits or assets from a bank simultaneously, typically out of
                    fear that the bank may become insolvent or unable to meet its financial obligations. During a bank run, there is a sudden and significant demand for cash withdrawals,
                    causing a liquidity crisis for the bank.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Bank runs often occur due to rumors or concerns about the bank&apos;s financial stability, leading depositors to panic and withdraw their funds to protect
                    their money. This mass withdrawal of deposits can exacerbate the bank&apos;s financial troubles and potentially lead to its collapse if it does not have sufficient reserves to
                    meet the demand for cash.</p>
                    <p className="mt-2">Bank runs were more common in the past when banks had fewer safeguards and deposit insurance programs. In response to historical bank runs, governments and
                    regulatory authorities have implemented various measures to prevent and manage such crises, including deposit insurance, central bank support, and regulations that require banks
                    to maintain adequate reserves.</p>
                    <p className="mt-2">Deposit insurance, provided by many governments, guarantees that a certain amount of each depositor&apos;s funds is protected even if the bank fails. This helps
                    restore confidence in the banking system and discourages mass withdrawals during times of financial uncertainty.</p>
                    <p className="mt-2">Bank runs can have severe consequences not only for the affected bank but also for the overall financial system and economy. They can lead to a loss of public
                    trust in the banking system, credit shortages, and broader financial instability. Central banks and regulatory authorities closely monitor banks&apos; financial health and take
                    measures to prevent and manage potential bank runs to safeguard financial stability.</p>
                    <p className="mt-2">Recently, Silicon Valley Bank, a regional lender based in California, collapsed following a classic bank run. Catering primarily to tech
                    startups and venture firms, investor concerns following the bank&apos;s announcement of a $1.8B loss on the sale of securities led to a frenzied panic as its customers
                    rapidly withdrew funds from the bank.</p>
                </section>
            </div>
        </div>
    )
}
