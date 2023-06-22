import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function knowledgeEconomy() {
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
                    <span className="text-gray-700">Knowledge Economy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Knowledge Economy</h1>
                    <p className="mt-4">The knowledge economy emphasizes producing, distributing, and utilizing knowledge, information, and intellectual assets. In this type of economy, the primary driver
                    of growth and innovation is the creation and application of knowledge, rather than traditional factors of production like raw materials or physical labor.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the knowledge economy, intangible assets such as intellectual property, patents, trademarks, copyrights, and human capital become increasingly important. These assets
                    generate economic value through their ability to create, share, and apply knowledge. Education and continuous learning play a crucial role. A highly skilled and educated workforce is essential
                    for creating, managing, and leveraging knowledge effectively.</p>
                    <p className="mt-2">Information and communication technologies (ICT) are instrumental, enabling the efficient transfer of information and knowledge across individuals, organizations, and nations.
                    Technological advancements facilitate innovation, collaboration, and productivity gains.</p>
                    <p className="mt-2">The knowledge economy thrives on innovation and research activities. Companies and individuals engage in research and development (R&D) to create new products, services, and
                    processes, driving economic growth and competitiveness. Industries such as information technology, telecommunications, software development, research and development, biotechnology, financial services,
                    and creative industries (e.g., media, design, arts) are central to the knowledge economy.</p>
                    <p className="mt-2">The knowledge economy is highly globalized and interconnected. Digitalization has facilitated the rapid exchange of knowledge, enabling businesses and individuals to access information,
                    collaborate, and participate in global markets.</p>
                </section>
            </div>
        </div>
    )
}