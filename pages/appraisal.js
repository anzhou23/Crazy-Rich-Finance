import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function appraisal() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Appraisal</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Appraisal</h1>
                    <p className="mt-4">Appraisal is the process of determining the value or worth of an asset, property, or investment. It involves evaluating various factors to estimate the fair market value of
                    the subject being appraised. Appraisals are commonly conducted for real estate, businesses, personal property, and financial instruments.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The purpose of an appraisal is to provide an unbiased and objective assessment of the value of an asset. This information is useful for various purposes, such as buying or
                    selling property, obtaining financing, insurance purposes, taxation, legal disputes, and investment analysis. Appraisals help to establish a fair price, negotiate transactions, secure financing,
                    determine insurance coverage, and assist in legal or tax matters.</p>
                    <p className="mt-2">Appraisals are typically performed by qualified professionals known as appraisers or valuers who have expertise in the specific field and adhere to established valuation standards
                    and methodologies. They consider various factors in their evaluation, including the condition, size, location, comparable sales or market data, income potential, and other relevant characteristics.</p>
                    <p className="mt-2">Real estate appraisals, for example, involve assessing the value of a property based on factors such as its location, size, condition, recent sales of similar properties in the
                    area (comparables), and market trends. Business appraisals may consider factors such as financial performance, assets, intellectual property, market position, and industry conditions. Personal property
                    appraisals can cover items like artwork, collectibles, or jewelry.</p>
                    <p className="mt-2">The appraisal process typically involves conducting research, site visits, data analysis, and applying appropriate valuation methods to arrive at a fair and accurate estimate of
                    value. The appraiser then prepares a detailed appraisal report that outlines the findings, assumptions, and methodologies used in the valuation.</p>
                </section>
            </div>
        </div>
    )
}