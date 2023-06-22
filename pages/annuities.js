import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function annuities() {
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
                    <span className="text-gray-700">Annuities</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Annuities</h1>
                    <p className="mt-4">Annuities are financial products that provide a steady stream of income over a specified period or for the remainder of a person&apos;s life. They are typically offered by
                    insurance companies and can serve as a means of long-term financial planning, particularly for retirement.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Annuities are structured as contracts between an individual and an insurance company, where the individual makes either a lump sum payment or a series of payments to the insurer.
                    They offer the benefit of tax-deferred growth, meaning that earnings within the annuity account are not taxed until withdrawals get made.</p>
                    <p className="mt-2">There are different types of annuities, including fixed annuities, variable annuities, and indexed annuities, each with its own features and investment options. Fixed annuities
                    provide a guaranteed rate of return and a fixed income stream, while variable annuities allow the investor to choose from a range of investment options. Indexed annuities provide returns
                    based on the performance of a specific market index, offering a potential for higher returns while protecting against market downturns.</p>
                    <p className="mt-2">Annuities often come with fees and expenses, including mortality and expense charges, administrative fees, and investment management fees, which can vary depending on the specific
                    annuity contract. They can be either immediate, where income payments start immediately after purchase, or deferred, where income payments are postponed until a later date. Withdrawals from annuities
                    before reaching a certain age (typically 59 1/2) may be subject to penalties and taxes.</p>
                    <p className="mt-2">Annuities can offer a reliable income stream during retirement, providing financial security, but it&apos;s essential to carefully consider the terms, fees, and features before
                    purchasing an annuity to ensure it aligns with individual financial goals and circumstances.</p>
                </section>
            </div>
        </div>
    )
}
