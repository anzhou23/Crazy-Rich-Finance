import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function mutualFund() {
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
                    <span className="text-gray-700">Mutual Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mutual Fund</h1>
                    <p className="mt-4">A mutual fund is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of securities, such as stocks, bonds, or other assets. Managed by
                    professional fund managers, mutual funds offer individuals an opportunity to access a diversified investment portfolio with relatively small investment amounts.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">By pooling funds from multiple investors, mutual funds can invest in a broad range of assets, reducing the risk associated with investing in individual securities. Professional fund managers
                    handle the day-to-day management of the fund, making investment decisions based on their expertise and the fund&apos;s investment objectives. Compared to other investment vehicles, like real estate or bonds,
                    mutual funds are a relatively liquid invesetment option. Investors can enter or exit a mutual fund position without the constraints associated with trading individual securities.</p>
                    <p className="mt-2">Mutual funds can be categorized based on various factors, including asset class (e.g., equity funds, bond funds, money market funds), investment style (e.g., growth funds, value funds), and
                    geographic focus (e.g., international funds, regional funds). Each mutual fund has its own investment objective, such as capital appreciation, income generation, or a combination of both, allowing investors to
                    select funds that align with their investment objectives.</p>
                    <p className="mt-2">Mutual funds charge management and admin fees. These fees, typically referred to as expense ratios, cover various costs, including the fund manager&apos;s compensation, administrative expenses,
                    and marketing fees. Carefully review the expense ratio when considering a mutual fund, as high fees can eat into investment returns over time. Additionally, mutual funds typically have minimum investment requirements,
                    which vary among funds. Some funds may have low minimums, making them accessible to a wide range of investors, while others may have higher minimums that cater to institutional or high-net-worth individuals.</p>
                    <p className="mt-2">Mutual funds are subject to regulatory oversight and must adhere to specific rules and regulations designed to protect investors. They are required to disclose important information to investors,
                    such as the fund&apos;s investment strategy, risks, performance history, and fees. Investors can access this information in the fund&apos;s prospectus and other periodic reports.</p>
                    <p className="mt-2">While mutual funds offer diversification and professional management, they are still subject to investment risks. The performance of a mutual fund can be influenced by various factors, including
                    market conditions, economic factors, and the fund manager&apos;s investment decisions.</p>
                </section>
            </div>
        </div>
    )
}