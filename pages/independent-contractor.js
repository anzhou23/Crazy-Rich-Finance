import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function independentContractor() {
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
                    <span className="text-gray-700">Independent Contractor</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Independent Contractor</h1>
                    <p className="mt-4">An independent contractor is an individual or entity that provides services to another party under a specific contract or agreement. Unlike traditional
                    employees, independent contractors are not considered employees of the contracting party. Instead, they operate as separate entities, typically running their own businesses
                    or offering specialized services to multiple clients.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Independent contractors have a high degree of control over how they perform their work. They determine their own work schedules, use their own tools and
                    equipment, and have the flexibility to accept or reject projects. Typically, independent contractors work based on contractual agreements, which outline the terms and conditions
                    of the work to be performed, including the scope, payment terms, deadlines, and other relevant details.</p>
                    <p className="mt-2">Independent contractors often operate as their own business entities, such as sole proprietors, partnerships, limited liability companies (LLCs), or corporations.
                    They may have their own business name, logo, and branding too. Usually, they are paid a negotiated fee for their services, often invoicing the client for completed work. Because independent
                    contractors are not employees, they are responsible for handling their own taxes and often don&apos;t receive traditional employee benefits, such as health insurance, retirement plans,
                    or paid time off from the contracting party.</p>
                    <p className="mt-2">Independent contractors are generally responsible for their own business expenses, including equipment, supplies, travel, and overhead costs. They often work for
                    multiple clients simultaneously or over time, allowing them to diversify their income sources and reduce dependency on a single client. Many are hired for their specialized skills or
                    expertise in a specific field, such as consulting, writing, design, IT, or construction.</p>
                    <p className="mt-2">The legal classification of independent contractors can vary by jurisdiction. Misclassifying workers can lead to legal and financial consequences for both parties.</p>
                </section>
            </div>
        </div>
    )
}