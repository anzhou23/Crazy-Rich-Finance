import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fraud() {
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
                    <span className="text-gray-700">Fraud</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fraud</h1>
                    <p className="mt-4">Fraud is a deceptive and dishonest act or behavior carried out with the intent to gain an unfair or unlawful advantage or to harm others.
                    It involves deliberately misrepresenting, concealing, or manipulating information to deceive individuals, organizations, or the public for personal gain or
                    to cause financial, reputational, or legal damage.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Fraud can occur in various forms, such as financial fraud (e.g., embezzlement, Ponzi schemes), identity theft, insurance fraud, credit card
                    fraud, securities fraud, and internet scams. Perpetrators of fraud often exploit vulnerabilities in systems, abuse trust, or use coercion.</p>
                    <p className="mt-2">Detecting and preventing fraud is essential for maintaining trust in financial systems, businesses, and everyday transactions. Many organizations have
                    anti-fraud measures, such as internal controls, fraud risk assessments, and fraud detection technologies, to safeguard against fraudulent activities.</p>
                    <p className="mt-2">Engaging in fraud is illegal and can lead to severe consequences, including fines, legal penalties, imprisonment, and damage to one&apos;s reputation
                    and future opportunities. To protect oneself from fraud, individuals and organizations should remain vigilant, verify information from reliable sources, and report
                    suspicious activities to the appropriate authorities.</p>
                </section>
            </div>
        </div>
    )
}