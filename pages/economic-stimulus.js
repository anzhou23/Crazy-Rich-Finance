import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economicStimulus() {
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
                    <span className="text-gray-700">Economic Stimulus</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economic Stimulus</h1>
                    <p className="mt-4">Economic stimulus, also known as fiscal stimulus, is a set of government policies and measures aimed at boosting economic growth and promoting recovery
                    during periods of economic slowdown or recession. The primary goal is to increase consumer spending, business investment, and overall economic activity to counteract the
                    negative effects of economic downturns.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The government may increase its spending on various infrastructure projects, public services, and social welfare programs. This injection of funds creates
                    demand for goods and services, stimulating the economy. In some cases, they may issue direct cash payments to households or specific groups of individuals to boost their purchasing
                    power and consumption.</p>
                    <p className="mt-2">Governments may implement temporary tax cuts to encourage increased spending and investment. Lower taxes can leave individuals with more disposable income and
                    businesses with more funds for expansion and job creation. Additionally, they may offer businesses incentives, grants, or subsidies to invest in new projects, research and development,
                    or job creation.</p>
                    <p className="mt-2">Central banks can use monetary policy tools to stimulate the economy, such as lowering interest rates or implementing quantitative easing. Lower interest rates reduce
                    borrowing costs, encouraging businesses and consumers to take loans for spending and investment. In addition, governments may provide support and liquidity to troubled financial
                    institutions to stabilize the banking system and prevent further economic damage.</p>
                    <p className="mt-2">Economic stimulus measures are typically counter-cyclical, meaning they are implemented during economic downturns when demand is weak and unemployment is high. While
                    economic stimulus can provide short-term relief and support economic recovery, it also comes with potential drawbacks, such as increased government debt and the risk of inflation.</p>
                </section>
            </div>
        </div>
    )
}
