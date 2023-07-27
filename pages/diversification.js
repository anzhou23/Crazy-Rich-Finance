import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function diversification() {
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
                    <span className="text-gray-700">Diversification</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Diversification</h1>
                    <p className="mt-4">Diversification is an investment strategy that involves spreading or allocating your investments across different assets or asset classes. The
                    goal is to reduce the overall risk in a portfolio by avoiding putting all your eggs in one basket. Instead of investing in a single company&apos;s stock or a single type of asset,
                    such as real estate or commodities, diversification involves holding a mix of investments with low correlation to each other.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">Diversification helps reduce the risk of substantial losses in a portfolio because different assets can respond differently to various market conditions. When some
                    investments may be declining in value, others may be performing well, which can offset losses and stabilize overall returns.</p>
                    <p className="mt-2">Diversification is achieved by allocating funds across different asset classes, such as stocks, bonds, cash, real estate, and commodities. Within each asset class,
                    further diversification can be achieved by selecting different investments with varying characteristics. Investors can tailor their portfolios to their risk tolerance, financial goals,
                    and investment time horizon. Younger investors with a higher risk tolerance may opt for a more aggressive and diversified portfolio, while those closer to retirement may choose a more
                    Sconservative mix.</p>
                    <p className="mt-2">By diversifying, investors avoid the risk of being overly concentrated in a particular investment or sector. For example, if an investor holds only technology stocks and
                    the tech sector experiences a downturn, their entire portfolio would be at risk. While diversification may limit the potential for extraordinary gains from a single investment, it provides a
                    more stable and potentially smoother growth trajectory over the long term.</p>
                    <p className="mt-2">Regularly reviewing and rebalancing a diversified portfolio ensures the allocation remains in line with your objectives. As some assets may outperform others over time,
                    rebalancing helps maintain the desired risk level.</p>
                </section>
            </div>
        </div>
    )
}
