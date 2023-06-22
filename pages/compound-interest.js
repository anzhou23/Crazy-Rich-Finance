import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function compoundInterest() {
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
                    <span className="text-gray-700">Compound Interest</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Compound Interest</h1>
                    <p className="mt-4">Compound interest is the interest calculated on the initial principal amount as well as any accumulated interest from previous periods. It allows investments or
                    loans to grow at an accelerating rate over time. The key concept of compound interest is that interest is earned not only on the initial amount but also on the interest that has
                    already been earned.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Compound interest takes advantage of the time value of money. By allowing interest to compound over longer periods, even small initial investments can grow significantly over time.
                    Similarly, compound interest on loans can result in substantial interest payments over extended repayment periods.</p>
                    <p className="mt-2">Compound interest plays a vital role in long-term investment strategies, such as retirement planning. The earlier individuals start investing, the longer their investments have to compound,
                    potentially resulting in substantial growth over time.</p>
                    <p className="mt-2">Failing to make timely payments on debt oligations, such as credit card debt or personal loans, can result in interest charges compounding on the outstanding balance, leading to an
                    increase in the overall debt burden.</p>
                    <p className="mt-2">While compound interest is generally advantageous for investors, it is essential to consider factors such as the interest rate, compounding frequency, and investment horizon. Higher interest
                    rates and more frequent compounding can lead to faster growth but also involve increased risks. Additionally, compounding works against individuals when they have outstanding debts with high
                    interest rates, as interest charges can accumulate rapidly.</p>
                </section>
            </div>
        </div>
    )
}