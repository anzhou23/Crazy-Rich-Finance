import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function earnestMoney() {
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
                    <span className="text-gray-700">Earnest Money</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnest Money</h1>
                    <p className="mt-4">Earnest money, also known as a &quot;good faith deposit,&quot; is a sum of money a buyer provides to a seller to demonstrate their intent to purchase a
                    property or enter into a contract. It serves as evidence of the buyer&apos;s commitment to the transaction and is typically paid upfront when making an offer on a house, real estate
                    property, or in some cases, when entering into other contractual agreements.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The earnest money deposit is held in escrow, meaning it is placed in a separate account managed by a neutral third party, usually a title company or a real estate
                    broker. This ensures the funds are safeguarded until the transaction is completed or the contract is terminated.</p>
                    <p className="mt-2">If the sale or contract goes through as planned, the earnest money gets applied towards the purchase price or is credited back to the buyer. However, if the buyer
                    defaults on the contract without a valid reason, the seller may be entitled to keep the earnest money as compensation for the time and effort invested in the transaction.</p>
                    <p className="mt-2">The amount of earnest money can vary and is often negotiable, but it is typically a percentage of the purchase price or a fixed amount agreed upon by both parties.
                    In competitive real estate markets, offering a larger earnest money deposit may strengthen the buyer&apos;s offer and demonstrate their commitment to the purchase.</p>
                </section>
            </div>
        </div>
    )
}
