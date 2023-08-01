import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function glassCeiling() {
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
                    <span className="text-gray-700">Glass Ceiling</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Glass Ceiling</h1>
                    <p className="mt-4">The glass ceiling is a metaphorical term used to describe an invisible barrier or set of obstacles preventing certain groups, typically women and minorities, from
                    advancing to higher positions or leadership roles in a company or organization, despite their qualifications and abilities. It implies institutional or societal biases and discrimination
                    are preventing these individuals from rising above a certain limit.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The term gained popularity in the context of gender inequality in the workplace, particularly in male-dominated industries or high-level executive positions. While women
                    have made significant progress in breaking barriers and achieving career success, there is still an intangible barrier that prevents them from reaching the highest echelons of leadership.</p>
                    <p className="mt-2">The glass ceiling can manifest in various ways, such as:</p>
                    <ul className="list-disc ml-6">
                        <li>Women and minorities may be overlooked for promotions or leadership roles, despite having comparable skills and experience as their male counterparts.</li>
                        <li>Stereotypes and prejudices based on gender or other characteristics can influence decision-making processes, hindering certain individuals from advancing.</li>
                        <li>A lack of diverse leadership at the top can perpetuate the glass ceiling by failing to provide role models and mentors for underrepresented groups.</li>
                        <li>Societal expectations and family responsibilities may disproportionately affect women&apos;s career trajectories, making it more difficult to achieve senior positions.</li>
                        <li>Unequal pay for the same level of work can contribute to the persistent inequality and limit opportunities for career advancement.</li>
                    </ul>
                    <p className="mt-2">While easier said than done, addressing the glass ceiling involves creating inclusive and diverse work environments, challenging gender and other biases, promoting equal opportunities,
                    and implementing policies that support work-life balance and career development. By breaking through the glass ceiling, organizations can benefit from a broader pool of talent and perspectives, leading to
                    enhanced innovation, creativity, and overall success.</p>
                </section>
            </div>
        </div>
    )
}