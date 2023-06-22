import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function vaLoan() {
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
                    <span className="text-gray-700">VA Loan</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">VA Loan</h1>
                    <p className="mt-4">A VA loan is a mortgage loan program offered by the U.S. Department of Veterans Affairs (VA) to provide financial assistance to eligible veterans, active-duty service members, and their
                    surviving spouses. The VA loan program aims to make homeownership more accessible and affordable for those who have served or are serving in the military.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">VA loans are guaranteed by the U.S. Department of Veterans Affairs, meaning approved lenders have protection against borrower default. This guarantee encourages lenders to offer favorable
                    terms and lower interest rates than conventional mortgage loans.</p>
                    <p className="mt-2">One of the significant advantages of VA loans is that they typically do not require a down payment, making homeownership more attainable for veterans who may not have substantial savings
                    for a down payment. Unlike conventional loans, VA loans do not require private mortgage insurance (PMI). This can save borrowers a significant amount of money, as PMI is typically required for loans with a down
                    payment of less than 20%. Additionally, VA loans often come with competitive interest rates, which can result in significant savings over the life of the loan while making monthly mortgage payments more affordable.</p>
                </section>
            </div>
        </div>
    )
}