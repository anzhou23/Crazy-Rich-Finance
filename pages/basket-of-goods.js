import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function basketOfGoods() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Basket of Goods</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Basket of Goods</h1>
                    <p className="mt-4">A basket of goods is a collection of goods and services selected to represent the overall price level or inflation in an economy. It is a hypothetical assortment of
                    commonly purchased items that are used to track changes in their prices over time.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The selection of goods in a basket is typically based on their importance in household spending patterns. Government statistical agencies, such as the Bureau of Labor
                    Statistics in the United States, regularly conduct surveys to determine the composition of the basket of goods. These surveys gather data on the spending habits of households, including
                    the types and quantities of goods and services they purchase.</p>
                    <p className="mt-2">The basket of goods represents a cross-section of various categories, including food, housing, transportation, healthcare, education, and entertainment. The specific
                    items within each category may change over time to reflect evolving consumer preferences and consumption patterns. The weights assigned to different items in the basket of goods are
                    determined based on their relative importance in overall consumer spending. For example, if housing expenses make up a significant portion of household budgets, housing-related items will
                    have a higher weight in the basket.</p>
                    <p className="mt-2">The primary purpose of a basket of goods is to calculate an inflation rate or consumer price index (CPI). By tracking the prices of goods in the basket over time,
                    economists and policymakers can monitor changes in the cost of living and assess the inflation rate. This information is crucial for making informed decisions regarding monetary policy,
                    wage adjustments, and economic planning. It also provides insights into inflationary trends, cost-of-living adjustments, and comparisons of price levels between different time periods or regions.</p>
                </section>
            </div>
        </div>
    )
}