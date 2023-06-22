import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function quantitativeEasing() {
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
                    <span className="text-gray-700">Quantitative Easing</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Quantitative Easing</h1>
                    <p className="mt-4">Quantitative easing (QE) is a monetary policy tool central banks use to stimulate the economy and increase the money supply. It involves the central bank buying government bonds
                    or other financial assets from commercial banks and injecting money into the financial system.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Quantitative easing is typically used during times of economic downturn or when traditional interest rate policies are deemed insufficient. It aims to increase the money
                    supply, lower borrowing costs, and stimulate lending and economic activity. The primary objective is to increase the money supply in the economy. By injecting money into the financial system, central
                    banks aim to provide liquidity, lower interest rates, promote borrowing and investment, and stimulate economic growth.</p>
                    <p className="mt-2">Proponents of quantitative easing argue that it can support economic recovery, increase inflation, and reduce the risk of deflation. It is intended to put downward
                    pressure on interest rates, making borrowing cheaper for businesses and individuals. This is expected to stimulate borrowing for investment, home purchases, and consumption, which can potentially boost
                    economic activity. However, critics express concerns about potential inflationary pressures, the distortion of asset prices, and the creation of financial imbalances or bubbles.</p>
                    <p className="mt-2">Quantitative easing can influence financial markets by increasing the demand for government bonds and other assets. This can result in higher bond prices, lower yields, and increased
                    liquidity in the markets. It can also lead to asset price inflation and encourage investors to seek higher returns by investing in riskier assets.</p>
                    <p className="mt-2">Eventually, central banks may decide to unwind or taper their quantitative easing programs as economic conditions improve. This process involves gradually reducing asset purchases and
                    potentially selling assets back into the market. The unwinding of quantitative easing can impact interest rates, asset prices, and market stability.</p>
                </section>
            </div>
        </div>
    )
}

