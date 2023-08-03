import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function intrinsicValue() {
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
                    <span className="text-gray-700">Intrinsic Value</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Intrinsic Value</h1>
                    <p className="mt-4">Intrinsic value is an asset, investment, or financial instrument&apos;s fundamental worth, often determined by the underlying characteristics,
                    properties, and potential future cash flows associated with that asset. It distinguishes between an asset&apos;s actual worth based on its characteristics and its perceived
                    value influenced by market sentiment, trends, and emotions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Intrinsic value is used to assess whether an investment is undervalued or overvalued. When the market price of an asset is lower than its estimated
                    intrinsic value, it may be considered undervalued and potentially a good investment opportunity. Conversely, if the market price is higher than the estimated intrinsic value,
                    the asset may be considered overvalued. Analysts and investors often try to estimate an asset&apos;s intrinsic value to determine if it is a worthwhile investment at its
                    current market price.</p>
                    <p className="mt-2">An asset&apos;s intrinsic value is influenced by factors such as the asset&apos;s cash flow potential, earnings, dividends, growth prospects, and risk
                    characteristics. Various valuation models are used to estimate intrinsic value. For stocks, one common approach is the discounted cash flow (DCF) analysis, which involves
                    projecting future cash flows and discounting them back to present value. For bonds, intrinsic value can be assessed based on the coupon payments and principal repayment.</p>
                    <p className="mt-2">Determining intrinsic value often involves subjective judgment and assumptions, such as projected growth rates, discount rates, and economic conditions.
                    As a result, different analysts may arrive at different estimates of intrinsic value for the same asset.</p>
                    <p className="mt-2">Intrinsic value is often associated with a long-term perspective on investing. Investors who focus on intrinsic value seek opportunities where the market
                    price does not fully reflect the true worth of the asset.</p>
                    <p className="mt-2">Intrinsic value calculations involve assumptions about future events and conditions. Changes in these assumptions can lead to variations in estimated intrinsic
                    value. Additionally, unforeseen events and market changes can affect an asset&apos;s actual performance. Intrinsic value can be used in comparative analysis, where assets within
                    the same industry or sector are assessed based on their respective intrinsic values. This helps investors identify potentially stronger investment options.</p>
                </section>
            </div>
        </div>
    )
}