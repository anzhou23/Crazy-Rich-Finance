import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fdic() {
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
                    <span className="text-gray-700">Federal Deposit Insurance Company</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Federal Deposit Insurance Company</h1>
                    <p className="mt-4">The Federal Deposit Insurance Corporation (FDIC) is an independent federal agency in the United States created to promote stability
                    and public confidence in the nation&apos;s banking system. It was established in 1933 in response to the widespread bank failures during the Great Depression.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The FDIC&apos;s main function is to insure deposits in participating banks and savings institutions, providing protection to depositors in case
                    of bank failures. Currently, the FDIC provides up to $250,000 in insurance coverage per depositor, per account category, at each insured bank. This means that if a
                    bank fails, the FDIC will reimburse eligible depositors up to the insured amount, safeguarding their money and reducing the risk of loss.</p>
                    <p className="mt-2">FDIC insurance covers various types of accounts commonly held by individuals, such as checking accounts, savings accounts, certificates of deposit
                    (CDs), and money market accounts. The FDIC also plays a vital role in overseeing and regulating the activities of insured banks to ensure their safety and soundness.
                    It regularly examines banks to assess their financial health, compliance with banking laws, and risk management practices.</p>
                </section>
            </div>
        </div>
    )
}