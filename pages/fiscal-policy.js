import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fiscalPolicy() {
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
                    <span className="text-gray-700">Fiscal Policy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fiscal Policy</h1>
                    <p className="mt-4">Fiscal policy is the government&apos;s use of taxation and spending to influence the overall state of the economy. It involves the decisions policymakers make regarding how much money the government
                    should collect in taxes and how it should allocate those funds through government spending.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The government can adjust tax rates, implement new taxes, or modify existing tax laws to generate revenue. Additionally, they allocates funds to various sectors such as infrastructure, healthcare, education, defense,
                    and social welfare programs. Government spending can stimulate economic growth by creating jobs, boosting consumption, and supporting specific industries.</p>
                    <p className="mt-2">One of the primary objectives is to stabilize the economy. During times of recession or economic downturns, the government may increase its spending and reduce taxes to stimulate aggregate demand and encourage economic
                    activity. Conversely, during periods of high inflation or economic overheating, the government may decrease spending and increase taxes to reduce aggregate demand and control inflation.</p>
                    <p className="mt-2">Fiscal policy decisions can result in budget deficits or surpluses. A budget deficit occurs when government spending exceeds tax revenue, leading to borrowing and an increase in national debt. On the other hand, a budget
                    surplus occurs when tax revenue exceeds government spending, allowing for debt reduction or increased savings.</p>
                    <p className="mt-2">Sustainable fiscal policies aim to strike a balance between short-term economic stabilization and long-term fiscal responsibility. Excessive borrowing and persistent budget deficits can lead to an unsustainable debt
                    burden and potentially hinder economic growth.</p>
                </section>
            </div>
        </div>
    )
}