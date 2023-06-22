import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function margin() {
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
                    <span className="text-gray-700">Margin</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Margin</h1>
                    <p className="mt-4">Margin, in the context of investing and trading, refers to borrowing funds from a broker to leverage investments and increase potential returns. It allows investors to buy more
                    securities than they could afford with their own capital. Margin trading involves using the investor&apos;s own funds as well as borrowed funds, and it carries both the potential for higher profits
                    and increased risks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Margin trading involves meeting specific margin requirements set by the broker. Investors are typically required to deposit a certain percentage of the total investment value,
                    known as the initial margin. This serves as collateral against potential losses. Brokers may also have maintenance margin requirements, which mandate maintaining a minimum account value to continue
                    holding the position. If the account value falls below the maintenance margin, investors may be required to deposit additional funds to meet the margin requirements or face a margin call.</p>
                    <p className="mt-2">While margin trading offers the potential for higher returns, it also carries increased risks. If investments perform poorly, losses can be magnified due to the leverage involved.
                    If the value of the investment falls below the maintenance margin, the broker may issue a margin call, requiring the investor to deposit more funds or close out positions to meet margin requirements.
                    Failure to meet a margin call can lead to the broker liquidating positions to cover losses.</p>
                    <p className="mt-2">Borrowed funds in margin trading typically incur interest charges, which can add to the overall cost of trading. Investors need to consider the interest rates charged by their broker
                    and the impact on their trading performance. Margin trading also involves transaction costs, such as commissions and fees.</p>
                    <p className="mt-2">Margin trading requires opening a margin account with a broker. Not all brokerage accounts automatically have margin capabilities, and investors must meet specific eligibility criteria
                    and sign margin agreements. Brokers assess the investor&apos;s financial standing, trading experience, and risk tolerance before granting margin trading privileges.</p>
                </section>
            </div>
        </div>
    )
}