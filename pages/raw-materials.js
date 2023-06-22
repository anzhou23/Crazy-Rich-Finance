import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function rawMaterials() {
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
                    <span className="text-gray-700">Raw Materials</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Raw Materials</h1>
                    <p className="mt-4">Raw materials refer to basic, unprocessed substances or resources used in the production of goods or services. They are the fundamental building blocks of various industries and play a
                    crucial role in economic activities.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Raw materials can include natural resources like minerals, metals, agricultural products, energy sources, chemicals, and other basic materials. These raw materials are transformed into
                    intermediate or finished goods through manufacturing or processing. They are critical for various industries, including construction, manufacturing, energy, agriculture, and transportation. The availability,
                    quality, and price of raw materials can have a significant impact on the cost structure, profitability, and competitiveness of businesses within these sectors. Raw material availability can also influence
                    economic growth, trade balances, and regional development.</p>
                    <p className="mt-2">Many raw materials are considered commodities, traded on global commodity markets. Raw material prices are influenced by supply and demand dynamics, global economic conditions, geopolitical
                    factors, weather patterns, and other market forces. They can exhibit significant volatility due to factors like production levels, inventory levels, currency exchange rates, and trade policies. Companies often
                    employ risk management strategies, such as hedging or long-term supply contracts, to mitigate price risks and stabilize costs.</p>
                    <p className="mt-2">Raw materials are part of complex global supply chains. Businesses involved in sourcing and utilizing raw materials must effectively manage their supply chains to ensure a reliable and
                    cost-effective flow of materials. This includes sourcing raw materials from diverse suppliers, considering quality control measures, managing inventory levels, and navigating logistical challenges.</p>
                    <p className="mt-2">Because raw materials are often traded globally, their availability can be influenced by geopolitical factors, trade policies, and international agreements. Changes in tariffs, trade restrictions,
                    sanctions, or political tensions can impact the supply and pricing of raw materials, affecting industries and economies worldwide.</p>
                </section>
            </div>
        </div>
    )
}
