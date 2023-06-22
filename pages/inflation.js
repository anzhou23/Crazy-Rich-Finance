import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function inflation() {
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
                    <span className="text-gray-700">Inflation</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Inflation</h1>
                    <p className="mt-4">Inflation refers to the sustained increase in the general price level of goods and services in an economy over a period of time. It means that, on average, prices are rising,
                    and the purchasing power of money is decreasing.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In most countries, inflation is measured using a consumer price index (CPI), which tracks the prices of a basket of goods and services commonly purchased by households. The CPI
                    serves as an indicator of overall price changes in an economy.</p>
                    <p className="mt-2">Inflation can have various causes. One common cause is demand-pull inflation, which occurs when demand for goods and services exceeds supply, leading to price increases. Cost-push
                    inflation occurs when the cost of production, such as wages or raw materials, increases, and businesses pass on those costs to consumers.</p>
                    <p className="mt-2">Mild inflation can stimulate spending and investment as people anticipate rising prices. However, high or unpredictable inflation can erode savings, reduce purchasing power, and
                    create uncertainty in the economy. It can also distort economic decision-making and income distribution.</p>
                    <p className="mt-2">Inflation is often measured as an annual percentage increase in the price level. Central banks and governments set inflation targets to maintain price stability and promote economic
                    growth. The ideal inflation rate varies depending on the country and economic conditions, but it is typically around 2-3%.</p>
                    <p className="mt-2">Central banks use monetary policy tools, such as adjusting interest rates and managing the money supply, to control inflation. By raising interest rates, central banks can reduce
                    borrowing and spending, which helps to slow down inflation. On the other hand, lowering interest rates can stimulate economic activity and prevent deflation during periods of low inflation.</p>
                </section>
            </div>
        </div>
    )
}
