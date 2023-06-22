import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function junkBond() {
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
                    <span className="text-gray-700">Junk Bond</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Junk Bond</h1>
                    <p className="mt-4">Junk bonds, also known as speculative-grade bonds, are fixed-income securities issued by companies with lower credit ratings. These bonds tend to offer higher rates than other bonds
                    to compensate investors for taking on more risk.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Junk bonds carry more risk compared to investment-grade bonds. The credit rating agencies assess the financial health and creditworthiness of companies that issue bonds, and
                    lower ratings indicate a higher likelihood of default. Investors should carefully evaluate the credit rating and creditworthiness of the issuer before investing in junk bonds.</p>
                    <p className="mt-2">Investors are compensated for taking on the additional credit risk associated with junk bonds by receiving higher interest payments. The potential for higher returns is one of the primary
                    attractions for investors who are willing to accept the greater risk.</p>
                    <p className="mt-2">The performance of junk bonds is influenced by market conditions and economic factors. During periods of economic stability and low default rates, junk bonds may perform relatively well and provide
                    attractive returns. However, in times of economic downturn or financial stress, the risk of defaults increases, which can lead to a decline in the value of junk bonds.</p>
                    <p className="mt-2">Investing in junk bonds requires thorough research and due diligence to assess the risk-rward profile. Understanding the issuer&apos;s ability to meet interest payments and repay the principal is
                    crucial to assess the risk-reward profile of the junk bond.</p>
                    <p className="mt-2">Junk bonds may have lower liquidity compared to investment-grade bonds. The market can be more volatile, and it may be more challenging to buy or sell these bonds quickly at desired
                    prices. Investors should consider their investment horizon and liquidity needs first.</p>
                </section>
            </div>
        </div>
    )
}
