import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function goldenParachute() {
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
                    <span className="text-gray-700">Golden Parachute</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Golden Parachute</h1>
                    <p className="mt-4">A golden parachute is a financial arrangement between a company and its top executives or key employees. It provides them with significant financial benefits
                    in the event of certain predetermined circumstances, typically surrounding a change in control of the company. These circumstances may include a merger, acquisition, or corporate
                    takeover that results in an executive or employee leaving the company.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The main purpose of a golden parachute is to offer protection and financial security to top-level executives who may face job uncertainty or termination due to a
                    change in the company&apos;s ownership or leadership. It is intended to incentivize executives to stay with the company and make decisions that are in the best interest of shareholders
                    and stakeholders, even in times of potential turmoil.</p>
                    <p className="mt-2">The typical components of a golden parachute package may include:</p>
                    <ul className="list-disc ml-6">
                        <li>Severance Pay: A lump-sum payment or multiple years&apos; worth of salary and bonuses in the event of job termination.</li>
                        <li>Stock Options: Acceleration or vesting of stock options, allowing the executive to gain ownership of more shares before their departure.</li>
                        <li>Bonuses and Incentives: Payouts of additional performance-based bonuses and incentives that would have otherwise been earned over time.</li>
                        <li>Health and Insurance Benefits: Continuation of health insurance coverage or other benefits after employment ends.</li>
                        <li>Pension and Retirement Benefits: Enhanced pension or retirement benefits, sometimes referred to as supplemental executive retirement plans (SERPs).</li>
                    </ul>
                    <p className="mt-2">Critics of golden parachutes argue they can lead to excessive compensation for executives even when they underperform. Additionally, these packages can be seen
                    as a misalignment of interests, as executives may prioritize their own financial gain over the company or its shareholders&apos; well-being during times of corporate upheaval.</p>
                    <p className="mt-2">On the other hand, proponents argue that golden parachutes are necessary to attract and retain talented executives who might otherwise be hesitant to take on the risks
                    associated with high-level positions in volatile industries or companies. They also believe that the financial security provided by such arrangements encourages executives to make long-term
                    strategic decisions that benefit the company&apos;s stability and growth.</p>
                </section>
            </div>
        </div>
    )
}