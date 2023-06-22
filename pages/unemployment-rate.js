import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function unemploymentRate() {
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
                    <span className="text-gray-700">Unemployment Rate</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Unemployment Rate</h1>
                    <p className="mt-4">The unemployment rate is a key economic indicator that measures the percentage of the labor force that is actively seeking employment but currently without a job. It is commonly used to
                    assess an economy&apos;s health and the overall employment situation. The unemployment rate provides insights into the level of joblessness in a given period and serves as a barometer for economic conditions.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The labor force comprises individuals who are either employed or actively seeking employment. Those who are unemployed include individuals without a job but actively searching for work and
                    available to start working.</p>
                    <p className="mt-2">A low unemployment rate generally indicates a strong economy, as it suggests that a significant portion of the labor force is gainfully employed. Conversely, a high unemployment rate may
                    indicate economic weakness, with a larger proportion of the labor force struggling to find a job. High unemployment rates can lead to financial hardship, reduced consumer spending, and lower living standards for
                    affected individuals and families. Unemployment can also have social and psychological consequences, including increased stress, decreased self-esteem, and reduced social cohesion.</p>
                    <p className="mt-2">Unemployment rates can be influenced by both cyclical and structural factors. Cyclical unemployment refers to joblessness caused by economic downturns or fluctuations, such as during recessions.
                    Structural unemployment, on the other hand, arises from longer-term shifts in the economy, such as changes in technology, industry restructuring, or skills mismatch between available jobs and workers&apos; qualifications.</p>
                    <p className="mt-2">High unemployment rates may prompt policymakers to implement measures aimed at stimulating job creation and economic growth, such as fiscal stimulus programs, job training initiatives, or investment
                    in infrastructure projects. Conversely, low unemployment rates may raise concerns about labor shortages, wage inflation, and potential overheating in the economy.</p>
                    <p className="mt-2">While the unemployment rate is a widely used indicator, it has certain limitations. It does not capture individuals who have given up actively seeking employment (discouraged workers) or those who
                    are underemployed (working part-time but desiring full-time employment). Additionally, it does not provide insights into the quality of jobs, wage levels, or other aspects of employment beyond joblessness.</p>
                    <p className="mt-2">Comparing the unemployment rate across countries can provide insights into global economic disparities and labor market conditions. International comparisons of unemployment rates help identify
                    trends, policy approaches, and potential lessons for addressing unemployment challenges.</p>
                </section>
            </div>
        </div>
    )
}
