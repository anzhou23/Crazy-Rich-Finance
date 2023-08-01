import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function greatDepression() {
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
                    <span className="text-gray-700">Great Depression</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Great Depression</h1>
                    <p className="mt-4">The Great Depression was a severe and prolonged economic crisis that occurred globally during the 1930s. It is considered one of the most devastating economic
                    downturns in history. The Great Depression began with the stock market crash on October 29, 1929, known as &quot;Black Tuesday,&quot; when the value of stocks plummeted, leading to
                    massive losses for investors and banks.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">During the Great Depression, the United States and many other countries experienced a drastic decline in industrial production, trade, and overall economic activity.
                    Unemployment rates soared to unprecedented levels, reaching up to 25% in the United States. People lost their jobs, homes, and life savings, and poverty and homelessness became widespread.</p>
                    <p className="mt-2">One major cause of the Great Depression was the overproduction and underconsumption of goods, which led to a decline in demand and further exacerbated economic woes.
                    The collapse of the banking system also played a crucial role, as numerous banks failed, resulting in a loss of savings for many individuals and businesses.</p>
                    <p className="mt-2">Governments worldwide implemented various policies and programs to try and alleviate the effects of the Great Depression. In the United States, President Franklin D.
                    Roosevelt&apos;s New Deal initiatives provided relief, recovery, and reform through financial assistance, job creation, and regulatory measures.</p>
                    <p className="mt-2">The Great Depression lasted until the late 1930s and early 1940s, and it ultimately came to an end with the onset of World War II. The war effort boosted industrial
                    production and created jobs, effectively lifting many countries out of the economic slump.</p>
                </section>
            </div>
        </div>
    )
}