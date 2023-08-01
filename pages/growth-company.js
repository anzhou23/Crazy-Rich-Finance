import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function growthCompany() {
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
                    <span className="text-gray-700">Growth Company</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Growth Company</h1>
                    <p className="mt-4">A growth company focuses on expanding its business operations rapidly and aggressively. These companies prioritize reinvesting their profits back into the
                    business to fund growth initiatives rather than distributing dividends to shareholders. They typically aim to increase their market share, enter new markets, develop new products
                    or services, and expand their customer base.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Characteristics of a growth company include:</p>
                    <ul className="list-disc ml-6">
                        <li>Growth companies typically experience rapid revenue growth rates, often higher than the industry average.</li>
                        <li>They invest heavily in research and development to innovate and create new products or services.</li>
                        <li>Growth companies allocate significant funds to expand their production capacity, improve infrastructure, and enhance operations.</li>
                        <li>Instead of paying out dividends to shareholders, growth companies reinvest profits to fuel further expansion.</li>
                        <li>Due to their growth potential and expectations for future profitability, growth companies often have high stock valuations compared to their current earnings.</li>
                        <li>Investing in growth companies can be riskier due to the uncertainties associated with rapidly expanding businesses and the potential for higher volatility in stock prices.</li>
                    </ul>
                    <p className="mt-2">Technology companies, startups, and companies in emerging industries are often considered growth companies because they tend to experience faster expansion rates compared
                    to more mature and established firms. Recent examples include Tesla, Amazon, Google, Apple, and Nvidia. Growth companies attract investors seeking capital appreciation rather than immediate
                    income from dividends.</p>
                    <p className="mt-2">Not all growth companies succeed in achieving their ambitious growth plans, and some may face challenges as they expand. Investors interested in growth companies should
                    conduct thorough research and consider their risk tolerance and investment goals before investing.</p>
                </section>
            </div>
        </div>
    )
}