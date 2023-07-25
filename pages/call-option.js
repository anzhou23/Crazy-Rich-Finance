import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function callOption() {
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
                    <span className="text-gray-700">Call Option</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Call Option</h1>
                    <p className="mt-4">A call option is a financial contract that gives the holder (the buyer) the right, but not the obligation, to purchase a specific asset (such as stocks, commodities, or
                    other financial instruments) at a predetermined price (the strike price) within a specified time period (the expiration date). The seller of the call option is referred to as the option writer
                    or option seller.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When an investor purchases a call option, they are essentially betting that the price of the underlying asset will rise above the strike price before the option&apos;s expiration
                    date. If the price surpasses the strike price, the call option becomes profitable, and the buyer can exercise the option by buying the asset at the agreed-upon strike price and then immediately selling
                    it at the higher market price.</p>
                    <p className="mt-2">The appeal of call options lies in the potential for significant gains with a relatively small upfront investment. The buyer&apos;s risk is limited to the premium paid for the call option,
                    and they are not obligated to exercise it if market conditions are unfavorable. On the other hand, the seller of the call option (option writer) takes on the risk of potential losses if the price of the
                    underlying asset rises substantially, as they must sell the asset at the lower strike price if the buyer exercises the option.</p>
                    <p className="mt-2">Call options are widely used by investors for various purposes, including speculation, hedging, and generating income through covered call strategies. They offer flexibility and leverage,
                    allowing investors to benefit from price movements in the market without directly owning the underlying asset.</p>
                </section>
            </div>
        </div>
    )
}
