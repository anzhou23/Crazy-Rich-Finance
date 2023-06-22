import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function annualPercentageYield() {
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
                    <span className="text-gray-700">Annual Perecntage Yield</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Annual Perecntage Yield</h1>
                    <p className="mt-4">Annual Percentage Yield (APY) represents the total return on an investment or savings account over a one-year period, taking into account compound interest. It is expressed as a
                    percentage and helps investors and savers understand the true earning potential of their funds.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Unlike the <Link href="/annual-percentage-rate" className="text-blue-500">Annual Percentage Rate (APR)</Link>, APY takes the compounding effect into consideration, meaning the interest
                    earned is reinvested and starts earning additional interest.</p>
                    <p className="mt-2">APY reflects both the stated interest rate and the frequency of compounding. The more frequently interest is compounded, the higher the APY will be compared to the nominal interest rate.
                    For example, if interest is compounded monthly, the APY will be higher than if it is compounded annually.</p>
                    <p className="mt-2">APY is particularly useful when comparing different investment or savings options. It allows investors to understand the potential returns they can expect from various financial products
                    and make informed decisions about where to allocate their funds.</p>
                    <p className="mt-2">APY assumes that the investment or savings account remains untouched for the entire year and that the interest is reinvested. Any additional contributions, withdrawals, or changes in interest
                    rates during the year can affect the actual returns.</p>
                </section>
            </div>
        </div>
    )
}
