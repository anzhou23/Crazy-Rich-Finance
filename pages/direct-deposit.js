import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function diversification() {
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
                    <span className="text-gray-700">Diversification</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Diversification</h1>
                    <p className="mt-4">Direct deposit is a convenient and secure way to electronically transferring funds from one account to another. With direct deposit, people can
                    automatically deposit payments, such as salaries, wages, pensions, or government benefits, directly into their bank account. Instead of receiving a physical check
                    or cash, the funds are directly credited to the recipient&apos;s account.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Direct deposit eliminates the need to physically deposit paychecks or benefit payments at a bank or cash a paper check. The funds
                    get automatically deposited into one&apos;s bank account on the scheduled payment date. This reduces the risk of lost or stolen checks, as there is no physical check to handle,
                    making it a safer and more secure way to receive payments.</p>
                    <p className="mt-2">Direct deposit can be used for various types of payments, including paychecks, retirement benefits, tax refunds, and social welfare payments. To set up
                    direct deposit, individuals typically provide their employer or the paying institution with their bank account details, such as the account number and routing number. The
                    payer then processes the payment electronically, and the funds are deposited into the designated account on the agreed-upon date.</p>
                </section>
            </div>
        </div>
    )
}
