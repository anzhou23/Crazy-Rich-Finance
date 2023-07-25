import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function adjustableRateMortgage() {
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
                    <span className="text-gray-700">Adjustable Rate Mortgage</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Adjustable Rate Mortgage</h1>
                    <p className="mt-4">An adjustable rate mortgage (ARM) is a type of mortgage loan where the interest rate fluctuates over time based on changes in a specified financial index. Unlike a
                    fixed-rate mortgage, where the interest rate remains constant for the entire loan term, the interest rate of an ARM is subject to periodic adjustments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Most ARMs begin with an initial fixed-rate period, typically lasting for a few years (e.g., 3, 5, 7, or 10 years). During this period, the interest rate remains stable and
                    does not change. It is usually lower than the prevailing rates for fixed-rate mortgages. After the initial fixed-rate period, the ARM enters the adjustment period. The interest rate is adjusted
                    at regular intervals, usually once a year. The new interest rate is determined by adding a margin (a fixed percentage set by the lender) to the current value of a specified financial index.</p>
                    <p className="mt-2">The financial index used for adjusting the interest rate is often a short-term interest rate benchmark, such as the U.S. Treasury Bill rate or the London Interbank Offered Rate
                    (LIBOR). Changes in the index reflect fluctuations in the overall interest rate environment. As the interest rate changes, the monthly mortgage payment will also adjust. When the interest rate
                    increases, the monthly payment will rise, and when it decreases, the payment will decrease.</p>
                    <p className="mt-2">To protect borrowers from extreme interest rate swings, ARMs typically have caps and limits on how much the interest rate can increase or decrease at each adjustment and over the
                    loan&apos;s life. Common caps include periodic caps (limiting adjustments in a single period) and lifetime caps (limiting the maximum interest rate increase over the life of the loan).</p>
                </section>
            </div>
        </div>
    )
}
