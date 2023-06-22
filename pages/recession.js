import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function recession() {
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
                    <span className="text-gray-700">Recession</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Recession</h1>
                    <p className="mt-4">A recession is a significant decline in economic activity that lasts for an extended period, typically marked by a contraction in gross domestic product (GDP), increased
                    unemployment rates, reduced consumer spending, and a general slowdown in business activity.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During a recession, companies may experience declining profits, face liquidity issues, and make budget cuts, including layoffs and reduced investment. It can be a difficult
                    environment for entrepreneurs, investors, and businesses to navigate, as market conditions become more uncertain.</p>
                    <p className="mt-2">Governments and central banks often respond to recessions through monetary and fiscal policy measures. Central banks may lower interest rates, implement quantitative easing
                    (QE) programs, or provide liquidity support to banks to stimulate lending and economic activity. Governments can also adopt fiscal stimulus measures, such as tax cuts, infrastructure spending, or
                    unemployment benefits, to boost consumer spending and support businesses.</p>
                    <p className="mt-2">Recessions can trigger increased market volatility and uncertainty. Stock markets may experience significant declines, and investor sentiment may turn cautious. It is common to
                    see increased selling pressure, reduced investment activity, and a flight to more conservative investment options during a recession.</p>
                    <p className="mt-2">The duration and severity of a recession can vary, and the recovery period can also differ. Some recessions are relatively short-lived, while others can result in longer-lasting
                    economic impacts. Economic recovery typically involves a gradual return to growth, stabilization of employment, and improved consumer and business confidence. Government policies and economic factors
                    play a crucial role in determining the pace and strength of the recovery.</p>
                </section>
            </div>
        </div>
    )
}
