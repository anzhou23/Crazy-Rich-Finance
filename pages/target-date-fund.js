import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function targetDateFund() {
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
                    <span className="text-gray-700">Target Date Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Target Date Fund</h1>
                    <p className="mt-4">A target date fund, also known as a lifecycle fund or retirement date fund, is an investment fund that automatically adjusts its asset allocation over time based on a
                    target retirement date. The fund starts with a more aggressive allocation of stocks and gradually shifts towards a more conservative allocation as the target date approaches.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Target date funds are specifically designed to help investors save and grow their retirement savings. The fund&apos;s asset allocation is based on the target retirement date,
                    which is typically indicated in the fund&apos;s name (e.g., Target Date 2050 Fund). As the target date approaches, the fund gradually reduces exposure to riskier assets, such as stocks, and increases
                    allocation to more conservative assets like bonds and cash. This aims to provide a more stable and predictable source of income during retirement.</p>
                    <p className="mt-2">One of the main features of target date funds is their automatic adjustment of asset allocation over time. The fund manager determines the appropriate asset allocation mix based on the target
                    retirement date and adjusts it periodically. This relieves investors from the burden of manually rebalancing their portfolios as they approach retirement, making target date funds a convenient and hands-off investment option.</p>
                    <p className="mt-2">Target date funds typically hold a diversified mix of assets, including stocks, bonds, and cash equivalents. The initial allocation of the fund is generally more aggressive, with a higher proportion
                    allocated to stocks for potential long-term growth. As the target date approaches, the fund gradually reduces exposure to stocks and increases allocation to more conservative assets to preserve capital and reduce
                    volatility. Like any investment fund, target date funds have associated fees and expenses that investors should consider. These may include management fees, administrative costs, and underlying fund expenses.</p>
                    <p className="mt-2"></p>
                </section>
            </div>
        </div>
    )
}
