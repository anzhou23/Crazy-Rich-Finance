import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function vesting() {
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
                    <span className="text-gray-700">Vesting Schedule</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Vesting Schedule</h1>
                    <p className="mt-4">A vesting schedule is a timeline or set of conditions that determine when an individual or employee has the right to fully own or access certain assets or benefits, typically related to
                    employer-provided incentives, such as stock options, retirement plans, or employer-matched contributions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Vesting schedules are commonly used to govern the ownership or access to assets over a specific period of time. This ensures that individuals earn their rights gradually or based on specific
                    criteria rather than having immediate full ownership or access. They are used to incentivize employees and promote long-term commitment to an organization. By linking the ownership or access to certain benefits
                    to a vesting schedule, companies encourage employees to stay with the organization for a specified duration, thus fostering employee retention and loyalty.</p>
                    <p className="mt-2">Vesting schedules typically outline a specific timeline or set of milestones that individuals must meet to acquire full ownership or access to the assets. For example, a vesting schedule for stock options might state that an employee will receive a certain percentage of
          the options after each year of service, with full ownership achieved after a predetermined number of years.</p>
                    <p className="mt-2">Cliff vesting involves a period of time before any ownership or access is granted, followed by a single date or milestone where full rights are acquired. Graded vesting, on the other hand, allows for a gradual acquisition of rights over time, typically in equal installments. If an individual leaves the organization or employment is terminated before the full vesting period is completed, they may only retain the rights to the vested portion of the assets, while the unvested portion may be forfeited or subject to specific conditions outlined in
          the vesting schedule.</p>
                </section>
            </div>
        </div>
    )
}