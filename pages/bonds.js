import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function bonds() {
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
                    <span className="text-gray-700">Bonds</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bonds</h1>
                    <p className="mt-4">Bonds are debt instruments issued by governments, municipalities, and corporations to raise capital. When an investor
                    buys a bond, they are essentially lending money to the issuer in exchange for regular interest payments and the return of the principal amount
                    at maturity. Bonds are generally considered low-risk investments and provide a fixed income stream for investors.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Bonds provide stability and predictable cash flow, making them attractive for income-oriented investors or those seeking more stable returns. They also play a
                    crucial role in diversification as they often exhibit lower volatility compared to stocks.</p>
                    <p className="mt-2">There are various types of bonds, including government bonds, municipal bonds, corporate bonds, and international bonds. Each type has
                    its own risk profile, yield potential, and tax implications. The interest earned on bonds is generally taxable, although certain types of bonds, such as municipal bonds, may offer tax
                    advantages depending on the investor&apos;s jurisdiction. Understanding the tax implications of bond investments is important for maximizing after-tax returns.</p>
                    <p className="mt-2">Bonds are typically assigned credit ratings by agencies like Moody&apos; and Standard and Poors, providing an indication of the issuer&apos;s
                    creditworthiness and potential default risk. Higher-risk bonds, such as those issued by less creditworthy entities, offer higher yields to compensate investors for the additional
                    risk. Credit analysis is important in assessing the issuer&apos;s ability to meet interest payments and repay the principal.</p>
                    <p className="mt-2">Bonds have a specific maturity date, which is the date when the principal amount is repaid to the bondholder. The duration of a bond measures its sensitivity to
                    interest rate changes. Longer-duration bonds are generally more sensitive to interest rate movements than shorter-duration bonds.</p>
                </section>
            </div>
        </div>
    )
}