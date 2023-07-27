import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function embezzlement() {
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
                    <span className="text-gray-700">Embezzlement</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Embezzlement</h1>
                    <p className="mt-4">Embezzlement is a form of financial fraud or theft where a person misappropriates or misuses funds or assets entrusted to them by an organization,
                    employer, or another individual. The embezzler gains access to the funds or assets legally, often as part of their job or role, but then unlawfully converts or uses
                    them for personal gain, without the owner&apos;s permission.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Embezzlement involves the fraudulent or deceitful handling of money or property that belongs to someone else. The embezzler abuses their position
                    of trust to divert the funds or assets for their own benefit. The motive is usually financial gain, and the embezzler may use the stolen funds to finance personal expenses,
                    luxury purchases, or even cover personal debts.</p>
                    <p className="mt-2">Embezzlement can take various forms, such as skimming cash receipts, making unauthorized transfers of funds, altering financial records, creating false
                    invoices, or diverting company assets for personal use. It can be difficult to detect, especially if the embezzler is skilled at concealing their actions. Embezzlement may
                    involve manipulating financial records or creating fraudulent documents to cover their tracks.</p>
                    <p className="mt-2">Embezzlement is considered a serious crime and is subject to criminal prosecution. If caught, the embezzler may face criminal charges, fines, restitution
                    orders, and even imprisonment. It is distinct from theft in that the embezzler had legal access to the funds or assets initially, whereas theft typically involves unauthorized
                    and illegal access.</p>
                    <p className="mt-2">Organizations can implement various internal controls and safeguards to prevent embezzlement, such as regular audits, separation of duties, and strict
                    oversight of financial transactions.</p>
                </section>
            </div>
        </div>
    )
}
