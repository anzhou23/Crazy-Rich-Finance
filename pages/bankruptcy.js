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
                    <span className="text-gray-700">Bankruptcy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bankruptcy</h1>
                    <p className="mt-4">Bankruptcy is a legal process where individuals or businesses who are unable to repay their debts seek relief from their financial obligations. It provides a structured framework for
                    individuals and businesses to managing and resolving debts when they become overwhelming.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">One of the main goals of bankruptcy is to discharge certain debts and protect debtors from aggressive collection efforts. A debt that is discharged is no longer legally enforceable, and the debtor is
                    released from the obligation to repay it. However, not all debts are dischargeable, such as certain tax debts, student loans (in most cases), child support, and alimony obligations.</p>
                    <p className="mt-2">There are different types of bankruptcy proceedings:</p>
                    <ul className="list-disc ml-6">
                        <li>Chapter 7, or &quot;liquidation bankruptcy,&quot; involves selling non-exempt assets to repay creditors. Certain debts may be discharged, providing a fresh start to the debtor.</li>
                        <li>Primarily used by businesses, Chapter 11 allows for the reorganization and restructuring of debts while the business continues operations. It provides an opportunity to develop a plan to repay creditors over time.</li>
                        <li>Designed for individuals with regular income, Chapter 13 enables the debtor to create a repayment plan to gradually pay off their debts over 3-5 years.</li>
                    </ul>
                    <p className="mt-2">When a bankruptcy petition is filed, an automatic stay goes into effect, providing temporary relief for debtors. This legally prohibits creditors from taking further collection actions against the debtor,
                    including lawsuits, wage garnishments, or foreclosure proceedings.</p>
                    <p className="mt-2">In bankruptcy cases, a trustee is appointed to oversee the process. The trustee&apos;s role varies depending on the bankruptcy chapter and includes reviewing the debtor&apos;s financial situation, liquidating
                    assets if necessary, and ensuring compliance with bankruptcy laws.</p>
                </section>
            </div>
        </div>
    )
}