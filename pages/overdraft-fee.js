import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function overdraft() {
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
                    <span className="text-gray-700">Overdraft Fee</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Overdraft Fee</h1>
                    <p className="mt-4">An overdraft fee is a charge imposed by a financial institution when an account holder spends more money than is available in their account, resulting in a negative balance.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When a transaction exceeds the available funds, the bank may cover the difference to complete the transaction but will charge an overdraft fee as a penalty. This fee serves as compensation
                    for the bank&apos;s extension of funds and is typically a fixed amount per transaction or per day that the account remains overdrawn. Overdraft fees can vary among financial institutions and may add up quickly
                    if multiple transactions are made while the account is in a negative balance.</p>
                </section>
            </div>
        </div>
    )
}
