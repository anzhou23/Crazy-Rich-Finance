import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function greatLeapForward() {
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
                    <span className="text-gray-700">Great Leap Forward</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Great Leap Forward</h1>
                    <p className="mt-4">The Great Leap Forward was a socio-economic and political campaign the Communist Party of China (CPC) launched under Mao Zedong&apos;s leadership from 1958 to 1962.
                    The campaign aimed to quickly transform China from an agrarian society into a modern, industrialized socialist nation. However, the Great Leap Forward was a major disaster, causing widespread
                    famine and economic setbacks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The campaign emphasized the implementation of large-scale collective farming known as &quot;communes,&quot; where agricultural land was pooled together, and peasants were
                    organized to work collectively. The idea was to increase agricultural productivity through communal labor and modern techniques. The Great Leap Forward also encouraged establishing backyard
                    furnaces and small-scale industries in rural areas to boost industrial output. The focus was on rapid industrialization and increasing steel production to achieve self-sufficiency in manufacturing.</p>
                    <p className="mt-2">Unfortunately, the campaign&apos;s implementation was marred by unrealistic targets, exaggerated output, and a lack of proper planning and management. Local officials,
                    eager to show their commitment to the campaign&apos;s goals, often reported inflated production figures, leading to misleading information and ill-informed policies. As a result, agricultural
                    production suffered significantly due to improper farming methods, disruptions caused by the communes, and environmental factors. The exaggerated grain production reports also led
                    to the state requisitioning more grain than was actually available, causing food shortages and famine.</p>
                    <p className="mt-2">The Great Leap Forward resulted in a massive human tragedy, with estimates of the death toll ranging from tens of millions to over 45 million people due to starvation and related
                    causes. The campaign&apos;s failure led to a significant loss of credibility for Mao and a power struggle within the Communist Party. Following the Great Leap Forward&apos;s disastrous consequences,
                    the Chinese government abandoned many of its radical policies and gradually shifted its focus towards more pragmatic economic reforms, ultimately leading to the beginning of China&apos;s modernization
                    and economic transformation under Deng Xiaoping&apos;s leadership in the late 1970s.</p>
                </section>
            </div>
        </div>
    )
}