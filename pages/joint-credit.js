import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function jointCredit() {
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
                    <span className="text-gray-700">Joint Credit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Joint Credit</h1>
                    <p className="mt-4">Joint credit is a financial arrangement where 2+ individuals are jointly responsible for repaying a loan or credit account. When applying for joint credit, both parties share
                    the responsibility for the debt and are equally liable for making payments. This arrangement allows individuals to combine their financial resources and creditworthiness to obtain larger loan
                    amounts or better interest rates.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">With joint credit, all parties involved are jointly and severally liable for the debt, meaning each individual is responsible for the full repayment of the debt, regardless of
                    how the debt is divided among the borrowers. Each borrower has equal rights and obligations regarding the credit account, including the ability to make transactions, receive account statements,
                    and make changes to the account.</p>
                    <p className="mt-2">Joint credit applications typically consider the credit history and income of all applicants. By combining their financial resources and credit profiles, individuals may have a
                    higher chance of qualifying for credit or securing more favorable loan terms.</p>
                    <p className="mt-2">Payment history and other activities related to joint credit accounts are reported to the credit bureaus for all borrowers. Any negative actions, such as late payments or defaults,
                    can impact the credit scores of all parties involved.</p>
                    <p className="mt-2">Joint credit agreements are legally binding contracts, and they can have legal implications if one party fails to fulfill their obligations. It&apos;s essential to have clear agreements
                    on payment responsibilities, decision-making, and financial expectations to avoid misunderstandings or conflicts.</p>
                </section>
            </div>
        </div>
    )
}
