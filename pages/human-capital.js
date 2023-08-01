import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function humanCapital() {
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
                    <span className="text-gray-700">Human Capital</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Human Capital</h1>
                    <p className="mt-4">Human capital is the collective skills, knowledge, experience, education, and abilities individuals posess within a society or workforce.
                    It represents an individual&apos;s capacity to contribute to economic productivity and growth. Just as physical capital (machines, equipment, infrastructure) is
                    a critical factor in an economy&apos;s development, human capital plays a crucial role in driving innovation, economic progress, and social well-being.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Human capital encompasses the skills and expertise individuals acquire through formal education, vocational training, and on-the-job experience.
                    This includes technical skills, problem-solving abilities, and specialized knowledge. Education is a fundamental component of human capital. A well-educated workforce
                    is better equipped to adapt to changing technologies, contribute to research and development, and engage in high-skill professions.</p>
                    <p className="mt-2">Physical and mental health contribute to an individual&apos;s productivity and ability to contribute to the workforce. Healthy individuals are more
                    likely to be productive, innovative, and engaged in their work.</p>
                    <p className="mt-2">Human capital influences labor force participation rates. A skilled and educated workforce is more likely to be employed and actively contribute to
                    economic activities. It also drives innovation and creativity, as individuals with diverse skills and perspectives contribute to problem-solving and developing new ideas.</p>
                    <p className="mt-2">Nations with a strong focus on developing human capital tend to experience higher economic growth and development. A skilled workforce attracts
                    investment and drives technological advancements. Human capital is also closely linked to social development indicators such as poverty reduction, improved healthcare, and
                    enhanced quality of life. Policies that support the development of human capital include investments in education, vocational training, healthcare, and social services.
                    Governments, businesses, and individuals all play a role in cultivating and enhancing human capital to foster economic prosperity and social progress.</p>
                </section>
            </div>
        </div>
    )
}