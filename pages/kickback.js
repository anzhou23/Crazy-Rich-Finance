import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function kickback() {
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
                    <span className="text-gray-700">Kickback</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Kickback</h1>
                    <p className="mt-4">A kickback refers to a form of illicit payment or commission given to someone in a position of power or influence, often in exchange for favorable treatment or
                    the awarding of a contract or business opportunity. Kickbacks are generally considered unethical and illegal, as they involve bribery and corruption. They can distort fair competition,
                    undermine trust, and have severe legal and reputational consequences.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Kickbacks are often intended to secure unfair advantages, such as obtaining contracts, favorable treatment, or confidential information. They can involve cash, gifts,
                    services, or any form of consideration given to induce favorable actions.</p>
                    <p className="mt-2">Kickbacks distort fair competition by giving an unfair advantage to individuals or organizations that engage in corrupt practices. Legitimate competitors who abide by
                    ethical standards and rely on merit-based decision-making may suffer economic losses or miss out on opportunities as a result of kickbacks. This can hinder market efficiency, innovation,
                    and overall economic growth.</p>
                    <p className="mt-2">Engaging in kickback schemes can have serious legal consequences. Kickbacks violate anti-bribery laws and regulations in many jurisdictions, including the U.S. Foreign
                    Corrupt Practices Act (FCPA) and the UK Bribery Act. Perpetrators may face criminal charges, fines, imprisonment, and reputational damage. Organizations can also be held liable for the actions
                    of their employees or agents involved in kickback schemes.</p>
                    <p className="mt-2">Organizations and governments have implemented various measures to combat kickbacks and corruption. These include robust internal controls, anti-bribery policies, whistleblower
                    protection, due diligence procedures, and awareness campaigns.</p>
                </section>
            </div>
        </div>
    )
}

