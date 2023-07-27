import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function eu() {
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
                    <span className="text-gray-700">European Union</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">European Union</h1>
                    <p className="mt-4">The European Union (EU) is a political and economic union of 27 European countries that have come together to promote peace, prosperity, and cooperation among its
                    members. It was established through a series of treaties, with the Treaty of Maastricht in 1993 being a significant milestone that transformed the European Economic Community (EEC)
                    into the European Union as we know it today.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The EU&apos;s primary objectives are to foster economic integration and ensure the free movement of goods, services, capital, and people within its member states.
                    It has created a single market, allowing for the seamless trade and movement of goods and services across borders.</p>
                    <p className="mt-2">In addition to economic cooperation, the EU also works to promote political stability and collaboration among its members. It fosters democracy, human rights, and
                    the rule of law, and it has its institutions, such as the European Commission, the European Parliament, and the European Council, which work together to develop and implement policies
                    and laws that affect all member countries.</p>
                    <p className="mt-2">One of the EU&apos;s most significant achievements is the introduction of the euro as its official currency, adopted by 19 of its member states as part of the Eurozone.
                    The euro facilitates trade and simplifies financial transactions within these countries.</p>
                    <p className="mt-2">The EU continues to evolve and expand its scope, with countries seeking membership and others cooperating through various agreements. However, it also faces challenges,
                    such as managing the diverse interests of its member states, addressing issues related to immigration, and navigating complex international relations.</p>
                </section>
            </div>
        </div>
    )
}

