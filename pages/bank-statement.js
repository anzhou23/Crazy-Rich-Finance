import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bankStatement() {
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
                    <span className="text-gray-700">Bank Statement</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bank Statement</h1>
                    <p className="mt-4">A bank statement is a financial document a bank or financial institution regularly provides to its account holders, typically monthly or quarterly.
                    It contains a summary of all the transactions and activities related to a specific bank account during a specific period.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The bank statement provides detailed information about the account&apos;s starting balance, deposits made into the account (such as salary payments or transfers),
                    withdrawals (including checks, debit card transactions, and electronic transfers), service charges, interest earned, and any other fees or adjustments. It also includes the
                    ending balance, which represents the remaining funds in the account at the end of the statement period.</p>
                    <p className="mt-2">Bank statements help account holders keep track of their finances, monitor their spending, and verify the accuracy of their transactions. By reviewing their bank
                    statements regularly, account holders can detect any errors or unauthorized transactions, reconcile their accounts, and maintain a clear picture of their finances.</p>
                    <p className="mt-2">In addition to receiving paper statements by mail, many banks offer electronic versions of bank statements, known as e-statements, which can be accessed and
                    downloaded through online banking platforms. E-statements are environmentally friendly and provide a secure way for account holders to view their financial information digitally.</p>
                </section>
            </div>
        </div>
    )
}
