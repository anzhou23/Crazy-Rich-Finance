import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function householdExpenses() {
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
                    <span className="text-gray-700">Household Expenses</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Household Expenses</h1>
                    <p className="mt-4">Household expenses are the regular and necessary costs a household incurs to maintain its day-to-day operations and meet essential needs. These
                    expenses are incurred by individuals or families to ensure the smooth functioning of their home and to support their daily living.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Common household expenses include, but are not limited to:</p>
                    <ul className="list-disc ml-6">
                        <li>Housing Costs: Rent or mortgage payments, property taxes, homeowners&apos; insurance, and maintenance costs</li>
                        <li>Utilities: Electricity, gas, water, sewage, garbage collection, and other essential services</li>
                        <li>Food and Groceries: Food items, groceries, and household supplies</li>
                        <li>Transportation: Owning a car, public transportation fares, fuel, maintenance, and insurance</li>
                        <li>Health Care: Medical expenses, health insurance premiums, and out-of-pocket costs for healthcare services</li>
                        <li>Childcare and Education: Childcare, school fees, tuition, books, and educational materials</li>
                        <li>Debt Payments: Credit card debt, student loans, personal loans, or other outstanding debts</li>
                        <li>Communication: Internet services, phone bills, and cable or satellite TV</li>
                        <li>Clothing: Clothes and other personal items</li>
                        <li>Entertainment: Leisure activities, hobbies, and entertainment, such as dining out, movies, or recreation</li>
                        <li>Savings and Investments: Savings accounts, retirement funds, or other investment vehicles</li>
                        <li>Miscellaneous: Other regular expenses that do not fall into specific categories, such as gifts, donations, or household services</li>
                    </ul>
                    <p className="mt-2">Proper budgeting and financial planning are essential to manage household expenses effectively. By tracking and controlling spending in different categories,
                    individuals can allocate their income wisely and ensure that they can cover essential needs while also saving for future goals and emergencies. It is crucial to regularly review and
                    adjust the budget as circumstances change to maintain financial stability and achieve financial objectives.</p>
                </section>
            </div>
        </div>
    )
}