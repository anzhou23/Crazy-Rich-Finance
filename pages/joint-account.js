import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function jointAccount() {
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
                    <span className="text-gray-700">Joint Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Joint Account</h1>
                    <p className="mt-4">A joint account is a bank or investment account owned and operated by 2+ individuals. Each account holder has equal rights and access to the funds within the
                    account. Joint accounts are commonly used by couples, family members, or business partners to manage shared finances and facilitate convenient access to funds.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">All account holders can make deposits, withdrawals, and transactions. This facilitates joint financial management and simplifies access to funds for shared
                    expenses, such as household bills or business expenses. Additionally, all account holders share the responsibility and liability associated with the account. This means that each
                    account holder is jointly and severally liable for any debts, overdrafts, or liabilities incurred in connection with the account.</p>
                    <p className="mt-2">Joint accounts can make it easier to track and manage shared finances, as well as simplify bill payments and other financial transactions. They can also be useful
                    when both account holders need access to funds, such as for emergencies or business operations.</p>
                    <p className="mt-2">Joint accounts often include a right of survivorship, which means that if one account holder passes away, the ownership of the account automatically transfers to
                    the surviving account holder(s). This feature can simplify estate planning and provide a seamless transfer of assets upon the death of one account holder. However, it&apos;s essential
                    to consult with legal and financial advisors to understand the implications of survivorship rights.</p>
                    <p className="mt-2">Open and effective communication is crucial when managing a joint account. All account holders should have a clear understanding of the purpose, rules, and expectations
                    for the account. Establishing trust, setting financial goals together, and maintaining open lines of communication can help prevent conflicts down the line.</p>
                </section>
            </div>
        </div>
    )
}
