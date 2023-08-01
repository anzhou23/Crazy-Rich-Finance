import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function governmentBond() {
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
                    <span className="text-gray-700">Government Bond</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Government Bond</h1>
                    <p className="mt-4">A government bond is a debt security issued by a government, typically at the national level, to raise funds from investors. It is considered one of the safest
                    investment options because it is backed by the credit and taxing power of the issuing government. Governments issue bonds to finance various projects and activities, such as
                    infrastructure development, social welfare programs, or budget deficits.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">When an investor buys a government bond, they are essentially lending money to the government. In return, the government promises to pay periodic interest payments
                    (coupon payments) to the bondholder and return the principal amount (face value or par value) of the bond when it matures. Maturities can range from short-term (e.g., a few months) to
                    long-term (e.g., several decades). The yield on a government bond is the effective interest rate the investor earns based on the bond&apos;s current market price and coupon rate. The
                    coupon rate is expressed as a percentage of the bond&apos;s face value, and bondholders receive periodic interest payments based on this rate.</p>
                    <p className="mt-2">Government bonds often have high credit ratings. They are usually highly liquid, meaning they can be easily bought or sold in the financial markets. The interest
                    income earned from government bonds is typically taxable at the federal level, but it may be exempt from state or local taxes in certain cases.</p>
                </section>
            </div>
        </div>
    )
}