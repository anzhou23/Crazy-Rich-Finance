import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function financialLiteracy() {
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
                    <span className="text-gray-700">Financial Literacy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Financial Literacy</h1>
                    <p className="mt-4">Financial literacy is the knowledge, understanding, and skills individuals possess to effectively manage their personal finances and make
                    informed financial decisions. It involves being familiar with various financial concepts, such as budgeting, saving, investing, managing debt, understanding
                    credit, and retirement planning.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Key aspects of financial literacy include:</p>
                    <ul className="list-disc ml-6">
                        <li>Creating and maintaining a budget to track income, expenses, and savings</li>
                        <li>Saving money regularly for short-term needs, emergencies, and long-term goals like retirement</li>
                        <li>Investing money in different asset classes to grow wealth and achieve financial goals over time</li>
                        <li>Understanding different types of debt, their interest rates, and developing strategies to manage and reduce debt effectively</li>
                        <li>Understanding credit scores, how they impact borrowing and interest rates, and maintaining a good credit history</li>
                        <li>Being familiar with various financial products like bank accounts, credit cards, loans, and insurance, and being able to compare and choose suitable options</li>
                        <li>Understanding retirement savings options like 401(k), IRA, and pension plans, and planning for a financially secure retirement</li>
                    </ul>
                    <p className="mt-2">Financial literacy is crucial for making sound financial decisions and achieving financial goals. It empowers individuals to handle unexpected financial
                    challenges, make informed choices about spending and saving, and build a strong foundation for their financial future. Improving financial literacy is an ongoing process
                    that involves education, learning from experiences, seeking advice from financial experts, and staying informed about changing economic and financial conditions.</p>
                </section>
            </div>
        </div>
    )
}