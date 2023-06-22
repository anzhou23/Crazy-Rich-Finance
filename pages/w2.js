import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function w2() {
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
                    <span className="text-gray-700">W-2</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">W-2</h1>
                    <p className="mt-4">A W-2 form is a document provided by an employer to an employee, typically on an annual basis, to report the employee&apos;s wages, salary, and other compensation for the purpose
                    of income tax filing. It includes information such as total earnings, taxes withheld, and contributions to retirement plans or other benefits.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The W-2 form includes details about the income tax, Social Security tax, and Medicare tax withheld from the employee&apos;s paychecks throughout the year. These withholdings are
                    based on the employee&apos;s tax filing status, exemptions claimed, and the information provided on the W-4 form submitted to the employer. Additionally, the W-2 form may include information about
                    certain employee benefits, such as contributions to retirement plans, health insurance premiums, or other pre-tax deductions. These amounts may be listed separately or included in the total taxable wages
                    reported on the form.</p>
                    <p className="mt-2">The W-2 form also includes the employee&apos;s contributions to Social Security and Medicare. These amounts are used for calculating the individual&apos;s eligibility for Social Security
                    benefits and Medicare coverage.</p>
                    <p className="mt-2">The information on the W-2 form is used by employees to complete their individual income tax returns. The form is typically provided by the employer by the end of January, and employees
                    are required to include it when filing their federal and state income tax returns. The W-2 form helps ensure accurate reporting of income and taxes paid by the employee.</p>
                </section>
            </div>
        </div>
    )
}
