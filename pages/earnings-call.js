import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function earningsCall() {
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
                    <span className="text-gray-700">Earnings Call</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Earnings Call</h1>
                    <p className="mt-4">An earnings call, also known as an earnings conference call, is a teleconference or webcast a public company&apos;s management team conducts to discuss
                    the financial results and performance for a specific period, typically a quarter (3 months). It is an important event in the financial world and provides an opportunity for
                    company executives to communicate with analysts, investors, and the media about the company&apos;s financial performance, business strategies, and future outlook.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During an earnings call, the company&apos;s CEO, CFO, or other top executives will present key financial metrics, such as revenue, earnings per share (EPS),
                    net income, and operating expenses. They also provide insights into the factors that contributed to the results, including market trends, industry conditions, and the company&apos;s
                    strategic initiatives.</p>
                    <p className="mt-2">Analysts and investors often participate in the call by asking questions about the financial results and seeking clarification on specific aspects of the company&apos;s
                    performance. The Q&A session allows management to address concerns, respond to inquiries, and provide additional information that may not be covered in the initial presentation.</p>
                    <p className="mt-2">Earnings calls are generally scheduled shortly after the company releases its quarterly or annual financial reports to the public. These calls are an essential part of
                    corporate transparency and play a significant role in shaping investors&apos; perceptions of the company&apos;s financial health and future prospects.</p>
                </section>
            </div>
        </div>
    )
}
