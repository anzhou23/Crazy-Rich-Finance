import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function amortization() {
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
                    <span className="text-gray-700">Amortization</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Amortization</h1>
                    <p className="mt-4">Amortization is the process of gradually reducing or paying off a debt over a specific period through regular payments. It involves breaking down the total amount borrowed into a series of
                    scheduled payments that cover both the principal (the original amount borrowed) and the interest (the cost of borrowing).</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In an amortizing loan, such as a mortgage or car loan, each payment made consists of the principal plus interest. Initially, a larger portion of the payment goes towards paying off the interest, while a
                    smaller portion is applied towards the principal. As the loan progresses, the balance shifts, and a larger portion of each payment is allocated towards reducing the principal.</p>
                    <p className="mt-2">The amortization process is based on a predetermined schedule, typically provided by the lender. This schedule outlines the total number of payments, the payment amount, and the breakdown between principal
                    and interest. It allows borrowers to know exactly how much they need to pay each period and how the loan balance will be reduced over time.</p>
                    <p className="mt-2">Through amortization, you can spread out the cost of a large purchase over an extended period, making it more affordable. It also ensures the loan is fully repaid by the end of the term, assuming all
                    payments are made as scheduled.</p>
                    <p className="mt-2">Amortization schedules are calculated using various factors, including the loan amount, interest rate, loan term, and the frequency of payments (monthly, biweekly, etc.). They may vary depending on the type
                    of loan and the terms agreed upon. While most people associate amortization with loans, such as mortgages, it can also apply to other financial instruments, such as bonds or installment loans.</p>
                </section>
            </div>
        </div>
    )
}