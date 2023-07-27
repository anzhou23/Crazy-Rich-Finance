import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function escrow() {
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
                    <span className="text-gray-700">Escrow</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Escrow</h1>
                    <p className="mt-4">Escrow is a financial arrangement where a neutral third party holds and manages funds, assets, or documents on behalf of 2 parties involved
                    in a transaction. The purpose of escrow is to provide a secure and trusted way to facilitate the transfer of goods, services, or property between the parties,
                    ensuring both sides fulfill their obligations before the transaction is completed.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">An escrow agent, often a financial institution or a licensed professional, acts as the intermediary between the buyer and the seller in a
                    transaction. The agent ensures that the terms and conditions agreed upon by both parties are met before releasing the funds or assets, including inspections,
                    regulatory approvals, or other contractual obligations. They are a neutral mediator, impartially overseeing the transaction to ensure that neither party is
                    disadvantaged. Their services may involve fees or charges paid by one or both parties, depending on the nature and complexity of the transaction.</p>
                    <p className="mt-2">Escrow is commonly used in real estate transactions, where the buyer deposits the purchase price into an escrow account until all the conditions of
                    the sale are met. Once the seller fulfills all the requirements, the funds are released to the seller, and the property is transferred to the buyer. It can also be used
                    for various contractual agreements, including business deals, mergers and acquisitions, and even legal settlements.</p>
                    <p className="mt-2">In the context of online transactions, escrow services are used to protect both buyers and sellers. The buyer deposits the payment into an escrow
                    account, and the seller delivers the goods or services. Upon verification that the goods or services meet the agreed-upon conditions, the funds are released to the seller.
                    This reduces the risk of fraud or non-compliance by either party while establishing trust and confidence between the parties involved in the transaction.</p>
                </section>
            </div>
        </div>
    )
}
