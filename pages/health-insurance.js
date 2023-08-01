import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function healthInsurance() {
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
                    <span className="text-gray-700">Health Insurance</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Health Insurance</h1>
                    <p className="mt-4">Health insurance is a type of insurance coverage that helps individuals and families pay for medical expenses and healthcare services. It is a
                    contract between an individual or a group (usually provided by an employer) and an insurance company, where the insured pays regular premiums in exchange for financial
                    protection in case of medical needs.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Health insurance typically covers a wide range of medical services, including doctor visits, hospitalizations, surgeries, prescription drugs, preventive
                    care, and other healthcare treatments. The specific coverage and benefits can vary depending on the policy and the insurance provider.</p>
                    <p className="mt-2">To maintain health insurance coverage, policyholders must pay regular premiums, which can be monthly or annually. Additionally, many health insurance policies
                    have a deductible, which is the amount the insured must pay out of pocket before the insurance starts covering the medical expenses. They may also have copayments, which are fixed
                    amounts the insured must pay for certain services or medications, and coinsurance, typically a percentage of the total cost of medical services the insured must pay.</p>
                    <p className="mt-2">Many health insurance plans have a network of healthcare providers, such as doctors, hospitals, and clinics, with whom they have negotiated discounted rates.
                    Insured individuals may get better coverage when using providers within the network, and in some cases, using out-of-network providers may result in higher out-of-pocket costs.</p>
                    <p className="mt-2">Before the Affordable Care Act (ACA) in the United States was implemented, health insurance companies could deny coverage or charge higher premiums based
                    on pre-existing health conditions. The ACA prohibits such practices, ensuring people with pre-existing conditions can still access health insurance coverage.</p>
                    <p className="mt-2">There are different types of health insurance plans, including Health Maintenance Organization (HMO), Preferred Provider Organization (PPO), Exclusive Provider
                    Organization (EPO), and Point of Service (POS) plans. Each type has different rules and restrictions about using specific healthcare providers.</p>
                </section>
            </div>
        </div>
    )
}