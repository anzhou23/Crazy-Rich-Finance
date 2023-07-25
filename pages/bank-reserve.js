import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bankReserve() {
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
                    <span className="text-gray-700">Bank Reserve</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bank Reserve</h1>
                    <p className="mt-4">Bank reserves are the portion of a bank&apos;s deposits that it holds in cash or as balances with the central bank. These reserves serve as a buffer to ensure
                    the bank can meet its obligations, including customer withdrawals and other payment demands.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Banks are required to maintain a certain level of reserves, known as the reserve requirement, which is set by the central bank of the country. The reserve requirement
                    is typically expressed as a percentage of a bank&apos;s total deposits. For example, if the reserve requirement is 10%, a bank with $1 million in deposits must hold at least $100,000 in reserves.</p>
                    <p className="mt-2">Reserves can be held in the form of physical cash in the bank&apos;s vault or as deposits with the central bank. These reserves are essential for maintaining the
                    the banking system&apos; stability and liquidity. In times of financial stress or heightened demand for withdrawals, having sufficient reserves allows banks to continue operating smoothly
                    without facing a cash shortage.</p>
                    <p className="mt-2">Central banks use changes in the reserve requirement as a tool to influence the money supply in the economy. By adjusting the reserve requirement, central banks can
                    either increase or decrease the amount of money banks can lend out, which, in turn, affects interest rates and economic activity.</p>
                </section>
            </div>
        </div>
    )
}
