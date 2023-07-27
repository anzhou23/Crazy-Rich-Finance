import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function deregulation() {
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
                    <span className="text-gray-700">Deregulation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Deregulation</h1>
                    <p className="mt-4">Deregulation is the process of reducing or removing government regulations and restrictions on various industries, sectors, or economic activities.
                    It involves loosening or eliminating rules, laws, and oversight previously put in place to govern and control certain aspects of the economy, businesses, or public
                    services. The goal is often to promote market competition, increase efficiency, and foster economic growth.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The goal of deregulation is to reduce government intervention in the economy and allow market forces to operate more freely. It is often associated with
                    the principles of market liberalization and laissez-faire economics.</p>
                    <p className="mt-2">Deregulation can occur in specific industries, such as telecommunications, energy, transportation, banking, and financial services. For example, in the
                    telecommunications sector, deregulation may remove restrictions on entry into the market and eliminate price controls. By reducing barriers to entry and promoting a level playing
                    field, new players can enter the market and existing companies must innovate and improve their services to stay competitive.</p>
                    <p className="mt-2">Proponents of deregulation argue it can lead to greater consumer choice, lower prices, and improved service quality. By reducing bureaucratic hurdles and fostering
                    a more flexible business environment, it can spur economic growth and encourage innovation. However, critics warn it can result in reduced consumer protection and potential market abuses
                    if not properly implemented and monitored. It can also lead to market failures, such as monopolies or oligopolies, without effective antitrust measures. Moreover, some regulations are
                    designed to protect public health, safety, and the environment, and removing them could pose risks.</p>
                </section>
            </div>
        </div>
    )
}
