import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function heuristics() {
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
                    <span className="text-gray-700">Heuristics</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Heuristics</h1>
                    <p className="mt-4">Heuristics are mental shortcuts or simplified decision-making strategies humans use to quickly solve problems, make judgments, or arrive at conclusions. These
                    cognitive shortcuts help people process information rapidly and efficiently, especially when faced with complex or overwhelming situations. Heuristics serve as practical rules
                    of thumb that simplify the decision-making process, but may not always lead to accurate or optimal results.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Heuristics enable individuals to make decisions quickly without extensive analysis or deliberation. They are useful when time is limited or when a rapid response is required.</p>
                    <p className="mt-2">Heuristics simplify complex problems by breaking them down into manageable pieces. By reducing the amount of information to consider, individuals can process it more easily. But, they can lead to cognitive biases, which are systematic errors in judgment that result from using mental shortcuts. These biases may cause individuals to deviate from rational decision-making.</p>
                    <p className="mt-2">The availability heuristic relies on the ease with which examples or instances of an event come to mind. If people can quickly recall an example of something happening, they may perceive it as more likely to occur.</p>
                    <p className="mt-2">The representative heuristic involves categorizing something based on how similar it is to a typical prototype or stereotype. People may use this shortcut to make judgments about others or situations.</p>
                    <p className="mt-2">The anchoring and adjustment heuristic occurs when individuals use an initial piece of information (the anchor) to make estimates or judgments, even if the anchor is irrelevant or misleading.</p>
                </section>
            </div>
        </div>
    )
}