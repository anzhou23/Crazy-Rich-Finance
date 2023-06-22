import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function federalReserve() {
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
                    <span className="text-gray-700">Federal Reserve</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Federal Reserve</h1>
                    <p className="mt-4">The Federal Reserve, often referred to as the &quot;Fed,&quot; is the central banking system of the United States. It was established in 1913 and is responsible for conducting monetary policy, regulating
                    and supervising banks, maintaining financial stability, and providing various banking services.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The Federal Reserve System is composed of 3 main components: the Board of Governors, the Federal Reserve Banks, and the Federal Open Market Committee (FOMC). The Board of Governors, located in Washington, D.C., consists
                    of 7 members appointed by the President and confirmed by the Senate. The Federal Reserve Banks are regional banks spread across major cities in the U.S., and the FOMC is responsible for setting monetary policy.</p>
                    <p className="mt-2">The Fed&apos;s primary role is to formulate and implement monetary policy to promote price stability, full employment, and economic growth. The Federal Open Market Committee sets the target for the federal funds rate,
                    which is the interest rate at which banks lend to each other overnight. By adjusting this rate, the Fed influences borrowing costs, money supply, and overall economic conditions.</p>
                    <p className="mt-2">During times of financial stress or crisis, the Fed acts as a lender of last resort, providing liquidity to banks and financial institutions to prevent systemic disruptions. This includes providing short-term loans
                    and conducting open market operations.</p>
                    <p className="mt-2">The Federal Reserve operates payment systems that facilitate the clearing and settlement of financial transactions. This includes services such as wire transfers, automated clearinghouse (ACH) transactions, and check processing.</p>
                    <p className="mt-2">The Fed operates independently within the government, allowing it to make monetary policy decisions without direct political interference. This independence is intended to ensure that monetary policy decisions
                    are based on economic considerations and long-term stability rather than short-term political pressures.</p>
                </section>
            </div>
        </div>
    )
}
