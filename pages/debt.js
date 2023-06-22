import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function debt() {
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
                    <span className="text-gray-700">Debt</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Debt</h1>
                    <p className="mt-4">Debt refers to an obligation or a liability that arises when one party borrows money or receives goods or services on credit from another party. It is a form of financial obligation that must
                    be repaid over time, typically with interest.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When an individual, business, or government borrows money, they incur a debt to the lender. The borrowed funds can be used for financing a purchase, funding operations, investing in projects, etc. The borrower
                    is legally obligated to repay the debt according to agreed-upon terms, which usually include repayment schedule, interest rate, and any other applicable fees or conditions.</p>
                    <p className="mt-2">Debt can take different forms, including loans, bonds, credit card balances, mortgages, and lines of credit. Each type of debt has its own terms and conditions, such as repayment period, interest rate, and
                    collateral requirements.</p>
                    <p className="mt-2">While debt can provide a way to finance activities and achieve goals, it also carries financial obligations and risks. Failure to repay debts on time can result in penalties, higher interest costs, damage to
                    creditworthiness, and potential legal consequences.</p>
                    <p className="mt-2">Debt can be categorized into 2 main types. Consumer debt includes personal loans, credit card debt, student loans, and other forms of borrowing by individuals for personal or household purposes. Sovereign debt
                    is incurred by national governments through issuing bonds or obtaining loans to finance government expenditures and projects.</p>
                </section>
            </div>
        </div>
    )
}
