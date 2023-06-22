import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function insiderTrading() {
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
                    <span className="text-gray-700">Insider Trading</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Insider Trading</h1>
                    <p className="mt-4">Insider trading refers to the buying or selling of stocks, bonds, or other financial securities based on material, non-public information about the company. It occurs
                    when individuals with privileged access to confidential information about a publicly traded company use that information to make trades and gain an unfair advantage in the market.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Insider trading involves trading based on information not available to the general public and could significantly impact the value of a company&apos;s securities, including
                    financial results, mergers and acquisitions, regulatory decisions, or any other non-public info. Insiders typically include company executives, directors, employees, and other individuals who
                    have access to confidential company information. They have a fiduciary duty to act in the company and shareholders&apos; best interests and are prohibited from using insider information for personal gain.</p>
                    <p className="mt-2">Insider trading is generally illegal in most jurisdictions, as it undermines the integrity of the financial markets and creates an unfair advantage. Laws and regulations aim to prevent
                    insider trading and impose severe penalties, including fines, imprisonment, and civil liabilities, on individuals found guilty of engaging in such activities.</p>
                    <p className="mt-2">Regulatory bodies, such as the U.S. Securities and Exchange Commission (SEC), actively monitor and investigate insider trading. They enforce regulations requiring insiders to disclose
                    their trades and report any material non-public information they possess.</p>
                    <p className="mt-2">Not all trades by insiders are illegal. Insiders can engage in legal trading activities if they comply with relevant regulations and disclose their trades appropriately. For example,
                    they may need to file reports with regulatory authorities within a given timeframe.</p>
                </section>
            </div>
        </div>
    )
}