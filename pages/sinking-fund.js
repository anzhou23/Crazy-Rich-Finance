import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function scalper() {
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
                    <span className="text-gray-700">Scalper</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Scalper</h1>
                    <p className="mt-4">Sinking funds are similar to emergency funds in that they are both meant to act as financial safety nets and keep you on track to reach your financial goals. But, sinking funds are a
                    more tactical way to save money.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">With sinking funds, you will regularly set aside a little bit of money in one or multiple categories to get used later down the line. This fund is separate from your emergency fund or
                    savings account and should be used for specific goals.</p>
                    <p className="mt-2">Common types of sinking fund categories are planned expenses (such as a new car) or annual expenses (such as school tuition). Examples of sinking funds include expected medical bills,
                    home repairs or remodels, car repairs, insurance premiums, long-term debt, vacations, wedding expenses, pet expenses, and more. Even if you do not have an exact number in mind, it&apos;s
                    still worth setting up a sinking fund for big expenses. How many sinking funds you decide to set up is up to you. </p>
                    <p className="mt-2">You can build a sinking fund in 4 easy steps. First, decide what you are saving for. Then decide where to hold your sinking fund, ideally in a separate account thank your checking account or
                    emergency fund. Figure out how much to allocate to the sinking fund and finally, incorporate it into your budget.</p>
                </section>
            </div>
        </div>
    )
}
