import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economicRecovery() {
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
                    <span className="text-gray-700">Economic Recovery</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economic Recovery</h1>
                    <p className="mt-4">Economic recovery is a period of improvement and growth in an economy following a recession, depression, or other economic downturn. During an economic
                    recovery, key economic indicators, such as gross domestic product (GDP), employment rates, consumer spending, and business investments, start showing positive trends after
                    a period of contraction.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The main characteristics of an economic recovery include:</p>
                    <ul className="list-disc ml-6">
                        <li>Increased Economic Output: The economy begins to expand, and the production of goods and services increases. Businesses may experience higher demand for their products,
                            leading to increased production and sales.</li>
                        <li>Decline in Unemployment: As economic conditions improve, job opportunities become more abundant, leading unemployment rates to fall. Employers may start hiring more workers
                        to meet the growing demand for goods and services.</li>
                        <li>Consumer and Business Confidence: Consumers become more optimistic about their financial prospects, leading to increased spending, while businesses become more willing to
                            invest and expand their operations.</li>
                        <li>Improved Financial Markets: Stock markets tend to rise, and interest rates may begin to increase as economic activity picks up.</li>
                        <li>Government Stimulus Measures: In some cases, governments implement various economic stimulus measures during a recovery to further support economic growth. These measures
                            may include fiscal policies such as tax cuts, infrastructure spending, and monetary policies like lowering interest rates.</li>
                    </ul>
                    <p className="mt-2">The duration and strength of an economic recovery can vary. Recoveries can be slow and gradual or rapid and robust, depending on the underlying causes of the
                    economic downturn and the effectiveness of policy responses.</p>
                </section>
            </div>
        </div>
    )
}
