import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function economiesofScale() {
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
                    <span className="text-gray-700">Economies of Scale</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Economies of Scale</h1>
                    <p className="mt-4">Economies of scale is the cost advantages businesses gain as their production output increases. In other words, as a company produces more units of a product or
                    provides more services, its average cost per unit decreases. This phenomenon occurs because the fixed costs are spread over a larger quantity of output, leading to higher efficiency
                    and lower per-unit costs.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Internal economies of scale arise from factors within the company&apos;s control. As production increases, a company can benefit from cost-saving advantages such as
                    better utilization of production facilities, more efficient use of resources, improved specialization of labor, and bulk purchasing discounts on raw materials. Internal economies of scale
                    help a company improve its competitiveness and profitability.</p>
                    <p className="mt-2">External economies of scale result from external factors outside the company&apos;s control. They arise when multiple firms in the same industry or geographic area benefit
                    from common infrastructure, shared services, or a skilled labor pool. For example, companies located in an industrial park may benefit from shared utilities or transportation facilities,
                    leading to cost savings for all the firms operating in the area.</p>
                    <p className="mt-2">Economies of scale are essential for businesses looking to maximize their efficiency and reduce production costs. By achieving economies of scale, companies can improve
                    their profit margins, offer competitive prices to consumers, and potentially enter new markets with greater cost advantages.</p>
                    <p className="mt-2">Note that economies of scale have limits. Eventually, as production continues to increase, diminishing returns may set in, and the cost-saving benefits of economies of
                    scale may start to diminish. Additionally, certain industries or products may not be able to take full advantage of economies of scale due to specific constraints or complexities associated
                    with their production processes.</p>
                </section>
            </div>
        </div>
    )
}
