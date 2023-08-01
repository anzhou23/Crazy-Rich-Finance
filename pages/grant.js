import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grant() {
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
                    <span className="text-gray-700">Grant</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Grant</h1>
                    <p className="mt-4">A grant is a financial award or contribution an organization, government agency, foundation, or individual gives to support a specific project, initiative,
                    research, or individual need. Unlike a loan, a grant does not need to be repaid, making it a non-repayable form of funding.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Grants are typically provided to individuals, businesses, non-profits, educational institutions, or researchers who meet specific criteria or objectives the
                    grantor sets. The funds received through a grant are meant to help recipients achieve their goals, promote social welfare, support research and development, or address community needs.</p>
                    <p className="mt-2">There are various types of grants, including:</p>
                    <ul className="list-disc ml-6">
                        <li>Government Grants: Funded by federal, state, or local governments to support various public initiatives, research, infrastructure projects, or community development.</li>
                        <li>Corporate Grants: Offered by private companies as a form of corporate social responsibility (CSR) to support community projects, education, or research aligned with the
                        company&apos;s values and goals.</li>
                        <li>Foundation Grants: Provided by private foundations or philanthropic orgs to support charitable or social causes, arts and culture, healthcare, education, and more.</li>
                        <li>Research Grants: Aimed at funding scientific research and innovation, often awarded by government agencies, research institutions, or non-profits.</li>
                        <li>Educational Grants: Intended to support students and educational institutions to fund tuition, research, or special projects.</li>
                    </ul>
                    <p className="mt-2">Grants play a crucial role in promoting social welfare, supporting innovation, and addressing various societal challenges. They offer individuals and organizations
                    opportunities to make positive contributions to their communities and advance knowledge and progress in different fields. The process of securing a grant typically involves submitting a
                    proposal outlining the project&apos;s objectives, budget, and intended impact, which is then evaluated by the grantor before approval and disbursement of funds.</p>
                </section>
            </div>
        </div>
    )
}