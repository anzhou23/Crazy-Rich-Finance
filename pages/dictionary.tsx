import React, { useState} from 'react'
import 'tailwindcss/tailwind.css'
import { Dialog } from '@headlessui/react'
import Navbar from '../components/Navbar'
import DefinitionList from '../components/DefinitionList'
import Footer from '../components/Footer'

interface Definition {
  id: number;
  name: string;
  content?: JSX.Element;
}

const definitionsA: Definition[] = [
  {
    id: 1,
    name: 'Accredited Investor',
    content: (
      <>
        <p className="mt-2">An accredited investor is an individual or entity that meets specific financial criteria defined by regulatory bodies, such as the Securities and Exchange
        Commission (SEC), allowing them to participate in certain investment opportunities that are restricted to accredited investors.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Criteria for becoming an accredited investor may include minimum income levels, minimum net worth, or professional experience in the financial industry. The exact requirements can vary
          by jurisdiction, but they are designed to ensure that accredited investors have sufficient financial means or expertise to understand and bear the risks associated with certain types of investments.</li>
          <li>Accredited investors have access to a broader range of investment opportunities that are typically unavailable to non-accredited investors. These opportunities may include private equity offerings,
          hedge funds, venture capital funds, private placements, and other types of investments that are considered higher risk, illiquid, or have higher minimum investment requirements.</li>
          <li>Regulatory bodies impose certain rules and regulations on investment offerings to accredited investors to promote investor protection and maintain fair and transparent markets. Accredited investors may
          be subject to additional disclosure requirements, filing obligations, or restrictions when participating in certain investment opportunities.</li>
          <li>Being an accredited investor comes with the responsibility of ongoing evaluation and due diligence. Accredited investors should continuously assess their investment strategies, monitor the performance
          of their investments, and stay informed about changes in market conditions or regulations that may affect their investment decisions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Amortization',
    content: (
      <>
        <p className="mt-2">Amortization is the process of gradually reducing or paying off a debt over a specific period through regular payments. It involves breaking down the total amount borrowed into a series of
        scheduled payments that cover both the principal (the original amount borrowed) and the interest (the cost of borrowing).</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In an amortizing loan, such as a mortgage or car loan, each payment made consists of the principal plus interest. Initially, a larger portion of the payment goes towards paying off the interest, while a
          smaller portion is applied towards the principal. As the loan progresses, the balance shifts, and a larger portion of each payment is allocated towards reducing the principal.</li>
          <li>The amortization process is based on a predetermined schedule, typically provided by the lender. This schedule outlines the total number of payments, the payment amount, and the breakdown between principal
          and interest. It allows borrowers to know exactly how much they need to pay each period and how the loan balance will be reduced over time.</li>
          <li>Through amortization, you can spread out the cost of a large purchase over an extended period, making it more affordable. It also ensures the loan is fully repaid by the end of the term, assuming all
          payments are made as scheduled.</li>
          <li>Amortization schedules are calculated using various factors, including the loan amount, interest rate, loan term, and the frequency of payments (monthly, biweekly, etc.).</li>
          <li>Amortization schedules vary depending on the type of loan and the terms agreed upon. While most people associate amortization with loans, such as mortgages, it can also apply to other financial instruments,
          such as bonds or installment loans.</li>
        </ul>
      </>
    ),
  },

  {
    id: 3,
    name: 'Angel Investing',
    content: (
      <>
        <p className="mt-2">Angel investing refers to the practice of high-net-worth individuals or groups providing capital to early-stage startups in exchange for equity ownership. Angels typically offer more than just funding,
        often providing mentorship, industry connections, and expertise to help the startups grow. It&apos;s a high-risk, high-reward investment strategy with the potential for substantial returns if the startups succeed.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Angel investments typically require a longer time horizon, as it can take several years for startups to reach maturity or generate significant returns.</li>
          <li>Angel investing carries the risk of potential losses, as not all startups will succeed. It&apos;s essential to be prepared for the possibility of losing the entire investment or a significant portion of it.</li>
          <li>Given the high-risk nature of angel investing, it&apos;s important to diversify your portfolio by investing in multiple startups and other asset types. Additionally, thorough due diligence is crucial to assess each
          startup&apos;s market potential, team, and business model before investing.</li>
          <li>Engaging with other angel investors and joining angel networks or communities can provide valuable learning experiences, deal flow, and opportunities for collaboration. Networking can also lead to co-investment
          possibilities and shared due diligence efforts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Annual Percentage Rate',
    content: (
      <>
        <p className="mt-2">Annual Percentage Rate (APR) represents the annualized cost of borrowing, including both the interest rate and any additional fees or charges associated with a loan or credit product, such as upfront fees,
        points, or closing costs. It is expressed as a percentage and helps borrowers compare the true cost of different financial offers.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Lenders are required by law in many countries to disclose the APR to borrowers so they can understand the complete cost of credit. When comparing loan offers, borrowers should consider the APR rather than just the nominal
          interest rate, as it gives a more comprehensive picture of the total borrowing expenses.</li>
          <li>APRs may vary depending on the type of loan or credit product. For example, mortgages, personal loans, credit cards, and auto loans may have different APR structures due to the specific terms and conditions associated with
          each type of financing.</li>
          <li>APR does not include compounding, which is the effect of earning or paying interest on previously accrued interest. Instead, APR represents a simple interest rate that allows for easier comparison between different loan offers.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Annual Percentage Yield',
    content: (
      <>
        <p className="mt-2">Annual Percentage Yield (APY) represents the total return on an investment or savings account over a one-year period, taking into account compound interest. It is expressed as a percentage and helps investors and savers
        understand the true earning potential of their funds.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Unlike the Annual Percentage Rate (APR), APY takes the compounding effect into consideration, meaning the interest earned is reinvested and starts earning additional interest.</li>
          <li>APY reflects both the stated interest rate and the frequency of compounding. The more frequently interest is compounded, the higher the APY will be compared to the nominal interest rate. For example, if interest is compounded monthly,
          the APY will be higher than if it is compounded annually.</li>
          <li>APY is particularly useful when comparing different investment or savings options. It allows investors to understand the potential returns they can expect from various financial products and make informed decisions about where to
          allocate their funds.</li>
          <li>APY assumes that the investment or savings account remains untouched for the entire year and that the interest is reinvested. Any additional contributions, withdrawals, or changes in interest rates during the year can affect the actual returns.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Annual Report',
    content: (
      <>
        <p className="mt-2">An annual report is a comprehensive document that provides shareholders and other stakeholders with a detailed overview of a company&apos;s financial performance, operations, and achievements over the past year. It typically includes
        financial statements, management&apos;s discussion and analysis, corporate governance information, and future outlook. Annual reports are essential for transparency, accountability, and informed decision-making by investors and interested parties.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Annual reports provide a snapshot of a company&apos;s financial health, including revenue, expenses, profitability, and cash flow. Understanding the financial performance helps investors assess the company&apos;s stability and growth potential.</li>
          <li>Annual reports provide details on the company&apos;s governance structure, board composition, executive compensation, and risk management practices.</li>
          <li>Annual reports fulfill legal and regulatory obligations, ensuring that the company meets reporting standards and provides accurate and timely information to shareholders and regulatory authorities.</li>
          <li>Additional information like auditor&apos;s reports, notes to financial statements, and sustainability or CSR reports may be included, providing a comprehensive view of the company&apos;s financial and non-financial performance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Annuities',
    content: (
      <>
        <p className="mt-2">Annuities are financial products that provide a steady stream of income over a specified period or for the remainder of a person&apos;s life. They are typically offered by insurance
        companies and can serve as a means of long-term financial planning, particularly for retirement.</p>
        <p className="font-medium mt-4 ">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Annuities are structured as contracts between an individual and an insurance company, where the individual makes either a lump sum payment or a series of payments to the insurer.</li>
          <li>Annuities offer the benefit of tax-deferred growth, meaning that earnings within the annuity account are not taxed until withdrawals get made.</li>
          <li>There are different types of annuities, including fixed annuities, variable annuities, and indexed annuities, each with its own features and investment options.</li>
          <li>Fixed annuities provide a guaranteed rate of return and a fixed income stream, while variable annuities allow the investor to choose from a range of investment options. Indexed annuities provide returns
          based on the performance of a specific market index, offering a potential for higher returns while protecting against market downturns.</li>
          <li>Annuities often come with fees and expenses, including mortality and expense charges, administrative fees, and investment management fees, which can vary depending on the specific annuity contract.</li>
          <li>Annuities can be either immediate, where income payments start immediately after purchase, or deferred, where income payments are postponed until a later date.</li>
          <li>Withdrawals from annuities before reaching a certain age (typically 59 1/2) may be subject to penalties and taxes.</li>
          <li>Annuities can offer a reliable income stream during retirement, providing financial security, but it&apos;s essential to carefully
            consider the terms, fees, and features before purchasing an annuity to ensure it aligns with individual financial goals and circumstances.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    name: 'Appreciation',
    content: (
      <>
        <p className="mt-2">Appreciation refers to an increase in an asset&apos;s value or worth over time. It is the opposite of depreciation, which signifies a decrease in value. Appreciation can occur in various types of assets,
        such as real estate, stocks, bonds, and other investments.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In real estate, appreciation may result from factors such as improvements in the surrounding neighborhood, increased demand for housing, economic growth, or inflation. Over time, these factors can contribute to an increase
          in the property&apos;s value.</li>
          <li>In the case of stocks and bonds, appreciation can be influenced by factors such as the company&apos;s financial performance, industry trends, market conditions, and investor sentiment. Positive developments, such as revenue
          growth, increased profitability, or favorable economic conditions, can drive the appreciation of these assets.</li>
          <li>Commodities, such as gold, oil, or agricultural products, can also experience appreciation due to factors like supply and demand dynamics, geopolitical events, or changes in market conditions.</li>
          <li>Appreciation represents the potential for capital gains. Investors seek assets that have the potential to appreciate over time, allowing them to sell the asset at a higher price than their initial investment and realize a profit.</li>
          <li>Appreciation is not guaranteed and can be influenced by numerous factors, including market fluctuations, economic conditions, and unforeseen events. Additionally, the rate and extent of appreciation can vary widely across
          different assets and timeframes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    name: 'Asset',
    content: (
      <>
        <p className="mt-2">An asset refers to something of value that an individual, company, or organization owns or controls, with the expectation that it will provide future economic benefits. Assets can take various forms and
        encompass both tangible and intangible items.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Tangible assets are physical objects that can be touched, seen, and measured. Examples of tangible assets include real estate properties, vehicles, machinery, equipment, inventory, and cash.</li>
          <li>Intangible assets lack physical substance but still hold value. They include intellectual property, such as patents, copyrights, trademarks, and trade secrets. Other examples of intangible assets are goodwill, brand recognition,
          customer relationships, software, and licenses.</li>
          <li>Current assets are those that are expected to be converted into cash or used up within one year or the operating cycle of a business. Common current assets include cash and cash equivalents, accounts receivable, inventory, and
          short-term investments.</li>
          <li>Fixed assets, also known as property, plant, and equipment (PP&E), are long-term assets held for productive use in the business. These assets have a useful life of more than one year and include items such as buildings, land,
          vehicles, machinery, and furniture.</li>
          <li>Financial assets are instruments representing ownership of an entity or a contractual right to receive future cash flows. Examples include stocks, bonds, mutual funds, derivatives, bank deposits, and other securities.</li>
          <li>Assets play a crucial role in financial analysis, as they contribute to an entity&apos;s net worth, liquidity, and ability to generate income. Individuals and businesses aim to acquire and manage assets effectively to build
          wealth, generate returns, and support their operational activities.</li>
        </ul>
      </>
    ),
  },
]

const definitionsB: Definition[] = [
  {
    id: 1,
    name: 'Balance Sheet',
    content: (
      <>
        <p className="mt-2">A balance sheet is a financial statement that provides a snapshot of an entity&apos;s financial position at a specific point in time. It presents the company&apos;s assets, liabilities, and shareholders&apos;
        equity, providing a comprehensive overview of its financial health.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Assets represent what the company owns or controls and include both tangible and intangible items. Tangible assets include cash, inventory, property, plant, and equipment, while intangible assets include patents,
          trademarks, and goodwill.</li>
          <li>Liabilities represent what the company owes to external parties, such as creditors and lenders. Examples of liabilities include accounts payable, loans, accrued expenses, and deferred revenues.</li>
          <li>Shareholders&apos; equity, also known as owners&apos; equity or net worth, represents the residual interest in the assets of the company after deducting liabilities. It includes issued share capital, retained earnings,
          and additional paid-in capital.</li>
          <li>The balance sheet follows the fundamental accounting equation: Assets = Liabilities + Shareholders&apos; Equity. This equation ensures that the balance sheet remains in balance, where the total assets equal the total
          liabilities plus shareholders&apos; equity.</li>
          <li>Balance sheets are important for various stakeholders, including investors, creditors, and management. They provide insights into a company&apos;s financial position, its ability to meet short-term obligations, and
          the level of shareholder investment. Comparing balance sheets over time allows stakeholders to analyze trends, assess financial stability, and make informed investment or lending decisions.</li>
          <li>Note that a balance sheet does not provide information on changes in financial position or performance over a period. For a comprehensive understanding of a company&apos;s financial performance, balance sheets
          are often analyzed in conjunction with income statements and cash flow statements.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Bankruptcy',
    content: (
      <>
        <p className="mt-2">Bankruptcy is a legal process where individuals or businesses who are unable to repay their debts seek relief from their financial obligations. It provides a structured framework for
        managing and resolving debts when they become overwhelming.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>One of the main goals of bankruptcy is to discharge certain debts and protect debtors from aggressive collection efforts. A debt that is discharged is no longer legally enforceable, and the debtor is
          released from the obligation to repay it. However, not all debts are dischargeable, such as certain tax debts, student loans (in most cases), child support, and alimony obligations.</li>
          <li>There are different types of bankruptcy proceedings. Often referred to as &quot;liquidation bankruptcy,&quot; Chapter 7 involves the sale of non-exempt assets to repay creditors. Certain debts may be discharged,
          providing a fresh start to the debtor. Primarily used by businesses, Chapter 11 allows for the reorganization and restructuring of debts while the business continues operations. It provides an opportunity to
          develop a plan to repay creditors over time. Designed for individuals with regular income, Chapter 13 enables the debtor to create a repayment plan to gradually pay off their debts over 3-5 years.</li>
          <li>When a bankruptcy petition is filed, an automatic stay goes into effect, providing temporary relief for debtors. This legally prohibits creditors from taking further collection actions against the debtor,
          including lawsuits, wage garnishments, or foreclosure proceedings.</li>
          <li>In bankruptcy cases, a trustee is appointed to oversee the process. The trustee&apos;s role varies depending on the bankruptcy chapter and includes reviewing the debtor&apos;s financial situation, liquidating
          assets if necessary, and ensuring compliance with bankruptcy laws.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Bear Market',
    content: (
      <>
        <p className="mt-2">A bear market refers to a period of declining prices and pessimism in the financial markets, typically associated with a downward trend in stock prices. It is characterized by
        widespread selling and a lack of confidence in the market. Bear markets are often driven by economic downturns, negative sentiment, or significant geopolitical events.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>During bear markets, it&apos; important to manage emotions, avoid panic selling, and maintain a long-term perspective.</li>
          <li>Diversification, risk management, and a focus on high-quality assets can help navigate the challenges of a bear market.</li>
          <li>While bear markets can be difficult, they also present opportunities for long-term investors. Lower stock prices may offer attractive entry points for quality companies, and potential bargains
          can be found in undervalued sectors.</li>
          <li>Understanding your investment horizon and risk tolerance is crucial in bear markets. Short-term investors with imminent financial goals may need to reassess their investment plans, while long-term
          investors may choose to stay invested and ride out the market volatility.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Bonds',
    content: (
      <>
        <p className="mt-2">Bonds are debt instruments issued by governments, municipalities, and corporations to raise capital. When an investor
        buys a bond, they are essentially lending money to the issuer in exchange for regular interest payments and the return of the principal amount
        at maturity. Bonds are generally considered low-risk investments and provide a fixed income stream for investors.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Bonds provide stability and predictable cash flow, making them attractive for income-oriented investors or those seeking more stable returns.</li>
          <li>Bonds can play a crucial role in diversification. They often exhibit lower volatility compared to stocks and can help reduce overall portfolio risk.</li>
          <li>Bonds are typically assigned credit ratings by agencies like Moody&apos; and Standard and Poors, providing an indication of the issuer&apos;s
            creditworthiness and potential default risk.</li>
          <li>There are various types of bonds, including government bonds, municipal bonds, corporate bonds, and international bonds. Each type has
            its own risk profile, yield potential, and tax implications.</li>
          <li>Bonds have a specific maturity date, which is the date when the principal amount is repaid to the bondholder.</li>
          <li>The duration of a bond measures its sensitivity to interest rate changes. Longer-duration bonds are generally more sensitive to interest
            rate movements than shorter-duration bonds.</li>
          <li>Higher-risk bonds, such as those issued by less creditworthy entities, offer higher yields to compensate investors for the additional
            risk. Credit analysis is important in assessing the issuer&apos;s ability to meet interest payments and repay the principal.</li>
          <li>The interest earned on bonds is generally taxable, although certain types of bonds, such as municipal bonds, may offer tax advantages
            depending on the investor&apos;s jurisdiction. Understanding the tax implications of bond investments is important for maximizing after-tax returns.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Brokerage',
    content: (
      <>
        <p className="mt-2">A brokerage is a financial institution or company that facilitates the buying and selling of financial securities,
        such as stocks, bonds, and mutual funds. They act as intermediaries between buyers and sellers, executing trades and
        providing various services, including investment advice, research, and account management.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Brokerages often provide a range of investment services, including research and analysis, investment advice, portfolio management, and
            retirement planning.</li>
          <li>Some brokerages may charge fees or commissions for their services, such as transaction fees, account maintenance fees, or advisory fees.
            It&apos;s important to understand the fee structure and compare costs across different brokerages to ensure they align with their
            investment goals and preferences.</li>
          <li>Brokerages are typically regulated entities, subject to rules and regulations set by financial authorities. This regulatory oversight
            helps protect investors&apos; interests and ensures a certain level of professionalism, security, and transparency in the brokerage industry.</li>
          <li>Many brokerages offer customer support services to assist investors with their inquiries, account management, and technical issues. They
            may also provide educational resources, webinars, and seminars to help investors improve their understanding of investing and make informed decisions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Budget',
    content: (
      <>
        <p className="mt-2">A budget is a financial plan that outlines projected income and expenses over a specific period, typically on a monthly or
        annual basis. It serves as a tool for managing and allocating resources to meet financial goals, track spending, and make informed financial decisions.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Budgeting enables individuals to track their expenses and identify areas of overspending or potential savings. By setting limits or targets for each
            expense category, individuals can exercise control over their spending habits and make adjustments as needed.</li>
          <li>A budget allows individuals to set financial goals, such as saving for retirement, paying off debt, or buying a home. By allocating funds towards these
            goals, budgeting helps prioritize financial objectives and provides a roadmap for achieving them.</li>
          <li>Budgeting emphasizes the importance of saving money regularly. By setting aside a portion of income for savings, individuals can build emergency funds,
            create a cushion for unexpected expenses, and work towards long-term financial security.</li>
          <li>Budgets are not fixed and can be adjusted as circumstances change. Unexpected expenses or changes in income can be accommodated by modifying the budget to
            maintain financial stability and meet evolving needs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Bull Market',
    content: (
      <>
        <p className="mt-2">A bull market refers to a period of rising prices and optimism in the financial markets, typically associated with an upward trend in
        stock prices. It is characterized by widespread buying, investor confidence, and expectations of future growth. Bull markets are often fueled by positive economic
        indicators, favorable market conditions, or significant developments in industries or sectors.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Investors typically experience gains and see the value of their investments increase during a bull market. Stocks and other growth-oriented assets tend to
            perform well during this phase, rewarding investors who have positioned their portfolios accordingly.</li>
          <li>Timing the market and accurately predicting the duration of a bull market can be challenging. While bull markets can last for extended periods, they are not
            indefinite. It is important to exercise caution, avoid excessive speculation, and maintain a long-term perspective rather than succumbing to short-term
            market fluctuations.</li>
          <li> Bull markets can lead to exuberance and a tendency to chase returns. It is crucial to remain disciplined, avoid getting caught up in market hype, and make
            investment decisions based on sound analysis and long-term goals rather than succumbing to emotional reactions.</li>
          <li>Bull markets are part of market cycles, which include periods of growth, stability, decline, and recovery. Eventually, they will transition into more
            challenging market environments, such as bear markets or market corrections.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    name: 'Buy and Hold',
    content: (
      <>
        <p className="mt-2">Buy and hold is an investment strategy where investors buy securities, such as stocks or bonds, and hold them for an extended period without
        frequent buying or selling. The strategy is based on the belief that over the long term, the value of the investments will appreciate, generating positive returns.
        It emphasizes patience, long-term perspective, and minimizing trading activity.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The goal of buying and holding is to benefit from the potential growth and compounding of investments over time, rather than trying to time market fluctuations
            or make quick profits.</li>
          <li>By minimizing trading activity, investors can reduce transaction costs, such as brokerage fees, and potentially mitigate the impact of taxes on capital gains.</li>
          <li>Buy and hold investors want to benefit from the overall upward trajectory of the market over time, even though there may be short-term fluctuations and market
            downturns along the way.</li>
          <li>Investors should be prepared for potential downturns and fluctuations in the value of their investments while maintaining a long-term perspective.</li>
          <li>Although buy and hold investors hold investments for the long term, you should review your portfolio&apos;s performance periodically and make adjustments as needed.
            This can involve rebalancing the portfolio to maintain the desired asset allocation or making changes based on changes in personal circumstances or investment goals.</li>
          <li>Buy and hold investors often focus on fundamental analysis to identify quality investments with strong underlying fundamentals. They look for companies or assets with
            solid financials, competitive advantages, and sustainable growth prospects.</li>
        </ul>
      </>
    ),
  },
]

const definitionsC: Definition[] = [
  {
    id: 1,
    name: 'Capital Gain',
    content: (
      <>
        <p className="mt-2">Capital gain is the increase in a capital asset&apos;s value when it is sold or disposed of for a higher price than its original purchase price. It is the
        profit realized from selling the asset.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>A capital asset can be any property or investment held by an individual or business, such as stocks, bonds, real estate, or valuable personal possessions. It is typically
          held for investment purposes or for personal use and not meant for regular business operations.</li>
          <li>The capital gain is calculated by subtracting the original purchase price or &quot;cost basis&quot; of the asset from the selling price or &quot;proceeds&quot; received from its sale
          (Capital Gain = Selling Price - Purchase Price).</li>
          <li>Capital gains can be categorized as either long-term or short-term, depending on how long you hold the asset for. If the asset is held for more than a certain period, usually
          1+ years, the resulting gain is considered a long-term capital gain. Long-term capital gains often receive preferential tax treatment, with lower tax rates than ordinary income.
          If the asset is held for less than the specified period, typically less than 1 year, the gain is considered a short-term capital gain. Short-term capital gains are generally taxed
          at the individual&apos;s ordinary income tax rates.</li>
          <li>Capital gains are subject to taxation in most jurisdictions. The tax rates and rules regarding capital gains vary depending on the country and the holding period. Governments
          often provide different tax rates for long-term and short-term capital gains to incentivize long-term investments.</li>
          <li>If the selling price of an asset is lower than its original purchase price, it results in a capital loss. Capital losses can be used to offset capital gains, thereby reducing
          the overall tax liability. The net capital gain (capital gains minus capital losses) is the amount subject to taxation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Cash Flow',
    content: (
      <>
        <p className="mt-2">Cash flow is the movement of money into and out of a business or individual&apos;s finances over a specific period. It represents the inflow and outflow of cash,
        capturing the actual cash transactions rather than accounting for accrued revenues or expenses.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Cash flow includes all sources of incoming cash, such as revenue from sales, loans, investments, or any other form of income. It also includes outgoing cash payments, such as
          expenses, operating costs, taxes, loan repayments, and any other cash outflows.</li>
          <li>Operating cash flow refers to the cash generated or consumed by a company&apos;s core business operations. It reflects the cash generated from sales, minus the operating expenses
          required to maintain and run the business.</li>
          <li>Investing cash flow represents the cash used for acquiring or selling long-term assets, such as property, equipment, or investments. It includes cash spent on purchasing assets and
          cash received from the sale of assets.</li>
          <li>Financing cash flow relates to the cash activities associated with raising capital or repaying debts. It includes cash received from issuing stock or borrowing, as well as cash paid
          for dividends, loan repayments, or buying back shares.</li>
          <li>A positive cash flow occurs when the cash inflows exceed the outflows, indicating a surplus of cash. Conversely, a negative cash flow occurs when cash outflows exceed the inflows,
          indicating a deficit or financial strain.</li>
          <li>Cash flow is crucial for individuals and businesses to meet their financial obligations, cover operating expenses, and invest in growth opportunities. It provides a clear picture of
          a company&apos;s ability to generate cash and its overall financial health. Positive cash flow is generally desirable, as it provides financial stability and flexibility.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Certificate of Deposit',
    content: (
      <>
        <p className="mt-2">A certificate of deposit (CD) is a time deposit offered by banks and financial institutions where investors deposit a fixed amount of money for a
        specific term, typically ranging from a few months to several years. CDs generally offer a fixed interest rate and guarantee the return of the principal amount at maturity.
        They are considered low-risk investments suitable for individuals seeking a stable and predictable return.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>CDs are generally considered low-risk investments because they offer principal protection. The bank or financial institution guarantees the return of the initial
            investment amount at maturity, making CDs a more conservative option compared to other investment vehicles such as stocks or crypto.</li>
          <li>Unlike some other investments, CDs have limited liquidity. When you invest in a CD, you agree to keep your money deposited for the specified term. Withdrawing funds
            before the CD reaches maturity can result in penalties or loss of accrued interest. Therefore, CDs are typically suited for individuals who have funds they can afford
            to leave untouched for the duration of the term.</li>
          <li>CDs provide a fixed income stream in the form of regular interest payments. These payments can be received at various intervals, such as monthly, quarterly, or annually,
            depending on the terms of the CD. This can be beneficial for individuals looking for steady income.</li>
          <li>CDs offered by banks are often insured by the Federal Deposit Insurance Corporation (FDIC) in the United States. FDIC insurance provides protection up to certain limits,
            typically $250,000 per depositor, per bank.</li>
          <li>When investing in CDs, consider prevailing interest rates. If interest rates rise after you purchase a CD, you may miss out on higher rates available in the market. On
            the other hand, if rates decline, holding a CD with a fixed interest rate can be advantageous, as you continue to earn the higher rate.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Commodities',
    content: (
      <>
        <p className="mt-2">Commodities are raw materials or primary goods that are interchangeable with other goods of the same type. They include products such as metals (gold,
        silver), energy resources (crude oil, natural gas), agricultural products (wheat, corn), and others. Commodities can be traded on commodity exchanges and are often subject to
        price fluctuations driven by supply and demand dynamics.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Commodities often have a low correlation with traditional asset classes, such as stocks and bonds, which can help reduce overall portfolio risk. Additionally, commodities
            can act as a hedge against inflation, as their prices may rise in response to inflationary pressures.</li>
          <li>Commodity prices are influenced by supply and demand dynamics, which can be affected by factors such as weather conditions, geopolitical events, technological advancements,
            and changes in global economic conditions. Understanding these factors is crucial for analyzing and predicting commodity price movements.</li>
          <li>Price fluctuations can be significant, driven by various factors, including changes in global economic conditions, geopolitical tensions, and shifts in supply and demand dynamics.</li>
          <li>There are several ways to invest in commodities, including direct ownership, futures contracts, exchange-traded funds (ETFs), and commodity-focused mutual funds. Each approach
            has its advantages and considerations, and investors should choose the method that aligns with their investment goals, risk tolerance, and preferred level of involvement.</li>
          <li> Investing in commodities provides exposure to global markets and allows investors to participate in the economic activities of various countries and industries.</li>
          <li>Make sure to understand market fundamentals, including factors that impact supply and demand, production cycles, storage capacity, transportation networks, and regulatory considerations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Compound Interest',
    content: (
      <>
        <p className="mt-2">Compound interest is the interest calculated on the initial principal amount as well as any accumulated interest from previous periods. It allows investments or
        loans to grow at an accelerating rate over time. The key concept of compound interest is that interest is earned not only on the initial amount but also on the interest that has
        already been earned.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Compound interest takes advantage of the time value of money. By allowing interest to compound over longer periods, even small initial investments can grow significantly over time.
            Similarly, compound interest on loans can result in substantial interest payments over extended repayment periods.</li>
          <li>Compound interest plays a vital role in long-term investment strategies, such as retirement planning. The earlier individuals start investing, the longer their investments have to compound,
            potentially resulting in substantial growth over time.</li>
          <li>Failing to make timely payments on debt oligations, such as credit card debt or personal loans, can result in interest charges compounding on the outstanding balance, leading to an
            increase in the overall debt burden.</li>
          <li>While compound interest is generally advantageous for investors, it is essential to consider factors such as the interest rate, compounding frequency, and investment horizon. Higher interest
            rates and more frequent compounding can lead to faster growth but also involve increased risks. Additionally, compounding works against individuals when they have outstanding debts with high
            interest rates, as interest charges can accumulate rapidly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Cost Basis',
    content: (
      <>
        <p className="mt-2"></p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li></li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Credit Score',
    content: (
      <>
        <p className="mt-2">A credit score is a numerical representation of an individual&apos;s creditworthiness, indicating their likelihood of repaying debts and managing credit responsibly. It is calculated
        based on various factors, including payment history, credit utilization, length of credit history, types of credit used, and recent credit inquiries. A higher credit score generally signifies a lower credit
        risk and can result in easier access to credit and better borrowing terms.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Credit scores are determined by considering various factors. Payment history, which reflects the individual&apos;s track record of making on-time payments, is one of the most significant factors. Credit
            utilization, the percentage of available credit being used, is another important factor. Length of credit history, types of credit used (such as credit cards, loans, and mortgages), and recent credit
            inquiries also impact the credit score.</li>
          <li>Credit scores are generated by credit reporting agencies, such as Experian, TransUnion, and Equifax. These agencies collect and analyze credit information from various sources, including lenders and
            creditors, to calculate credit scores. Each agency may use slightly different scoring models, resulting in some variation in credit scores.</li>
          <li>Credit scores typically range from 300 to 850, with higher scores indicating better creditworthiness. While the specific range categories may vary, generally a score above 700 is considered good, while
            a score above 800 is considered excellent. Lower scores may indicate higher credit risk, potentially resulting in difficulties in obtaining credit or higher interest rates.</li>
          <li>Building a positive credit history over time is crucial for maintaining a good credit score. Making payments on time, keeping credit utilization low, and avoiding excessive debt are essential practices
            for establishing and improving creditworthiness.</li>
          <li>Regularly monitoring credit reports and credit scores is essential for understanding one&apos;s creditworthiness and detecting any errors or fraudulent activity. Review credit reports from all three major
            credit reporting agencies annually and take steps to correct any inaccuracies.</li>
        </ul>
      </>
    ),
  },
]

const definitionsD: Definition[] = [
  {
    id: 1,
    name: 'Day Trading',
    content: (
      <>
        <p className="mt-2">Day trading refers to the practice of buying and selling financial instruments, such as stocks, currencies, or derivatives, within the same trading day to capitalize on short-term
        price fluctuations. Day traders aim to make profits by taking advantage of intraday market volatility. It is a high-risk and high-reward trading strategy that requires active monitoring, quick
        decision-making, and in-depth knowledge of market dynamics.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>With daytrading, positions typically get closed out before the market closes, aiming to capitalize on small price movements that occur within a short time frame.</li>
          <li>Day traders engage in frequent buying and selling transactions, often executing multiple trades within a single day. They closely monitor market movements, use technical analysis tools and indicators,
            and make quick decisions based on short-term price patterns.</li>
          <li>Day traders focus on liquid markets and securities that exhibit sufficient price volatility. Volatility creates opportunities for potential profits, while liquidity ensures that trades can be executed
            quickly and at desired prices. Highly liquid assets, such as major stocks or currency pairs, are often preferred by day traders.</li>
          <li>Day trading involves inherent risks due to the short-term nature of trades and potential rapid price movements. Effective risk management is crucial to protect against significant losses. Strategies
            such as setting stop-loss orders, diversifying trades, and using risk-reward ratios help day traders limit losses and preserve capital.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Debt',
    content: (
      <>
        <p className="mt-2">Debt refers to an obligation or a liability that arises when one party borrows money or receives goods or services on credit from another party. It is a form of financial obligation that must
        be repaid over time, typically with interest.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>When an individual, business, or government borrows money, they incur a debt to the lender. The borrowed funds can be used for financing a purchase, funding operations, investing in projects, etc.. The borrower
          is legally obligated to repay the debt according to agreed-upon terms, which usually include repayment schedule, interest rate, and any other applicable fees or conditions.</li>
          <li>Debt can take different forms, including loans, bonds, credit card balances, mortgages, and lines of credit. Each type of debt has its own terms and conditions, such as repayment period, interest rate, and
          collateral requirements.</li>
          <li>While debt can provide a way to finance activities and achieve goals, it also carries financial obligations and risks. Failure to repay debts on time can result in penalties, higher interest costs, damage to
          creditworthiness, and potential legal consequences.</li>
          <li>Debt can be categorized into 2 main types. Consumer debt includes personal loans, credit card debt, student loans, and other forms of borrowing by individuals for personal or household purposes. Sovereign debt
          is incurred by national governments through issuing bonds or obtaining loans to finance government expenditures and projects.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Default',
    content: (
      <>
        <p className="mt-2">A default refers to the failure to fulfill a legal obligation or financial agreement. It occurs when a borrower or debtor fails to make timely payments or meet the terms and conditions outlined in a loan agreement, bond, or other contractual arrangement.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In the context of debt, default typically refers to the failure to make scheduled payments. This can happen when a borrower misses 1+ payments, fails to pay the required amount, or consistently falls behind on their payment obligations. Defaulting on a debt can
          have serious consequences, as it indicates a breach of the agreed-upon terms and may result in penalties, fees, and legal actions by the lender or creditor.</li>
          <li>Defaults can occur in various types of financial agreements, including loans, mortgages, credit cards, bonds, and other forms of debt instruments. The specific terms and conditions, such as grace periods and remedies, are typically outlined in the original agreement.</li>
          <li>The consequences of default can vary depending on the type of debt and the legal jurisdiction. In many cases, creditors have the right to take actions to recover the outstanding debt, such as initiating collection efforts, imposing penalties, reporting the default
          to credit bureaus, and even pursuing legal action, including seeking judgments and enforcing collateral or liens.</li>
          <li>Defaulting on debt can have long-lasting effects on an individual&apos;s credit history and credit score, making it more challenging to secure future loans or credit on favorable terms. It can also harm a borrower&apos;s reputation and trustworthiness in the financial community.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Dividend',
    content: (
      <>
        <p className="mt-2"> Dividends are payments made by corporations to their shareholders to distribute their profits. They are typically paid in cash, but they can also be issued as additional shares of
        stock or other forms of property. Dividends are a way for companies to share their financial success with shareholders and provide investors with a source of passive income.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Dividend payments can provide a steady stream of income, which can be especially beneficial for retirees or individuals seeking passive income.</li>
          <li>Dividends are commonly paid in cash, with shareholders receiving a specific amount of money per share owned. However, companies may also distribute dividends in the form of additional shares of stock,
            known as stock dividends or bonus shares. Other forms of dividends can include property dividends, where shareholders receive assets or goods instead of cash.</li>
          <li>Dividend yield is a financial ratio that measures the annual dividend payments relative to the market price of the stock. It indicates the return on investment generated by the dividend income. Dividend
            yield is calculated by dividing the annual dividend per share by the stock&apos;s current market price.</li>
          <li>Companies determine their dividend policies, which can vary depending on factors such as profitability, cash flow, growth opportunities, and capital needs. Some companies have a consistent history of
            paying dividends, while others may choose to reinvest profits back into the business for expansion or debt reduction.</li>
          <li>Dividend payments follow specific timelines and have associated dates. The declaration date is when the company&apos;s board of directors announces the dividend payment. The ex-dividend date is the date on
            or after which a buyer of the stock will not be entitled to the upcoming dividend if they haven&apos;t purchased the shares yet. The record date is the date on which shareholders must be registered to receive
            the dividend, and the payment date is when the dividend is actually distributed to eligible shareholders.</li>
          <li>Dividends are generally subject to taxation, though at a different rate than ordinary income. The the tax treatment can vary depending on factors such as the jurisdiction, type of dividend, and the
            recipient&apos;s tax status. Consult with tax professionals or refer to tax regulations in your country to understand the specific tax implications of receiving dividends.</li>
        </ul>
      </>
    ),
  },
]

const definitionsE: Definition[] = [
  {
    id: 1,
    name: 'Economy',
    content: (
      <>
        <p className="mb-2">The economy refers to the system of production, distribution, and consumption of goods and services within a region or a country. It encompasses all the activities and interactions related to
        producing, exchanging, and using resources to satisfy human wants and needs.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The economy involves creating goods and services through various economic activities, such as manufacturing, agriculture, construction, and services like healthcare, education, and finance. These activities
          involve using resources such as labor, capital, and natural resources.</li>
          <li>Individuals, businesses, and governments engage in consumption by using goods and services to satisfy their needs and desires. Consumer spending plays a crucial role in driving economic growth and overall economic activity.</li>
          <li>The distribution of goods and services involves the movement of products from producers to consumers. This includes transportation, logistics, marketing, and retail activities that facilitate the exchange of goods and services.</li>
          <li>The economy provides employment opportunities, where individuals work to earn income that enables them to participate in economic activities and consume goods and services. Employment levels and wages are important
          indicators of the overall health and performance of the economy.</li>
          <li>Economies can operate under different economic systems, such as market economies, command economies, mixed economies, or traditional economies. These systems determine the roles of government, private sector,
          and individuals in economic decision-making and resource allocation.</li>
          <li>Various economic indicators, such as gross domestic product (GDP), inflation rates, unemployment rates, and consumer confidence, are used to assess the performance, growth, and stability of the economy. These
          indicators provide insights into the overall health of the economy and help guide economic policies and decision-making.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Emergency Fund',
    content: (
      <>
        <p className="mt-2">An emergency fund is a designated amount of money set aside to cover unexpected expenses or financial emergencies. It acts as a financial safety net, providing individuals or households
        with a reserve to handle unforeseen circumstances without relying on credit cards or incurring debt.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>An emergency fund serves as a backup for situations such as medical emergencies, job loss, home repairs, or major car repairs. Having an emergency fund can help prevent a financial crisis and provide peace
            of mind during challenging times.</li>
          <li>An emergency fund should consist of liquid assets, such as cash or funds in a savings account, that can be accessed quickly and without penalties. It is essential to maintain the fund in a readily available
            and low-risk account to ensure easy access when needed.</li>
          <li>The size of an emergency fund varies depending on individual circumstances, such as income, expenses, and financial responsibilities. Financial experts recommend aiming for 3-6 months&apos; worth
            of living expenses as a target for the emergency fund. However, individuals with more unstable income or specific financial obligations may need a larger fund to provide sufficient coverage.</li>
          <li>Building an emergency fund requires consistent contributions over time. Allocate a portion of your income specifically for the fund and prioritize saving regularly. Even small contributions add up over time
            and contribute to the overall goal of establishing a robust emergency fund.</li>
          <li>Separating your emergency fund in a different account helps maintain the fund&apos;s integrity and ensures it remains dedicated solely to emergencies.</li>
          <li>Regularly review and adjust the fund&apos;s size based on changes in financial circumstances, such as income fluctuations, new financial responsibilities, or changes in living expenses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Equity',
    content: (
      <>
        <p className="mt-2">Equity refers to the ownership interest or claim that individuals or entities have in an asset or business. It represents the residual value of an asset after deducting liabilities.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In finance and investing, equity represents ownership in a company or the value of an individual&apos;s ownership stake in an asset. For example, if you own shares of a publicly traded company, you have equity
          in that company proportional to the number of shares you hold. The value of equity can fluctuate based on the company&apos;s performance, market conditions, and investor sentiment.</li>
          <li>Home equity specifically refers to the value of ownership a homeowner has in their property. It is calculated by subtracting the outstanding mortgage or any other liens on the property from its market value.
          Home equity can increase over time as the property appreciates in value or as the homeowner pays down the mortgage.</li>
          <li>Net equity is the value of an individual&apos;s or company&apos;s assets after deducting liabilities. It provides an indication of the overall financial health or net worth. Net equity is calculated by
          subtracting total liabilities, such as debts and obligations, from total assets.</li>
          <li>Social equity relates to fairness and justice in society. It focuses on equal access to opportunities, resources, and benefits for all individuals, regardless of their background or circumstances.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Exchange-Traded Fund',
    content: (
      <>
        <p className="mt-2">An exchange-traded fund (ETF) is a type of investment fund that trades on stock exchanges, representing a basket of underlying assets such as stocks, bonds, commodities, or other securities.
        ETFs offer investors diversification, flexibility, and the ability to trade them throughout the trading day like individual stocks.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>By investing in a single ETF, investors gain exposure to multiple underlying assets, which can help spread risk and reduce the impact of individual security performance.</li>
          <li>Many ETFs are designed to track specific indexes, such as the S&P 500 or the NASDAQ. These are known as index ETFs and aim to replicate the performance of the underlying index. Other ETFs may follow specific
            investment strategies, such as sector ETFs, bond ETFs, or commodity ETFs.</li>
          <li>ETFs often have lower expense ratios compared to mutual funds, making them an attractive option for cost-conscious investors. The expense ratio represents the annual fees charged by the fund to cover operating
            expenses. Additionally, ETFs generally have lower minimum investment requirements compared to some mutual funds.</li>
          <li>The value of an ETF can fluctuate based on the performance of its underlying assets. Additionally, investors may incur brokerage commissions or fees when buying or selling ETF shares.</li>
        </ul>
      </>
    ),
  },
]

const definitionsF: Definition[] = [
  {
    id: 1,
    name: 'Fiscal Policy',
    content: (
      <>
        <p className="mt-2">Fiscal policy is the government&apos;s use of taxation and spending to influence the overall state of the economy. It involves the decisions policymakers make regarding how much money the government
        should collect in taxes and how it should allocate those funds through government spending.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The government can adjust tax rates, implement new taxes, or modify existing tax laws to generate revenue. Additionally, they allocates funds to various sectors such as infrastructure, healthcare, education, defense,
          and social welfare programs. Government spending can stimulate economic growth by creating jobs, boosting consumption, and supporting specific industries.</li>
          <li>One of the primary objectives is to stabilize the economy. During times of recession or economic downturns, the government may increase its spending and reduce taxes to stimulate aggregate demand and encourage economic
          activity. Conversely, during periods of high inflation or economic overheating, the government may decrease spending and increase taxes to reduce aggregate demand and control inflation.</li>
          <li>Fiscal policy decisions can result in budget deficits or surpluses. A budget deficit occurs when government spending exceeds tax revenue, leading to borrowing and an increase in national debt. On the other hand, a budget
          surplus occurs when tax revenue exceeds government spending, allowing for debt reduction or increased savings.</li>
          <li>Sustainable fiscal policies aim to strike a balance between short-term economic stabilization and long-term fiscal responsibility. Excessive borrowing and persistent budget deficits can lead to an unsustainable debt
          burden and potentially hinder economic growth.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Foreclosure',
    content: (
      <>
        <p className="mt-2">Foreclosure is a legal process where a lender seizes and sells a property to recover the outstanding balance on a mortgage loan when the borrower fails to make the required mortgage payments. It is typically
        initiated by the lender when the borrower is in default, meaning they have missed multiple mortgage payments.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The specific number of missed payments required to initiate foreclosure can vary based on local laws and the terms of the mortgage contract.</li>
          <li>Before initiating foreclosure proceedings, the lender typically sends a formal notice of default to the borrower. This notice informs the borrower about the delinquency, the amount owed, and provides a specific time period
          the borrower has to take corrective action to prevent foreclosure.</li>
          <li>If the borrower fails to resolve the delinquency or reach a foreclosure alternative (such as loan modification or short sale), the lender will file a lawsuit or legal action to obtain a court order to foreclose on the property.</li>
          <li>Once the court grants the foreclosure order, the property is typically sold at a public auction to recover the outstanding loan balance. If the property fails to sell at auction, it becomes bank-owned or real estate owned (REO)
          and may be listed for sale by the lender.</li>
          <li>After the foreclosure sale, the new owner or lender may need to initiate an eviction process to remove any occupants from the property who have not voluntarily vacated.</li>
          <li>Foreclosure has a significant negative impact on the borrower&apos;s credit history and credit score. It can make it challenging to obtain future loans and credit at favorable terms for several years.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Forex',
    content: (
      <>
        <p className="mt-2">Forex, or foreign exchange, refers to the global decentralized market where currencies are bought, sold, and exchanged. It involves the trading of one currency for another with the aim of profiting from fluctuations
            in exchange rates. Forex trading is conducted electronically over-the-counter (OTC) and operates 24 hours a day, 5 days a week.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Forex trading involves trading currency pairs, which are quoted exchange rates representing the value of one currency relative to another. The most commonly traded currency pairs are known as the major pairs, such as EUR/USD (Euro/US Dollar),
            GBP/USD (British Pound/US Dollar), and USD/JPY (US Dollar/Japanese Yen).</li>
          <li>The forex market is known for its high liquidity and volatility. Liquidity refers to the ease of buying and selling currencies without significant price fluctuations, allowing traders to enter and exit positions quickly. Volatility represents
            the frequency and magnitude of price movements, providing opportunities for traders to profit from short-term price fluctuations.</li>
          <li>Forex trading often involves using leverage, which allows traders to control a larger position with less capital. Leverage amplifies both potential profits and losses. Traders are typically required to deposit a margin,
            which is a percentage of the total trade value, to open and maintain positions. It&apos;s important to understand the risks associated with leverage and use it responsibly.</li>
          <li>Forex traders use various analysis techniques to make trading decisions. Technical analysis involves studying historical price data, chart patterns, and indicators to identify trends and patterns that can help predict future price movements.
            Fundamental analysis, on the other hand, focuses on economic factors, such as interest rates, GDP, employment data, and geopolitical events, to evaluate the strength and potential direction of currencies.</li>
          <li>Risk management is crucial in forex trading. Traders employ strategies such as setting stop-loss orders to limit potential losses and take-profit orders to secure profits. Make sure to establish a risk tolerance, use appropriate position sizing,
            and have a well-defined trading plan to manage risk effectively.</li>
          <li>Forex trading is regulated in most countries to ensure fair practices, investor protection, and market integrity. Traders should conduct their activities through regulated brokers and be aware of the rules and regulations governing forex trading
            in their jurisdiction.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Fundamental Analysis',
    content: (
      <>
        <p className="mt-2">Fundamental analysis is a method used to evaluate the intrinsic value of a security or investment based on various factors, including financial statements, economic indicators, industry trends,
        and company management. It involves analyzing qualitative and quantitative data to assess the financial health, competitive position, growth prospects, and overall value of an investment.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Tools like discounted cash flow (DCF) analysis, price-to-earnings (P/E) ratio, price-to-sales (P/S) ratio, price-to-book (P/B) ratio, and other financial ratios can be used to asset whether an
            asset is undervalued, overvalued, or fairly valued.</li>
          <li>Fundamental analysis takes into account macroeconomic factors that can impact an investment. Analysts consider economic indicators, such as GDP growth, inflation rates, interest rates, and employment data, to assess
            the broader economic environment and potential implications for the investment.</li>
          <li>Other factors fundamental analysts look at include the company&apos;s brand reputation, management quality, corporate governance, industry trends, regulatory environment, technological advancements, and geopolitical
            factors. Qualitative analysis provides a broader understanding of the investment&apos;s potential opportunities and risks.</li>
          <li>Fundamental analysis has its limitations, including the reliance on historical data and the potential for subjective interpretations. It does not provide guarantees of future performance, as unforeseen events or
            changes in market conditions can impact investments. Additionally, fundamental analysis alone may not capture short-term market fluctuations or investor sentiment.</li>
        </ul>
      </>
    ),
  },
]

const definitionsG: Definition[] = [
  {
    id: 1,
    name: 'Golden Handcuffs',
    content: (
      <>
        <p className="mt-2">Golden handcuffs are financial incentives or benefits offered to employees to encourage them to remain with a company for an extended period of time. These incentives are typically designed to create a sense of
        loyalty and make it financially difficult for employees to leave the organization.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Golden handcuffs typically used to retain key employees, especially those with valuable skills, expertise, or knowledge. These incentives go beyond regular compensation and benefits and aim to provide additional financial
          motivation for employees.</li>
          <li>The financial incentives offered as part of golden handcuffs often include stock options, restricted stock units (RSUs), performance bonuses, deferred compensation plans, and other long-term incentives. These rewards are typically
          tied to the employee&apos;s tenure or the achievement of specific performance targets.</li>
          <li>Golden handcuffs often involve vesting schedules, which outline the duration an employee must stay with the company before being eligible to receive the full benefits of the incentives. Vesting periods can range from several years
          to a decade or more. If an employee leaves the company before completing the vesting period, they may forfeit a portion or all of the promised incentives.</li>
          <li>While golden handcuffs can be attractive and rewarding, they can also have drawbacks. Employees may feel obligated to stay with a company even if they are unhappy or if better opportunities arise elsewhere. The benefits of golden
          handcuffs may also be tied to the company&apos;s performance, meaning that if the company struggles, the value of the incentives may diminish.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Gold Standard',
    content: (
      <>
        <p className="mt-2">The gold standard is a monetary system where the value of a country&apos;s currency is directly linked to a fixed quantity of gold. Under the gold standard, each unit of currency represents a specific amount of gold, and
        the currency can be freely converted into gold at a fixed exchange rate.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>One of the defining features of the gold standard is convertibility. It means that individuals or central banks can exchange their paper currency for gold at a fixed rate. This convertibility provides confidence and stability to the
          currency, as it is backed by a tangible and valuable asset.</li>
          <li>Since the currency&apos;s value is linked to a fixed amount of gold, the supply of money is inherently limited by the availability of gold reserves. This tends to keep inflation in check and promotes price stability over the long term.</li>
          <li>Under the gold standard, exchange rates between different currencies are fixed. Countries set their currency&apos;s value in terms of gold, and the exchange rates between currencies are determined by their respective gold equivalencies.
          This reduces currency volatility and facilitates international trade and investment.</li>
          <li>The gold standard imposes discipline on monetary authorities. Since the money supply is tied to the availability of gold, governments are limited in their ability to create money at will. This constraint helps prevent excessive money
          printing and the associated risks of inflation and currency devaluation.</li>
          <li>The gold standard has been largely abandoned by countries around the world. The shift away from the gold standard began in the early 20th century, and today, most countries operate on a fiat currency system, where the value of money is not
          directly linked to a physical commodity like gold. Critics argue that the gold standard limits a government&apos;s ability to respond to economic crises and that it can restrict economic growth and flexibility.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Gross Domestic Product',
    content: (
      <>
        <p className="mt-2">Gross Domestic Product (GDP) is a measure that represents the total value of all goods and services produced within a country&apos;s borders
        over a specific period, typically a year. It serves as a key indicator of a country&apos;s economic performance and is used to assess and compare the size and
        growth of economies.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>GDP measures the total economic output of a country. It takes into account the value of goods and services
            produced by various sectors, including agriculture, manufacturing, services, and construction.</li>
          <li>Changes in GDP from one period to another indicate the rate of economic growth or contraction. Positive GDP growth suggests an expanding economy, while
          negative growth indicates a shrinking economy. The growth rate of GDP  is often used to assess the health and trajectory of an economy, as higher growth rates are
          generally associated with increased prosperity.</li>
          <li>While higher GDP per capita suggests the potential for higher levels of consumption and well-being, it does not
            capture the distribution of income or quality of life factors.</li>
          <li>Measuring GDP allows for international benchmarking and analysis of economic trends. However, other factors such as population size, exchange rates,
          and purchasing power parity when making cross-country comparisons should also be considered.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Growth Stock',
    content: (
      <>
        <p className="mt-2">A growth stock refers to a publicly traded company whose earnings and revenues are expected to
        increase at an above-average rate compared to the overall market. Growth stocks typically reinvest their earnings back
        into the company to fuel expansion, rather than distributing dividends to shareholders.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Growth stocks  often operate in sectors or industries experiencing rapid expansion or have disruptive business
            models that drive substantial growth.</li>
          <li>Investors are drawn to growth stocks based on their belief that the company&apos;s earnings and revenues will continue
            to increase at an accelerated pace. The market often assigns higher valuations to growth stocks as a reflection of their
            anticipated future growth potential.</li>
          <li>Growth stocks  typically do not pay dividends or pay minimal dividends, as the focus is on driving long-term growth and
            maximizing shareholder value through capital appreciation.</li>
          <li>Growth stocks can be subject to higher levels of volatility and risk compared to more established, dividend-paying companies.
            Since their valuations are often based on future expectations, any negative news or failure to meet growth expectations can lead
            to significant price fluctuations.</li>
          <li>Successful investments in growth stocks can deliver significant rewards, as the companies continue to expand, increase market
            share, and generate strong returns. Well-chosen growth stocks have the potential to outperform the broader market and provide
            attractive returns for investors.</li>
        </ul>
      </>
    ),
  },
]

const definitionsH: Definition[] = [
  {
    id: 1,
    name: 'Hold',
    content: (
      <>
        <p className="mt-2">&quot;Hold&quot; is a term commonly used in investing to indicate the decision to retain an investment for an extended
        period rather than selling it. It suggests a long-term investment strategy where investors hold onto their positions with the expectation
        of benefiting from potential future gains.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Investors who hold believe in the potential growth and value appreciation of the investment over time, rather than attempting to
            time the market or take advantage of short-term price fluctuations.</li>
          <li>Before deciding to hold an investment, investors typically conduct fundamental analysis to assess the underlying value and growth
            potential of the investment. They consider factors such as financial performance, industry trends, competitive advantages, management
            quality, and overall market conditions. This analysis provides a foundation for the decision to hold the investment.</li>
          <li>The &quot;hold&quot; strategy helps investors avoid making impulsive or emotionally driven investment decisions. By staying committed to their
            investment plan, investors can avoid reacting to short-term market volatility or noise and maintain a more objective and rational approach.</li>
          <li>While the &quot;hold&quot; strategy suggests maintaining investments for the long term, you should periodically review your portfolio and reassess
            your holdings. Market conditions, industry dynamics, and individual company performance can change over time.</li>
          <li>By staying invested over the long term, investors may benefit from compounding returns, reduced trading costs, and potentially lower tax
            liabilities associated with short-term capital gains. </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'HODL',
    content: (
      <>
        <p className="mt-2">&quot;HODL&quot; is a term derived from a misspelling of the word &quot;hold&quot; and is commonly used in the cryptocurrency community. It
        refers to the strategy of holding onto cryptocurrencies for an extended period, regardless of short-term price fluctuations or market volatility.
        HODLing is often associated with a long-term investment approach and a belief in the future growth and adoption of cryptocurrencies.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>HODLers often demonstrate emotional resilience by remaining steadfast in their commitment to holding cryptocurrencies, even during periods of
            market downturns or negative sentiment. They avoid making impulsive decisions based on market noise or fear, recognizing that cryptocurrencies
            can experience significant price fluctuations in the short term.</li>
          <li>HODLers typically have confidence in the underlying technology and potential benefits of cryptocurrencies. They believe in the transformative
            power of blockchain technology, decentralized finance (DeFi), or other use cases that cryptocurrencies offer.</li>
          <li>HODLing can be viewed as a risk management strategy for cryptocurrencies. By holding onto investments for the long term, HODLers aim to
            mitigate the impact of short-term price volatility and potentially benefit from the overall growth and adoption of cryptocurrencies over time.
            However, cryptocurrencies are inherently volatile, and the HODL strategy carries risks.</li>
          <li>While HODLing suggests holding onto cryptocurrencies for the long term, HODLers still actively monitor the market and periodically review their
            holdings. They stay informed about market developments, regulatory changes, and any updates related to their cryptocurrency investments. Periodic
            review allows for adjustments to the portfolio if necessary or taking advantage of emerging opportunities.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Homeowners Association',
    content: (
      <>
        <p className="mt-2">A homeowners association (HOA) is an organization that governs and manages a residential community, such as a condo or a
        planned neighborhood. HOAs are typically established to maintain common areas, enforce community rules and regulations, and collect fees or dues
            from homeowners to fund various services and maintenance activities.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>HOAs establish and enforce rules and regulations to help maintain a certain standard of living and preserve property values. They often have
            a board of directors or elected officials responsible for making decisions and managing the association&apos;s affairs.</li>
          <li>HOAs collect fees or dues from homeowners to fund various expenses. These fees are typically used to cover maintenance and repairs of common
            areas, landscaping, security services, utilities, insurance, and other communal amenities.</li>
          <li>Homeonwers must comply with specific standards set by the HOA, such as architectural guidelines, landscaping restrictions, noise regulations,
            pet policies, and more. Failure to comply with these rules can result in penalties or fines.</li>
          <li>Common amenities an HOA may provide include swimming pools, parks, playgrounds, clubhouses, fitness centers, or services such as garbage
            collection, snow removal, or maintenance of common areas.</li>
          <li> When considering a property within an HOA, review the HOA&apos;s governing documents, including bylaws, covenants, conditions, and
            restrictions (CC&Rs) to understand the HOA&apos;s rules, fees, and responsibilities.</li>
          <li>HOAs can present challenges for homeowners, including potential disagreements with neighbors or the HOA board, restrictions on property use,
            and increases in fees over time. Carefully evaluate the pros and cons of living in an HOA-managed community before purchasing a property.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Hyperinflation',
    content: (
      <>
        <p className="mt-2">Hyperinflation refers to an extremely rapid and uncontrollable increase in the general price level of goods and services in
        an economy. It typically occurs when a country experiences a significant and sustained increase in its money supply, leading to a loss of confidence
        in the currency and a decline in its purchasing power.</p>
        <p className="font-medium mt-4">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>During periods of hyperinflation, the value of money erodes and prices skyrocket. Individuals and businesses struggle to meet basic needs, and
            savings quickly lose value, leading to a decline in the overall standard of living.</li>
          <li>Hyperinflation can create a vicious cycle where the erosion of the currency&apos;s value leads to higher prices, which, in turn, prompts further
            devaluation and even higher prices. This cycle becomes self-reinforcing and difficult to break, exacerbating the economic and social challenges
            within the affected country.</li>
          <li>Hyperinflation can lead to social unrest, political instability, and a breakdown of the social fabric. It erodes confidence in the local currency,
            undermines business investment, and disrupts the functioning of financial markets. Unemployment rises, wages struggle to keep up with soaring prices,
            and poverty levels increase. </li>
          <li>During hyperinflation, people often resort to using stable foreign currencies or alternative means of exchange, such as bartering or using commodities
            as a medium of exchange. This further undermines the value and stability of the local currency, creating challenges for businesses and individuals
            conducting transactions within the country.</li>
          <li>Hyperinflation is often a symptom of deep-rooted economic mismanagement, including excessive money printing, unsustainable fiscal policies, inadequate
            monetary controls, or political instability. Addressing the underlying causes of hyperinflation requires comprehensive economic reforms, including restoring
            fiscal discipline, implementing sound monetary policies, and rebuilding confidence in the currency and the overall economy.</li>
          <li>Hyperinflation can have broader implications beyond the affected country&apos;s borders. It may disrupt international trade, affect neighboring economies, and
            lead to refugee outflows as people seek stability and better economic prospects elsewhere. International financial institutions and neighboring countries may
            need to provide assistance and support to mitigate the impact of hyperinflation.</li>
        </ul>
      </>
    ),
  },
]

const definitionsI: Definition[] = [
  {
    id: 1,
    name: 'Index Fund',
    content: (
      <>
        <p className="mb-2">An index fund is a type of mutual fund that aims to replicate the performance of a specific market index, such as the S&P 500. It does this by holding a diversified portfolio of securities
        that closely matches the composition of the target index. Index funds offer investors broad market exposure, low costs, and a passive investment approach.</p>
        <ul className="list-disc ml-6">
          <li>Index funds are known for their low expense ratios compared to actively managed funds. Since index funds aim to replicate the performance of an index rather than rely on active investment strategies, they typically
          have lower operating expenses, such as management fees and transaction costs. </li>
          <li>While index funds may not outperform the market, they offer the potential for consistent, market-matching returns over the long term. By eliminating the need for active investment decisions, index funds can reduce
          the impact of trying to time the market and handpick individual stocks.</li>
          <li>Index funds do not involve active buying or selling decisions based on market trends or individual security analysis. This passive approach appeals to investors who prefer a long-term, low-maintenance investment
          strategy that aligns with the belief that markets are generally efficient and difficult to consistently outperform.</li>
          <li>When choosing an index fund, investors should consider factors such as the expense ratio, tracking error (the degree to which the fund&apos;s returns deviate from the target index), the fund&apos;s history and
          track record, and the index being tracked. Investors should also assess their investment goals, risk tolerance, and desired market exposure to select the index fund that best aligns with their investment objectives.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Inflation',
    content: (
      <>
        <p className="mb-2">Inflation refers to the sustained increase in the general price level of goods and services in an economy over a period of time. It means that, on average, prices are rising, and the purchasing power of money is decreasing.</p>
        <ul className="list-disc ml-6">
          <li>In most countries, inflation is measured using a consumer price index (CPI), which tracks the prices of a basket of goods and services commonly purchased by households. The CPI serves as an indicator of overall price changes in an economy.</li>
          <li> Inflation can have various causes. One common cause is demand-pull inflation, which occurs when demand for goods and services exceeds supply, leading to price increases. Cost-push inflation occurs when the cost of production, such as wages
          or raw materials, increases, and businesses pass on those costs to consumers.</li>
          <li>Mild inflation can stimulate spending and investment as people anticipate rising prices. However, high or unpredictable inflation can erode savings, reduce purchasing power, and create uncertainty in the economy. It can also distort economic
          decision-making and income distribution.</li>
          <li>Inflation is often measured as an annual percentage increase in the price level. Central banks and governments set inflation targets to maintain price stability and promote economic growth. The ideal inflation rate varies depending on the
          country and economic conditions, but it is typically around 2-3%.</li>
          <li>Central banks use monetary policy tools, such as adjusting interest rates and managing the money supply, to control inflation. By raising interest rates, central banks can reduce borrowing and spending, which helps to slow down inflation. On
          the other hand, lowering interest rates can stimulate economic activity and prevent deflation during periods of low inflation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Initial Public Offering',
    content: (
      <>
        <p className="mb-2">An Initial Public Offering (IPO) is the process where a private company offers its shares to the public for the first time, becoming a publicly traded company. In an IPO, the company
        sells a portion of its ownership to investors in exchange for capital, and the shares are listed on a stock exchange, allowing them to get bought and sold by the public.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>An IPO is the primary method for private companies to transition into public companies. By going public, companies gain access to public capital markets, enabling them to raise funds for various
          purposes, such as expansion, acquisitions, debt repayment, or working capital. It also provides liquidity for existing shareholders who may want to sell their shares.</li>
          <li>Going public involves complying with regulatory requirements and disclosing detailed information about the company&apos;s financials, operations, management, and risks to potential investors. Companies
          typically work with investment banks and legal advisors to navigate the complex process and meet regulatory obligations, such as filing a prospectus with the appropriate securities regulatory authorities.</li>
          <li>During an IPO, shares are offered to institutional investors, retail investors, and sometimes employees or other stakeholders. The allocation process determines how shares are distributed among
          these participants. Institutional investors, such as pension funds or mutual funds, often receive larger allocations due to their investment size and long-term investment objectives.</li>
          <li>The initial trading day once the IPO is completeted is usually accompanied by significant investor interest and can result in price volatility.</li>
          <li> Investor demand for an IPO is influenced by market conditions, the company&apos;s industry, financial performance, growth potential, and the overall economic climate. Market sentiment
          and investor perception of the company&apos;s prospects play a significant role in determining the success of an IPO.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Insider Trading',
    content: (
      <>
        <p className="mb-2">Insider trading refers to the buying or selling of stocks, bonds, or other financial securities based on material, non-public information about the company. It occurs when individuals with privileged access to confidential
        information about a publicly traded company use that information to make trades and gain an unfair advantage in the market.</p>
        <ul className="list-disc ml-6">
          <li>Insider trading involves trading based on information not available to the general public and could significantly impact the value of a company&apos;s securities, including financial results, mergers and acquisitions, regulatory decisions,
          or any other non-public info.</li>
          <li>Insiders typically include company executives, directors, employees, and other individuals who have access to confidential company information. They have a fiduciary duty to act in the company and shareholders&apos; best interests and
          are prohibited from using insider information for personal gain.</li>
          <li>Insider trading is generally illegal in most jurisdictions, as it undermines the integrity of the financial markets and creates an unfair advantage. Laws and regulations aim to prevent insider trading and impose severe penalties, including
          fines, imprisonment, and civil liabilities, on individuals found guilty of engaging in such activities.</li>
          <li>Regulatory bodies, such as the U.S. Securities and Exchange Commission (SEC), actively monitor and investigate insider trading. They enforce regulations requiring insiders to disclose their trades and report any material non-public
          information they possess.</li>
          <li>Not all trades by insiders are illegal. Insiders can engage in legal trading activities if they comply with relevant regulations and disclose their trades appropriately. For example, they may need to file reports with regulatory authorities
          within a given timeframe.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Institutional Investor',
    content: (
      <>
        <p className="mb-2">An institutional investor is an organization or entity that pools together large amounts of money to invest in various financial markets and securities on behalf of its clients or members. These investors are typically professional
        financial institutions, such as pension funds, insurance companies, mutual funds, hedge funds, endowments, and investment banks.</p>
        <ul className="list-disc ml-6">
          <li>Institutional investors manage significant amounts of money, often in the billions of dollars. Their large pool of capital allows them to make substantial investments in various asset classes, including stocks, bonds, real estate, commodities,
          and alternative investments.</li>
          <li>Experienced investment professionals analyze market trends, conduct research, and make investment decisions on behalf of the organization. These professionals use a range of investment strategies and tools to optimize returns and manage risk.</li>
          <li>Due to their large size and significant holdings, institutional investors have the potential to influence financial markets. Their buying or selling activities can impact stock prices, bond yields, and market sentiment. Institutional investors are
          sometimes referred to as &quot;market movers&quot; because their actions can have a notable effect on market dynamics.</li>
          <li>Institutional investors are subject to regulatory oversight to ensure compliance with applicable laws and regulations. Authorities monitor their activities to maintain market integrity, protect investors, and promote fair practices.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Interest',
    content: (
      <>
        <p className="mb-2">Interest is the cost or fee paid for borrowing money or the return earned on an investment. It is essentially the price of using someone else&apos;s funds or the compensation received for lending money to someone else.</p>
        <ul className="list-disc ml-6">
          <li>When you borrow money, interest is the additional amount you must pay back to the lender along with the principal (the original amount borrowed).</li>
          <li>From an investment or lending perspective, interest represents the income or return earned on the money lent to another party. Lenders receive interest as compensation for the use of their funds and as a reward for taking on the risk of lending.</li>
          <li>In many cases, interest can compound over time. Compound interest means that the interest earned or charged is added to the principal, and subsequent interest calculations are based on the updated total. This compounding effect can significantly impact the
          overall amount paid or earned over the life of a loan or investment.</li>
          <li>Interest plays a crucial role in various financial transactions. It enables individuals and businesses to access credit and finance their needs, such as purchasing a home, starting a business, or funding educational expenses. Interest rates can vary depending
          on the type of loan or investment, economic conditions, and other factors.</li>
       </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Interest Rate',
    content: (
      <>
        <p className="mb-2">An interest rate refers to the percentage of the loan amount or investment principal that is charged or earned over a specific period. It represents the cost of borrowing money or the return earned on an investment.</p>
        <ul className="list-disc ml-6">
          <li>When you borrow money, the interest rate is the additional amount you must pay back to the lender in addition to the original loan amount. It is a fee charged for the use of funds. Interest rates can vary based on factors such as the borrower&apos;s creditworthiness,
          the type and term of the loan, prevailing market conditions, and the lender&apos;s policies.</li>
          <li>From an investment perspective, the interest rate represents the return earned on the amount invested. It is the compensation received for lending money or investing in financial products such as bonds, certificates of deposit (CDs), or savings accounts. Higher
          interest rates typically indicate a higher return on investment.</li>
          <li>There are various types of interest rates. A fixed interest rate remains constant throughout the loan or investment term, providing stability in payment or return amounts. On the other hand, a variable interest rate can change over time, usually tied to a benchmark rate
          such as the prime rate or the central bank&apos;s policy rate.</li>
          <li>Interest rates play a crucial role in the economy and are influenced by central banks&apos; monetary policy. Central banks adjust interest rates to manage inflation, stimulate economic growth, control borrowing and spending, and promote price stability. Changes in
          interest rates can impact borrowing costs, consumer spending, business investment, and overall economic activity.</li>
          <li>Lower interest rates can encourage borrowing, stimulate economic activity, and make loans more affordable, while higher interest rates can slow borrowing and control inflation but may increase borrowing costs.</li>
        </ul>
      </>
    ),
  },
]

const definitionsJ: Definition[] = [
  {
    id: 1,
    name: 'Joint Account',
    content: (
      <>
        <p className="mb-2">A joint account is a bank or investment account owned and operated by 2+ individuals. Each account holder has equal rights and access to the funds within the
        account. Joint accounts are commonly used by couples, family members, or business partners to manage shared finances and facilitate convenient access to funds.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>All account holders can make deposits, withdrawals, and transactions. This facilitates joint financial management and simplifies access to funds for shared expenses, such as household bills or business expenses.</li>
          <li>Joint accounts can make it easier to track and manage shared finances, as well as simplify bill payments and other financial transactions. They can also be useful when both account holders need access to funds, such as for emergencies or business operations.</li>
          <li>With a joint account, all account holders share the responsibility and liability associated with the account. This means that each account holder is jointly and severally liable for any debts, overdrafts, or liabilities incurred in connection with the account.</li>
          <li>Joint accounts often include a right of survivorship, which means that if one account holder passes away, the ownership of the account automatically transfers to the surviving account
            holder(s). This feature can simplify estate planning and provide a seamless transfer of assets upon the death of one account holder. However, it&apos;s essential to consult with legal and financial advisors to understand the implications of survivorship rights.</li>
          <li>Open and effective communication is crucial when managing a joint account. All account holders should have a clear understanding of the purpose, rules, and expectations for the account.
            Establishing trust, setting financial goals together, and maintaining open lines of communication can help prevent conflicts down the line.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Joint Credit',
    content: (
      <>
        <p className="mb-2">Joint credit is a financial arrangement where 2+ individuals are jointly responsible for repaying a loan or credit account. When applying for joint credit, both parties share the responsibility for the debt and are equally liable for making payments.
        This arrangement allows individuals to combine their financial resources and creditworthiness to obtain larger loan amounts or better interest rates.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>With joint credit, all parties involved are jointly and severally liable for the debt, meaning each individual is responsible for the full repayment of the debt, regardless of how the debt is divided among the borrowers.</li>
          <li>Joint credit applications typically consider the credit history and income of all applicants. By combining their financial resources and credit profiles, individuals may have a higher chance of qualifying for credit or securing more favorable loan terms.</li>
          <li>Each borrower has equal rights and obligations regarding the credit account, including the ability to make transactions, receive account statements, and make changes to the account.</li>
          <li>Payment history and other activities related to joint credit accounts are reported to the credit bureaus for all borrowers. Any negative actions, such as late payments or defaults, can impact the credit scores of all parties involved.</li>
          <li>Joint credit requires open communication and trust. It&apos;s essential to have clear agreements on payment responsibilities, decision-making, and financial expectations to avoid misunderstandings or conflicts.</li>
          <li>Joint credit agreements are legally binding contracts, and they can have legal implications if one party fails to fulfill their obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Joint Tenancy',
    content: (
      <>
        <p className="mb-2">Joint tenancy is a form of property ownership where 2+ individuals, known as joint tenants, have an equal and undivided interest in the property. It can be a popular form of property ownership among couples, famly members, or business partners as it
        offers benefits like the avoidance of probate, seamless transfer of ownership, and simplified estate planning. In joint tenancy, each tenant holds an equal share of ownership and an equal right to occupy and use the entire property.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>One of joint tenancy&apos;s defining characteristics is the right of survivorship. If one joint tenant dies, their share automatically transfers to the surviving joint tenants, without going through probate or being inherited by their heirs. The property remains with the
          surviving joint tenants until the last surviving tenant, who then becomes the sole owner.</li>
          <li>For joint tenancy to be valid, certain requirements must be met. These include the joint tenants acquiring their interests in the property simultaneously, through the same title document, having an equal interest in the property, and having an equal right to possess and
          use the property.</li>
          <li>Joint tenancy can be severed if one joint tenant decides to sell or transfer their interest to another party. This action converts the ownership from joint tenancy to tenancy in common, where each owner has a distinct and separate share of the property that can be inherited
          or sold independently.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Jumbo Loan',
    content: (
      <>
        <p className="mb-2">A jumbo loan is a type of mortgage loan that exceeds the limits set by government-sponsored enterprises (GSEs) such as Fannie Mae and Freddie Mac. These limits are established to regulate the maximum loan amount that these entities will purchase or guarantee.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In most areas of the U.S., a jumbo loan is generally considered to be any loan amount exceeding the limit for a conforming loan, which is currently $726,200 for a single-family home in all states (except Hawaii and Alaska, and a few federally designated high-cost markets,
            where the limit is $1,089,300), as of 2023.</li>
          <li>Jumbo loans are considered higher risk by lenders and may have higher interest rates because they involve larger loan amounts. Lenders may require stricter qualification criteria, including higher credit scores, lower debt-to-income ratios, and larger down payments compared
          to conforming loans.</li>
          <li>Since jumbo loans exceed the limits set by the GSEs, they are considered non-conforming loans. This means they don&apos;t meet the standard criteria for conforming loans and are not eligible for purchase or guarantee by Fannie Mae or Freddie Mac. As a result, jumbo loans are
          typically held by lenders in their own portfolios or sold to private investors.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Junk Bond',
    content: (
      <>
        <p className="mb-2">Junk bonds, also known as speculative-grade bonds, are fixed-income securities issued by companies with lower credit ratings. These bonds tend to offer higher rates than other bonds
        to compensate investors for taking on more risk.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
        <li>Junk bonds carry more risk compared to investment-grade bonds. The credit rating agencies assess the financial health and creditworthiness of companies that issue bonds, and
          lower ratings indicate a higher likelihood of default. Investors should carefully evaluate the credit rating and creditworthiness of the issuer before investing in junk bonds.</li>
          <li>Investors are compensated for taking on the additional credit risk associated with junk bonds by receiving higher interest payments. The potential for higher returns is one of the primary
            attractions for investors who are willing to accept the greater risk.</li>
          <li>The performance of junk bonds is influenced by market conditions and economic factors. During periods of economic stability and low default rates, junk bonds may perform relatively well and provide
            attractive returns. However, in times of economic downturn or financial stress, the risk of defaults increases, which can lead to a decline in the value of junk bonds.</li>
          <li>Investing in junk bonds requires thorough research and due diligence to assess the risk-rward profile. Understanding the issuer&apos;s ability to meet interest payments and repay the principal is
            crucial to assess the risk-reward profile of the junk bond.</li>
          <li>Junk bonds may have lower liquidity compared to investment-grade bonds. The market can be more volatile, and it may be more challenging to buy or sell these bonds quickly at desired
            prices. Investors should consider their investment horizon and liquidity needs first.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Junk Fees',
    content: (
      <>
        <p className="mb-2">Junk fees, in the context of financial transactions and specifically mortgage lending, refer to additional or excessive fees charged to borrowers beyond the legitimate and necessary costs associated with the loan. These fees are
        often considered unnecessary, inflated, or non-transparent, and they can significantly increase the overall cost of borrowing.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Junk fees can include charges for admin tasks, document preparation, application processing, rate lock extensions, courier services, or excessive underwriting fees. Essentially, they are fees that seem excessive or unrelated to the actual cost of providing the loan.</li>
          <li>Because junk fees are often not clearly disclosed or explained to borrowers during the loan application process, it can be difficult for borrowers to understand the true cost of the loan and compare offers from other lenders.</li>
          <li>Junk fees can significantly increase the closing costs associated with a mortgage loan. They can add hundreds or even thousands of dollars to the total amount the borrower needs to pay at closing.</li>
          <li>To avoid paying excessive fees, borrowers should carefully review the Loan Estimate and Closing Disclosure provided by the lender. These documents outline the estimated costs associated with the loan, including itemized fees. Asking questions and
          seeking clarification from the lender or loan officer can help identify any potential junk fees and negotiate their removal or reduction.</li>
        </ul>
      </>
    ),
  },
]

const definitionsK: Definition[] = [
  {
    id: 1,
    name: 'Key Performance Indicator',
    content: (
      <>
        <p className="mb-2">Key Performance Indicators (KPIs) are quantifiable metrics used to measure the performance and progress of an individual, team, department, or organization towards achieving specific goals or objectives. They provide a way to track performance,
        identify areas for improvement, and make data-driven decisions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>KPIs can be financial, operational, customer-focused, or related to other key aspects of performance, depending on the organization&apos;s goals and priorities.</li>
          <li>Effective KPIs are directly aligned with the goals and objectives of the individual, team, or organization. Well-defined KPIs help establish clarity and focus, ensuring that efforts and resources are directed towards strategic priorities.</li>
          <li>KPIs provide objective data that can drive informed decision making. By regularly monitoring and analyzing KPIs, organizations can identify trends, patterns, and areas requiring attention. KPIs enable management to make data-driven decisions, allocate
          resources effectively, and take corrective actions when performance deviates from desired targets.</li>
          <li>KPIs  should be defined in a way that enables consistent and standardized measurement, often using quantifiable data points. Clear criteria and benchmarks are established to assess whether performance is meeting, exceeding, or falling short of expectations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Keynesian Economics',
    content: (
      <>
        <p className="mb-2">Keynesian economics is an economic theory and policy approach developed by the British economist John Maynard Keynes during the early 1900s. It focuses on the government&apos;s role in stabilizing and managing the economy, particularly during a recession
        or depression.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>According to Keynesian economics, fluctuations in aggregate demand, caused by changes in consumption, investment, government spending, or net exports, can lead to business cycles and economic instability.</li>
          <li>Keynesians advocate for the use of fiscal policy, primarily through government spending and taxation, to manage the economy. During a recession, governments should engage in deficit spending to stimulate demand and promote economic growth. Conversely, during periods
          of inflation, the government should reduce spending and increase taxes to control aggregate demand.</li>
          <li>Keynesians also recognize the role of monetary policy in managing the economy. They believe that central banks should use interest rate adjustments and other monetary tools to influence borrowing costs, investment levels, and overall spending in the economy.</li>
          <li>By stabilizing the economy in the short run, policymakers can create a conducive environment for long-term economic growth and development.</li>
          <li>Keynesian economics had a significant impact on economic policy-making, especially during the Great Depression and post-World War II era. The idea of government intervention to stabilize the economy became widely accepted, leading to the adoption of Keynesian policies
          in many countries.</li>
          <li>However, critics argue that excessive government spending and intervention can lead to inefficiencies, distortions in resource allocation, and long-term fiscal challenges. Additionally, there are debates about the effectiveness of fiscal and monetary policy tools in
          achieving desired economic outcomes.</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    name: 'Kickback',
    content: (
      <>
        <p className="mb-2">A kickback refers to a form of illicit payment or commission given to someone in a position of power or influence, often in exchange for favorable treatment or the awarding of a contract or business opportunity. Kickbacks are generally considered unethical
        and illegal, as they involve bribery and corruption. They can distort fair competition, undermine trust, and have severe legal and reputational consequences.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Kickbacks are often intended to secure unfair advantages, such as obtaining contracts, favorable treatment, or confidential information. They can involve cash, gifts, services, or any form of consideration given to induce favorable actions.</li>
          <li>Kickbacks distort fair competition by giving an unfair advantage to individuals or organizations that engage in corrupt practices. Legitimate competitors who abide by ethical standards and rely on merit-based decision-making may suffer economic losses or miss out on
          opportunities as a result of kickbacks. This can hinder market efficiency, innovation, and overall economic growth.</li>
          <li>Engaging in kickback schemes can have serious legal consequences. Kickbacks violate anti-bribery laws and regulations in many jurisdictions, including the U.S. Foreign Corrupt Practices Act (FCPA) and the UK Bribery Act. Perpetrators may face criminal charges, fines,
          imprisonment, and reputational damage. Organizations can also be held liable for the actions of their employees or agents involved in kickback schemes.</li>
          <li>Organizations and governments have implemented various measures to combat kickbacks and corruption. These include robust internal controls, anti-bribery policies, whistleblower protection, due diligence procedures, and awareness campaigns.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Knowledge Economy',
    content: (
      <>
        <p className="mb-2">The knowledge economy emphasizes producing, distributing, and utilizing knowledge, information, and intellectual assets. In this type of economy, the primary driver of growth and innovation is the creation and application of knowledge, rather than traditional
        factors of production like raw materials or physical labor.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>In the knowledge economy, intangible assets such as intellectual property, patents, trademarks, copyrights, and human capital become increasingly important. These assets generate economic value through their ability to create, share, and apply knowledge.</li>
          <li>Education and continuous learning play a crucial role. A highly skilled and educated workforce is essential for creating, managing, and leveraging knowledge effectively.</li>
          <li>Information and communication technologies (ICT) are instrumental, enabling the efficient transfer of information and knowledge across individuals, organizations, and nations. Technological advancements facilitate innovation, collaboration, and productivity gains.</li>
          <li>The knowledge economy thrives on innovation and research activities. Companies and individuals engage in research and development (R&D) to create new products, services, and processes, driving economic growth and competitiveness.</li>
          <li>Industries such as information technology, telecommunications, software development, research and development, biotechnology, financial services, and creative industries (e.g., media, design, arts) are central to the knowledge economy.</li>
          <li>The knowledge economy is highly globalized and interconnected. Digitalization has facilitated the rapid exchange of knowledge, enabling businesses and individuals to access information, collaborate, and participate in global markets.</li>
        </ul>
      </>
    )
  },
]

const definitionsL: Definition[] = [
  {
    id: 1,
    name: 'Level 2 Data',
    content: (
      <>
        <p className="mb-2">Level 2 data, also known as market depth or order book data, provides detailed information about the current buy and sell orders for a particular security on an exchange. It reveals the quantity and price at different bid and ask levels,
        allowing traders to gauge market liquidity, identify supply and demand dynamics, and make more informed trading decisions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li> Level 2 data is typically provided in real-time, showing the most up-to-date information about the order book. Traders can see the standing buy and sell orders at various price levels and observe how they change over time. Real-time access to this data
          enables traders to react quickly to changing market conditions and adjust their trading strategies accordingly.</li>
          <li>The transparency Level 2 data provides helps traders gauge market sentiment, identify potential support and resistance levels, and assess the likelihood of price movements.</li>
          <li>Level 2 data enables order flow analysis, which involves tracking the incoming orders and their impact on the order book. By monitoring the addition or removal of buy and sell orders, traders can infer the buying or selling pressure in the market.</li>
          <li>Traders who have access to level 2 data can make more informed trade execution decisions. By analyzing the depth of the order book and identifying significant buy or sell imbalances, traders can gauge the potential impact of their orders on the market
          and adjust their trading strategies accordingly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Lien',
    content: (
      <>
        <p className="mb-2">A lien is a legal claim or encumbrance on a property or asset, typically used as collateral for a debt or obligation. It gives the lienholder the right to possess the property or asset if the debt is not repaid or the obligation is not fulfilled
        according to the agreed terms. A lien provides security to the creditor or the party owed the debt, ensuring they have a legal interest in the property or asset until the debt is satisfied.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Liens can be placed on various types of property, including real estate, vehicles, boats, or even personal property like artwork or jewelry. They are often created through a contractual agreement or by operation of law, such as in the case of tax or judgment liens.</li>
          <li>There are different types of liens depending on the nature of the debt or obligation. A mortgage lien is placed on a property to secure a mortgage loan. If the borrower defaults on the loan, the lender can foreclose on the property and sell it to recover the outstanding
          debt. A tax lien is imposed by the government when a taxpayer fails to pay their taxes. The government has the right to seize and sell the property to satisfy the tax debt. A judgment lien is obtained by a creditor after winning a lawsuit. It allows the creditor to claim the
          debtor&apos;s property to satisfy the court-ordered judgment. A mechanic&apos;s lien is filed by contractors, subcontractors, or suppliers for unpaid work or materials provided on a property. It gives them the right to seek payment by forcing the sale of the property.</li>
          <li>Liens can affect the ownership and transferability of a property or asset. They are typically recorded in public records, making them visible to potential buyers or lenders. Clearing a lien usually requires satisfying the underlying debt or fulfilling the obligation,
          after which the lienholder releases their claim on the property.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Limit Order',
    content: (
      <>
        <p className="mb-2">A limit order is a type of order placed by an investor to buy or sell a security at a specific price or better. Unlike a market order that executes immediately at the current market price, a limit order instructs the broker to execute the
        trade at a set price point. Limit orders provide control over the execution price but do not guarantee immediate execution.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>A buy limit order is placed at a price below the current market price, indicating the maximum price the investor is willing to pay. A sell limit order is placed at a price above the current market price, indicating the minimum price the investor is willing
          to accept. Limit orders provide an opportunity to buy at a lower price or sell at a higher price than the current market levels.</li>
          <li>Limit orders are executed only when the specified price or better is reached. If the market price does not reach the specified limit price, the order remains open and unfilled until the price reaches the desired level. The execution of limit orders is
          dependent on market conditions and the availability of counterparty orders at or better than the specified price.</li>
          <li>There is a risk that the order may not be executed if the market does not reach the specified price. Investors may miss out on a trade opportunity if the market price moves away from the limit price and does not return. However, this risk can be managed
          by setting realistic and competitive limit prices based on market conditions and the investor&apos;s desired entry or exit points.</li>
          <li>Limit orders require patience as they may take some time to be executed. Investors must be willing to wait for the market to reach the specified limit price. Timing is crucial when using limit orders, as the market may not always reach the desired price
          or may quickly move away from it. Careful analysis and understanding of market trends and price levels can help determine appropriate limit prices and timing for placing orders.</li>
          <li>By setting a specific limit price, investors can avoid buying or selling a security at a significantly different price than intended. Limit orders can be particularly useful during periods of high market volatility or when trading illiquid securities.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Liquidity',
    content: (
      <>
        <p className="mb-2">Liquidity refers to the ease with which an asset or security can be bought or sold in the market without causing significant price movements. It represents the ability to convert an asset into cash quickly
        and at a fair price. High liquidity is desirable as it allows for efficient trading, while low liquidity can result in challenges when buying or selling assets.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Highly liquid assets have a large number of buyers and sellers, resulting in a robust market with ample trading volume. This facilitates quick execution of transactions without significant price impact or slippage.</li>
          <li>Liquidity is reflected in the bid-ask spread and depth of the market. A narrow bid-ask spread indicates tight liquidity, as there is a small difference between the highest price a buyer is willing to pay (bid) and the lowest
          price a seller is willing to accept (ask). Market depth refers to the volume of buy and sell orders available at various price levels. Deeper market depth suggests higher liquidity, as there is a larger pool of orders to fulfill.</li>
          <li>Liquidity has a direct impact on price stability. In liquid markets, even large buy or sell orders are unlikely to cause significant price movements. On the other hand, in illiquid markets, smaller orders can result in substantial
          price fluctuations due to a limited number of buyers or sellers. High liquidity provides stability and allows market participants to transact at prices that accurately reflect the true value of the asset.</li>
          <li>Liquidity is closely tied to trading volume. Assets with high liquidity generally exhibit significant trading volume, indicating active participation from buyers and sellers. Higher trading volume provides confidence to market
          participants, as it suggests a large pool of potential counterparties to transact with. It also ensures that orders can be executed quickly and at prices close to the prevailing market rates.</li>
          <li>Liquidity influences transaction costs associated with buying or selling assets. In liquid markets, the bid-ask spread tends to be narrower, resulting in lower transaction costs. Market participants can enter and exit positions
          more easily without incurring significant price slippage. Conversely, in illiquid markets, the bid-ask spread is wider, increasing the cost of trading and potentially eroding investment returns.</li>
          <li>Different asset classes and securities have varying levels of liquidity. Highly traded and widely recognized assets, such as major currencies or large-cap stocks, tend to have high liquidity. In contrast, assets like small-cap
          stocks, exotic currencies, or illiquid bonds may have lower liquidity.</li>
          <li>Investors generally prefer liquid assets that can be easily converted into cash without significant price impact. Liquidity allows for flexibility in adjusting portfolio allocations, rebalancing holdings, and taking advantage of
          investment opportunities. Illiquid assets, on the other hand, may limit an investor&apos;s ability to make timely adjustments and may carry higher risk due to the potential challenges in selling the asset when desired.</li>
        </ul>
      </>
    ),
  },
]

const definitionsM: Definition[] = [
  {
    id: 1,
    name: 'Margin',
    content: (
      <>
        <p className="mb-2">Margin, in the context of investing and trading, refers to borrowing funds from a broker to leverage investments and increase potential returns. It allows investors to buy more securities than they could afford
        with their own capital. Margin trading involves using the investor&apos;s own funds as well as borrowed funds, and it carries both the potential for higher profits and increased risks.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Margin trading involves meeting specific margin requirements set by the broker. Investors are typically required to deposit a certain percentage of the total investment value, known as the initial margin. This serves as collateral
          against potential losses. Brokers may also have maintenance margin requirements, which mandate maintaining a minimum account value to continue holding the position. If the account value falls below the maintenance margin, investors
          may be required to deposit additional funds to meet the margin requirements or face a margin call.</li>
          <li>While margin trading offers the potential for higher returns, it also carries increased risks. If investments perform poorly, losses can be magnified due to the leverage involved. If the value of the investment falls below the maintenance margin,
          the broker may issue a margin call, requiring the investor to deposit more funds or close out positions to meet margin requirements. Failure to meet a margin call can lead to the broker liquidating positions to cover losses.</li>
          <li>Borrowed funds in margin trading typically incur interest charges, which can add to the overall cost of trading. Investors need to consider the interest rates charged by their broker and the impact on their trading performance. Margin
          trading also involves transaction costs, such as commissions and fees.</li>
          <li>Margin trading requires opening a margin account with a broker. Not all brokerage accounts automatically have margin capabilities, and investors must meet specific eligibility criteria and sign margin agreements. Brokers assess the
          investor&apos;s financial standing, trading experience, and risk tolerance before granting margin trading privileges.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Market Capitalization',
    content: (
      <>
        <p className="mb-2">Market capitalization, also known as market cap, measures a company&apos;s value in the stock market. It is calculated by multiplying the company&apos;s total outstanding shares by the current market price per share.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Market cap is influenced by various factors such as the company&apos;s financial performance, growth prospects, industry conditions, and investor sentiment.</li>
          <li>Market capitalization is often used to categorize companies into different size segments. The most common classifications are large-cap, mid-cap, and small-cap. While the boundaries can vary, large-cap companies typically have the
            highest market capitalization, mid-cap companies have intermediate market cap, and small-cap companies have the lowest market cap.</li>
          <li>Investors can use market cap to assess a company&apos;s relative size and value compared to its peers. It provides a benchmark for evaluating the performance and growth potential of a company within its industry. Market cap can also be used
            to compare the overall size and performance of stock markets or indexes.</li>
          <li>Different investors may have preferences for certain market cap segments based on their risk appetite, investment objectives, and investment style. Large-cap stocks are often perceived as more stable and less volatile, while small-cap stocks
            are considered to have higher growth potential but with increased risk. Investors should consider their risk tolerance, time horizon, and diversification strategy when selecting investments across different market cap segments.</li>
          <li>Changes in a company&apos;s market capitalization can reflect market dynamics and investor sentiment. A significant increase or decrease in market cap can indicate shifts in investor confidence, changes in company fundamentals, or market-wide
            trends. Market cap can be influenced by various factors such as earnings reports, news events, product launches, regulatory developments, and overall market conditions.</li>
          <li>While market capitalization is widely used, it has certain limitations. It does not provide a comprehensive view of a company&apos;s financial health or intrinsic value. Market cap is based on the current market price, which can be subject to short-term fluctuations
          and may not always reflect the true underlying value of the company. Other fundamental analysis metrics, such as earnings, revenue, and cash flow, should be considered alongside market capitalization to gain a more comprehensive understanding of a company&apos;s investment potential.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Market Order',
    content: (
      <>
        <p className="mb-2">A market order is an instruction given by an investor to buy or sell a security at the current market price. When a market order is placed, the order is executed as quickly as possible at the prevailing market price, ensuring
        a prompt execution but without guaranteeing a specific price.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Market orders are typically used when speed of execution is more important than the exact price at which the trade is executed.</li>
          <li>Because market orders do not specify a specific price at which the trade should be executed, they are subject to price slippage, which means the executed price may differ slightly from the expected or displayed price at the time the order was
          placed. Market conditions and liquidity can impact the extent of price slippage.</li>
          <li>Market orders are particularly susceptible to price volatility, especially in fast-moving or illiquid markets. The execution price can deviate significantly from the last traded price or the displayed price at the time of order placement,
          particularly during periods of high market activity or low liquidity.</li>
          <li>Unlike limit orders, market orders do not provide control over the execution price. Investors are price-takers. This lack of price control can be a disadvantage when trading in volatile markets or during price gaps, as the executed price may
          deviate significantly from the expected price.</li>
          <li>Market orders are typically given priority over other types of orders, such as limit orders, in terms of execution. This is because market orders are considered &quot;at market&qout; and require immediate execution based on the best available prices.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Mortgage',
    content: (
      <>
        <p className="mb-2">A mortgage is a type of loan specifically designed for purchasing or refinancing real estate. It is typically used by individuals or households to finance the purchase of a home, where the property itself serves as collateral for the loan.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Mortgages provide individuals with a way to finance their home purchase. Rather than paying the full purchase price upfront, borrowers can secure a mortgage from a lender, which covers a significant portion of the property&apos;s cost. The borrower then repays
          the loan over time, typically in monthly installments, including both principal (the amount borrowed) and interest (the cost of borrowing).</li>
          <li>Using the purchased property as collateral allows lenders to mitigate their risk if the borrower fails to repay the loan as agreed. In the event of default, the lender may initiate foreclosure proceedings to recover the outstanding debt.</li>
          <li>Mortgages come with specific terms and conditions, including the loan duration (such as 15 or 30 years), interest rate type (fixed or adjustable), and repayment structure. The interest rate determines the cost of borrowing, and borrowers may have the option to
          choose between fixed rates, which remain constant throughout the loan term, or adjustable rates, which can change periodically based on market conditions.</li>
          <li>When obtaining a mortgage, borrowers are typically required to make a down payment, which is an upfront payment made towards the purchase price of the property. The down payment amount is usually a percentage of the total purchase price and can vary depending
          on factors such as loan type, lender requirements, and borrower qualifications. A higher down payment can result in a lower loan amount and potentially more favorable loan terms.</li>
          <li>Depending on the terms of the mortgage, borrowers may have the option to make additional payments or pay off the loan early without incurring prepayment penalties. Additionally, borrowers may choose to refinance their mortgage at a later stage to take advantage
          of lower interest rates, change the loan term, or access equity in the property. Refinancing involves obtaining a new loan to replace the existing mortgage.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Mutual Fund',
    content: (
      <>
        <p className="mb-2">A mutual fund is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of securities, such as stocks, bonds, or other assets. Managed by professional fund managers, mutual funds
        offer individuals an opportunity to access a diversified investment portfolio with relatively small investment amounts.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>By pooling funds from multiple investors, mutual funds can invest in a broad range of assets, reducing the risk associated with investing in individual securities. Professional fund managers handle the day-to-day management of the fund, making
          investment decisions based on their expertise and the fund&apos;s investment objectives.</li>
          <li>Mutual funds can be categorized based on various factors, including asset class (e.g., equity funds, bond funds, money market funds), investment style (e.g., growth funds, value funds), and geographic focus (e.g., international funds, regional
          funds). Each mutual fund has its own investment objective, such as capital appreciation, income generation, or a combination of both, allowing investors to select funds that align with their investment objectives.</li>
          <li>Mutual funds charge management and admin fees. These fees, typically referred to as expense ratios, cover various costs, including the fund manager&apos;s compensation, administrative expenses, and marketing fees. Carefully review the expense
          ratio when considering a mutual fund, as high fees can eat into investment returns over time.</li>
          <li>Compared to other investment vehicles, like real estate or bonds, mutual funds are a relatively liquid invesetment option. Investors can enter or exit a mutual fund position without the constraints associated with trading individual securities.</li>
          <li> Mutual funds are subject to regulatory oversight and must adhere to specific rules and regulations designed to protect investors. They are required to disclose important information to investors, such as the fund&apos;s investment strategy,
          risks, performance history, and fees. Investors can access this information in the fund&apos;s prospectus and other periodic reports.</li>
          <li>While mutual funds offer diversification and professional management, they are still subject to investment risks. The performance of a mutual fund can be influenced by various factors, including market conditions, economic factors, and the
          fund manager&apos;s investment decisions.</li>
          <li>Mutual funds typically have minimum investment requirements, which vary among funds. Some funds may have low minimums, making them accessible to a wide range of investors, while others may have higher minimums that cater to institutional or
          high-net-worth individuals.</li>
        </ul>
      </>
    ),
  },
]

const definitionsN: Definition[] = [
  {
    id: 1,
    name: 'NASDAQ',
    content: (
      <>
        <p className="mb-2">NASDAQ, which stands for the National Association of Securities Dealers Automated Quotations, is a global electronic marketplace for buying and selling securities, primarily stocks. It is one of the largest stock exchanges
        in the world, known for its focus on technology and growth-oriented companies.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>NASDAQ has a reputation for being a technology-driven stock exchange. It is home to many high-profile technology giants, including Apple, Microsoft, Amazon, and Google.</li>
          <li>NASDAQ is a fully electronic exchange, meaning that trading is conducted electronically without the need for physical trading floors. Orders are matched through a computerized system, enabling fast and efficient trade executions. This
          electronic trading environment allows for increased transparency, speed, and accessibility.</li>
          <li>Companies must meet certain requirements to be listed on NASDAQ, including financial standards, corporate governance criteria, and trading volume thresholds. NASDAQ has different tiers of listing, including the NASDAQ Global Select Market,
          NASDAQ Global Market, and NASDAQ Capital Market, each with specific listing requirements. Meeting these requirements helps ensure a certain level of credibility and quality among the companies listed on the exchange.</li>
          <li>While NASDAQ is often associated with tech, it also includes companies from various sectors, such as healthcare, finance, consumer goods, and more.</li>
          <li>NASDAQ has a global presence and attracts investors and companies from around the world. It offers trading opportunities for international stocks through American Depositary Receipts (ADRs) and provides a platform for global companies seeking
          access to the U.S. capital markets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Net Worth',
    content: (
      <>
        <p className="mb-2">Net worth refers to the measure of an individual&apos;s or entity&apos;s financial value by calculating the difference between their assets and liabilities. It is a comprehensive assessment of one&apos;s financial position
        and serves as an indicator of wealth or financial health.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Assets include cash, investments, real estate, vehicles, personal belongings, and other valuable possessions. Liabilities, on the other hand, include debts, loans, mortgages, and other financial obligations. The difference between total
          assets and total liabilities represents the net worth.</li>
          <li>Net worth reflects the accumulated value of assets and helps assess financial progress over time. A positive net worth indicates that assets exceed liabilities, implying financial stability and a certain level of wealth. Conversely, a
          negative net worth indicates that liabilities exceed assets, signifying financial obligations and potential financial challenges.</li>
          <li>By regularly monitoring your net worth, you can track your progress toward financial goals, such as building wealth, reducing debt, or saving for retirement. It provides a baseline for evaluating the effectiveness of financial decisions
          and can guide strategies for wealth accumulation and debt management.</li>
          <li>Factors such as career progression, business ventures, investment returns, and changes in property values can contribute to increasing net worth. Conversely, factors like job loss, excessive spending, poor investment choices, or economic
          downturns can negatively impact net worth.</li>
          <li>Net worth is used by lenders, financial institutions, and investors to assess creditworthiness, evaluate financial stability, and make investment decisions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'New York Stock Exchange',
    content: (
      <>
        <p className="mb-2">The New York Stock Exchange (NYSE) is one of the world&apos;s largest and most well-known stock exchanges. It is located on Wall Street in New York City and has a long history dating back to its establishment in 1792. The NYSE provides
        a platform for buying and selling stocks, bonds, exchange-traded funds (ETFs), and other financial instruments.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The NYSE facilitates the trading of publicly traded companies&apos; stocks listed on the exchange. It serves as a marketplace where buyers and sellers can come together to execute trades. The NYSE operates as an auction market, where trading is
          conducted in a centralized physical location known as the trading floor.</li>
          <li>The NYSE plays a vital role in the global financial system and serves as a barometer for the stock market&apos;s overall health. It is known for its iconic opening and closing bell ceremonies, which mark the beginning and end of each trading day.</li>
          <li>Companies must meet specific listing requirements to have their stocks listed and traded on the exchange. These requirements include criteria related to a company&apos;s market capitalization, share price, financial performance, and corporate
          governance standards. Companies listed on the NYSE often benefit from increased visibility, liquidity, and credibility in the financial markets.</li>
          <li>In recent years, the NYSE has embraced technological advancements and introduced electronic trading platforms alongside its traditional floor trading. This has allowed for greater efficiency, speed, and accessibility in the trading process.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Non-Accredited Investor',
    content: (
      <>
        <p className="mb-2">A non-accredited investor refers to an individual or entity that does not meet the criteria set by regulatory bodies, such as the Securities and Exchange Commission (SEC), to participate in certain investment opportunities
        that are limited to accredited investors.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Non-accredited investors are subject to certain investment limitations imposed by regulatory bodies. These limitations are intended to protect individuals with limited financial means from potentially high-risk or complex investments. They
          may be restricted from participating in certain investment opportunities, such as private equity offerings, hedge funds, venture capital funds, and certain crowdfunding campaigns.</li>
          <li>The distinction between accredited and non-accredited investors is primarily driven by regulatory efforts to protect investors. The limitations placed on non-accredited investors aim to ensure that they are not exposed to high-risk or complex investment
          products without the necessary financial means or knowledge to make informed investment decisions. Regulatory bodies, such as the SEC, have established rules and regulations to promote investor protection and maintain fair and transparent markets.</li>
          <li>Non-accredited investors can still achieve diversification and build a well-rounded investment portfolio by focusing on more widely available investment options, such as stocks, bonds, exchange-traded funds (ETFs), etc.</li>
          <li>For non-accredited investors, it is important to prioritize financial education and engage in comprehensive financial planning. By acquiring knowledge about investing, risk management, and personal finance, non-accredited investors can make
          informed decisions, set achievable financial goals, and develop investment strategies aligned with their financial circumstances.</li>
        </ul>
      </>
    ),
  },
]

const definitionsO: Definition[] = [
  {
    id: 1,
    name: 'Option',
    content: (
      <>
        <p className="mb-2">An option is a financial derivative contract that gives the holder the right, but not the obligation, to buy (call option) or sell (put option) an underlying asset at a predetermined price (strike price) within a specific period of time (expiration date).</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Options provide investors with flexibility and leverage in their investment strategies. By purchasing or selling options, investors can gain exposure to the price movements of the underlying asset without actually owning it. Options allow
            for potential profit from both upward (call options) and downward (put options) price movements, and the leverage inherent in options contracts can amplify returns, but it also increases the potential risk.</li>
          <li>Buyers of options have the right, but not the obligation, to exercise the option contract. They can choose whether to exercise the option and buy or sell the underlying asset at the strike price before the expiration date. Sellers of options,
            on the other hand, have the obligation to fulfill the terms of the contract if the buyer decides to exercise the option.</li>
          <li>Investors can use options to protect their existing positions from adverse price movements by buying put options as a form of insurance. Options can also be used for speculative purposes, where investors aim to profit from anticipated price movements.</li>
          <li>The price of an option is influenced by several factors, including the price of the underlying asset, the strike price, the time remaining until expiration, market volatility, and interest rates. These factors collectively affect the intrinsic
            value and time value of the option.</li>
          <li>Common options strategies include buying or selling options outright (long or short positions), covered call writing, protective puts, straddles, strangles, and spreads. Each strategy has its own risk and reward profile and is suited for
            different market conditions and investor objectives.</li>
          <li>Options have a limited lifespan and expire on a specific date. Once an option expires, it becomes worthless, and the investor loses the premium paid. It is important to carefully manage option positions and consider the time remaining until
            expiration to avoid losses from time decay.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Overbought',
    content: (
      <>
        <p className="mb-2">When a financial asset is deemed overbought, it means that its price has risen too quickly and too high, potentially signaling a possible reversal or correction in the near future.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Overbought conditions occur when the price of a financial asset has experienced a significant and rapid increase over a relatively short period. This upward momentum can be driven by factors such as strong investor demand, positive market sentiment,
          or positive news surrounding the asset.</li>
          <li>Traders and analysts often use technical indicators, such as the Relative Strength Index (RSI), to identify overbought conditions. The RSI measures the magnitude of recent price gains compared to losses and generates a value between 0 and 100. A reading
          above a certain threshold (e.g., 70) is considered overbought and suggests that the asset&apos;s price may be due for a pullback or correction.</li>
          <li>An overbought condition suggests that the buying pressure on the asset has pushed its price to potentially unsustainable levels. It may indicate that the asset is overvalued or that market participants have become overly optimistic. Traders and investors
          often interpret an overbought condition as a signal to be cautious and consider the possibility of a price reversal or a period of consolidation.</li>
          <li>Identifying overbought conditions can be used as one factor in market timing and risk management strategies. It can help traders and investors make informed decisions about when to enter or exit positions, take profits, or implement hedging strategies.
          However, overbought conditions alone do not guarantee a price reversal.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Oversold',
    content: (
      <>
        <p className="mb-2">When a financial asset is considered oversold, it means that its price has experienced a significant and rapid decline, potentially indicating a buying opportunity or a potential price rebound.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The downward momentum can be driven by factors such as negative market sentiment, selling pressure, or negative news surrounding the asset.</li>
          <li>An oversold condition suggests that the selling pressure on the asset has pushed its price to potentially unsustainable levels on the downside. It may indicate that the asset is undervalued or that market participants have become overly pessimistic.</li>
          <li>Identifying oversold conditions can be used as one factor in market timing and risk management strategies. It can help traders and investors make informed decisions about when to enter or add to positions, take advantage of potentially undervalued
            assets, or implement risk mitigation strategies. However, oversold conditions alone do not guarantee a price rebound, and other fundamental or technical factors should also be considered in conjunction with the oversold signal.</li>
          <li>While oversold conditions often suggest a potential price rebound, it is also possible for an asset to remain oversold or continue its downward trend. In such cases, the asset may experience a period of consolidation or further decline before any meaningful rebound occurs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Overvalued',
    content: (
      <>
        <p className="mb-2">When a financial asset is considered overvalued, it means that its current price is perceived to be higher than its intrinsic or fundamental value, suggesting that it may be due for a price correction or a period of underperformance.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Oversold conditions can occur when investor enthusiasm, market sentiment, or speculative activity drive prices higher, potentially disconnecting them from the asset&apos;s intrinsic value.</li>
          <li>Evaluating the intrinsic value of an asset through fundamental analysis, which includes factors such as earnings, cash flows, growth prospects, and industry trends, can help determine whether it is overvalued. Comparing the asset&apos;s current price to its
            fair value estimation can provide insights into its potential overvaluation.</li>
          <li>An overvalued condition suggests that the asset&apos;s price may not be sustainable in the long term and could be prone to a price correction. This correction can occur through a gradual decline in price, a sudden market sell-off, or a shift in market sentiment
            that leads to a reevaluation of the asset&apos;s value. Traders and investors often view overvalued conditions as a signal to exercise caution and consider potential downside risks.</li>
          <li>Recognizing overvalued conditions is essential for risk management and prudent investing. Investors may consider strategies such as profit-taking, reducing exposure to overvalued assets, or implementing hedging strategies to protect against potential price declines.
            Maintaining a disciplined approach to valuation and avoiding the temptation to chase overvalued assets can help manage risk and avoid potential losses.</li>
          <li>While overvalued conditions suggest caution, they can also present opportunities for investors.</li>
        </ul>
      </>
    ),
  },
]

const definitionsP: Definition[] = [
  {
    id: 1,
    name: 'Passive Income',
    content: (
      <>
        <p className="mb-2">Passive income refers to earnings that are generated with minimal effort or active involvement. It is income earned from investments, business ventures, or assets that generate ongoing cash flow without requiring constant or direct participation.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Passive income allows individuals to earn money without being actively involved in day-to-day operations or trading their time for money. Instead, it involves setting up systems, investments, or businesses that generate income with little ongoing effort.</li>
          <li>Passive income can be generated from various sources, such as rental properties, dividend-paying stocks, interest from savings accounts or bonds, royalties from intellectual property, affiliate marketing, online businesses, or investments in real estate crowdfunding
            or peer-to-peer lending platforms.</li>
          <li>While passive income may require less ongoing effort, it often requires significant upfront effort, time, or investment to establish the income-generating asset or system. For example, purchasing rental properties requires upfront capital and property management
            setup, while creating and marketing an online course involves creating content and building an audience.</li>
          <li>Passive income sources often have the potential for scalability, meaning the income can grow as the investment or business expands. For instance, rental property owners can acquire additional properties to increase rental income, and online businesses can reach
            a larger audience to generate more sales or ad revenue.</li>
          <li>Building multiple streams of passive income can provide individuals with financial independence, allowing them to have more control over their time and lifestyle choices. Passive income can provide a cushion during financial emergencies, supplement active income,
            or even replace the need for a traditional 9-to-5 job.</li>
          <li>Generating passive income is not entirely risk-free. Investments can fluctuate in value, business ventures may face challenges, and economic factors can impact the profitability of income-generating assets. Carefully evaluate the risks, conduct
            thorough research, and seek professional advice when venturing into passive income opportunities.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Personal Loan',
    content: (
      <>
        <p className="mb-2">A personal loan is a type of loan that individuals can obtain from banks, credit unions, or online lenders to meet their personal financial needs. It is typically an unsecured loan, meaning it does not require collateral, and the borrower
        receives a lump sum of money that is repaid over a fixed period with interest.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Personal loans can be used for various purposes, such as consolidating high-interest debt, financing home improvements, funding education expenses, covering medical bills, or taking a vacation.</li>
          <li>Personal loans often come with fixed interest rates, meaning the interest rate remains the same throughout the loan term. This provides predictability and allows borrowers to budget and plan their repayments. Loan terms typically range from one to five years,
            but can vary depending on the lender and the borrower&apos;s creditworthiness.</li>
          <li>Lenders assess a borrower&apos;s creditworthiness to determine their eligibility for a personal loan. This evaluation includes factors such as credit score, income, employment history, debt-to-income ratio, and overall financial stability. Borrowers with a higher
            credit score and a strong financial profile are more likely to qualify for favorable loan terms, including lower interest rates.</li>
          <li>Personal loans are repaid through regular monthly installments over the loan term. Each installment consists of both principal and interest portions. Borrowers must make timely payments to avoid late fees, penalties, and potential negative impacts on their
            credit score. Automatic payments or setting up reminders can help borrowers stay on track with their repayments.</li>
          <li>Some personal loans may come with origination fees, application fees, or prepayment penalties. Carefully review the terms and conditions of the loan agreement and understand all associated costs before accepting the loan.</li>
          <li>Borrowers&apos; repayment behavior on personal loans can significantly impact their credit history and credit score. Making timely payments can help build a positive credit history, while late or missed payments can have adverse effects. Responsible management
            of personal loans can improve creditworthiness and open doors to better loan options and interest rates in the future.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Personal Property',
    content: (
      <>
        <p className="mb-2">Personal property refers to movable assets that individuals own, excluding real estate or land. It includes tangible items such as vehicles, furniture, electronics, jewelry, collectibles, and other possessions that are not permanently affixed to a property.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Personal property is owned and possessed by individuals or entities, providing them with the right to use, transfer, or dispose of the assets as they see fit. Ownership of personal property is typically established through purchase, inheritance, gifting, or other legal means.</li>
          <li>Personal property is subject to risks such as theft, damage, or loss. It is important to take measures to protect personal property, such as implementing security systems, storing valuable items in secure locations, and obtaining appropriate insurance coverage. Homeowners or renters
            insurance policies often provide coverage for personal property, but additional coverage may be necessary for high-value items.</li>
          <li>Determining the value of personal property can be important for insurance purposes, estate planning, selling assets, or dividing assets during a divorce. Professional appraisers or experts can assess the value of unique or high-value items, while market research, online resources,
            and valuation guides can provide estimates for more common items.</li>
          <li>Managing personal property involves organizing, maintaining, and decluttering possessions to ensure they are properly utilized and do not become burdensome. Regular evaluation and assessment of personal property can help individuals identify items they no longer need or use, leading
            to more efficient use of space and potential opportunities to sell, donate, or dispose of unnecessary items.</li>
          <li>Personal property ownership is subject to local laws and regulations. Some assets may require registration, licensing, or compliance with specific regulations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Property Tax',
    content: (
      <>
        <p className="mb-2">Property tax is imposed by local governments, usch as municipalities or counties, on the value of real estate or immovable property owned by individuals or entities. It is typically based on the property&apos; assessed value and is used to fund local services and public infrastructure.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Property tax is levied on real estate properties, including residential homes, commercial buildings, vacant land, and sometimes certain types of personal property, such as boats or aircraft.</li>
          <li>Local tax authorities determine a property&apos;s value through a property assessment process, which may include physical inspections, market analysis, and other factors. The assessed value can be different from the property&apos; market value or sale price.</li>
          <li>Property tax revenue is an important source of funding for local governments. It supports various public services and infrastructure, including schools, police and fire departments, road maintenance, parks, and other community resources. The tax rate is set by local authorities and
            can vary depending on the jurisdiction and property type.</li>
          <li>Property tax is calculated by multiplying the assessed value of the property by the local tax rate. The tax amount is typically payable annually, although payment schedules and methods may vary by jurisdiction. Property owners receive tax bills or assessments detailing the amount
            owed and due dates for payment.</li>
          <li>Some jurisdictions offer exemptions or deductions that can reduce property tax liability. Common examples include exemptions for primary residences, senior citizens, veterans, or properties used for certain purposes such as agriculture or conservation.</li>
          <li>Property tax amounts can change over time due to reassessments, changes in tax rates, or improvements made to the property. Property owners have the right to appeal their assessments if they believe they are incorrect or unfair. This process typically involves providing evidence to
            support a different valuation or challenging the assessment methodology.</li>
          <li>Property tax is an ongoing expense for property owners and should be factored into budgeting and financial planning. Understanding the property tax obligations associated with owning real estate can help individuals plan for the cost and ensure they are prepared to meet their tax obligations.</li>
        </ul>
      </>
    ),
  },
]

const definitionsQ: Definition[] = [
  {
    id: 1,
    name: 'Quality of Life',
    content: (
      <>
        <p className="mb-2">Quality of life refers to the overall well-being and satisfaction experienced by individuals or communities in various aspects of their lives. It encompasses a wide range of factors that contribute to a person&apos;s happiness, health, social connections, personal fulfillment,
        and enjoyment of life.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Quality of life goes beyond financial wealth and includes physical health, mental and emotional well-being, social relationships, personal fulfillment, access to basic needs and services, safety and security, work-life balance, environmental factors, and cultural and recreational opportunities.</li>
          <li>Quality of life is subjective and varies from person to person. It is influenced by individual values, beliefs, priorities, and life circumstances. What may enhance one person&apos;s quality of life may not have the same impact on someone else.</li>
          <li>Numerous factors can influence an individual&apos;s quality of life. These include physical and mental health status, socioeconomic conditions, educational opportunities, employment and income levels, access to healthcare and social services, housing quality, community safety, environmental quality, social
            support networks, leisure and recreational activities, and overall life satisfaction.</li>
          <li>Assessing and improving quality of life requires a combination of objective and subjective measures. Objective measures include factors that can be quantified and measured, such as income levels, health indicators, crime rates, or educational attainment. Subjective measures involve self-assessment and
            perceptions of one&apos;s own well-being and satisfaction.</li>
          <li>Understanding the factors that contribute to a high quality of life can guide decision-making and resource allocation to enhance the well-being of individuals and communities. This can involve initiatives related to healthcare, education, infrastructure development, social programs, environmental
            sustainability, and community engagement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Quantitative Easing',
    content: (
      <>
        <p className="mb-2">Quantitative easing (QE) is a monetary policy tool central banks use to stimulate the economy and increase the money supply. It involves the central bank buying government bonds or other financial assets from commercial banks and injecting money into the financial system.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Quantitative easing is typically used during times of economic downturn or when traditional interest rate policies are deemed insufficient. It aims to increase the money supply, lower borrowing costs, and stimulate lending and economic activity.</li>
          <li>The primary objective of quantitative easing is to increase the money supply in the economy. By injecting money into the financial system, central banks aim to provide liquidity, lower interest rates, promote borrowing and investment, and stimulate economic growth.</li>
          <li>Quantitative easing is intended to put downward pressure on interest rates, making borrowing cheaper for businesses and individuals. This is expected to stimulate borrowing for investment, home purchases, and consumption, which can potentially boost economic activity.</li>
          <li>Proponents of quantitative easing argue that it can support economic recovery, increase inflation, and reduce the risk of deflation. However, critics express concerns about potential inflationary pressures, the distortion of asset prices, and the creation of financial imbalances or bubbles.</li>
          <li>Quantitative easing can influence financial markets by increasing the demand for government bonds and other assets. This can result in higher bond prices, lower yields, and increased liquidity in the markets. It can also lead to asset price inflation and encourage investors to seek higher returns
            by investing in riskier assets.</li>
          <li>Eventually, central banks may decide to unwind or taper their quantitative easing programs as economic conditions improve. This process involves gradually reducing asset purchases and potentially selling assets back into the market. The unwinding of quantitative easing can impact interest rates,
            asset prices, and market stability.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Quarter',
    content: (
      <>
        <p className="mb-2">A fiscal quarter, also known as a financial quarter or simply a quarter, refers to a specific 3-month period on a company&apos;s financial calendar. It is commonly used to organize and report financial information, track performance, and make financial decisions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Each fiscal quarter represents 1/4th of a company&apos;s financial year and is typically designated by a sequential number, such as Q1 (1st quarter), Q2 (2nd quarter), Q3 (3rd quarter), and Q4 (4th quarter). A company&apos;s fiscal year may or may not align with the calendar year.</li>
          <li>During each fiscal quarter, companies prepare and release financial statements and reports to provide stakeholders, investors, and analysts with insights into their financial performance. These reports include information such as revenue, expenses, profits, cash flows,
          and other relevant financial data.</li>
          <li>Fiscal quarters serve as a way to break down a company&apos;s financial activities into manageable periods, allowing for easier tracking, analysis, and comparison of financial performance over time. They also help in strategic planning, budgeting, and evaluating progress
          towards financial goals.</li>
          <li>In addition to financial reporting, fiscal quarters may impact various aspects of a company&apos;s operations, including dividend payments, investor expectations, stock market performance, compliance with regulatory requirements, and long-term planning.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Quote',
    content: (
      <>
        <p className="mb-2">In the context of trading and investing, a quote refers to the current price at which a financial instrument, such as a stock, bond, commodity, or currency pair, is being bought or sold in the market. It provides information about the current market value
        of the asset and is typically displayed as a bid and ask price.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The bid price represents the highest price buyers are willing to pay for the asset, while the ask price represents the lowest price at which sellers are willing to sell the asset. The difference between the bid and ask price is known as the spread and reflects the
          transaction costs associated with trading the asset.</li>
          <li>Quotes are constantly updated in real-time as market conditions change and trading activity takes place. They are widely available through financial platforms, brokerage accounts, and financial news sources, though they may vary due to factors like market liquidity, order
          size, and trading venues. Traders and investors rely on quotes to make informed decisions regarding buying or selling assets.</li>
          <li>Quotes also provide additional information, such as trading volume, the previous closing price, the day&apos;s range, and other relevant data. This information helps traders assess market trends, volatility, liquidity, and potential trading opportunities.</li>
        </ul>
      </>
    ),
  },
]

const definitionsR: Definition[] = [
  {
    id: 1,
    name: 'Rate of Return',
    content: (
      <>
        <p className="mb-2">Rate of return refers to the gain or loss on an investment relative to the amount invested, expressed as a percentage. It measures an investment&apos;s profitability or performance over a specific period of time.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The rate of return provides a standardized measure to compare the performance of different investments or assess the effectiveness of an investment strategy.</li>
          <li>Rate of return is calculated by dividing the gain or loss on an investment by the initial investment amount, and then expressing it as a percentage. The time frame over which the rate of return is measured can vary, such as daily, monthly, annual, or cumulative over a
          specific period. Consider the time frame when interpreting the rate of return, as shorter time frames may exhibit higher volatility and may not necessarily reflect long-term performance.</li>
          <li>Rate of return can be presented as a total return or an annualized return. Total return represents the overall gain or loss on the investment over a specific period, while annualized return calculates the average annual rate of return based on the investment&apos;s
          performance. Annualized return provides a standardized measure that allows for comparison with other investments or benchmarks.</li>
          <li>Factors that can influence the rate of return include capital appreciation, dividends, interest payments, or realized gains or losses from buying or selling investments.</li>
          <li>Investments with higher returns generally involve higher levels of risk. Consider risk factors, such as market fluctuations, economic conditions, and investment-specific risks, when assessing the rate of return.</li>
          <li>Rate of return can be calculated based on historical data or projected based on assumptions and forecasts. Historical returns provide insights into past performance, while projected returns involve some level of uncertainty and are based on assumptions about future
          market conditions and investment performance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Raw Materials',
    content: (
      <>
        <p className="mb-2">Raw materials refer to basic, unprocessed substances or resources used in the production of goods or services. They are the fundamental building blocks of various industries and play a crucial role in economic activities.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Raw materials can include natural resources like minerals, metals, agricultural products, energy sources, chemicals, and other basic materials. These raw materials are transformed into intermediate or finished goods through manufacturing or processing.</li>
          <li>Many raw materials are considered commodities, traded on global commodity markets. Raw material prices are influenced by supply and demand dynamics, global economic conditions, geopolitical factors, weather patterns, and other market forces.</li>
          <li>Raw materials are critical for various industries, including construction, manufacturing, energy, agriculture, and transportation. The availability, quality, and price of raw materials can have a significant impact on the cost structure, profitability, and
          competitiveness of businesses within these sectors. Raw material availability can also influence economic growth, trade balances, and regional development.</li>
          <li>Raw materials are part of complex global supply chains. Businesses involved in sourcing and utilizing raw materials must effectively manage their supply chains to ensure a reliable and cost-effective flow of materials. This includes sourcing raw materials
          from diverse suppliers, considering quality control measures, managing inventory levels, and navigating logistical challenges.</li>
          <li>The prices of raw material can exhibit significant volatilityty due to factors like production levels, inventory levels, currency exchange rates, and trade policies. Companies often employ risk management strategies, such as hedging or long-term supply
          contracts, to mitigate price risks. These strategies aim to stabilize costs and protect against sudden price fluctuations.</li>
          <li>Raw materials are often traded globally, and their availability can be influenced by geopolitical factors, trade policies, and international agreements. Changes in tariffs, trade restrictions, sanctions, or political tensions can impact the supply and pricing
          of raw materials, affecting industries and economies worldwide.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Real Estate Investment Trust',
    content: (
      <>
        <p className="mb-2">A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-generating real estate properties. REITs provide individuals with the opportunity to invest in real estate without directly owning and managing properties.
        They typically focus on specific sectors such as residential, commercial, retail, or industrial real estate.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>REITs are structured as corporations or trusts that own and operate income-producing real estate assets. To qualify as a REIT, the company must distribute a significant portion of its taxable income to shareholders as dividends, which allows it to enjoy certain
          tax benefits. Shareholders are then responsible for paying taxes on the dividends received.</li>
          <li>By pooling funds from multiple investors, REITs can acquire and manage a variety of properties across different locations and sectors. This allows individual investors to access real estate investments that may be otherwise challenging or costly to own directly.</li>
          <li>One of the primary attractions of REITs is their potential to generate regular income for investors. REITs collect rental income from their properties and distribute a significant portion of it as dividends to shareholders. These dividends can provide a steady
          stream of cash flow, making REITs an attractive option for income-focused investors, such as retirees or those seeking passive income.</li>
          <li>Unlike direct real estate ownership, investing in REITs offers liquidity and tradability. REIT shares are listed and traded on stock exchanges, providing investors with the ability to buy or sell their shares at market prices. This allows investors to easily
          enter or exit their positions and access their investment capital when needed.</li>
          <li>REITs are managed by experienced professionals who handle property acquisition, leasing, management, and other operational aspects. Investors benefit from the expertise of these professionals without the need for direct involvement in property management.</li>
          <li>REITs are subject to various risks, including property market fluctuations, interest rate changes, tenant vacancies, and regulatory factors.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Recession',
    content: (
      <>
        <p className="mb-2">A recession is a significant decline in economic activity that lasts for an extended period, typically marked by a contraction in gross domestic product (GDP), increased unemployment rates, reduced consumer spending, and a general slowdown in business activity.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>During a recession, companies may experience declining profits, face liquidity issues, and make budget cuts, including layoffs and reduced investment. It can be a difficult environment for entrepreneurs, investors, and businesses to navigate, as market conditions become more uncertain.</li>
          <li>Governments and central banks often respond to recessions through monetary and fiscal policy measures. Central banks may lower interest rates, implement quantitative easing (QE) programs, or provide liquidity support to banks to stimulate lending and economic activity.
          Governments can also adopt fiscal stimulus measures, such as tax cuts, infrastructure spending, or unemployment benefits, to boost consumer spending and support businesses.</li>
          <li>Recessions can trigger increased market volatility and uncertainty. Stock markets may experience significant declines, and investor sentiment may turn cautious. It is common to see increased selling pressure, reduced investment activity, and a flight to more conservative
          investment options during a recession.</li>
          <li>The duration and severity of a recession can vary, and the recovery period can also differ. Some recessions are relatively short-lived, while others can result in longer-lasting economic impacts. Economic recovery typically involves a gradual return to growth, stabilization
          of employment, and improved consumer and business confidence. Government policies and economic factors play a crucial role in determining the pace and strength of the recovery.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Refinance',
    content: (
      <>
        <p className="mb-2">Refinancing refers to the process of replacing an existing loan with a new loan, typically with better terms or conditions. It is commonly done for mortgages, but it can also apply to other types of loans, such as auto loans or student loans.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>One of the primary reasons people refinance is to secure a lower interest rate on their loan. By obtaining a new loan with a lower interest rate, borrowers can potentially reduce their monthly payments and save money over the loan&apos;s lifetime. Lower interest rates can also
            result in paying less interest overall, which can be especially beneficial for long-term loans like mortgages.</li>
          <li>Refinancing offers the opportunity to modify loan terms to better suit the borrower&apos;s financial situation and goals. This can involve extending or shortening the loan term, switching between fixed and adjustable interest rates, or changing other loan features. For
            example, a borrower may choose to refinance from an adjustable-rate mortgage to a fixed-rate mortgage to have more stability in their monthly payments.</li>
          <li>Refinancing can provide an avenue for homeowners to tap into their home equity by refinancing their mortgage and taking out additional cash. This is known as a cash-out refinance and can be used for various purposes, such as home improvements, debt consolidation, or investment opportunities.</li>
          <li>Just like obtaining an initial loan, refinancing typically involves closing costs, which can include application fees, appraisal fees, title search fees, and other expenses. Evaluate these costs against the potential savings or benefits gained from refinancing
            to ensure it makes financial sense.</li>
          <li>Lenders evaluate the borrower&apos;s creditworthiness when considering a refinance application. This includes reviewing credit scores, income stability, debt-to-income ratio, and other financial factors. A strong credit profile can help secure better refinancing terms, including
            lower interest rates.</li>
          <li>The decision to refinance should also take into account the prevailing interest rate environment and market conditions. Monitoring interest rate trends and consulting with financial professionals can help borrowers determine if it&apos;s an opportune time to refinance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Rent Control',
    content: (
      <>
        <p className="mb-2">Rent control refers to government regulations that limit the amount landlords can charge for rental properties. These regulations are typically implemented to protect tenants from excessive rent increases and to ensure affordable housing options are available in certain areas.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>By setting limits on rent increases, these policies seek to protect tenants from substantial and sudden spikes in rental costs, particularly in high-demand areas where housing affordability is a concern. Rent control can help tenants maintain housing stability and prevent displacement due to rising rents.</li>
          <li>Rent control policies vary by jurisdiction, and the specific regulations can differ significantly. Some policies limit the amount landlords can increase rent annually, while others may set specific formulas or criteria for determining permissible rent increases. Rent control
          may also include restrictions on evictions and provide additional tenant rights and protections.</li>
          <li>Rent control policies can have unintended consequences on housing supply and quality. By limiting the rental income landlords can receive, it may reduce the incentive for property owners to maintain or invest in their rental units. In some cases, rent control can discourage new housing
          development or lead to a decline in the overall rental housing stock.</li>
          <li>Rent control policies are often limited to specific geographic areas and may only apply to certain types of rental units or buildings. Additionally, some rent control policies may have expiration dates or sunset provisions, meaning they may be in effect for a limited period and subject to review or renewal.</li>
          <li>Critics argue that rent control can create market distortions, reduce housing availability, and lead to unintended consequences such as reduced investment in rental properties.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Retail Investor',
    content: (
      <>
        <p className="mb-2">A retail investor refers to an individual or small-scale investor who buys and sells securities, such as stocks, bonds, or mutual funds, for their personal investment portfolio. Retail investors typically invest their own money rather than managing investments on
        behalf of others, as institutional investors do.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Retail investors make investment decisions based on their personal financial goals, risk tolerance, and available resources. They typically invest their own funds, whether it be through a brokerage account, retirement account, or other investment vehicles.</li>
          <li>Retail investors may have limited financial resources and investment expertise compared to institutional investors or professional money managers. They often rely on publicly available information, research reports, financial news, and investment advice from brokers, financial
          advisors, or online platforms to make informed investment decisions.</li>
          <li>Many retail investors aim to build long-term wealth through investing. They often adopt a buy-and-hold strategy, investing in assets they believe will appreciate in value over time. Retail investors may focus on asset appreciation, dividend income, or a combination of both to
          achieve their financial objectives.</li>
          <li>Retail investors are protected by regulatory frameworks aimed at ensuring fair and transparent financial markets. Securities regulators enforce rules and regulations to safeguard retail investors from fraudulent activities, misleading information, market manipulation, and other
          unethical practices.</li>
        </ul>
      </>
    ),
  },
]

const definitionsS: Definition[] = [
  {
    id: 1,
    name: 'Scalper',
    content: (
      <>
        <p className="mb-2">A scalper refers to an individual or entity that engages in short-term trading strategies to profit from small price fluctuations in financial markets. Scalpers aim to make quick trades, often taking advantage of high-frequency trading technology and leveraging
        high trading volumes.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Scalpers often enter and exit positions within minutes or even seconds. Scalping strategies rely on capturing small price differentials, often referred to as &quot;ticks&quot; or &quot;pips,&quot; and frequently executing trades to accumulate profits over time.</li>
          <li>Scalpers may use automated trading systems, algorithms, or computerized trading strategies to capitalize on fleeting market opportunities. Scalpers closely monitor market data, order flow, and technical indicators to make rapid trading decisions.</li>
          <li>Scalping strategies typically involve a high volume of trades throughout a trading session. Scalpers may execute numerous trades in a single day, aiming to capitalize on small price movements multiplied by the large trading volume. The high turnover of trades requires careful
          attention to transaction costs, such as commissions and fees, as they can significantly impact overall profitability.</li>
          <li>Scalpers must closely monitor market conditions, price movements, and trading indicators. Their trading decisions are often driven by technical analysis and short-term market patterns rather than long-term fundamental analysis. Scalpers need to maintain focus, discipline, and
          adaptability to swiftly respond to changing market dynamics.</li>
          <li> Scalping involves inherent risks, including market volatility, rapid price fluctuations, and execution risks. The fast-paced nature of scalping can amplify potential losses if trades move against the scalper&apos;s position. Effective risk management, including setting stop-loss
          orders and managing position sizes, is crucial for scalpers to control potential losses and protect capital.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Share',
    content: (
      <>
        <p className="mb-2">A share refers to a unit of ownership in a company, typically represented by a certificate or digital record. When individuals or entities purchase shares of a company, they become shareholders and hold a proportionate ownership stake in the company.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Shares of stock represent ownership in a company, entitling shareholders to certain rights and privileges. Shareholders have the right to participate in corporate decision-making, such as voting on important matters, electing the board of directors, and approving significant
          corporate actions. The number of shares held by a shareholder determines their voting power and influence within the company.</li>
          <li>Shareholders may receive dividends, which are a portion of the company&apos;s profits distributed to shareholders. Dividends are typically paid on a per-share basis, and the amount depends on the company&apos;s financial performance and dividend policy. Additionally,
          shareholders can benefit from capital appreciation if the value of their shares increases over time. Share prices fluctuate based on market conditions, company performance, and investor sentiment.</li>
          <li> Share prices are influenced by various factors, such as economic conditions, industry trends, company-specific news, and market sentiment.</li>
          <li>Shares are typically bought and sold on stock exchanges, such as the New York Stock Exchange (NYSE) or NASDAQ. Stock exchanges provide a platform for investors to trade shares, facilitating liquidity and price discovery. Investors can place buy or sell orders through brokerage
          accounts to participate in the buying and selling of shares.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Short',
    content: (
      <>
        <p className="mb-2">Shorting, or short selling, refers to a trading strategy where an investor borrows shares of a security from a broker and sells them on the market, aiming to buy them back at a lower price in the future. By shorting a stock, traders can profit from a decline in its price.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>To execute a short sale, investors need to borrow shares of a stock from a broker. They then sell the borrowed shares on the market, creating a short position. The borrowed shares are later repurchased and returned to the broker, closing out the short position. Short sellers
          pay interest or fees for borrowing the shares, which can impact their overall profitability.</li>
          <li>Short selling involves substantial risks. Unlike buying shares with a limited downside, short selling has unlimited potential losses. If the stock price increases after a short sale, the short seller may need to buy back the shares at a higher price, resulting in a loss.
          Short sellers need to manage risk through strategies such as setting stop-loss orders or having a well-defined exit plan.</li>
          <li>Short selling can be used to hedge existing long positions or to speculate on price declines in specific stocks or sectors.</li>
          <li>Short selling often involves margin trading, where traders borrow funds from a broker to execute the trade. Margin requirements and regulations vary by jurisdiction and may impose restrictions on short selling.</li>
          <li> In highly liquid markets with sufficient stock lending infrastructure, it is typically easier to find and borrow shares for short selling. However, in less liquid markets or with stocks that have limited lending availability, finding shares to short may be more challenging.</li>
          <li>Short selling can contribute to market dynamics, particularly during short squeezes. A short squeeze occurs when a heavily shorted stock experiences a rapid price increase, forcing short sellers to cover their positions by buying back shares. This surge in buying activity can
          further drive up the stock price, creating a feedback loop that amplifies the price increase.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Sinking Fund',
    content: (
      <>
        <p className="mb-2">Sinking funds are similar to emergency funds in that they are both meant to act as financial safety nets and keep you on track to reach your financial goals. But, sinking funds are a more tactical way to save money.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>With sinking funds, you will regularly set aside a little bit of money in one or multiple categories to get used later down the line. This fund is separate from your emergency fund or savings account and should be used for specific goals.</li>
          <li>Common types of sinking fund categories are planned expenses (such as a new car) or annual expenses (such as school tuition). Even if you do not have an exact number in mind, it&apos;s still worth setting up a sinking fund for big expenses. How many sinking funds you decide
          to set up is up to you.</li>
          <li>Examples of sinking funds include expected medical bills, home repairs or remodels, car repairs, insurance premiums, long-term debt, vacations, wedding expenses, pet expenses, and more.</li>
          <li>You can build a sinking fund in 4 easy steps. First, decide what you are saving for. Then decide where to hold your sinking fund, ideally in a separate account thank your checking account or emergency fund. Figure out how much to allocate to the sinking fund and finally,
          incorporate it into your budget.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'SPAC',
    content: (
      <>
        <p className="mb-2">A Special Acquisition Company (SPAC) is a publicly traded company formed with the purpose of raising capital through an initial public offering (IPO) to acquire or merge with an existing operating company. SPACs have a specific timeframe within which they must
        identify and complete a merger or acquisition transaction, often within two years. They provide an alternative route for companies to go public and allow investors to participate in early-stage investments.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The primary purpose of a SPAC is to identify and merge with an existing operating company or acquire a controlling stake in it. Once a suitable target is identified, the SPAC undergoes a shareholder vote to approve the proposed transaction. The acquisition target becomes a
          publicly traded company through the merger with the SPAC, allowing it to access the capital markets without going through the traditional IPO process.</li>
          <li>SPACs typically have a limited timeframe to identify and complete an acquisition transaction. If the SPAC fails to complete an acquisition within the specified timeframe, the trust account is typically liquidated, and the funds are returned to the investors. They are subject
          to regulatory requirements and oversight to ensure transparency and investor protection.</li>
          <li>SPACs provide an investment opportunity for investors to participate in early-stage investments and potential mergers or acquisitions. Investors can purchase shares of the SPAC during the IPO phase and potentially benefit from the subsequent merger or acquisition with an
          operating company. However, note that the success of a SPAC investment depends on the quality of the acquisition target and the ability of the SPAC&apos;s management team to execute a successful transaction.</li>
          <li>Investing in SPACs carries certain risks and uncertainties. If the SPAC fails to identify a target or complete a transaction within the specified timeframe, investors may risk losing a portion or all of their invested capital. Additionally, the performance of the merged or
          acquired company post-transaction is a crucial factor in the success of a SPAC investment.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Stock',
    content: (
      <>
        <p className="mb-2">Stocks represent ownership in a company. When an investor purchases shares of stocks, they become partial owners of the company and have the potential to profit from the company&apos;s growth and success. Stocks are traded on stock exchanges, and their prices
        fluctuate based on market supply and demand.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Stocks represent ownership in a company, giving investors certain rights and privileges. These rights may include voting on important company decisions, receiving dividends, and participating in the company&apos;s growth and profitability.</li>
          <li>As the company grows and becomes more profitable, the value of its stock may increase. Investors can sell their shares at a higher price than their initial purchase price, earning a profit. However, note that stock prices are subject to market fluctuations and can also decline,
          resulting in potential losses.</li>
          <li>Some companies distribute a portion of their profits to shareholders in the form of dividends. Dividends provide a regular income stream for investors and can be an attractive feature for income-oriented investors. Not all companies pay dividends, and the amount of dividends
          can vary based on the company&apos;s profitability and dividend policy.</li>
          <li>Stocks are generally considered liquid investments as they can be bought and sold on stock exchanges. This liquidity allows investors to easily convert their investments into cash if needed. The marketability of stocks depends on factors such as the company&apos;s size,
          reputation, and trading volume.</li>
          <li>Successful stock investing requires thorough research and analysis. Investors need to assess the company&apos;s financial health, industry trends, competitive positioning, and management team. Fundamental analysis, which involves evaluating a company&apos;s financial statements
          and business fundamentals, is commonly used to assess the value and potential of a stock. Technical analysis, on the other hand, focuses on analyzing stock price patterns and market trends.</li>
          <li>Stock prices can be volatile in response to market conditions, economic factors, and company-specific news. Short-term fluctuations in stock prices are common and can be influenced by factors beyond an investor&apos;s control. Taking a long-term perspective when investing in
          stocks can help smooth out short-term market volatility and capture the potential growth and compounding benefits over time.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Swing Trade',
    content: (
      <>
        <p className="mb-2">Swing trading is a short-to-medium-term trading strategy that aims to capture price movements or &quot;swings&quot; within a broader trend. Swing traders typically hold positions for a few days to several weeks, taking advantage of short-term price fluctuations.
        The strategy involves identifying potential entry and exit points based on technical analysis, market patterns, and momentum indicators.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Traders analyze price charts, patterns, trendlines, support and resistance levels, and various technical indicators to make informed trading decisions. Popular technical indicators used in swing trading include moving averages, oscillators, and trend-following indicators.</li>
          <li>Swing traders aim to identify and capitalize on short-term price swings within a broader trend. They may enter positions when they anticipate a reversal or continuation of the current trend. By trading within the trend, swing traders aim to increase the probability of success
          and maximize potential profits.</li>
          <li>Like any trading strategy, swing trading involves risk management. Traders set stop-loss orders to limit potential losses and protect their capital. These orders automatically trigger a sell order if the price reaches a predetermined level, helping to control downside risk.</li>
          <li>Swing traders actively monitor their positions, watching for price movements and potential exit signals. They may adjust their stop-loss orders and take-profit targets based on evolving market conditions. Successful swing traders often have a disciplined approach to trade
          execution and use appropriate risk-reward ratios to assess potential trades.</li>
          <li>Swing trading tends to work well in volatile markets with clear trends. Volatility provides opportunities for price swings, while trending markets offer a more predictable environment for swing trading strategies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    name: 'S&P500',
    content: (
      <>
        <p className="mb-2">The S&P 500 is a widely followed stock market index that measures the performance of 500 large-cap U.S. companies. It is a market-capitalization-weighted index, meaning that the companies with higher market values have a greater impact on the index&apos;s
        performance. The S&P 500 is often used as a benchmark for the overall performance of the U.S. stock market.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The S&P 500 is a market-capitalization-weighted index, which means that the companies with larger market values have a greater influence on the index&apos;s movements. This weighting scheme reflects the relative importance of these companies in the overall U.S. stock market.
          As such, the performance of larger companies can have a significant impact on the index.</li>
          <li>The S&P 500 includes companies from various sectors such as technology, healthcare, financials, consumer goods, and more. This sector diversification helps to spread risk and provides exposure to different areas of the economy. Changes in the performance of specific sectors
          can influence the overall performance of the S&P 500.</li>
          <li>The S&P 500 allows investors to track the performance of their investments against the broader market. It provides a basis for comparing the returns of individual stocks, funds, or portfolios to the overall market performance. Investors often use the S&P 500 as a benchmark
          to assess the success of their investment strategies.</li>
          <li> Investors can gain exposure to the S&P 500 through index funds or ETFs that track the index&apos;s performance. These investment vehicles allow individuals to invest in a diversified portfolio of stocks that mirror the composition of the S&P 500.</li>
        </ul>
      </>
    ),
  },
]

const definitionsT: Definition[] = [
  {
    id: 1,
    name: 'Target-Date Fund',
    content: (
      <>
        <p className="mb-2">A target date fund, also known as a lifecycle fund or retirement date fund, is an investment fund that automatically adjusts its asset allocation over time based on a target retirement date. The fund starts with a more aggressive allocation of stocks and gradually
        shifts towards a more conservative allocation as the target date approaches.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Target date funds are specifically designed to help investors save and grow their retirement savings. The fund&apos;s asset allocation is based on the target retirement date, which is typically indicated in the fund&apos;s name (e.g., Target Date 2050 Fund). As the target date
          approaches, the fund gradually reduces exposure to riskier assets, such as stocks, and increases allocation to more conservative assets like bonds and cash. This aims to provide a more stable and predictable source of income during retirement.</li>
          <li>One of the main features of target date funds is their automatic adjustment of asset allocation over time. The fund manager determines the appropriate asset allocation mix based on the target retirement date and adjusts it periodically. This relieves investors from the burden
          of manually rebalancing their portfolios as they approach retirement, making target date funds a convenient and hands-off investment option.</li>
          <li> Target date funds typically hold a diversified mix of assets, including stocks, bonds, and cash equivalents. The initial allocation of the fund is generally more aggressive, with a higher proportion allocated to stocks for potential long-term growth. As the target date
          approaches, the fund gradually reduces exposure to stocks and increases allocation to more conservative assets to preserve capital and reduce volatility.</li>
          <li>Like any investment fund, target date funds have associated fees and expenses that investors should consider. These may include management fees, administrative costs, and underlying fund expenses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Technical Analysis',
    content: (
      <>
        <p className="mb-2">Technical analysis is a method used to evaluate investments by analyzing statistical trends and patterns in price and volume data. It focuses on studying historical market data, such as charts and indicators, to make predictions about future price movements.
        Technical analysts believe that past price behavior can provide insights into future price movements and use various tools and techniques to identify potential buying or selling opportunities.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Technical analysis assumes that market prices reflect the collective psychology and behavior of market participants. It believes that historical price patterns and trends repeat themselves due to recurring human emotions, such as fear and greed. Technical analysts study
          investor sentiment and market psychology to gauge the supply and demand dynamics and identify potential turning points in the market.</li>
          <li>Technical analysts employ various indicators and oscillators to generate trading signals and confirm their analysis. These tools include moving averages, Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD), and many others. These indicators help
          identify overbought and oversold conditions, trend strength, momentum, and potential trend reversals.</li>
          <li>Support and resistance levels are key concepts in technical analysis. Support levels are price levels at which an asset tends to find buying interest and prevent further price declines. Resistance levels, on the other hand, are price levels at which an asset tends to
          encounter selling pressure and prevent further price increases. Technical analysts identify these levels based on historical price data and consider them as potential areas for buying or selling opportunities.</li>
          <li>Different technical analysts may analyze the same chart and come up with different conclusions. Technical analysis cannot predict future events or external factors that may impact market prices, such as economic data, geopolitical events, or company news. It should be
          used in conjunction with other forms of analysis and risk management techniques.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Too Big to Fail',
    content: (
      <>
        <p className="mb-2">&quot;Too big to fail&quot; refers to the concept that certain large financial institutions are considered so vital to the economy that their failure would have severe and widespread consequences. These institutions are often seen as having implicit
        government support or guarantees due to their systemic importance.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Institutions deemed &quot;too big to fail&quot; are considered crucial to the stability and functioning of the financial system. Their failure can cause disruptions to the broader economy, financial markets, and the livelihoods of individuals and businesses. These
          institutions often have extensive interconnectedness and a significant influence on the overall financial landscape.</li>
          <li>The &quot;too big to fail&quot; concept implies that in times of financial distress, the government or central bank may intervene to prevent the collapse of these institutions. This intervention can take various forms, including financial assistance, bailouts, guarantees,
          or other measures aimed at preventing widespread panic and systemic risks. The rationale behind such intervention is to mitigate the potential negative impact on the economy and protect the stability of the financial system.</li>
          <li>The potential failure of institutions deemed &quot;too big to fail&quot; can create a moral hazard, as they may take on excessive risks, knowing that they are likely to be bailed out by the government to prevent a broader economic crisis.</li>
          <li>Regulatory frameworks, such as increased capital requirements, stress testing, and resolution plans, have been implemented to enhance the resilience and stability of
          these institutions.</li>
          <li>Critics argue that the perception of government support for large institutions creates an unfair advantage, as smaller competitors may not receive the same level of assistance in times of distress. This can contribute to a perception of an uneven playing field and exacerbate
          income and wealth inequality.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Trade Deficit',
    content: (
      <>
        <p className="mb-2">A trade deficit occurs when a country&apos;s imports exceed its exports, resulting in a negative balance of trade. It represents the difference between the value of goods and services a country imports from other countries and the value of goods and services
        it exports. A persistent trade deficit can have economic implications, such as affecting currency exchange rates, domestic industries, and overall economic growth.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Factors such as a country&apos;s domestic consumption patterns, relative cost of production, exchange rates, competitiveness of industries, trade policies, and global economic conditions can contribute to a trade deficit. For example, if a country has a high demand for
          imported goods or if its domestic industries struggle to compete globally, it can lead to a trade deficit.</li>
          <li>On one hand, trade deficits allow consumers to access a wide range of goods and services from around the world, promoting consumer choice and potentially keeping prices lower. On the other hand, persistent trade deficits may indicate a loss of competitiveness in domestic
          industries, job displacement, and potential threats to national security if a country becomes overreliant on imports for critical goods.</li>
          <li>Trade deficits can affect currency exchange rates. When a country has a trade deficit, it typically requires more foreign currency to pay for its imports than it receives from its exports. This can lead to a depreciation of the country&apos;s currency relative to others.
          A weaker currency can make exports more competitive and imports more expensive, potentially helping to reduce the trade deficit over time.</li>
          <li>Governments often implement trade policies and engage in negotiations to address trade deficits. These may include measures to promote exports, such as export subsidies or trade agreements that provide preferential access to foreign markets. Additionally, countries may
          impose tariffs, import quotas, or trade restrictions to protect domestic industries and reduce reliance on imports.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    name: 'Trade Surplus',
    content: (
      <>
        <p className="mb-2">A trade surplus occurs when a country&apos;s exports exceed its imports, resulting in a positive balance of trade. It represents the difference between the value of goods and services a country exports to other countries and the value of goods and services
        it imports. A trade surplus can have economic implications, such as increasing foreign exchange reserves, supporting domestic industries, and potentially stimulating economic growth.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Factors that contribute to a trade surplus include a country&apos;s export competitiveness, comparative advantage in certain industries, technological advancements, high domestic savings, strong domestic demand for domestically produced goods, trade policies that support
          exports, and global economic conditions. A trade surplus can indicate that a country&apos;s industries are competitive and successful in global markets.</li>
          <li>On the positive side, trade surpluses generate revenue from exports, increase foreign exchange reserves, and create employment opportunities in export-oriented industries. They can also support domestic industries by allowing them to scale production, invest in research
          and development, and gain a competitive edge. However, excessive trade surpluses can lead to concerns about currency appreciation, reduced domestic consumption, and potential trade disputes from countries with trade deficits.</li>
          <li>Trade surpluses can influence currency exchange rates. When a country has a trade surplus, it typically receives more foreign currency from its exports than it needs to pay for its imports. This increased supply of foreign currency can strengthen the country&apos;s currency
          relative to others. A stronger currency can make imports cheaper and exports relatively more expensive, potentially affecting the competitiveness of export-oriented industries and reducing the trade surplus over time.</li>
          <li>Governments often utilize trade policies and engage in negotiations to maintain or enhance trade surpluses. They may implement export promotion strategies, provide export incentives, negotiate trade agreements that open up foreign markets, or address trade barriers in other
          countries. These measures aim to boost exports and maintain a favorable trade balance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    name: 'Trade War',
    content: (
      <>
        <p className="mb-2">A trade war refers to a situation where countries impose tariffs, trade barriers, or other restrictive measures on each other&apos;s imports and exports, leading to escalated trade tensions. Trade wars can have wide-ranging economic consequences, such as higher
        costs for businesses and consumers, disrupted supply chains, reduced global trade, and potential impacts on economic growth and geopolitical relations.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Trade wars typically begin with trade disputes between countries, triggered by concerns about unfair trade practices, intellectual property rights violations, market access restrictions, subsidies, or currency manipulation. In response, countries may implement protectionist
          measures, such as imposing tariffs, import quotas, or trade barriers on specific goods or industries. These measures are aimed at protecting domestic industries, reducing imports, and promoting domestic production.</li>
          <li>Trade wars often escalate as countries respond to each other&apos;s actions. One country&apos;s imposition of trade barriers can trigger retaliatory measures from other nations affected by the trade restrictions. This retaliatory behavior can create a cycle of escalating trade
          actions, with each side attempting to protect its own economic interests. The tit-for-tat nature of trade wars can lead to a substantial increase in tariffs and trade barriers between countries.</li>
          <li>Some industries may benefit from protectionist measures, as they face less competition from imports and have a chance to expand domestic production. However, industries that rely heavily on imports or have export-oriented business models may face challenges due to higher input
          costs, reduced market access, or retaliatory actions by trading partners.</li>
          <li> Trade wars can disrupt global trade flows and hinder international cooperation. As countries impose trade barriers, global trade volumes may decline, impacting economies that heavily rely on international trade. Trade tensions can strain diplomatic relations and hinder
          multilateral trade negotiations. They can also lead to the formation of new trade alliances or partnerships, as countries seek alternative markets and suppliers to mitigate the impacts.</li>
          <li>Trade wars can have broader geopolitical implications. They can strain diplomatic relations between countries, create political tensions, and impact international cooperation on various fronts. Trade disputes can spill over into other areas, such as technology, security, and
          intellectual property rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    name: 'Trust Fund',
    content: (
      <>
        <p className="mb-2">A trust fund is a legal entity that holds assets, such as money, property, or investments, on behalf of beneficiaries. It is created by a grantor or settlor who designates a trustee to manage the assets according to specific terms and conditions outlined in a
        trust agreement. Trust funds are commonly used for estate planning, wealth management, charitable purposes, and ensuring the financial well-being of beneficiaries.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Trust funds are established to benefit specific individuals or organizations, known as beneficiaries. The grantor can define the beneficiaries and determine the distribution of assets within the trust. This allows for customization and flexibility in providing financial support,
          such as regular income distributions, lump-sum payments, or specific conditions for receiving funds.</li>
          <li>The trustee is responsible for managing the assets held in the trust and fulfilling their fiduciary duties. These duties include acting in the best interests of the beneficiaries, prudently investing trust assets, making distributions according to the trust terms, maintaining
          accurate records, and complying with legal and tax obligations. Trustees are typically chosen based on their financial expertise, integrity, and ability to carry out the grantor&apos;s wishes.</li>
          <li>Trust funds are commonly used in estate planning to facilitate the transfer of assets to beneficiaries while minimizing potential complications and tax implications. By establishing a trust, the grantor can outline their wishes for asset distribution, designate beneficiaries,
          and potentially avoid probate, which can be a time-consuming and public process.</li>
          <li>Unlike probate proceedings, which are public, the details of a trust and its assets generally remain private. This can be beneficial for individuals who prefer to keep their financial affairs confidential or wish to protect the privacy of their beneficiaries.</li>
          <li>Trust funds can be established for charitable or philanthropic purposes. Charitable trusts are designed to support specific causes or organizations, and the trust assets are used to further the grantor&apos;s charitable goals. These trusts can provide ongoing support to
          charitable organizations, fund scholarships, or finance projects that align with the grantor&apos;s philanthropic interests.</li>
        </ul>
      </>
    ),
  },
]

const definitionsU: Definition[] = [
  {
    id: 1,
    name: 'Unbanked',
    content: (
      <>
        <p className="mb-2">The term &quot;unbanked&quot; refers to individuals or households that do not have access to traditional banking services, such as a bank account, credit cards, or other financial products offered by regulated financial institutions. Unbanked individuals often
        rely on alternative financial services, such as cash transactions, prepaid cards, or informal savings methods. The unbanked population is typically underserved by the formal banking sector and may face challenges in accessing financial services and participating fully in the formal economy.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The unbanked may have limited access to traditional banking services for various factors, including a lack of identification documents, insufficient income, remote geographic locations, distrust of formal financial institutions, or perceived barriers to entry.</li>
          <li>The unbanked often rely on alternative financial products and services to meet their financial needs, including cash transactions, money orders, prepaid cards, mobile money accounts, and informal savings mechanisms like community-based savings groups. While these alternatives
          provide some level of financial inclusion, they may come with higher fees, limited functionality, and less protection compared to regulated banking services.</li>
          <li>Without access to formal banking services, the unbanked may encounter difficulties in managing their finances, securely storing money, building credit history, saving for the future, and accessing affordable credit. The lack of financial inclusion can impede economic growth,
          limit opportunities for upward mobility, and exacerbate income inequality.</li>
          <li>The unbanked population often includes individuals from low-income households, marginalized communities, and underserved regions. The lack of access to banking services can contribute to a cycle of poverty, making it harder for individuals to save, invest, build assets, and
          access financial tools for economic empowerment.</li>
          <li>The unbanked population is a global issue affecting millions of individuals worldwide. According to various reports and studies, a significant proportion of the global population remains unbanked, particularly in developing countries and marginalized communities. Efforts are
          being made to bridge this gap through innovative financial technologies, policy interventions, and collaborations between governments, financial institutions, and non-profits.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Underperform',
    content: (
      <>
        <p className="mb-2">Underperforming refers to a situation in which an investment, company, or individual fails to meet expected or desired performance levels. In the context of investments, an underperforming asset or investment portfolio generates lower returns than anticipated or
        lags behind comparable investments or benchmarks.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Underperformance can manifest in various areas, such as financial returns, sales growth, market share, profitability, or other performance metrics relevant to the specific context.</li>
          <li>Underperformance may result from internal issues, such as poor management decisions, operational inefficiencies, inadequate strategic planning, or weak execution. External factors, such as unfavorable market conditions, increased competition, regulatory changes, or macroeconomic
          challenges, can also contribute to underperformance. Identifying the root causes of underperformance is crucial for implementing corrective actions and improving future performance.</li>
          <li>Investors may experience lower returns on their investments, leading to dissatisfaction, reduced confidence, and potential financial losses. Shareholders may witness a decline in the value of their shares and a decrease in dividend payments. Underperformance can also impact the
          reputation and credibility of companies or individuals, leading to decreased market trust and diminished business opportunities.</li>
          <li>To address underperformance, a thorough evaluation of the underlying causes is necessary. This involves analyzing financial statements, operational processes, market dynamics, competitive positioning, and other relevant factors. Based on the findings, remedial actions can be
          implemented to improve performance. These actions may include strategic realignment, operational restructuring, cost-cutting measures, talent development, product innovation, or other initiatives aimed at enhancing efficiency, competitiveness, and overall performance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Underwater Mortgage',
    content: (
      <>
        <p className="mb-2">An underwater mortgage refers to a situation where the outstanding balance on a mortgage loan exceeds the current market value of the property securing the loan. In other words, the homeowner owes more on the mortgage than the home is worth.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>An underwater mortgage indicates negative equity, where the homeowner&apos;s property value has declined below the outstanding loan balance. This situation often arises due to a decline in the local housing market, economic downturns, or factors specific to the property.</li>
          <li>Being underwater on a mortgage can make it difficult to sell the property or refinance the mortgage. When selling, the proceeds from the sale may not be sufficient to pay off the mortgage entirely, resulting in a shortfall that the homeowner must cover. Refinancing options
            may be limited as lenders typically require a certain level of equity in the property to qualify for favorable loan terms.</li>
          <li>Accessing home equity through options like home equity loans or lines of credit may be difficult. These financing methods typically require sufficient equity as collateral. The lack of equity restricts homeowners&apos; ability to tap into their home&apos;s value for purposes
            such as home improvements, debt consolidation, or other financial needs.</li>
          <li>Negative equity may delay homeowners&apos; ability to build wealth through property appreciation. It can also limit their ability to move or relocate for job opportunities, downsizing, or other personal reasons, as the sale proceeds may not cover the mortgage balance.</li>
          <li>Homeowners facing an underwater mortgage may stay in the home and continue mortgage payments, negotiate with the lender for a loan modification, pursue a short sale where the lender agrees to accept less than the full amount owed, or in some cases, consider
            foreclosure as a last resort.</li>
          <li>Underwater mortgages are often closely tied to local housing market conditions. If the housing market recovers and property values increase over time, homeowners may gradually regain equity and eventually move into a positive equity position.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Unemployment Rate',
    content: (
      <>
        <p className="mb-2">The unemployment rate is a key economic indicator that measures the percentage of the labor force that is actively seeking employment but currently without a job. It is commonly used to assess an economy&apos;s health and the overall employment situation. The
        unemployment rate provides insights into the level of joblessness in a given period and serves as a barometer for economic conditions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The labor force comprises individuals who are either employed or actively seeking employment. Those who are unemployed include individuals without a job but actively searching for work and available to start working.</li>
          <li>A low unemployment rate generally indicates a strong economy, as it suggests that a significant portion of the labor force is gainfully employed. Conversely, a high unemployment rate may indicate economic weakness, with a larger proportion of the labor force struggling to
            find a job.</li>
          <li>High unemployment rates can lead to financial hardship, reduced consumer spending, and lower living standards for affected individuals and families. Unemployment can also have social and psychological consequences, including increased stress, decreased self-esteem, and reduced
            social cohesion.</li>
          <li>Unemployment rates can be influenced by both cyclical and structural factors. Cyclical unemployment refers to joblessness caused by economic downturns or fluctuations, such as during recessions. Structural unemployment, on the other hand, arises from longer-term shifts in the
            economy, such as changes in technology, industry restructuring, or skills mismatch between available jobs and workers&apos; qualifications.</li>
          <li>High unemployment rates may prompt policymakers to implement measures aimed at stimulating job creation and economic growth, such as fiscal stimulus programs, job training initiatives, or investment in infrastructure projects. Conversely, low unemployment rates may raise
            concerns about labor shortages, wage inflation, and potential overheating in the economy.</li>
          <li>While the unemployment rate is a widely used indicator, it has certain limitations. It does not capture individuals who have given up actively seeking employment (discouraged workers) or those who are underemployed (working part-time but desiring full-time employment). Additionally,
            it does not provide insights into the quality of jobs, wage levels, or other aspects of employment beyond joblessness.</li>
          <li>Comparing the unemployment rate across countries can provide insights into global economic disparities and labor market conditions. International comparisons of unemployment rates help identify trends, policy approaches, and potential lessons for addressing unemployment challenges.</li>
        </ul>
      </>
    ),
  },
]

const definitionsV: Definition[] = [
  {
    id: 1,
    name: 'VA Loan',
    content: (
      <>
        <p className="mb-2">A VA loan is a mortgage loan program offered by the U.S. Department of Veterans Affairs (VA) to provide financial assistance to eligible veterans, active-duty service members, and their surviving spouses. The VA loan program aims to make homeownership
        more accessible and affordable for those who have served or are serving in the military.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>VA loans are guaranteed by the U.S. Department of Veterans Affairs, meaning approved lenders have protection against borrower default. This guarantee encourages lenders to offer favorable terms and lower interest rates than conventional mortgage loans.</li>
          <li>One of the significant advantages of VA loans is that they typically do not require a down payment, making homeownership more attainable for veterans who may not have substantial savings for a down payment.</li>
          <li>VA loans often come with competitive interest rates, which can result in significant savings over the life of the loan. The favorable interest rates make monthly mortgage payments more affordable.</li>
          <li>Unlike conventional loans, VA loans do not require private mortgage insurance (PMI). This can save borrowers a significant amount of money, as PMI is typically required for loans with a down payment of less than 20%.</li>
          <li>The VA loan program has flexible eligibility requirements, allowing a broader range of veterans, active-duty service members, and even some surviving spouses to qualify for the loan. This flexibility helps veterans who may not meet the strict criteria of conventional loans.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Venture Capital',
    content: (
      <>
        <p className="mb-2">Venture capital (VC) refers to a form of private equity financing provided to early-stage or high-growth potential companies by investors, known as venture capitalists. These investments are typically made in exchange for equity ownership in the company. Venture
        capital plays a vital role in funding and supporting entrepreneurial ventures, fueling innovation, and driving economic growth.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Venture capitalists provide funding to help companies develop and scale their operations, support product development, expand market reach, and achieve milestones necessary for growth. These companies often operate in sectors such as technology, biotechnology, or other
          innovative industries.</li>
          <li>In exchange for their investment, venture capitalists receive ownership shares, typically in the form of preferred stock. This equity ownership enables venture capitalists to share in the company&apos;s success and potentially realize substantial
            returns if the company achieves a successful exit, such as through an initial public offering (IPO) or acquisition.</li>
          <li>VCs often actively participate in the strategic direction of the company, offering guidance, industry expertise, and connections to networks or resources that can contribute to the company&apos;s growth. Venture capitalists may also take board seats or advisory roles, working
          closely with the company&apos;s founders and management team to help drive success.</li>
          <li>Not all startups will succeed, and venture capitalists understand the high level of risk associated with their investments. However, they seek high returns to compensate for the risks taken. Successful investments in high-growth companies can generate significant returns,
          offsetting losses from unsuccessful investments.</li>
          <li>Venture capital investments typically involve a longer time horizon compared to traditional investments. It may take several years for a startup to achieve meaningful growth, profitability, or a successful exit.</li>
          <li>Venture capital plays a crucial role in fostering innovation and entrepreneurship, driving economic growth, and creating job opportunities. It helps bridge the gap between early-stage companies and traditional sources of financing, such as bank loans or public markets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Vesting Schedule',
    content: (
      <>
        <p className="mb-2">A vesting schedule is a timeline or set of conditions that determine when an individual or employee has the right to fully own or access certain assets or benefits, typically related to employer-provided incentives, such as stock options, retirement plans, or
        employer-matched contributions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Vesting schedules are commonly used to govern the ownership or access to assets over a specific period of time. This ensures that individuals earn their rights gradually or based on specific criteria rather than having immediate full ownership or access.</li>
          <li>Vesting schedules are used to incentivize employees and promote long-term commitment to an organization. By linking the ownership or access to certain benefits to a vesting schedule, companies encourage employees to stay with the organization for a specified duration, thus
          fostering employee retention and loyalty.</li>
          <li> Vesting schedules typically outline a specific timeline or set of milestones that individuals must meet to acquire full ownership or access to the assets. For example, a vesting schedule for stock options might state that an employee will receive a certain percentage of
          the options after each year of service, with full ownership achieved after a predetermined number of years.</li>
          <li>Cliff vesting involves a period of time before any ownership or access is granted, followed by a single date or milestone where full rights are acquired. Graded vesting, on the other hand, allows for a gradual acquisition of rights over time, typically in equal installments.</li>
          <li>If an individual leaves the organization or employment is terminated before the full vesting period is completed, they may only retain the rights to the vested portion of the assets, while the unvested portion may be forfeited or subject to specific conditions outlined in
          the vesting schedule.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Volatility',
    content: (
      <>
        <p className="mb-2">Volatility refers to the degree of fluctuation or variability in the price or value of a financial instrument, such as stocks, bonds, or commodities, over a certain period of time. It measures the rate at which prices move up and down, indicating the level of
        uncertainty or risk in the market.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Volatility reflects the rapid and significant price movements of a financial instrument. Higher volatility suggests larger price swings, indicating greater uncertainty and potential risk in the market. Lower volatility implies more stable prices and a relatively calmer market environment.</li>
          <li>Volatility is often associated with market risk and uncertainty. It can be influenced by various factors, including economic indicators, geopolitical events, market sentiment, investor behavior, or changes in supply and demand dynamics. Uncertain or unexpected events tend
          to increase volatility, as market participants react and adjust their expectations.</li>
          <li>Traders may take advantage of short-term price movements caused by volatility through strategies like day trading or swing trading. Investors, on the other hand, may consider volatility when assessing risk and potential returns of long-term investment positions.</li>
          <li>Higher volatility increases the likelihood of large price movements, which in turn increases the value of options. Option traders often monitor and assess volatility levels to make informed decisions about buying or selling options.</li>
          <li>Assets with different volatility levels can help balance overall portfolio risk. Including assets with low or negative correlation to each other can potentially reduce the overall volatility of a portfolio.</li>
          <li>While high volatility can offer trading opportunities for those who can effectively navigate price swings, it also poses risks for those who are not adequately prepared or lack risk management strategies.</li>
        </ul>
      </>
    ),
  },
]

const definitionsW: Definition[] = [
  {
    id: 1,
    name: 'W-2',
    content: (
      <>
        <p className="mb-2">A W-2 form is a document provided by an employer to an employee, typically on an annual basis, to report the employee&apos;s wages, salary, and other compensation for the purpose of income tax filing. It includes information such as
        total earnings, taxes withheld, and contributions to retirement plans or other benefits.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The W-2 form includes details about the income tax, Social Security tax, and Medicare tax withheld from the employee&apos;s paychecks throughout the year. These withholdings are based on the employee&apos;s tax filing status, exemptions claimed, and the
          information provided on the W-4 form submitted to the employer.</li>
          <li>The W-2 form may include information about certain employee benefits, such as contributions to retirement plans, health insurance premiums, or other pre-tax deductions. These amounts may be listed separately or included in the total taxable wages reported on the form.</li>
          <li>The information on the W-2 form is used by employees to complete their individual income tax returns. The form is typically provided by the employer by the end of January, and employees are required to include it when filing their federal and state income
          tax returns. The W-2 form helps ensure accurate reporting of income and taxes paid by the employee.</li>
          <li>The W-2 form also includes the employee&apos;s contributions to Social Security and Medicare. These amounts are used for calculating the individual&apos;s eligibility for Social Security benefits and Medicare coverage.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Whale',
    content: (
      <>
        <p className="mb-2">In financial markets, a &quot;whale&quot; refers to an individual or entity that possesses a significant amount of capital, allowing them to make large trades or investments that can potentially influence market prices.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Due to their substantial capital, whales have the ability to influence market sentiment and direction. Their buying or selling activities can cause price movements, attract attention from other market participants, and potentially trigger
            a chain reaction of trading activity.</li>
          <li>Whales can exploit their size and market influence to their advantage, such as taking advantage of price discrepancies or accessing privileged investment opportunities. However, their actions can also pose risks, as sudden large trades or
            investments may disrupt market stability or create volatility.</li>
          <li>Market participants often monitor the activities of whales, as their trades can provide valuable insights into market trends or investor sentiment. Observing whale activity may help identify potential investment opportunities or gauge the
            market&apos;s direction.</li>
          <li>Whales, especially those with significant market influence, may draw regulatory scrutiny. Regulators may monitor their activities to ensure fair and orderly markets, prevent market manipulation, or address potential risks associated with
            concentrated positions.</li>
          <li>The trading activities of whales can have implications for smaller investors. Rapid market movements driven by large trades or investments may lead to price volatility, making it challenging for smaller investors to execute trades at desired
            prices or maintain stable portfolio values.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Wall Street',
    content: (
      <>
        <p className="mb-2">Wall Street refers to the financial district in Lower Manhattan, New York City, where the New York Stock Exchange (NYSE) and many other financial institutions are located. It is synonymous with the U.S. financial industry and is often
        used as a metonym for the broader financial markets and the activities associated with them.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Wall Street is a major financial hub that houses prominent financial institutions, including investment banks, commercial banks, brokerage firms, and asset management companies. It serves as a central location for financial activities, such as trading,
            investment banking, asset management, and financial services.</li>
          <li>Wall Street is closely associated with the stock market. It is where stocks, bonds, commodities, and other financial instruments are traded. Traders, investors, and market participants gather on Wall Street or
            use electronic trading platforms to buy, sell, and exchange securities.</li>
          <li>Investment banks located on Wall Street provide services such as underwriting, mergers and acquisitions (M&A), initial public offerings (IPOs), corporate financing, and advisory services to corporations, governments, and institutional clients.</li>
          <li>Wall Street is subject to regulatory oversight by various entities, including the U.S. Securities and Exchange Commission (SEC) and self-regulatory organizations like the Financial Industry Regulatory Authority (FINRA). These regulatory bodies aim to maintain
            fair and transparent markets, enforce compliance with securities laws, and protect investors&apos; interests.</li>
          <li>Wall Street has become a symbol of finance and capitalism, representing the pursuit of wealth, success, and economic power. It is often associated with high-stakes trading, intense competition, and the potential for substantial financial gains or losses.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Welfare State',
    content: (
      <>
        <p className="mb-2">In a welfare state, the government plays an active role in promoting the economic and social well-being of its citizens. It typically involves the provision of various social programs and benefits aimed at ensuring a minimum standard of living, healthcare,
        education, and social security for the population.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>A welfare state establishes a social safety net by providing social programs and benefits to support individuals and families in need. This may include unemployment benefits, healthcare coverage, income support, housing assistance, and access to education and training programs.</li>
          <li>Welfare services are available to all citizens, regardless of their income or social status, ensuring a basic level of support and equal opportunities for all.</li>
          <li>A welfare state typically involves redistributive policies, where resources are collected through taxes and used to fund social programs and benefits. The aim is to reduce income disparities and promote social equity by reallocating resources from those who have more to those who have less.</li>
          <li>A welfare state is built on the premise of social solidarity, with the belief that collective efforts and support can improve the overall well-being of society. It promotes social cohesion by providing a safety net and ensuring basic needs are met, which can contribute to a
          more stable and harmonious society.</li>
          <li>The sustainability of a welfare state relies on adequate financing through taxes, contributions, or other revenue sources. Balancing the costs of social programs with economic growth and fiscal responsibility is crucial to ensure the long-term viability of the welfare state model.</li>
        </ul>
      </>
    ),
  },
]

const definitionsX: Definition[] = [
  {
    id: 1,
    name: 'Xenocurrency',
    content: (
      <>
        <p className="mt-4 mb-2">Xenocurrency refers to currency traded in markets outside of its domestic borders. The term &quot;zeno&quot; refers to something foreign or different.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The use of the term xenocurrency is uncommon in finance or economics because the prefix xeno tends to have negative connotations. For example, Xenophobia is an irrational fear or hatred toward foreigners.</li>
          <li>Xenocurrencies are subject to exchange rate fluctuations and volatility. When dealing with foreign currencies, changes in exchange rates can impact the value of investments, international trade, and the cost of goods and services. Similarly, alternative currencies may
          experience significant price volatility due to factors like market sentiment, regulatory changes, or technological developments.</li>
          <li> The concept of xenocurrency highlights the interconnectedness of the global financial system and the increasing acceptance and use of diverse currencies beyond traditional borders. It reflects the growing trend of cross-border transactions, international investments,
          and the emergence of new forms of currency facilitated by technology.</li>
        </ul>
      </>
    ),
  },
]

const definitionsY: Definition[] = [
  {
    id: 1,
    name: 'Year-Over-Year',
    content: (
      <>
        <p className="mb-2">Year-over-year (YOY) is a financial comparison method used to analyze data or measure performance over a 12-month period. It refers to comparing data or metrics from the same time period in consecutive years to identify trends, changes, or growth rates.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>YOY analysis is particularly useful in identifying long-term trends and patterns that may occur within a specific industry or market. It helps highlight seasonality effects by comparing data for corresponding periods in different years.</li>
          <li>YOY analysis enables the calculation of growth rates or changes in percentages. By comparing data over a full year, it provides a broader perspective on the rate of change and helps evaluate the effectiveness of strategies or initiatives implemented over time.</li>
          <li>YOY analysis takes into account the natural fluctuations in business cycles that may affect performance. It allows for a more comprehensive assessment of how a business or market has performed relative to previous years, considering both positive and negative impacts.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Year to Date',
    content: (
      <>
        <p className="mb-2">Year to date (YTD) is a financial term used to describe the period from the beginning of the current calendar year up to the present date. It provides a snapshot of performance or data for the time elapsed since the start of the year.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>YTD analysis enables the comparison of current performance against the same period in previous years. By examining how metrics or data have changed over the same timeframe, trends and patterns can be identified.</li>
          <li>YTD analysis helps assess the progress made towards specific goals or targets set for the year. It provides a benchmark for measuring achievements or gaps in performance and allows for adjustments or corrective actions to be made as necessary.</li>
          <li>YTD analysis takes into account any seasonality effects that may be present in the data by considering the specific time period within the calendar year and accounting for fluctuations that may occur in different seasons.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Yield',
    content: (
      <>
        <p className="mb-2">Yield refers to the return on investment or the income generated by an investment relative to its cost. It represents the percentage or rate of return that an investor receives from an investment.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Yield can take various forms depending on the type of investment. For example, in bond investments, yield refers to the interest payments received by the bondholder. In dividend stocks, yield represents the dividend income received relative to the stock
          price. In real estate, yield may refer to rental income relative to the property value.</li>
          <li>Yield is often used as an indicator of the income potential or profitability of an investment. Higher yield generally suggests higher income or returns, but it is essential to assess the risk-return trade-off and consider factors such as credit risk,
          market volatility, and economic conditions when evaluating investment opportunities based on yield.</li>
          <li>Yield plays a significant role in fixed income investments, such as bonds or certificates of deposit (CDs). Yield helps investors understand the income they can expect to receive over the investment&apos;s lifespan, considering factors like coupon
          payments, interest rates, and the maturity of the investment.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Yuppie',
    content: (
      <>
        <p className="mb-2">Yuppie is a term used to describe young urban professionals who are typically characterized by their youth, affluence, and business success. They are often driven individuals who have achieved financial stability at a relatively young age.
        Yuppies are commonly associated with a preppy style and a desire to display their success through their appearance and possessions.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>The term &quot;yuppie&quot; originated in the 1980s as a derogatory label for young, wealthy, and obnoxious business people.</li>
          <li>Yuppies are typically well-educated professionals working in industries like finance, tech, academia, and the arts.</li>
          <li>In the modern era, the term &quot;yuppie&quot; has evolved to encompass a broader range of affluent professionals, including those in the tech industry.</li>
        </ul>
      </>
    ),
  },
]

const definitionsZ: Definition[] = [
  {
    id: 1,
    name: 'Zero-Based Budgeting',
    content: (
      <>
        <p className="mb-2">Zero-based budgeting (ZBB) is a financial management approach where budgeting starts from a base of zero for each budgeting period. ZBB requires every expense to be justified and approved from scratch. The primary objective
        is to optimize resource allocation, eliminate unnecessary expenses, and ensure that every dollar spent aligns with the organization&apos;s priorities.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Because all expenses are evaluated and justified based on their necessity and value each budgeting period, this ensures a thorough review of all expenditures and prevents the carryover of unnecessary or inefficient spending from previous budgets.</li>
          <li>Zero-based budgeting encourages a focus on value creation and prioritization. Resources are allocated based on the expected benefits and returns, ensuring that funds are directed towards activities that generate the most value for the organization.</li>
          <li>By requiring detailed justifications for expenses, it becomes easier to track and measure the effectiveness of spending. This transparency and accountability foster responsible financial management.</li>
          <li>Zero-based budgeting ensures that budget decisions are aligned with the organization&apos;s strategic goals and objectives. It provides a framework to allocate resources in a way that supports the long-term vision of the organization and eliminates wasteful
          spending on activities that do not contribute to strategic outcomes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    name: 'Zero-Sum Game',
    content: (
      <>
        <p className="mt-4 mb-2">A &quot;zero-sum game&quot; refers to a situation in which the gains of one participant or entity are exactly offset by the losses of another participant or entity. In other words, the total gains and losses within the system balance out,
        resulting in a net sum of zero.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>Zero-sum games often occur when resources, rewards, or opportunities are limited and cannot be expanded. The total value available remains fixed, and participants compete to secure a larger share of the existing value.</li>
          <li>In zero-sum games, participants typically focus on maximizing their own gains relative to others rather than creating overall value. Success is measured in terms of outperforming or surpassing competitors rather than achieving absolute gains.</li>
          <li>Zero-sum games tend to foster a competitive and potentially adversarial environment, as participants directly oppose each other to secure a greater portion of the limited resources. The interests of the participants are often in direct conflict.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    name: 'Zone of Resistance',
    content: (
      <>
        <p className="mt-4 mb-2">The &quot;zone of resistance&quot; refers to a price range or level in technical analysis where a financial asset or security faces significant selling pressure. It is a zone where the price historically struggles to break through or
        sustain upward movement, potentially leading to a reversal or a slowdown in price appreciation.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>When the price of an asset reaches the zone of resistance, it may encounter increased selling activity, as traders and investors take profit or sell their holdings. This can lead to a reversal in the price trend or a period of consolidation where the
          price remains range-bound within the resistance zone.</li>
          <li> While the zone of resistance suggests a potential barrier to price advancement, it does not guarantee that the price will reverse or consolidate. If the price manages to break through the resistance zone with significant buying pressure, it could lead
          to a bullish breakout and further upward movement.</li>
          <li>The zone of resistance is often accompanied by a corresponding support level, which is a price level or range where the asset has historically found buying interest and faced upward price support. Traders and investors consider both support and
          resistance levels to assess the overall price dynamics and potential trading opportunities.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    name: 'Zone of Support',
    content: (
      <>
        <p className="mt-4 mb-2">The &quot;zone of support&quot; refers to a price range or level in technical analysis where a financial asset or security encounters significant buying interest. It is a zone where the price historically finds support and experiences
        a rebound or a slowdown in price decline.</p>
        <p className="font-medium">Key Takeaways</p>
        <ul className="list-disc ml-6">
          <li>When the price of an asset approaches the zone of support, it may encounter increased buying activity, as traders and investors see the price as attractive for initiating or adding to positions. This can lead to a rebound in the price or a period of
          consolidation where the price remains range-bound within the support zone.</li>
          <li>The concept of the zone of support is commonly used in technical analysis to identify potential areas where price movements may find buying interest and face upward pressure. Traders and investors use various technical indicators and chart patterns
          to identify and confirm these support zones.</li>
          <li>While the zone of support suggests a potential floor for the price, it does not guarantee that the price will rebound or consolidate. If the price breaks through the support zone with significant selling pressure, it could lead to a bearish breakdown
          and further downward movement.</li>
          <li>The zone of support is often accompanied by a corresponding resistance level, which is a price level or range where the asset has historically encountered selling pressure and faced downward price resistance. Traders and investors consider both support
          and resistance levels to assess the overall price dynamics and potential trading opportunities.</li>
        </ul>
      </>
    ),
  },
]

export default function HomePage() {
  const navigation = [
    { name: 'Learn', href: 'learn' },
    { name: 'Dictionary', href: 'dictionary' },
    { name: 'About', href: 'about' },
  ]

  const [selectedDefinition, setSelectedDefinition] = useState<Definition | null>(null);

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
          <a href="#section-a" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">A</a>
          <a href="#section-b" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">B</a>
          <a href="#section-c" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">C</a>
          <a href="#section-d" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">D</a>
          <a href="#section-e" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">E</a>
          <a href="#section-f" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">F</a>
          <a href="#section-g" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">G</a>
          <a href="#section-h" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">H</a>
          <a href="#section-i" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">I</a>
          <a href="#section-j" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">J</a>
          <a href="#section-k" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">K</a>
          <a href="#section-l" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">L</a>
          <a href="#section-m" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">M</a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <a href="#section-n" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">N</a>
          <a href="#section-o" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">O</a>
          <a href="#section-p" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">P</a>
          <a href="#section-q" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Q</a>
          <a href="#section-r" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">R</a>
          <a href="#section-s" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">S</a>
          <a href="#section-t" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">T</a>
          <a href="#section-u" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">U</a>
          <a href="#section-v" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">V</a>
          <a href="#section-w" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">W</a>
          <a href="#section-x" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">X</a>
          <a href="#section-y" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Y</a>
          <a href="#section-z" className="rounded-full bg-white text-gray-700 font-bold w-7 h-7 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg">Z</a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <DefinitionList title="A" definitions={definitionsA} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="B" definitions={definitionsB} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="C" definitions={definitionsC} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="D" definitions={definitionsD} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="E" definitions={definitionsE} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="F" definitions={definitionsF} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="G" definitions={definitionsG} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="H" definitions={definitionsH} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="I" definitions={definitionsI} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="J" definitions={definitionsJ} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="K" definitions={definitionsK} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="L" definitions={definitionsL} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="M" definitions={definitionsM} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="N" definitions={definitionsN} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="O" definitions={definitionsO} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="P" definitions={definitionsP} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="Q" definitions={definitionsQ} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="R" definitions={definitionsR} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="S" definitions={definitionsS} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="T" definitions={definitionsT} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="U" definitions={definitionsU} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="V" definitions={definitionsV} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="W" definitions={definitionsW} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="X" definitions={definitionsX} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="Y" definitions={definitionsY} setSelectedDefinition={setSelectedDefinition} />
        <DefinitionList title="Z" definitions={definitionsZ} setSelectedDefinition={setSelectedDefinition} />

        {selectedDefinition && (
          <Dialog
          open={true}
          onClose={() => setSelectedDefinition(null)}
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Overlay className="inset-0 bg-black opacity-10 static" />

              <div className="bg-white rounded-lg max-w-5xl mx-auto p-6 shadow-lg">
                <Dialog.Title id="dialog-title" className="text-lg font-medium text-gray-900">{selectedDefinition.name}</Dialog.Title>

                <div className="flex justify-between">
                  <p className="text-gray-500">{selectedDefinition.content}</p>
                </div>

                <div className="mt-2 flex justify-end">
                  <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => setSelectedDefinition(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Dialog>
        )}

      </div>

      <Footer />
    </div>
  )
}
