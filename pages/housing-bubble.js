import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function housingBubble() {
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
                    <span className="text-gray-700">Housing Bubble</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Housing Bubble</h1>
                    <p className="mt-4">The housing bubble was a significant economic phenomenon that occurred in various countries, most notably in the U.S. during the mid-2000s. It was a period of rapid and
                    unsustainable increase in housing prices, fueled by speculative buying, easy access to mortgage loans, and a general belief that real estate prices would continue to rise indefinitely. As a
                    result, housing prices reached unprecedented levels, far exceeding their fundamental value based on factors like income levels, rental rates, and construction costs.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Key factors contributing to the housing bubble included:</p>
                    <ul className="list-disc ml-6">
                        <li>Easy Credit: Lenders offered subprime mortgages with low or no down payments, often without thoroughly assessing borrowers&apos; ability to repay. This led to a surge in homebuying, even
                        among individuals who might not have qualified for traditional loans.</li>
                        <li>Speculative Buying: Many investors and homebuyers purchased properties with the expectation of quick profits from rising prices, rather than for long-term occupancy or rental income.</li>
                        <li>Lack of Regulation: Financial institutions packaged and sold mortgage-backed securities to investors, sometimes bundling high-risk mortgages. These complex financial products spread risk
                        throughout the financial system and contributed to a disconnect between lenders and borrowers.</li>
                        <li>Overleveraging: Many homeowners used their homes as collateral for additional loans, borrowing against their increasing home values. This led to a high level of household debt.</li>
                        <li>Overbuilding: In some areas, excessive construction of new homes contributed to an oversupply of housing, which eventually outpaced demand.</li>
                    </ul>
                    <p className="mt-2">The housing bubble eventually burst, triggering the 2007-2008 financial crisis and a severe economic recession. As housing prices declined sharply, many homeowners found themselves
                    in negative equity, owing more on their mortgages than their homes were worth. The crisis had widespread ramifications, including:</p>
                    <ul className="list-disc ml-6">
                        <li>Foreclosures: Many homeowners were unable to meet their mortgage payments, leading to a wave of foreclosures and distressed property sales.</li>
                        <li>Financial Institutions: The crisis exposed the risks associated with mortgage-backed securities and complex financial products, causing major losses for banks and other financial institutions.</li>
                        <li>Economic Recession: The collapse of the housing market had a cascading effect on the broader economy, leading to job losses, reduced consumer spending, and a contraction of credit markets.</li>
                    </ul>
                    <p className="mt-2">The housing bubble and its aftermath prompted significant regulatory reforms and changes in lending practices to prevent similar crises in the future. It serves as a cautionary
                    example of the dangers of unsustainable speculative practices and the importance of responsible lending and financial oversight.</p>
                </section>
            </div>
        </div>
    )
}