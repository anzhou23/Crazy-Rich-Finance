import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function taxableAccount() {
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
                    <span className="text-gray-700">Taxable Account</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Taxable Account</h1>
                    <p className="mt-4">A taxable account, also known as a brokerage or investment account, is an investment vehicle that allows individuals to buy, sell, and hold various types of investments,
                    such as stocks, bonds, mutual funds, and exchange-traded funds (ETFs). Unlike tax-advantaged accounts like retirement accounts, taxable accounts do not offer specific tax benefits or incentives.
                    Instead, they are subject to taxation on certain events, such as realized capital gains, dividends, and interest earned.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">One of the main tax considerations in a taxable account is the treatment of capital gains. If you sell an investment at a higher price than what you originally paid for it, you
                    realize a capital gain. Capital gains can be classified as short-term (held for 1 year or less) or long-term (held for more than 1 year). The tax rate on short-term gains is typically higher and
                    is based on your ordinary income tax rate, while long-term capital gains may be subject to lower tax rates, often determined by your income level. Dividends received from stocks and mutual funds, as
                    well as interest earned from bonds or cash equivalents, are generally subject to income tax in the year received.</p>
                    <p className="mt-2">Investors can employ tax-efficient investing strategies minimize their tax liability. For example, investing in tax-efficient index funds or ETFs that have low turnover and
                    generate fewer taxable events can be advantageous. Additionally, holding investments for longer periods may qualify for more favorable long-term capital gains tax rates.</p>
                    <p className="mt-2">Taxable accounts offer greater flexibility and accessibility compared to tax-advantaged accounts like IRAs or 401(k)s. There are generally no restrictions or penalties on withdrawals,
                    and investors can use the funds for any purpose without limitations.</p>
                    <p className="mt-2">Since taxable accounts are subject to taxes, investors may strategically allocate investments based on their tax efficiency. For example, placing tax-efficient investments like index funds
                    or tax-managed funds in taxable accounts, and tax-inefficient investments like bonds or actively managed funds in tax-advantaged accounts, can help optimize overall tax efficiency across an investment portfolio.</p>
                </section>
            </div>
        </div>
    )
}