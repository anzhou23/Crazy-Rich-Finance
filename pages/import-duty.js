import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function importDuty() {
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
                    <span className="text-gray-700">Import Duty</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Import Duty</h1>
                    <p className="mt-4">An import duty, also known as a customs duty or tariff, is a tax governments impose on goods imported into a country. Import duties are
                    typically levied as a percentage of the value of the imported goods or based on the quantity or weight of the items. The primary purpose is to generate revenue for
                    the government and to protect domestic industries by making imported goods more expensive and less competitive in the domestic market.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Import duties contribute to a country&apos;s revenue and can be an important source of income for the government. The collected funds can be used to
                    support public services, infrastructure, and various government programs. Import duties can also be used to regulate and control the flow of goods across borders.
                    Governments may adjust tariffs to encourage or discourage the importation of certain goods in line with their economic and trade policies.</p>
                    <p className="mt-2">Governments often impose import duties to protect domestic industries from foreign competition. By making imported goods more expensive, domestic
                    products may become more competitive and retain a larger share of the market. Import duties can also serve strategic objectives, such as promoting the growth of specific
                    industries or discouraging the consumption of certain goods, like luxury items or products that are considered harmful to public health.</p>
                    <p className="mt-2">Import duties can help address trade imbalances. If a country has a trade deficit (imports exceed exports), it may impose higher tariffs on specific
                    goods to reduce the trade gap. They can also be a negotiation point in international trade agreements. Countries may negotiate to lower or eliminate tariffs on specific goods
                    to encourage trade relationships.</p>
                    <p className="mt-2">Import duties can lead to higher prices for imported goods, which can impact consumers by reducing their purchasing power and choices. They are often
                    categorized based on the type of goods being imported, such as raw materials, finished products, or luxury items. Different categories may have different duty rates. Customs
                    officials assess the value of the goods to determine the appropriate duty amount.</p>
                </section>
            </div>
        </div>
    )
}