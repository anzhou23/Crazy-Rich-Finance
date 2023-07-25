import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bankruptcy() {
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
                    <span className="text-gray-700">Chapter 11 Bankruptcy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Chapter 11 Bankruptcy</h1>
                    <p className="mt-4">Chapter 11 bankruptcy is a specific form of bankruptcy under the United States Bankruptcy Code that primarily applies to businesses or individuals with substantial debts and complex
                    financial situations. It is often referred to as &apos;reorganization bankruptcy&apos; because it allows the debtor to restructure their debts and financial obligations while continuing their business operations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In a Chapter 11 bankruptcy, the debtor (either a business or an individual) files a petition with the bankruptcy court seeking protection from creditors. Once the petition is filed, an automatic
                    stay is put into effect, halting all collection actions and lawsuits against the debtor. This gives the debtor a chance to propose a reorganization plan.</p>
                    <p className="mt-2">The reorganization plan outlines how the debtor intends to repay creditors over time, usually through reduced or extended payment terms. The plan must be approved by the bankruptcy court and the
                    creditors, who have the opportunity to vote on the proposed plan.</p>
                    <p className="mt-2">During the Chapter 11 bankruptcy process, the debtor retains control of their business operations as a debtor-in-possession (DIP). However, in some cases, a trustee may be appointed to oversee the
                    reorganization process.</p>
                    <p className="mt-2">Chapter 11 bankruptcy provides several advantages, including the ability to negotiate with creditors and potentially emerge as a financially healthier entity after restructuring debts. It also allows
                    for greater flexibility in addressing financial challenges compared to other forms of bankruptcy.</p>
                    <p className="mt-2">However, Chapter 11 bankruptcy is a complex and costly process, and it requires extensive legal and financial expertise to navigate successfully. Not all businesses or individuals are eligible for
                    Chapter 11, and it is typically reserved for those with significant assets and liabilities.</p>
                </section>
            </div>
        </div>
    )
}
