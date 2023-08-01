import React from 'react'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dictionary() {
  const navigation = [
    { name: 'Learn', href: 'learn' },
    { name: 'Dictionary', href: 'dictionary' },
    { name: 'About', href: 'about' },
  ]

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar navigation={navigation} />

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mt-20">
          <h1 className="text-4xl font-bold text-center">Crazy Rich Dictionary</h1>
          <p className="text-gray-600 text-lg text-center mt-4">Explanations of finance, investing, and economic terms</p>
        </div>
      </div>

      <div className="bg-purple-200 p-4 mt-10 border-gray-400 w-3/4 mx-auto rounded-3xl shadow-lg">
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="#section-a" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">A</Link>
          <Link href="#section-b" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">B</Link>
          <Link href="#section-c" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">C</Link>
          <Link href="#section-d" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">D</Link>
          <Link href="#section-e" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">E</Link>
          <Link href="#section-f" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">F</Link>
          <Link href="#section-g" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">G</Link>
          <Link href="#section-h" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">H</Link>
          <Link href="#section-i" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">I</Link>
          <Link href="#section-j" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">J</Link>
          <Link href="#section-k" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">K</Link>
          <Link href="#section-l" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">L</Link>
          <Link href="#section-m" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">M</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Link href="#section-n" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">N</Link>
          <Link href="#section-o" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">O</Link>
          <Link href="#section-p" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">P</Link>
          <Link href="#section-q" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Q</Link>
          <Link href="#section-r" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">R</Link>
          <Link href="#section-s" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">S</Link>
          <Link href="#section-t" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">T</Link>
          <Link href="#section-u" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">U</Link>
          <Link href="#section-v" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">V</Link>
          <Link href="#section-w" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">W</Link>
          <Link href="#section-x" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">X</Link>
          <Link href="#section-y" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Y</Link>
          <Link href="#section-z" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Z</Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div id="section-a">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">A</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/accredited-investor">Accredited Investor</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/acquisition">Acquisition</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/acquisition-cost">Acquisition Cost</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/active-management">Active Management</Link>
            <Link className="hover:text-blue-300 hover:underline" href="adjustable-rate-mortgage">Adjustable Rate Mortgage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/algorithmic-trading">Algorithmic Trading</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/american-dream">American Dream</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/amortization">Amortization</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/angel-investing">Angel Investing</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/annual-percentage-rate">Annual Percentage Rate</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/annual-percentage-yield">Annual Percentage Yield</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/annual-report">Annual Report</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/annual-return">Annual Return</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/annuities">Annuities</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/antitrust">Antitrust</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/appraisal">Appraisal</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/appreciation">Appreciation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/arbitrage">Arbitrage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/asset">Asset</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/asset-allocation">Asset Allocation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/asset-class">Asset Class</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/audit">Audit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/average-return">Average Return</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-b">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">B</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/bad-credit">Bad Credit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bad-debt">Bad Debt</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bailout">Bailout</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/balance-sheet">Balance Sheet</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bank-reserve">Bank Reserve</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bank-statement">Bank Statement</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bank-run">Bank Run</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bankruptcy">Bankruptcy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/basket-of-goods">Basket of Goods</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bear-market">Bear Market</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bid-ask-spread">Bid and Ask</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/black-swan">Black Swan</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/blue-chip-stocks">Blue Chip Stocks</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bonds">Bonds</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bottom-line">Bottom Line</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/brokerage">Brokerage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/budget">Budget</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/bull-market">Bull Market</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/buy-and-hold">Buy and Hold</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-c">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-3">C</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/call-option">Call Option</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/candlestick">Candlestick</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/capital-gain">Capital Gain</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/cash-flow">Cash Flow</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/certificate-of-deposit">Certificate of Deposit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/ch-11-bankruptcy">Chapter 11 Bankruptcy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/checking-account">Checking Account</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/checks-and-balances">Checks and Balances</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/clearinghouse">Clearinghouse</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/collateral">Collateral</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/collusion">Collusion</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/commission">Commission</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/commodities">Commodities</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/communism">Communism</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/comparative-advantage">Comparative Advantage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/complement">Complement</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/compound-interest">Compound Interest</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/consumer-credit">Consumer Credit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/consumer-discretionary">Consumer Discretionary</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/consumer-goods">Consumer Goods</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/consumer-price-index">Consumer Price Index</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/cost-basis">Cost Basis</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/consumerism">Consumerism</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/contingency">Contingency</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/cost-of-living">Cost of Living</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/credit">Credit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/credit-card">Credit Card</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/credit-limit">Credit Limit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/credit-score">Credit Score</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/creditworthiness">Creditworthiness</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/currency">Currency</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-d">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">D</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/day-trading">Day Trading</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/debt">Debt</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/debt-to-income-ratio">Debt-to-Income Ratio</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/default">Default</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/deficit">Deficit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/deficit-spending">Deficit Spending</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/deflation">Deflation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/delinquent">Delinquent</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/demand">Demand</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/deposit">Deposit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/depreciation">Depreciation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/depression">Depression</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/deregulation">Deregulation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/direct-deposit">Direct Deposit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/disinflation">Disinflation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/disposable-income">Disposable Income</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/diversification">Diversification</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dividend">Dividend</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dividend-aristocrat">Dividend Aristocrat</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dividend-yield">Dividend Yield</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dollar-cost-averaging">Dollar Cost Averaging</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/down-payment">Down Payment</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dry-powder">Dry Powder</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/dink">Dual Income, No Kids</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-e">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">E</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
          <Link className="hover:text-blue-300 hover:underline" href="/earned-income">Earned Income</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/earnest-money">Earnest Money</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/earnings">Earnings</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/earnings-call">Earnings Call</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/earnings-report">Earnings Report</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economic-growth">Economic Growth</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economic-recovery">Economic Recovery</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economic-shock">Economic Shock</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economic-stimulus">Economic Stimulus</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economies-of-scale">Economies of Scale</Link>
          <Link className="hover:text-blue-300 hover:underline" href="/economist">Economist</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/economy">Economy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/embargo">Embargo</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/embezzlement">Embezzlement</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/emergency-fund">Emergency Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/encroachment">Encroachment</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/encumbrance">Encumbrance</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/endowment">Endowment</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/equity">Equity</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/equity-fund">Equity Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/escrow">Escrow</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/estate">Estate</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/estate-planning">Estate Planning</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/european-union">European Union</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/exchange">Exchange</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/exchange-rate">Exchange Rate</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/exchange-traded-fund">Exchange-Traded Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/expense-ratio">Expense Ratio</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/exponential-growth">Exponential Growth</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/extrinsic-value">Extrinsic Value</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-f">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">F</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/falling-knife">Falling Knife</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fdic">Federal Deposit Insurance Corporation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/federal-reserve">Federal Reserve</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fiat-money">Fiat Money</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fibonacci-retracement">Fibonacci Retracement</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fire">Financial Independence, Retire Early</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/financial-literacy">Financial Literacy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fiscal-deficit">Fiscal Deficit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fiscal-policy">Fiscal Policy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fixed-cost">Fixed Cost</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/flexible-spending-account">Flexible Spending Account</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/floating-exchange-rate">Floating Exchange Rate</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fsbo">For Sale By Owner</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/forbearance">Forbearance</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/foreclosure">Foreclosure</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/foreign-aid">Foreign Aid</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/forex">Forex</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fortune-500">Fortune 500</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fractional-share">Fractional-Share</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/franchise">Franchise</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fraud">Fraud</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/free-market">Free Market</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/free-rider-problem">Free Rider Problem</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/free-trade">Free Trade</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/fundamental-analysis">Fundamental Analysis</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/futures">Futures</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-g">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">G</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/gamification">Gamification</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gentrification">Gentrification</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gig-economy">Gig Economy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gini-index">Gini Index</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/glass-ceiling">Glass Ceiling</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/globalization">Globalization</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gold-standard">Gold Standard</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/golden-handcuffs">Golden Handcuffs</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/golden-parachute">Golden Parachute</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/goodwill">Goodwill</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/government-bond">Government Bond</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/grandfather-clause">Grandfather Clause</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/grant">Grant</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/great-depression">Great Depression</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/great-leap-forward">Great Leap Forward</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/great-recession">Great Recession</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/greenwashing">Greenwashing</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gdp">Gross Domestic Product</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gross-earnings">Gross Earnings</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gross-income">Gross Income</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gross-margin">Gross Margin</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/gross-profit">Gross Profit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/growth-company">Growth Company</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/growth-rates">Growth Rates</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/growth-stock">Growth Stock</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/guarantor">Guarantor</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-h">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">H</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/hsa">Health Savings Account</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/hold">Hold</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/hodl">HODL</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/homeowners-association">Homeowners Association</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/hyperinflation">Hyperinflation</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-i">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">I</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/index-fund">Index Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/inflation">Inflation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/ipo">Initial Public Offering</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/insider-trading">Insider Trading</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/institutional-investor">Institutional Investor</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/interest">Interest</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/interest-rate">Interest Rate</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-j">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">J</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/joint-account">Joint Account</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/joint-credit">Joint Credit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/joint-tenancy">Joint Tenancy</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/jumbo-loan">Jumbo Loan</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/junk-bond">Junk Bond</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/junk-fees">Junk Fees</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-k">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">K</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/kpi">Key Performance Indicator</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/keynesian">Keynesian Economics</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/kickback">Kickback</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/knowledge-economy">Knowledge Economy</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-l">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">L</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/level2">Level 2 Data</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/lien">Lien</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/limit-order">Limit Order</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/liquidity">Liquidity</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-m">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">M</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/margin">Margin</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/market-cap">Market Capitalization</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/market-order">Market Order</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/mortgage">Mortgage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/mutual-fund">Mutual Fund</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-n">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">N</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/nasdaq">NASDAQ</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/net-worth">Net Worth</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/nyse">NYSE</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/non-accredited-investor">Non-Accredited Investor</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-o">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">O</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/option">Option</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/overbought">Overbought</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/overdraft-fee">Overdraft Fee</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/oversold">Oversold</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/overvalued">Overvalued</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-p">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">P</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/passive-income">Passive Income</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/personal-loan">Personal Loan</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/personal-property">Personal Property</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/post-tax-contribution">Post-Tax Contribution</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/pre-tax-contribution">Pre-Tax Contribution</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/pe-ratio">Price-to-Earning Ratio</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/principal-balance">Principal Balance</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/property-tax">Property Tax</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-q">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">Q</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/quality-of-life">Quality of Life</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/quantitative-easing">Quantitative Easing</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/quarter">Quarter</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/quote">Quote</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-r">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">R</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/rate-of-return">Rate of Return</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/raw-materials">Raw Materials</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/reit">Real Estate Investment Trust</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/rebalancing">Rebalancing</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/recession">Recession</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/refinance">Refinance</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/rent-control">Rent Control</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/retail-investor">Retail Investor</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/roi">Return on Investment</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/roth-ira">Roth IRA</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-s">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">S</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/scalper">Scalper</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/share">Share</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/short">Short</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/sinking-fund">Sinking Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/spac">SPAC</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/stock">Stock</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/swing-trade">Swing Trade</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/sp-500">S&P500</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-t">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">T</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/tax-credit">Tax Credit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/target-date-fund">Target Date Fund</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/tax-loss-harvesting">Tax Loss Harvesting</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/tax-deferred">Tax Deferred</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/taxable-account">Taxable Account</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/technical-analysis">Technical Analysis</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/too-big-to-fail">Too Big to Fail</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/trade-deficit">Trade Deficit</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/trade-surplus">Trade Surplus</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/trade-war">Trade War</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/traditional-ira">Traditional IRA</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/trust-fund">Trust Fund</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-u">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">U</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/unbanked">Unbanked</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/underperform">Underperform</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/underwater-mortgage">Underwater Mortgage</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/unemployment-rate">Unemployment Rate</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-v">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">V</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/va-loan">VA Loan</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/valuation">Valuation</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/venture-capital">Venture Capital</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/vesting-schedule">Vesting Schedule</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/volatility">Volatility</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-w">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">W</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/w2">W-2</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/whale">Whale</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/wall-street">Wall Street</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/welfare-state">Welfare State</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-x">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">X</h2>
          <div className="grid grid-cols-1 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/xenocurrency">Xenocurrency</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-y">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">Y</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/year-over-year">Year Over Year</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/year-to-date">Year to Date</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/yield">Yield</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/yuppie">Yuppie</Link>
          </div>
          <hr className="mt-10 mb-10 w-3/5 text-gray-500 mx-auto" />
        </div>

        <div id="section-z">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mx-auto mb-4">Z</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-lg text-center">
            <Link className="hover:text-blue-300 hover:underline" href="/zero-based-budgeting">Zero-Based Budgeting</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/zero-sum-game">Zero-Sum Game</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/zone-of-resistance">Zone of Resistance</Link>
            <Link className="hover:text-blue-300 hover:underline" href="/zone-of-support">Zone of Support</Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
