import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function inheritanceTax() {
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
                    <span className="text-gray-700">Inheritance Tax</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Inheritance Tax</h1>
                    <p className="mt-4">Inheritance tax, also known as an estate tax or death duty, is levied by some governments on the assets and property transferred from a deceased person&apos;s
                    estate to their heirs or beneficiaries. It is essentially a tax on the transfer of wealth from one generation to the next. The tax is typically calculated based on the total value
                    of the assets being inherited.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The taxable estate includes all the assets owned by the deceased person at the time of their death. This can include real estate, investments, bank accounts,
                    personal property, and other valuable possessions. Most countries that impose inheritance tax provide certain exemptions and thresholds. Below a certain threshold, usually referred to
                    as the &quot;exemption amount,&quot; the inheritance is not subject to taxation. If the value of the estate is above this threshold, a tax is applied on the excess amount.</p>
                    <p className="mt-2">The tax rate for inheritance tax varies from country to country and often depends on the estate&apos;s value. Higher-value estates may be subject to higher tax rates.
                    Some countries also have progressive tax rates, meaning different portions of the estate are taxed at different rates. Inheritance tax is often justified as a means to promote economic
                    equity and fund public services. It can also discourage the concentration of wealth and encourage charitable giving.</p>
                    <p className="mt-2">Inheritance tax is typically paid by the beneficiaries who receive the assets from the estate. The tax is usually calculated based on the value of the assets received
                    by each beneficiary. Some jurisdictions allow for certain deductions or credits that can reduce the overall inheritance tax liability. These may include deductions for funeral expenses,
                    debts of the deceased, or charitable donations.</p>
                    <p className="mt-2">Inheritance tax planning involves various strategies that individuals and families may use to reduce the amount of tax that will be owed upon their death. This can
                    include gifting assets during one&apos;s lifetime, setting up trusts, and utilizing tax-efficient investment vehicles.</p>
                </section>
            </div>
        </div>
    )
}