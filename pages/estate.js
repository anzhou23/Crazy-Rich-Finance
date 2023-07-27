import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function estate() {
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
                    <span className="text-gray-700">Estate</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Estate</h1>
                    <p className="mt-4">An estate is the total sum of a person&apos;s assets, belongings, and liabilities at the time of their death. It encompasses all of their financial
                    and tangible possessions, real estate properties, investments, personal belongings, and any outstanding debts or liabilities. The estate reflects a person&apos;s net worth
                    and represents everything they own and owe.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When someone passes away, their estate goes through a legal process known as estate settlement or probate. During probate, the deceased person&apos;s will
                    (if they had one) gets validated, and a court or designated executor will oversee the distribution of assets and settlement of debts. If the deceased did not have a will, their
                    estate will be distributed according to the laws of intestacy in their jurisdiction.</p>
                    <p className="mt-2">The goal of estate planning is to ensure a person&apos;s assets get distributed according to their wishes and that their beneficiaries are taken care of after
                    their death. Estate planning also involves minimizing potential tax liabilities and avoiding probate if possible. This process often includes creating wills, trusts, and other
                    legal documents to protect and transfer assets in a controlled manner.</p>
                    <p className="mt-2">Estate planning is not just for the wealthy; people of all income levels can benefit from organizing their affairs and ensuring their assets get handled as intended.
                    Seeking advice from estate planning attorneys or financial advisors can help create a personalized estate plan that aligns with individual goals and circumstances.</p>
                </section>
            </div>
        </div>
    )
}
