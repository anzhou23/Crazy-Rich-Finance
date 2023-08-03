import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function insufficientFunds() {
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
                    <span className="text-gray-700">Insufficient Funds</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Insufficient Funds</h1>
                    <p className="mt-4">Insufficient funds occurs when a bank account does not have enough money available to cover a transaction or payment that has been requested or initiated. In simple terms,
                    it means there is not enough money in the account to complete the requested action, such as making a purchase, paying a bill, or withdrawing cash.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When a transaction is attempted with insufficient funds, it often results in an overdraft. An overdraft occurs when the account balance goes below zero, and the account
                    becomes temporarily &quot;overdrawn.&quot; Overdraft fees can vary depending on the bank&apos;s policies and the type of transaction. They can add up quickly and result in additional
                    financial strain for the account holder.</p>
                    <p className="mt-2">If there are insufficient funds in the account, the bank or financial institution may decline the transaction. This can happen with various types of transactions, including
                    debit card purchases, checks, electronic fund transfers, and bill payments. Some banks offer overdraft protection services, where they may cover a transaction even if there are insufficient funds
                    in the account. However, this often comes with a fee, and the account holder may need to repay the overdrafted amount along with any associated fees.</p>
                    <p className="mt-2">In some cases, individuals may link their checking accounts to a line of credit, which can cover overdrafts up to a certain limit. This can help prevent declined transactions
                    and overdraft fees.</p>
                    <p className="mt-2">Insufficient funds and overdrafts can have negative consequences beyond fees, including potential damage to credit scores and strained relationships with creditors and service
                    providers. If an account becomes overdrawn, the account holder should deposit funds to cover the overdraft, communicate with the bank, and address any outstanding transactions.</p>
                </section>
            </div>
        </div>
    )
}