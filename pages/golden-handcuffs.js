import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function goldenHandcuffs() {
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
                    <span className="text-gray-700">Golden Handcuffs</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Golden Handcuffs</h1>
                    <p className="mt-4">Golden handcuffs are financial incentives or benefits offered to employees to encourage them to remain with a company for an extended period of time. These incentives are typically designed to create a sense of
                    loyalty and make it financially difficult for employees to leave the organization.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Golden handcuffs are typically used to retain key employees, especially those with valuable skills, expertise, or knowledge. These incentives go beyond regular compensation and benefits and aim to provide additional financial
                    motivation for employees. They may include stock options, restricted stock units (RSUs), performance bonuses, deferred compensation plans, and other long-term incentives. These rewards are typically tied to the employee&apos;s tenure or the
                    achievement of specific performance targets.</p>
                    <p className="mt-2">Golden handcuffs often involve vesting schedules, which outline the duration an employee must stay with the company before being eligible to receive the full benefits of the incentives. Vesting periods can range from several years
                    to a decade or more. If an employee leaves the company before completing the vesting period, they may forfeit a portion or all of the promised incentives.</p>
                    <p className="mt-2">While golden handcuffs can be attractive and rewarding, they can also have drawbacks. Employees may feel obligated to stay with a company even if they are unhappy or if better opportunities arise elsewhere. The benefits of golden
                    handcuffs may also be tied to the company&apos;s performance, meaning that if the company struggles, the value of the incentives may diminish.</p>
                </section>
            </div>
        </div>
    )
}
