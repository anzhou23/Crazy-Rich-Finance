import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function housePoor() {
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
                    <span className="text-gray-700">House Poor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">House Poor</h1>
                    <p className="mt-4">Being house poor is a situation where a homeowner devotes a significant portion of their income or financial resources to cover the costs of owning and maintaining a
                    home, leaving them with limited funds for other essential expenses and financial goals. Essentially, a person is &quot;house rich&quot; in terms of owning a property but &quot;cash poor&quot;
                    in terms of available disposable income.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">House poor individuals typically spent most of their income toward mortgage payments, property taxes, insurance, utilities, and maintenance expenses
                    related to their home. After paying for housing-related costs, they may have little money left for other essential needs, such as food, healthcare, transportation, and saving
                    for emergencies or retirement.</p>
                    <p className="mt-2">Being house poor may lead to sacrifices in other financial goals, such as saving for education, investments, or vacations. House poor individuals may struggle to meet other
                    financial obligations, such as credit card bills, loan payments, or unexpected expenses, due to limited discretionary income. Being house poor can restrict one&apos;s ability to participate in
                    leisure activities, dine out, or pursue hobbies.</p>
                    <p className="mt-2">House poor situations often arise when people overextend themselves financially during the home-buying process. This can happen due to purchasing a home with a mortgage that
                    is too large relative to their income, underestimating the ongoing costs of homeownership, or buying a property without considering their long-term financial needs.</p>
                    <p className="mt-2">To avoid becoming house poor, prospective homeowners should carefully assess their financial situation, determine what they can realistically afford, and consider both the
                    upfront and ongoing costs associated with homeownership. Creating a budget and seeking professional advice from financial advisors can help individuals make informed decisions and strike a balance
                    between owning a home they love and maintaining a healthy overall financial picture.</p>
                </section>
            </div>
        </div>
    )
}