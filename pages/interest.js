import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function interest() {
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
                    <span className="text-gray-700">Interest</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Interest</h1>
                    <p className="mt-4">Interest is the cost or fee paid for borrowing money or the return earned on an investment. It is essentially the price of using someone else&apos;s funds or the compensation
                    received for lending money to someone else.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When you borrow money, interest is the additional amount you must pay back to the lender along with the principal (the original amount borrowed). From an investment or lending perspective,
                    interest represents the income or return earned on the money lent to another party. Lenders receive interest as compensation for the use of their funds and as a reward for taking on the risk of lending.</p>
                    <p className="mt-2">In many cases, interest can compound over time. Compound interest means that the interest earned or charged is added to the principal, and subsequent interest calculations are based on the
                    updated total. This compounding effect can significantly impact the overall amount paid or earned over the life of a loan or investment.</p>
                    <p className="mt-2">Interest plays a crucial role in various financial transactions. It enables individuals and businesses to access credit and finance their needs, such as purchasing a home, starting a business,
                    or funding educational expenses. Interest rates can vary depending on the type of loan or investment, economic conditions, and other factors.</p>
                </section>
            </div>
        </div>
    )
}