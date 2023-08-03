import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function implicitCost() {
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
                    <span className="text-gray-700">Implicit Cost</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Implicit Cost</h1>
                    <p className="mt-4">Implicit costs are non-monetary expenses that are not reflected in a company&apos;s accounting records but can still impact its decision-making and overall
                    financial well-being. These costs represent the opportunity cost of using resources in a particular way rather than pursuing alternative uses that could provide potential benefits.
                    When calculating economic profit (total revenue minus both explicit and implicit costs), implicit costs are considered to determine the true economic value of a business&apos;s operations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Implicit costs are often related to the concept of opportunity cost, which is the value of the next best alternative that must be forgone when a decision is made.
                    These costs reflect the benefits that could have been gained if resources were used differently. Unlike explicit costs, which involve actual cash outflows (such as wages, rent, and
                    materials), implicit costs do not involve any direct monetary payments.</p>
                    <p className="mt-2">Implicit costs can be associated with various factors of production, including labor, capital, and entrepreneurship. For example, if an entrepreneur decides to start a
                    business, the implicit cost may include the salary the entrepreneur could have earned by working for another company. Their earnings from the business represent an explicit cost, while the
                    potential earnings from other opportunities represent implicit costs.</p>
                    <p className="mt-2">In the case of a small business owner, implicit costs can arise from using personal time and capital to run the business. The owner may not receive a salary or wage like
                    an employee, but the value of their time and investment represents an implicit cost.</p>
                </section>
            </div>
        </div>
    )
}