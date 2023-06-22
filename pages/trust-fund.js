import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function trustFund() {
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
                    <span className="text-gray-700">Trust Fund</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Trust Fund</h1>
                    <p className="mt-4">A trust fund is a legal entity that holds assets, such as money, property, or investments, on behalf of beneficiaries. It is created by a grantor or settlor who designates a
                    trustee to manage the assets according to specific terms and conditions outlined in a trust agreement. Trust funds are commonly used for estate planning, wealth management, charitable purposes,
                    and ensuring the financial well-being of beneficiaries.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Trust funds are established to benefit specific individuals or organizations, known as beneficiaries. The grantor can define the beneficiaries and determine the distribution of
                    assets within the trust. This allows for customization and flexibility in providing financial support, such as regular income distributions, lump-sum payments, or specific conditions for receiving funds.</p>
                    <p className="mt-2">The trustee is responsible for managing the assets held in the trust and fulfilling their fiduciary duties. These duties include acting in the best interests of the beneficiaries,
                    prudently investing trust assets, making distributions according to the trust terms, maintaining accurate records, and complying with legal and tax obligations. Trustees are typically chosen based on
                    their financial expertise, integrity, and ability to carry out the grantor&apos;s wishes.</p>
                    <p className="mt-2">Trust funds are commonly used in estate planning to facilitate the transfer of assets to beneficiaries while minimizing potential complications and tax implications. By establishing a
                    trust, the grantor can outline their wishes for asset distribution, designate beneficiaries, and potentially avoid probate, which can be a time-consuming and public process.</p>
                    <p className="mt-2">Unlike probate proceedings, which are public, the details of a trust and its assets generally remain private. This can be beneficial for individuals who prefer to keep their financial affairs
                    confidential or wish to protect the privacy of their beneficiaries.</p>
                    <p className="mt-2">Trust funds can be established for charitable or philanthropic purposes. Charitable trusts are designed to support specific causes or organizations, and the trust assets are used to further
                    the grantor&apos;s charitable goals. These trusts can provide ongoing support to charitable organizations, fund scholarships, or finance projects that align with the grantor&apos;s philanthropic interests.</p>
                </section>
            </div>
        </div>
    )
}