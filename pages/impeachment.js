import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function impeachment() {
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
                    <span className="text-gray-700">Impeachment</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Impeachment</h1>
                    <p className="mt-4">Impeachment is a political and legal process used to remove a government official, typically a high-ranking official such as a president, from office for
                    alleged misconduct. It is a constitutional mechanism designed to hold officials accountable for abuses of power or violations of their duties while in office. Impeachment is
                    most commonly associated with the executive branch of government, but it can also apply to other officials, such as the judiciary.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Impeachment proceedings are usually initiated by a legislative body, such as a parliament or congress. In the United States, the process starts in the House
                    of Representatives, where articles of impeachment are drafted and voted on. The specific grounds for impeachment can vary by country, but they generally include &quot;high crimes
                    and misdemeanors,&quot; abuse of power, bribery, treason, or other serious offenses.</p>
                    <p className="mt-2">Once impeachment articles are approved, a trial is typically held in the legislative body responsible for impeachment. In the case of the U.S., the Senate
                    conducts the trial overseen by the Chief Justice of the Supreme Court. The official being impeached is given the opportunity to present a defense, and both sides present evidence
                    and witnesses.</p>
                    <p className="mt-2">In many systems, a 2/3rds majority vote is required in the legislative body to convict and remove the official from office. If the official is convicted, they
                    are removed from office, and sometimes they are also barred from holding public office in the future.</p>
                    <p className="mt-2">Impeachment is both a legal and a political process. The decision to impeach and remove an official often involves complex political considerations, public opinion,
                    and the balance of power within the government. It is a serious action with far-reaching consequences. Impeachment can result in the removal of a high-ranking official from office,
                    affecting a country&apos;s governance. Impeachment proceedings can also have broader implications for public trust, political stability, and the functioning of democratic institutions.</p>
                </section>
            </div>
        </div>
    )
}