import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function deposit() {
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
                    <span className="text-gray-700">Deposit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Deposit</h1>
                    <p className="mt-4">A deposit is a financial transaction where money or funds get placed into an account or held with a financial institution. It is a common
                    practice where individuals or businesses entrust their money to a bank, credit union, or other financial institution for safekeeping and potential growth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">There are various types of deposits, such as:</p>
                    <ul className="list-disc ml-6">
                        <li>Checking Account Deposit: When a person or business deposits money into a checking account, it becomes available for regular spending and withdrawals.
                        Checking accounts often offer easy access to funds through checks, debit cards, or online transfers.</li>
                        <li>Savings Account Deposit: Money deposited into a savings account is generally intended for longer-term storage and earns interest over time. Savings accounts
                        are designed for accumulating funds and providing a safe place to store money with relatively low risk.</li>
                        <li>Time Deposit (Certificate of Deposit - CD): With a CD, a depositor agrees to keep their money with the financial institution for a specific period, known as
                        the term. In return, the institution pays interest, and the depositor typically faces penalties if they withdraw the funds before the term ends.</li>
                    </ul>
                    <p className="mt-2">Deposits play a crucial role in the banking system. They provide the basis for lending and investing activities of financial institutions. By
                    accepting deposits, banks and other institutions can offer loans and credit to borrowers, stimulating economic activity. For depositors, keeping money in accounts with
                    reputable institutions ensures safety, access to financial services, and the possibility of earning interest or returns on their funds.</p>
                </section>
            </div>
        </div>
    )
}
