import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function gigEconomy() {
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
                    <span className="text-gray-700">Gig Economy</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gig Economy</h1>
                    <p className="mt-4">The gig economy is a labor market characterized by short-term or freelance work arrangements, where individuals, often referred to as &quot;gig workers&quot;
                    or &quot;independent contractors,&quot; are hired on a temporary basis to complete specific tasks or projects. Instead of being traditional full-time employees, gig workers are usually
                    hired on a per-project or per-task basis, often through digital platforms or mobile apps like Uber, Lyft, DoorDash, and Instacart.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the gig economy, workers have flexible working hours and locations, allowing them to have multiple income sources and work for various clients simultaneously. Common
                    examples of gig work include ridesharing drivers, food delivery couriers, freelance writers, graphic designers, and virtual assistants.</p>
                    <p className="mt-2">The gig economy allows workers to have a more flexible work-life balance and the opportunity to explore different jobs. For businesses, it offers cost savings
                    and access to a diverse pool of talent with specialized skills. However, gig workers may lack traditional employee benefits like healthcare, retirement plans, and paid time off. They may also
                    face income variability and job insecurity, as their income can fluctuate based on the availability of gigs and demand for their services.</p>
                    <p className="mt-2">The gig economy has grown significantly in recent years, driven by technological advancements and changes in work preferences. It has transformed the way people work and how
                    businesses operate, but it has also sparked discussions about labor rights, worker protections, and the need for new forms of social safety nets to support gig workers.</p>
                </section>
            </div>
        </div>
    )
}