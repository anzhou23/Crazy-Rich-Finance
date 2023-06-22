import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function passiveIncome() {
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
                    <span className="text-gray-700">Passive Income</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Passive Income</h1>
                    <p className="mt-4">Passive income is earnings generated with minimal effort or active involvement. It is income earned from investments, business ventures, or assets that generate ongoing cash flow
                    without requiring constant or direct participation.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Passive income allows individuals to earn money without being actively involved in day-to-day operations or trading their time for money. Instead, it involves setting up systems,
                    investments, or businesses that generate income with little ongoing effort. Passive income can be generated from various sources, such as rental properties, dividend-paying stocks, interest from savings
                    accounts or bonds, royalties from intellectual property, affiliate marketing, online businesses, or investments in real estate crowdfunding or peer-to-peer lending platforms.</p>
                    <p className="mt-2">While passive income may require less ongoing effort, it often requires significant upfront effort, time, or investment to establish the income-generating asset or system. For example,
                    purchasing rental properties requires upfront capital and property management setup, while creating and marketing an online course involves creating content and building an audience.</p>
                    <p className="mt-2">Passive income sources often have the potential for scalability, meaning the income can grow as the investment or business expands. For instance, rental property owners can acquire
                    additional properties to increase rental income, and online businesses can reach a larger audience to generate more sales or ad revenue.</p>
                    <p className="mt-2">Building multiple streams of passive income can provide individuals with financial independence, allowing them to have more control over their time and lifestyle choices. Passive income
                    can provide a cushion during financial emergencies, supplement active income, or even replace the need for a traditional 9-to-5 job.</p>
                    <p className="mt-2">Generating passive income is not entirely risk-free. Investments can fluctuate in value, business ventures may face challenges, and economic factors can impact the profitability of
                    income-generating assets. Carefully evaluate the risks, conduct thorough research, and seek professional advice when venturing into passive income opportunities.</p>
                </section>
            </div>
        </div>
    )
}
