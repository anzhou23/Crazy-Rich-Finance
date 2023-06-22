import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function brokerage() {
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
                    <span className="text-gray-700">Brokerage</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Brokerage</h1>
                    <p className="mt-4">A brokerage is a financial institution or company that facilitates the buying and selling of financial securities,
                    such as stocks, bonds, and mutual funds. They act as intermediaries between buyers and sellers, executing trades and
                    providing various services, including investment advice, research, and account management.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Brokerages often provide a range of investment services, including research and analysis, investment advice, portfolio management, and
                    retirement planning. Some brokerages may charge fees or commissions for their services, such as transaction fees, account maintenance fees, or advisory fees.
                    It&apos;s important to understand the fee structure and compare costs across different brokerages to ensure they align with their investment goals and preferences.</p>
                    <p className="mt-2">Brokerages are typically regulated entities, subject to rules and regulations set by financial authorities. This regulatory oversight
                    helps protect investors&apos; interests and ensures a certain level of professionalism, security, and transparency in the brokerage industry.</p>
                    <p className="mt-2">Many brokerages offer customer support services to assist investors with their inquiries, account management, and technical issues. They
                    may also provide educational resources, webinars, and seminars to help investors improve their understanding of investing and make informed decisions.</p>
                </section>
            </div>
        </div>
    )
}
