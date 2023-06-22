import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function certificateOfDeposit() {
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
                    <span className="text-gray-700">Certificate of Deposit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Certificate of Deposit</h1>
                    <p className="mt-4">A certificate of deposit (CD) is a time deposit offered by banks and financial institutions where investors deposit a fixed amount of money for a
                    specific term, typically ranging from a few months to several years. CDs generally offer a fixed interest rate and guarantee the return of the principal amount at maturity.
                    They are considered low-risk investments suitable for individuals seeking a stable and predictable return.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">CDs are generally considered low-risk investments because they offer principal protection. The bank or financial institution guarantees the return of the initial
                    investment amount at maturity, making CDs a more conservative option compared to other investment vehicles such as stocks or crypto. Additionally, CDs offered by banks are often insured by
                    the Federal Deposit Insurance Corporation (FDIC) in the U.S. FDIC insurance provides protection up to certain limits, typically $250,000 per depositor, per bank.</p>
                    <p className="mt-2">Unlike some other investments, CDs have limited liquidity. When you invest in a CD, you agree to keep your money deposited for the specified term. Withdrawing funds
                    before the CD reaches maturity can result in penalties or loss of accrued interest. Therefore, CDs are typically suited for individuals who have funds they can afford
                    to leave untouched for the duration of the term.</p>
                    <p className="mt-2">CDs provide a fixed income stream in the form of regular interest payments. These payments can be received at various intervals, such as monthly, quarterly, or annually,
                    depending on the terms of the CD. This can be beneficial for individuals looking for steady income.</p>
                    <p className="mt-2">When investing in CDs, consider prevailing interest rates. If interest rates rise after you purchase a CD, you may miss out on higher rates available in the market. On
                    the other hand, if rates decline, holding a CD with a fixed interest rate can be advantageous, as you continue to earn the higher rate.</p>
                </section>
            </div>
        </div>
    )
}
