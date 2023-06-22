import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function lien() {
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
                    <span className="text-gray-700">Lien</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Lien</h1>
                    <p className="mt-4">A lien is a legal claim or encumbrance on a property or asset, typically used as collateral for a debt or obligation. It gives the lienholder the right to possess the property or asset
                    if the debt is not repaid or the obligation is not fulfilled according to the agreed terms. A lien provides security to the creditor or the party owed the debt, ensuring they have a legal interest in the
                    property or asset until the debt is satisfied.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Liens can be placed on various types of property, including real estate, vehicles, boats, or even personal property like artwork or jewelry. They are often created through a contractual
                    agreement or by operation of law, such as in the case of tax or judgment liens.</p>
                    <p className="mt-2">There are different types of liens depending on the nature of the debt or obligation.</p>
                    <ul className="list-disc ml-6">
                        <li>A mortgage lien is placed on a property to secure a mortgage loan. If the borrower defaults on the loan, the lender can foreclose on the property and sell it to recover the outstanding debt.</li>
                        <li>A tax lien is imposed by the government when a taxpayer fails to pay their taxes. The government has the right to seize and sell the property to satisfy the tax debt.</li>
                        <li>A judgment lien is obtained by a creditor after winning a lawsuit. It allows the creditor to claim the debtor&apos;s property to satisfy the court-ordered judgment.</li>
                        <li>A mechanic&apos;s lien is filed by contractors, subcontractors, or suppliers for unpaid work or materials provided on a property. It gives them the right to seek payment by forcing the sale of the property.</li>
                    </ul>
                    <p className="mt-2">Liens can affect the ownership and transferability of a property or asset. They are typically recorded in public records, making them visible to potential buyers or lenders. Clearing a lien
                    usually requires satisfying the underlying debt or fulfilling the obligation, after which the lienholder releases their claim on the property.</p>
                </section>
            </div>
        </div>
    )
}