import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function checking() {
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
                    <span className="text-gray-700">Checking Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checking Account</h1>
                    <p className="mt-4">A checking account is a type of bank account that allows individuals and businesses to deposit and withdraw funds for various financial transactions. It is often used for day-to-day
                    banking needs, such as paying bills, making purchases, and accessing cash through ATM withdrawals.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Customers can deposit money into their checking accounts through various methods, such as direct deposit, cash deposits, or electronic transfers. They can access their funds through
                    checks, debit cards, or ATM withdrawals. Most checking accounts come with a supply of checks that account holders can use to make payments to individuals or businesses, though you may need to pay for them.</p>
                    <p className="mt-2">Many banks offer online and mobile banking services, allowing customers to manage their accounts, view transactions, and make transfers electronically. Additionally, they may offer overdraft
                    protection, which allows customers to make transactions that exceed their account balance, subject to certain fees and terms.</p>
                    <p className="mt-2">Checking accounts are considered liquid assets, meaning the funds are easily accessible and can be used for everyday expenses. However, they typically do not earn interest compared
                    to savings accounts or other investment options.</p>
                </section>
            </div>
        </div>
    )
}
