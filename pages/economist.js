import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economist() {
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
                    <span className="text-gray-700">Economist</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economist</h1>
                    <p className="mt-4">An economist is a professional who studies and analyzes various aspects of the economy, including the production, distribution, and consumption of goods and
                    services. Economists use economic theories, principles, and data to understand and predict economic trends, behavior, and outcomes. They often work in both academic and applied
                    settings, providing valuable insights to governments, businesses, financial institutions, and other organizations.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Economists conduct research to gather data and information about economic issues, trends, and phenomena using various research methods and analytical tools. They
                    interpret the results to inform decision-making and policy development and are often involved in economic forecasting and predicting future economic conditions, such as growth rates,
                    inflation, and employment levels.</p>
                    <p className="mt-2">Economists provide evidence-based recommendations and advice to governments and organizations regarding economic policies and interventions. They build economic
                    models to simulate and understand the interactions between various economic factors. In addition, they analyze markets, including financial markets, labor markets, and commodity markets,
                    to understand supply and demand dynamics and identify trends that may affect prices and economic activity. Many economists also engage in public education and outreach, communicating
                    economic concepts and findings to the general public through media, articles, and presentations.</p>
                    <p className="mt-2">Economists work in various fields, such as macroeconomics (study of the overall economy), microeconomics (study of individual economic units), labor economics,
                    environmental economics, international economics, and more. Their work is essential in informing economic policy, guiding business decisions, and understanding the complex workings of
                    economies at local, national, and global levels.</p>
                </section>
            </div>
        </div>
    )
}
