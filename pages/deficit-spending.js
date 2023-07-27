import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function deficitSpending() {
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
                    <span className="text-gray-700">Deficit Spending</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Deficit Spending</h1>
                    <p className="mt-4">Deficit spending is a fiscal policy where a government, organization, or individual spends more money than it generates in revenue or income over a
                    specific period. In the context of government, deficit spending occurs when a country&apos;s expenditures, including government spending on various programs and services,
                    exceed its total revenue from taxes and other sources.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Governments often engage in deficit spending during economic downturns or crises to stimulate economic growth, fund essential programs, or address
                    urgent needs. This practice allows the government to finance its activities and investments by borrowing money through issuing bonds or other forms of debt.</p>
                    <p className="mt-2">While deficit spending can help boost economic activity and support various sectors, it also leads to an increase in public debt. Governments need to manage
                    deficits carefully, as excessive and sustained deficits can lead to concerns about a country&apos;s financial stability, inflationary pressures, and higher interest costs on the debt.</p>
                    <p className="mt-2">Deficit spending is a key component of Keynesian economics, which emphasizes government intervention to stabilize and stimulate the economy during times of
                    economic downturns. However, the approach to deficit spending varies across countries and depends on their economic conditions, fiscal policies, and long-term economic goals.</p>
                </section>
            </div>
        </div>
    )
}
