import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function hostileTakeover() {
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
                    <span className="text-gray-700">Hostile Takeover</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hostile Takeover</h1>
                    <p className="mt-4">A hostile takeover is a type of corporate acquisition where one company (the acquirer or &quot;raider&quot;) wants to acquire another company (the target)
                    against the wishes of the target company&apos;s management and board of directors. In a hostile takeover, the target company&apos;s management is unwilling to sell or negotiate
                    a deal with the acquiring company, leading to a direct and aggressive attempt to gain control of the target company.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Unlike a friendly takeover, where the target company&apos;s management and board willingly agree to the acquisition terms, a hostile takeover involves a resistant
                    target company that opposes the acquisition. The acquirer bypasses negotiations with the target company&apos;s management and board and instead directly approaches the target&apos;s
                    shareholders to purchase their shares. To gain control of the target company, the acquirer may engage in a proxy fight by soliciting the votes of the target&apos;s shareholders to
                    replace the existing board of directors with individuals who support the takeover.</p>
                    <p className="mt-2">The acquirer may make a public tender offer to the target company&apos;s shareholders, offering to purchase their shares at a premium price to entice them to sell.
                    In some cases, the acquiring company may employ aggressive tactics, such as going to court, launching hostile media campaigns, or seeking regulatory intervention to gain control.</p>
                    <p className="mt-2">Hostile takeovers are often motivated by the potential for profit and desire to acquire valuable assets or market share from the target company. They can be contentious
                    and create significant conflicts between the acquiring company and the target&apos;s management, leading to prolonged battles for control. In response to hostile takeovers, target
                    companies may implement defensive measures to protect themselves, such as adopting poison pills (shareholder rights plans) to dilute the acquirer&apos;s ownership, seeking white knight
                    acquisitions with more favorable terms, or pursuing legal actions to challenge the takeover.</p>
                </section>
            </div>
        </div>
    )
}