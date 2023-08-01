import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function greatRecession() {
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
                    <span className="text-gray-700">Great Recession</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Great Recession</h1>
                    <p className="mt-4">The Great Recession, also known as the Global Financial Crisis, was a severe worldwide economic downturn that occurred from late 2007 to 2009. It was
                    the most significant economic crisis since the Great Depression of the 1930s. The Great Recession was triggered by a combination of factors, including the housing bubble in
                    the United States bursting, a global credit crunch, and financial market turmoil.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The roots of the Great Recession can be traced back to the U.S. housing market, where a speculative bubble had formed in the mid-2000s. Banks and financial
                    institutions were issuing risky mortgages to subprime borrowers, and these loans were often bundled together and sold as complex financial products known as mortgage-backed
                    securities (MBS). When housing prices started to decline and borrowers began to default on their mortgages, the value of MBS plummeted, causing significant losses for financial
                    institutions and investors.</p>
                    <p className="mt-2">As the U.S. housing market collapsed, it led to a widespread credit crunch. Banks and financial institutions became reluctant to lend to one another, leading to
                    a freeze in the interbank lending market. This lack of liquidity spread across the global financial system, affecting financial institutions worldwide. The crisis quickly spread to
                    other sectors of the economy, causing a sharp contraction in economic activity. Consumer spending declined, businesses cut back on investment, and unemployment rates soared. Many
                    countries experienced significant declines in GDP and faced severe economic challenges.</p>
                    <p className="mt-2">To combat the crisis, governments and central banks around the world implemented various measures, including fiscal stimulus packages, interest rate cuts, and
                    unconventional monetary policies. In the United States, the government passed the Troubled Asset Relief Program (TARP) to provide financial support to struggling banks, and the Federal
                    Reserve initiated large-scale asset purchase programs to inject liquidity into the financial system.</p>
                    <p className="mt-2">While the Great Recession officially ended in mid-2009, its impact was long-lasting, and recovery was slow and uneven. Many countries faced prolonged periods of
                    economic weakness, high unemployment, and financial market volatility.</p>
                    <p className="mt-2">The Great Recession had significant implications for the global economy, leading to increased scrutiny of financial regulations, the restructuring of the banking
                    sector, and a renewed focus on economic stability and risk management. It also sparked debates about the role of monetary and fiscal policies in addressing economic crises and the need
                    for reforms to prevent similar events in the future.</p>
                </section>
            </div>
        </div>
    )
}