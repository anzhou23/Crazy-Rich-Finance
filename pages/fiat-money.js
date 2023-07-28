import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function fiatMoney() {
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
                    <span className="text-gray-700">Fiat Money</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Fiat Money</h1>
                    <p className="mt-4">Fiat money is a type of currency that has no intrinsic value and is not backed by a physical commodity like gold or silver. Instead, its value is
                    derived from the trust and confidence of the people who use it as a medium of exchange. In other words, fiat money has value because the government or authority that
                    issues it declares it to be legal tender and requires its acceptance for transactions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Most of the world&apos;s currencies today are fiat money, including the US dollar, euro, British pound, Japanese yen, and many others. These currencies
                    are widely accepted in their respective countries and are used for various transactions, such as buying goods and services, paying taxes, and settling debts.</p>
                    <p className="mt-2">One of the key advantages of fiat money is its flexibility and ease of use. Governments can control the supply and circulation of fiat money, allowing
                    them to implement monetary policies to manage inflation, stimulate economic growth, and stabilize the economy.</p>
                    <p className="mt-2">However, the value of fiat money can be affected by factors such as inflation, economic conditions, and government policies. In times of economic
                    instability or loss of confidence in a country&apos;s economy, the value of fiat money may decline, leading to inflation or even hyperinflation in extreme cases.</p>
                </section>
            </div>
        </div>
    )
}