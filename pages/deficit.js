import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function deficit() {
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
                    <span className="text-gray-700">Deficit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Deficit</h1>
                    <p className="mt-4">A deficit is a negative financial situation where a person&apos;s expenses exceed their income or cash inflow. In other words, you are spending
                    more money than you are making, resulting in a shortfall. A deficit can occur when someone incurs excessive debt or spends beyond their means, leading to a negative
                    balance in their budget.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Having a deficit can lead to various financial challenges, such as accumulating debt, difficulty paying bills and obligations, and an inability to
                    save or invest for the future. If not addressed, a deficit can lead to financial stress and impact your financial stability and well-being.</p>
                    <p className="mt-2">To improve your financial situation and eliminate a deficit, you can take several steps, including creating a budget to track income and expenses,
                    reducing unnecessary spending, finding additional sources of income, and prioritizing debt repayment. It is essential to practice responsible financial habits and make
                    sound financial decisions to avoid or overcome deficits and achieve financial security and stability.</p>
                </section>
            </div>
        </div>
    )
}
