import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function grandfatherClause() {
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
                    <span className="text-gray-700">Grandfather Clause</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Grandfather Clause</h1>
                    <p className="mt-4">The grandfather clause is a legal provision that exempts certain individuals or entities from new regulations or requirements if they had a
                    specific status or qualification before the new rules were established. The term &quot;grandfather clause&quot; originated in the United States during the late 19th century
                    and early 20th century, primarily in the context of voting rights and segregation laws.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In the context of voting rights, some states introduced laws and constitutional amendments restricting certain groups, such as African Americans, from
                    voting. However, to avoid disenfranchising white voters who may not have met the new requirements, the grandfather clause was introduced. It allowed individuals to vote if their
                    ancestors (usually fathers or grandfathers) were eligible to vote before the new laws were enacted. Since many white citizens&apos; ancestors had voting rights before the restrictions,
                    they were effectively exempt from the new rules, while the new restrictions disproportionately affected African American voters.</p>
                    <p className="mt-2">The grandfather clause has also been applied in other areas of law and regulation. For example, in zoning laws, it may allow existing businesses or properties to be
                    exempt from new zoning restrictions if they were established before the new regulations were put in place.</p>
                    <p className="mt-2">In a broader sense, the grandfather clause is a legal concept used to avoid disrupting existing arrangements or granting privileges to certain individuals or entities
                    based on their prior status or qualifications. However, grandfather clauses have been criticized for perpetuating historical inequalities and discrimination.</p>
                </section>
            </div>
        </div>
    )
}