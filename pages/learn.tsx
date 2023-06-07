import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Dialog } from '@headlessui/react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  step: string;
  description: string;
  hasTabs?: boolean;
  cardContent?: JSX.Element;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Emergency Funds and Sinking Funds',
    href: '#',
    imageSrc: '/images/money.png',
    imageAlt: "Markers, coins, sunglasses, and dollar bills on marble countertop",
    step: '1',
    description: 'Which is better?',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Emergency Funds</Tab>
          <Tab>Sinking Funds</Tab>
        </TabList>
        <TabPanel>
            <div className="card-paragraph mb-2">
            <p className="mt-4 mb-2">Before you start investing, it&apos;s crucial to build a financial safety net to protect yourself.
              This is where emergency funds and sinking funds come in.</p>
              <p>An emergency fund is made up of money you set aside for unplanned expenses, such as job loss, medical bills, or car repairs.
              Think of it as your backup for when something goes wrong in your life and you need money ASAP.
              The rule of thumb is to save at least 3-6 months of your monthly expenses.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>To determine how much you should save:</p>
              <ol className="list-decimal ml-6">
                <li>Go through your last few months of expenses and calculate your average monthly spending.</li>
                <li>Separate your expenses by needs (rent, mortgage, utilities, groceries, etc.) and wants (concert tickets, dining out, etc.).</li>
                <li>Calculate how much you spend on your needs each month and use that to find out how much money to hold in your emergency fund for
                  how long you want it to last.</li>
              </ol>
            </div>
        </TabPanel>

        <TabPanel>
        <div className="card-paragraph mb-2">
          <p>A sinking fund is strategic and meant for known expenses, such as a vacation or home down payment.
            Think of it as a way to save money and track your progress toward specific financial goals.</p>
        </div>
        <div className="card-paragraph mb-2">
          <p>By using a sinking fund, you can avoid dipping into your emergency fund or checking account.
            For example, if you are planning a trip to South Korea in 6 months and know it will cost $1800, you should save $300 per month for the
            next 6 months.</p>
        </div>
        <div className="card-paragraph mb-2">
          <p>To build a sinking fund:</p>
          <ol className="list-decimal ml-6">
            <li>Decide what you are saving for, whether its an upcoming wedding, school tuition, home renovations, a new car, etc.</li>
            <li>Calculate how much to allocate to your sinking fund, which will depend on your finances and goal.</li>
            <li>Incorporate your sinking fund into your monthly budget to keep yourself accountable.</li>
          </ol>
        </div>
        <div className="card-paragraph mb-2">
          <p>Once you have a number in mind for your funds, open a savings account and start making regular deposits to it.
            We recommend keeping your emergency fund and sinking funds separate from your checking account so you won&apos;t be tempted to
            spend the money.
            Instead, open a high-yield savings account (HYSA) with an online bank like Marcus by Goldman Sachs or Ally Bank to earn some
            interest as you save.</p>
        </div>
        <div className="card-paragraph mb-2">
          <p>Emergency funds and sinking funds are powerful tools you can use to fulfill your financial goals.
            With a bit of patience and planning, you can set your future self up for financial success.</p>
        </div>
        </TabPanel>
      </Tabs>
    ),
  },
  {
      id: 2,
      name: 'Paying Off Debt vs. Saving Money',
      href: '#',
      imageSrc: '/images/savings.png',
      imageAlt: "person holding a jar labelled savings",
      step: '2',
      description: 'Which one first?',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Saving Money</Tab>
            <Tab>Paying Off Debt</Tab>
            <Tab>Balancing Both</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">If you are tight on cash, you may have to make a difficult choice between saving money
            for emergencies or paying off high-interest debt.</p>

            <p className='font-medium'>The Argument For Saving First</p>
            <div className="card-paragraph mb-2">
              <p>While you may be tempted to pay off your debts as soon as possible, stashing away a sizeable emergency fund can provide
                financial security during tough times, such as job loss or car repairs.
                Knowing that you have money set aside for unexpected situations can also give you peace of mind and reduce stress as you
                focus on more pressing issues.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>The earlier you start saving, the more time you have to leverage the power of compound interest.
                Compound interest is the interest you earn on your interest gained from depositing money into a high-yield savings account
                like Marcus by Goldman Sachs, investment portfolios, bonds, etc.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>Waiting even 5 or 10 years to start saving can make a significant difference in your wealth trajectory.
                For example, if you set aside $1,000 today in an index fund like VOO or SPY, 20 years from now, that $1,000 would be worth ~$3,869.68.
                However, if you wait 10 years before investing the $1,000, you would only have $1,967.15, a nearly ~50% reduction!</p>
            </div>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>The Argument For Paying Down Debt First</p>
            <div className="card-paragraph mb-2">
              <p>If you have a lot of high-interest debt, that can prevent you from achieving other financial goals as your debt snowballs.
                In particular, most credit cards come with high-interest rates, sometimes upwards of 26%.
                So, the longer you wait to pay off your balances, the more interest your debt will accrue.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>Aggressively paying down high-interest debt makes it more manageable and can also improve your credit score,
                which lenders use to gauge your riskiness as a borrower.
                The higher your credit score, the more likely you are to qualify for better financial products and terms.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>Additionally, carrying large balances can be extremely stressful and feel like a huge weight on your shoulders.
                Focusing on tackling debt can remove this emotional burden and free up your mind to focus on achieving other goals.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>Even Better — Balancing Both</p>
              <div className="card-paragraph mb-2">
                <p>The best strategy is to simultaneously tackle high-interest debt while saving money, which is possible through
                  careful budgeting and planning. Review your monthly expenses and categorize your wants and needs.
                  Look for areas where you can cut back or eliminate certain expenses to reallocate the money towards saving or
                  paying off debt.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>By doing both simultaneously, you can set a better financial foundation and pay the way toward financial
                  security and freedom.</p>
              </div>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 3,
      name: 'Build Strong Credit',
      href: '#',
      imageSrc: '/images/credit.png',
      imageAlt: "person inserting credit card into payment processor",
      step: '3',
      description: 'Steps to take',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Credit Score Factors</Tab>
            <Tab>Steps to Build Good Credit</Tab>
          </TabList>
          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Your credit score is like your grade for being a financially responsible adult.
                Having a strong credit score (≥720) and credit history opens up better financial opportunities for you —
                mainly favorable terms and conditions and better product offerings.
                Some potential benefits you can cash-in on include:</p>
                <ul className="list-decimal ml-6">
                  <li>Automatic increases in credit card limits</li>
                  <li>Sign-up offers for select rewards credit cards</li>
                  <li>Low interest rate on personal loans</li>
                  <li>Lower auto insurance fees and rates</li>
                  <li>Credit check approval for rental applications</li>
                </ul>
            </div>

            <div className="card-paragraph mb-2">
              <p>Credit scores range from 300-850 points, though specific scores, such as for auto loans have different ranges.
                FICO credit scores fall within 1 of 5 ranges:</p>
                <ul className="list-decimal ml-6">
                  <li>Excellent/Exceptional: 800-850</li>
                  <li>Very Good: 740-799</li>
                  <li>Good: 670-739</li>
                  <li>Fair: 580-669</li>
                  <li>Poor: 300-579</li>
                </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
            <p>A credit score is calculated across multiple factors, but here are the most important ones:</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">Payment History (aka Credit History) — 35%: </p>
              <p>Your record of when and how often you pay your bills on time.
                Each bill payment stays on your credit history for 7 years. Make on-time payments in full each month to build your credit.
                Missing a single payment or making a late payment, especially early on in your credit journey, can significantly hurt your credit.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">Balance Owed — 30%: </p>
              <p>This is made up of how much of your available credit you use, or your credit utilization ratio: </p>
              <p>amount of credit used / total credit limit. </p>
              <p>The general advice is to keep your credit utilization below 30% to show you are a responsible borrower.
                For example, if your total credit limit is $20,000, then you should not be using more than ~$6,000 at a time.
                We like to keep our credit utilization below 10-15% to be safe.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">Length of Credit History — 15%: </p>
              <p>This is made up of the average age of all of your open credit lines, whether it&apos;s a loan or a credit card.
                If we compare your credit history to applying for a job, you want to impress lenders like you would a potential
                employer by showing you can manage credit responsibly.
                As an indicator of your creditworthiness, the longer your credit history is, the better.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p className="font-medium">How to Build Good Credit</p>
              <p>Our tips for building good credit and unlocking better financial opportunities include:</p>
              <ul className="list-decimal ml-6">
                  <li>Avoid closing old accounts or applying for too many new loans at once to keep the average age of your credit
                    accounts high.</li>
                  <li>Limit the number of hard inquiries on your credit report, as each one can lower your score up to 5 points.
                    Use a soft inquiry wherever possible.</li>
                  <li>Use old credit cards once every few months to keep them active.</li>
                  <li>Keep your credit usage to ≤ 30% of your total credit limit across all accounts.</li>
                  <li>Automate credit card bill payments to ensure you always pay on time and meet the minimum amount (at least).</li>
                  <li>Check your credit score and history at least once a year with a free service like Credit Karma or
                    AnnualCreditReport.com to ensure your reports are accurate.</li>
                  <li>Make larger repayments on high-interest loans, such as credit card debt.</li>
                  <li>Increase your credit limit on individual accounts by using them responsibly, increasing your income, or
                    requesting a credit limit increase (via a soft inquiry).</li>
                  <li>Use an online tool like Mint or Personal Capital to track your spending.</li>
                </ul>
            </div>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 4,
      name: 'Retirement Investing',
      href: '#',
      imageSrc: '/images/retirement.png',
      imageAlt: "people walking along the beach",
      step: '4',
      description: 'Building a nest egg',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Common Accounts</Tab>
          </TabList>
          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Now that we&apos;ve covered budgeting, saving, and building credit, let&apos;s talk about retirement investing.
                The typical timeframe for investing in preparation for retirement is 30-40 years, with many people aiming to retire at age 67.
                However, due to longer lifespans, people&apos;s retirement age may get postponed until their early 70s, expanding the time horizon.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>Designed for retirement saving, there are several investment accounts with special tax advantages (i.e. tax breaks) that reward you
                for contributing towards your retirement.
                These advantages typically take 1 of 2 forms:</p>
                <ol className="list-decimal ml-6">
                  <li>Pre-Tax Benefits: Each contribution qualifies as a pre-tax deduction, reducing your federal tax bill for the year you made it.
                    When you withdraw in retirement, you will pay taxes on the growth of your investment through income tax.</li>
                  <li>Post-Tax Benefits: You make contributions using post-tax money, so Uncle Sam has already taken their share.
                    But, when you withdraw your funds in retirement, you do not pay any income taxes on the capital gains.</li>
                </ol>
            </div>
            <div className="card-paragraph mb-2">
              <p>It&apos;s recommended to use both pre- and post-tax accounts to give yourself financial flexibility and options in your retirement years.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
                <p>Here&apos;s more about the most common types of accounts:</p>
                <ul className="list-decimal ml-6">
                    <li>401(k): The 401(k) is an employer-sponsored retirement account where you can contribute up to $22,500 in pre-tax dollars per
                      year (for 2023). Your contributions decrease your current tax bill, but you will get taxed when you withdraw funds in the future.
                      You can begin taking withdrawals at 59 1/2 years old.
                    </li>
                    <li>Roth IRA: You contribute to a Roth IRA using post-tax dollars.
                      With an annual contribution limit of $6,500 (for 2023), you can invest in most asset classes, including stocks, bonds, and even crypto.
                      With this account, your investments will grow tax-free and you can withdraw from your account starting at age 59 1/2 without needing
                      to pay capital gains taxes.
                    </li>
                    <li>Roth-401(k): With an annual contribution limit of $22,500, you can add pre-tax money to the 401(k) portion and after-tax funds to the
                      Roth portion. This account allows you to bypass the $6,500 limit on a Roth IRA.
                      You get the best of both worlds with this account and can make withdrawals starting at 59 1/2.
                      You can still earn an employer contribution tool.
                    </li>
                    <li>Traditional IRA: You fund a traditional IRA through pre-tax contributions that count as tax deductions, saving you money on this
                      year&apos;s taxes. Your investments grow tax-free, but you must pay taxes on your withdrawals in retirement.
                      You msut begin taking required minimum distributions (RMDs) at 72.
                    </li>
                    <li>HSA: You become eligible for this account if you have a high-deductible health insurance.
                      Once you have $1,000 in the account, you can invest in the market.
                      The HSA is triple-tax advantaged, where you can (1) contribute to the HSA with pre-tax dollars,
                      (2) invest HSA contribution into the stock market, where it grwos tax-free once you have $1,000 in contributions,
                      (3) spend tax-free on eligible health expenses.
                    </li>
                  </ul>
              </div>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 5,
      name: 'Create a Financial Plan',
      href: '#',
      imageSrc: '/images/financialPlan.png',
      imageAlt: "pen and yearly planner on white table",
      step: '5',
      description: 'Organize your finances',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Steps 1-3</Tab>
            <Tab>Steps 4-7</Tab>
          </TabList>
          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Creating a financial plan will organize your financial life and help you realize your vision of future financial health.
                Here&apos;s a primer on our 7-step take to make your own financial plan:</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">1. Calculate Your Net Worth</p>
              <p>To find your net worth, subtract your total liabilities from your total assets.
                Your assets include things like your house, stocks, and retirement accounts while your liabilities include student loans,
                credit card debt, auto loans, etc.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">2. Budgeting / Cash Flow Planning</p>
              <p>By knowing what you earn and how you spend, you can find ways to better save, invest, or payoff debt.
                Use an app like Mint or Personal Capital to automate the process or check out our personal finance resources if you
                want to do it yourself.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p className="font-medium">3. Set Financial Goals</p>
              <p>By laying out what you want to accomplish, you can work backwards to make a roadmap of what success looks like for you.
                Make sure to attach a specific dollar value and a target date to your goals.
                Prioritize them based on which are most important.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
                <p className="font-medium">4. Build an Emergency Fund</p>
                <p>If you lose your job or your car breaks down, having money saved can help you make ends meet.
                  Save enough to cover 3-6 months of your basic living expenses (rent, food, utilities) and store it in a high-yield
                  savings account.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p className="font-medium">5. Manage Your Debt</p>
                <p>If you have any high-interest debt, make sure to pay it off as soon as possible. Every dollar you pay in interest
                  accrued is one dollar less towards your goals.
                  If you struggle with credit card debt, consider using 0% APR credit cards.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p className="font-medium">6. Start Investing</p>
                <p>Investors have many assets to choose from (e.g., stocks, bonds, real estate).
                  Passive investors build wealth over time while active investors grow their money as fast as possible.
                  Investing can be as simple or difficult as you make it.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p className="font-medium">7. Track Your Progress</p>
                <p>Once you have a plan, you need to track your progress and adjust as you go.
                  Tinker with your budget and investments as needed.</p>
              </div>
            </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 6,
      name: 'Grow Your Net Worth',
      href: '#',
      imageSrc: '/images/netWorth.png',
      imageAlt: "unicorn ceramic with coins on a table",
      step: '6',
      description: 'Get rich sustainably',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Tips and Tricks</Tab>
          </TabList>
          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Let&apos;s be real — you want to learn personal finance to get richer. Don&apos;t we all.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>The bad news? Unfortunately, for most of us, there&apos;s no way to get rich quick overnight — it&apos;s all
                about the long game.</p>
            </div>
            <div className="card-paragraph mb-2">
              <p>We&apos;re capping off this series by focusing on 8 ways to build your net worth (the difference between your
                assets minus liabilities). The goal is to increase the value of your assets and reduce that of your liabilities.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
                <p>1. Pay off high-interest debt quickly, starting with the balance with the highest interest rate.
                  Carrying high-interest debt month over month can cause your debt to snowball and make it a nightmare to manage —
                  preventing you from achieving other financial goals.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>2. Debt is not always your enemy. Taking on a loan strategically to acquire income-generating assets,
                  such as a duplex for house-hacking or an established business, can allow you to grow your net worth quickly.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>3. Pursue opportunities to refinance loans as they come up to lower the amount of money you pay over the loan&apos;s
                  lifetime. It makes sense if you can reduce your interest by at least 2%.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>4. Adopt a pay-yourself-first mentality.
                  Set aside money for investing and saving every paycheck to build a safety net and achieve your financial goals faster.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>5. Align your spending with your values and interests.
                  You&apos;ll appreciate your purchases more and reduce the likelihood of overspending or buying things you don&apos;t need.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>6. Advocate for yourself and negotiate for rate increases or a raise when you are performing at the next level.
                  Focus on high-profile tasks with meaningful impact and document your results to build your case.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>7. Spend a few years honing your expertise in your profession, then perform independent consulting or coaching as a side hustle or
                  full-fledged business to earn additional income.</p>
              </div>
              <div className="card-paragraph mb-2">
                <p>8. Keep up with the latest trends in your field and set aside time to learn new skills/tools to ensure you are constantly growing
                  and learning. Many online platforms like Udemy, Coursera, or LinkedIn offer a wide variety of content.
                  Even leading universities like MIT and Harvard offer free online classes.</p>
              </div>
            </TabPanel>
        </Tabs>
      ),
    },
  ]

  const products2: Product[] = [
    {
      id: 1,
      name: '50/30/20 Budget Rule',
      href: '#',
      imageSrc: '/images/503020.png',
      imageAlt: "One dollar bill by the wall",
      step: '1',
      description: 'A simple way to manage your money',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Needs</Tab>
            <Tab>Wants</Tab>
            <Tab>Savings and Debt</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">Popularized by Elizabeth Warren in her book, All Your Worth: The Ultimate Lifetime Money Plan,
            the 50/30/20 is a simple and intuitive way to build a financial budget.
            Think of the 50/30/20 as a rough guideline or template to help you manage and save money.
            It is not a hard-and-fast rule and does not track your budgeting process down to the wire for you.</p>

            <div className="card-paragraph mb-2">
              <p>This particular rule divides your after-tax income into three categories:</p>
              <ul className="list-decimal ml-6">
                <li>50% of your income: Needs</li>
                <li>30% of your income: Wants</li>
                <li>20% of your income: Savings and Debt</li>
              </ul>
            </div>

            <p className="mt-4 mb-2">Let&apos;s dive into what each category means!</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Needs are things that you absolutely cannot live without, your “must-haves.”
                They include rent or mortgage payments, groceries, healthcare, insurance, utilities, etc.
                To reiterate, these are expenditure types that you can&apos;t avoid and are necessary for your survival.</p>
            </div>
            <p className="mt-4 mb-2">The “needs” category does not include any extras in your life, such as boba, entertainment,
                subscriptions, vacations, etc. Per this guideline, you should spend roughly half of your take-home income to cover
                all your needs. If you are spending more than 50%, it may be time to cut down on some expenses or downsize your lifestyle.
                For example, if you live alone, consider getting roommates to lower the cost of the rent.
                If your family has multiple cars, consider downsizing to one or two cars instead or taking public transportation more often.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Next up on the list is wants. That will include anything you can reasonably live without, such as video games,
                new clothes, plane tickets, streaming services, amusement parks, etc.
                Whatever you consider as fun or has entertainment value falls in this category.</p>
            </div>
            <p className="mt-4 mb-2">While it may not seem like it, wants are all optional.
                They are things in our life that bring us pleasure and joy.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Finally, there are savings and debt. In terms of savings, this encompasses retirement accounts, emergency funds, and
                investment accounts. Debt would include anything that has charges interest, such as credit card debt or student loans.
                You can budget your income between savings and debt however you&apos;d like depending on your financial circumstances.</p>
            </div>
            <p className="mt-4 mb-2">Financial experts recommend keeping 3-6 months of your expenses in an emergency fund as a general
            rule of thumb. While the amount you decide to stash away will largely depend on your personal circumstances, having a bit
            of cash on the side will allow you to have the bandwidth to accommodate any unforeseen expenses.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 2,
      name: '80/20 Budget Rule',
      href: '#',
      imageSrc: '/images/8020.png',
      imageAlt: "A person holding a stack of money",
      step: '2',
      description: 'A simplified version of the 50/30/20',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>How It Works</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">The 80/20 budget is a simplified version of the 50/30/20, but it takes a “pay yourself first” approach to the budget process.
            Instead of setting aside money after all your expenses get paid, you put 20% of your after-tax income immediately into your savings and investments
            accounts before spending the rest, or 80%.</p>

            <p className="mt-4 mb-2">For people who don&apos;t want to have a rigid structure or constantly track their spending, the 80/20 budget is a great
            way to get started. With this plan, you do not need to identify all your needs and wants line by line, which can be pretty subjective from person
            to person anyways.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">To apply this to your finances, first multiply your take-home pay by 0.2, which is how much you should set aside for your
            savings and investments. For example, if you get $1,000 for each paycheck, put $200 directly into your savings and investment accounts.
            You will then have $800, or 0.8 left, to cover all your needs and wants, including rent, utilities, gas, entertainment, etc.</p>

            <p className="mt-4 mb-2">To make this easier for yourself, schedule a recurring automatic withdrawal from your bank account.
            That way, when you get paid, your bank will automatically take 20% of your paycheck and send it to a savings or investment account of your choice.</p>

            <p className="mt-4 mb-2">What&apos;s great about the 80/20 rule is that it is simple to follow, easy to maintain, and allows for flexibility.
            However, that can also be considered a drawback as it leaves a lot of room for uncertainty and discretionary spending.
            Because you are not actively tracking your categories of expenses, it&apos;s much easier to overspend without realizing it.</p>

            <p className="mt-4 mb-2">If you are a beginner at budgeting, we recommend using this plan as a springboard for your financial planning process rather
            than as the endpoint. Think of 20% as the minimum you should save rather than the maximum.
            If you can save more than 20%, push for a 70/30 savings rate and then try escalating from there.</p>

            <p className="mt-4 mb-2">The more you save and invest, the larger your nest egg will be, which will give you more flexibility and opportunities
            in your financial future. If you aggressively save and invest early on, you can use that money in the future to buy real estate, start your own
            business, take more career risks, retire earlier, etc.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 3,
      name: 'Envelope System',
      href: '#',
      imageSrc: '/images/envelope.png',
      imageAlt: "A brown envelope hanging",
      step: '3',
      description: 'An old-school approach to budgeting',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>How It Works</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">The envelope system is an old-school and hands-on cash approach with budgeting. As the name implies, you are essentially putting spending
            limits on various categories. The “envelope” portion refers to physically putting cash into envelopes and marking them with a particular expense category, such as
            groceries, rent, restaurants, entertainment, etc.</p>

            <p className="mt-4 mb-2">By stashing a set amount of cash into each envelope, you will know exactly how much you spend in each category every month
            and how much you have left at the end of the month. If you tend to overspend in a specific category, such as restaurants, having this system will force
            you to spend less.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Using the envelope system keeps you on track and enforce discipline. Once you spend all the cash in each envelope, that&apos;s
            it for the month. By aggressively sticking to only the amount in each envelope, you can hold yourself accountable and make it less likely for you to overspend.</p>

            <p className="mt-4 mb-2">This strategy is a common practice when it comes to gambling. Let&apos;s say that you are in Las Vegas and plan to have a gambling budget
            of $300 in cash. To ensure that you stick to your allotted amount, you would withdraw $300 in cash, stick it in an envelope, and strictly play with that amount of money.</p>

            <p className="mt-4 mb-2">While this wouldn&apos;t necessarily make sense to apply for other expense categories, such as a mortgage payment or car payment,
            there are plenty of digital envelope apps that can assist you in marking expense category data and putting a spending cap on them.</p>

            <p className="mt-4 mb-2">You can use both the envelope system and the 50/30/20 rule at the same time.
            Once you budget your expenses under each category of the 50/30/20, you can then put cash in different envelopes that fall under those three buckets.
            Remember, the purpose of doing this is to carefully track any changes and be more critical of your spending habits.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 4,
      name: 'Zero-Based Budgeting',
      href: '#',
      imageSrc: '/images/zerobased.png',
      imageAlt: "Person holding a calculator",
      step: '4',
      description: 'A strategic approach to budgeting',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>How It Works</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">Zero-based budgeting, or zero-sum budgeting, is a time-consuming process. It was created by Peter Pyhrr, a former Texas
            Instruments account manager, in the 1960s. Under this plan, you start from a “zero base” and then take a strategic, high-level approach to your
            budget process. Each penny of your income is accounted for as you give a purpose to every expense.</p>

            <p className="mt-4 mb-2">When you use a zero-based budget, you will know exactly how much you are spending and where your money is going.
            Rather than spending mindlessly every month, use this as a framework to prioritize your most important expenses and gain visibility into your
            spending habits. That includes figuring out how much to budget for your needs, wants, debt, investments, etc.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">The goal here is to follow this simple equation:</p>
            <p className="mt-4 mb-2">After-tax income — Expenditures (Expenses + Savings & Investments) = 0</p>

            <p className="mt-4 mb-2">The downsides of using a zero-based budget are that it can be time-consuming to create and does not work well if you
            have unpredictable income or variable expenses. With this budgeting plan, you are tracking every last dollar of your take-home pay, which can be
            difficult if your income fluctuates monthly or if you have frequent unexpected expenses.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 5,
      name: 'Value Proposition Budgeting',
      href: '#',
      imageSrc: '/images/valueProp.png',
      imageAlt: "Person holding a lightbulb in the sunset",
      step: '5',
      description: 'Spend with intent',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Spending Intentionally</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">Value proposition budgeting is geared towards those who want to be very frugal with their money and spending habits.
            Budgeting will now involve questioning each spending choice with this simple challenge: “Is this expenditure providing me with any value?”</p>

            <p className="mt-4 mb-2">There are many ways to look at this. For example, would you rather purchase a $6 cup of coffee or make one at home for
            less than $1? Would you rather buy a brand new car or do some due diligence and purchase a well-maintained used, older car for thousands of dollars less?
            Would you rather wear limited edition designer brand clothing or head to your nearest Goodwill or vintage shop?</p>

            <p className="mt-4 mb-2">Once you apply these types of questions in your everyday budgeting and spending activities, you will begin to see minor savings
            stack up over time. Value proposition budgeting is more of a money mindset than anything. Although it may mold you to become a stickler with your money,
            it is worth adding to your budget guidelines to help you achieve your financial goals.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Value proposition budgeting (and budgeting in general) is all about spending intentionally and not keeping with the Joneses.
            With that said, it&apos;s not necessarily about being as cheap as possible. Nobody wants to be known as a cheapskate or penny pincher.</p>

            <p className="mt-4 mb-2">Find the right balance for you while keeping your big-picture dreams in focus. You do not need to deprive yourself of things
            that bring you joy to save money or mull over a $10 or $20 expense. Life is way too short for that! Instead, think about the value of the things you are
            spending your money on and intentionally choose what you want to keep in your life and what you want to give away.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 6,
      name: 'Best Budgeting Apps',
      href: '#',
      imageSrc: '/images/budgetApps.png',
      imageAlt: "Person holding a phone showing expenses",
      step: '6',
      description: 'Track your budget hassle-free',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Mint</Tab>
            <Tab>Personal Capital</Tab>
            <Tab>YNAB</Tab>
            <Tab>Goodbudget</Tab>
            <Tab>Spreadsheets</Tab>
          </TabList>
          <TabPanel>
            <p className='font-medium'>Mint</p>
            <div className="card-paragraph mb-2">
              <p>Mint allows you to connect all your financial accounts, including cash accounts, credit cards, loans, investments, and properties.
                Once all your accounts get added, you&apos;ll be able to see all your recent transactions on one screen and add notes or tags to them.
                You can also create monthly budgets in specific categories and get alerts when you overspend or whenever there are any suspicious
                activities on your account.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>Personal Capital</p>
            <div className="card-paragraph mb-2">
              <p>Similar to Mint, Personal Capital allows you to link your cash accounts, investments, and credit cards to the app.
                However, Personal Capital is primarily an investment app rather than a budgeting app. While you can create monthly budgets,
                its more powerful features include a net worth tracker, cash flow monitoring, portfolio breakdowns, holdings and allocations
                recommendations, and retirement planning.
                It also displays charts of your net worth and the aggressiveness of your portfolio allocation based on your data.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>You Need a Budget (YNAB)</p>
            <div className="card-paragraph mb-2">
              <p>If you are serious about budgeting, YNAB is the perfect choice for you as the platform uses the zero-based budgeting strategy.
                When you use YNAB, the money will go directly into a “To be budgeted” bucket whenever you get paid.
                Then from there, you need to assign a purpose to every dollar.
                If you overspend in one category, you need to compensate by moving money out of another area.</p>
            </div>
            <p className="mt-4 mb-2">For example, if your friend invites you to a fancy dinner party, but you used your budget for restaurants already,
            you would move money from another category, such as entertainment, into the restaurant bucket.</p>
            <p className="mt-4 mb-2">You can connect all your accounts, set goals, personalize spending categories, contribute to your savings accounts, and access resources such as
            budgeting tips and free daily workshops. Note that YNAB will cost $11.99 a month or $84 a year.
            However, you can sign up for a 34-day free trial and students can get a 1-year subscription for free.</p>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>Goodbudget</p>
            <div className="card-paragraph mb-2">
              <p>If you want to take a modern approach to the envelope system, Goodbudget is your best bet.
                With Goodbudget, you can assign your after-tax income to virtual envelopes to keep track of your finances.
                The app allows you to connect multiple devices to the same account, which is helpful for families who share a budget.</p>
            </div>
            <p className="mt-4 mb-2">Unlike the apps mentioned above, you have to manually add account balances and assign money to each spending category, or envelope.
            However, you can create weekly, monthly, and six-month envelopes, track your debt payoff process, and set aside money for big-ticket expenses.</p>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>Spreadsheets</p>
            <div className="card-paragraph mb-2">
              <p>If you&apos;re a stickler for details, many of these apps will not be able to do everything you want.
                One option is to build your own spreadsheet or look for one online on a site like Reddit or Etsy.
                With spreadsheets, you can go all out and customize it to your liking.</p>
            </div>
          </TabPanel>
        </Tabs>
      ),
    },
  ]

  const products3: Product[] = [
    {
      id: 1,
      name: 'Types of Credit',
      href: '#',
      imageSrc: '/images/hand-holding-credit-cards.png',
      imageAlt: "hand holding 4 credit cards",
      step: '1',
      description: 'The different types of credit',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Revolving Credit</Tab>
            <Tab>Installment Credit</Tab>
            <Tab>Service Credit</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">The word &quot;credit&quot; has many meanings, with the most common being a contractual arrangement where
            a borrower receives funds or assets and agrees to repay the lender later, often with interest.</p>

            <div className="card-paragraph mb-2">
              <p>Common forms of credit include:</p>
              <ul className="list-decimal ml-6">
                <li>Credit cards</li>
                <li>Car loans</li>
                <li>Personal loans</li>
                <li>Mortgages</li>
                <li>Student loans</li>
                <li>Lines of credit</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Revolving credit allows borrowers to access funds up to a predetermined credit limit and make flexible repayments based on their
            outstanding balance. Credit cards and lines of credit are common examples of revolving credit. With revolving credit, borrowers can repeatedly borrow and
            repay within the credit limit. Minimum monthly payments are typically required, but the borrower has the option to carry a balance and pay interest on the
            remaining debt. It is best suited for short-term borrowing and managing fluctuating expenses.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Installment credit involves borrowing a fixed amount of money and repaying it in regular installments over a predetermined period. Examples
            of installment credit include auto loans, mortgages, and personal loans. The loan amount, interest rate, and repayment term are agreed upon upfront. Borrowers make
            fixed monthly payments that include both principal and interest, ensuring that the debt is fully repaid by the end of the term. It is commonly used for long-term
            financing needs</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Service credit refers to the credit agreements individuals have with service providers such as gas and electric utilities, cable and internet
            providers, cell phone companies, and gyms. These agreements involve receiving services on a monthly basis with the expectation of payment afterward. While service payment
            history can impact credit scores, note that not all service payments are automatically reported to credit bureaus.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 2,
      name: 'Credit Scores',
      href: '#',
      imageSrc: '/images/darts-on-target.jpg',
      imageAlt: "target with darts on it",
      step: '2',
      description: 'Explaining what credit scores are',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Factors</Tab>
            <Tab>Range</Tab>
            <Tab>Building Credit</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">Your credit score holds significant importance in your financial life. It serves as a measure of your creditworthiness
            and plays a crucial role in determining your eligibility for loans, credit cards, and other forms of credit. Lenders use your credit score to assess
            the risk associated with lending you money and to determine the interest rates and terms they offer.</p>

            <p className="mt-4 mb-2">The higher your credit score, the higher your chances of being approved for various financial products. It can also help you
            secure more favorable terms, such as lower interest rates and higher credit limits. Moreover, a solid credit score can positively impact other aspects
            of your life, such as renting an apartment, getting insurance coverage, or even landing certain job opportunities.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>The 5 factors that make up your credit score include:</p>
              <ul className="list-decimal ml-6">
                <li>Payment history (35%): Your payment history includes details about whether you have made timely payments on your credit accounts, including
                  loans and credit cards. Consistently making your payments on time and in full will help you build credit while late or missed payments will cause
                  your credit score to drop.</li>
                <li>Credit utilization (30%): Your credit utilization ratio is the percentage of your total available credit you use. Keeping your credit utilization
                  ratio low, ideally below 30%, demonstrates responsible credit management and can boost your score.</li>
                <li>Length of credit history (15%): The length of time you have held various credit accounts plays a role in determining your creditworthiness.
                  A longer credit history provides more data for lenders to assess your borrowing habits and repayment patterns.</li>
                <li>Credit mix (10%): Having a diverse mix of credit types, such as a combination of credit cards, loans, and a mortgage, indicates that you can
                  handle different forms of credit responsibly.</li>
                <li>New credit (10%): Opening multiple new credit accounts within a short period can raise concerns for lenders, as it may indicate financial
                  instability. Additionally, lenders will pull a hard inquiry on your credit each time you apply for a new loan,  which can ding your score up to 5 points.</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
          <p className="mt-4 mb-2">There are multiple credit scoring models, including FICO, VantageScore, and others. Credit score ranges may vary
          slightly depending on the credit scoring model used. Additionally, lenders may have additional criteria for evaluating creditworthiness.</p>
            <div className="card-paragraph mb-2">
              <p>Here is the general range of credit scores:</p>
              <ul className="list-disc ml-6">
                <li>Excellent (800-850): Individuals with an excellent credit score have demonstrated exceptional credit management. They have a history of consistently making
                  on-time payments, maintaining low credit utilization, and managing diverse credit accounts responsibly. They are likely to have access to the best interest
                  rates, financial offerings, and terms and conditions.</li>
                <li>Very Good (740-799): Individuals with a very good credit score have a solid credit history. They have shown responsible financial behavior, with few late
                  payments and a low credit utilization ratio. Lenders consider them low risk and offer competitive interest rates and favorable terms.</li>
                <li>Good (670-739): Individuals with a good credit score have a satisfactory credit history. They have managed their credit responsibly, although there might be
                  a few minor delinquencies or higher credit utilization. They can still qualify for loans and credit cards, but interest rates may be slightly higher.</li>
                <li>Fair (580-669): Individuals with a fair credit score have a less-than-ideal credit history. They may have occasional late payments, higher credit card balances,
                  or limited credit history. Access to credit becomes more challenging, and interest rates are higher.</li>
                <li>Poor (300-579): Individuals with a poor credit score have significant credit issues, such as multiple delinquencies, defaults, or bankruptcy. They face difficulty
                  obtaining credit and may require specialized credit products or secured loans. Rebuilding credit through responsible financial practices is essential.</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Your credit score affects many aspects of your life, from qualifying for a mortgage to getting an auto loan at a favorable rate. Whether you are
            searching for your forever home or simply applying for a new credit card, having good credit is key to your financial success.</p>

            <div className="card-paragraph mb-2">
              <p className="mt-4 mb-2">If your credit score is lower than you&apos;d like, there are several steps you can take to build your credit back up:</p>
              <ul className="list-disc ml-6">
                <li>If you have the means to pay off some of your debt, tackle your revolving debt first, such as your credit card debt. Usually, revolving balances come with
                  higher interest rates, which can quickly accumulate in a short amount of time.</li>
                <li>A single late payment can damage your credit score by up to 110 points! If you generally make your payments on time and forgot to pay once or twice, ask your
                  issuer if they can forgive your mistakes and not report it to the credit bureaus.</li>
                <li>Review your credit report at least 1x per year at AnnualCreditReport.com. If you see any inaccurate information or fraudulent activity, you have a right to dispute
                  it and get the data removed. If your dispute gets approved, this can significantly improve your credit score.</li>
                <li>Your credit utilization makes up a large chunk of your credit score, so it&apos;s crucial to keep it low. You can either pay down your balances or request a credit line
                  increase to raise your total avaiable credit.</li>
                <li>If you have multiple credit cards, it may be hard to keep track of all of them. If you do not use your card for more than 6-12 months, your card issuer may close
                  your account, thus lowering the average age of your credit cards. To avoid this, you should use each of your cards at least 1x every couple of months to keep it active.</li>
                <li>If you do not have the resources to pay off your debt, consider getting a 0% APR credit card with a balance transfer option. That will buy you 12-16 months to pay off your debt
                  before the interest starts accruing again.</li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 3,
      name: 'Credit Cards',
      href: '#',
      imageSrc: '/images/amex-airfrance-card.png',
      imageAlt: "person holding amex card",
      step: '3',
      description: 'Making the most of your credit cards',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types of Credit Card</Tab>
            <Tab>Credit Card Churning</Tab>
            <Tab>Responsible Usage</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">Credit cards are a widely used financial tool that offer convenience and flexibility in making purchases, both in-person and online.  When used responsibly, credit
            cards provide a convenient way to manage expenses, build credit history, and access various benefits and rewards.</p>
            <p className="mt-4 mb-2">To obtain a credit card, you must apply with a card issuer like American Express or Chase. The issuer assesses your creditworthiness by reviewing your credit history,
            income, and other relevant factors. Based on this evaluation, the issuer determines the credit limit and the terms of the card. The credit limit is the maximum amount you can borrow using the card</p>
            <p className="mt-4 mb-2">Once approved and issued, the cardholder can use the credit card to make purchases at participating merchants, both online and offline. The card includes a unique card number,
            an expiration date, and a security code that ensures secure transactions.</p>
            <p className="mt-4 mb-2">Credit card activity is recorded during a billing cycle, typically lasting around 30 days. At the end of the billing cycle, you will receive a statement summarizing the
            transactions made during that period, the outstanding balance, the minimum payment due, and the due date for payment. You have the flexibiilty to choose how much to pay towards your credit card balance.
            If you do not pay the full balance, the outstanding amount will start acrruing interest beyond the grace period (usually 21 days from the statement date).</p>
            <p className="mt-4 mb-2">Many credit cards offer rewards programs and benefits. Cardholders can earn cashback, points, or airline miles based on their spending, which can be redeemed for various rewards,
            such as travel, merchandise, or statement credits. Additionally, credit cards often provide additional perks like travel insurance, purchase protection, extended warranties, and access to exclusive events.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p className="mt-4 mb-2">There are many different types of credit cards. Here are some of the most common ones:</p>
              <ul className="list-disc ml-6">
                <li>Travel Credit Cards: Designed for frequent travelers, these cards provide travel-related perks like airline miles, hotel discounts, airport lounge access, and travel insurance. They often offer bonus
                  rewards on travel-related expenses and may have partnerships with specific airlines or hotel chains.</li>
                <li>Cashback Credit Cards: These cards offer a percentage of the cardholder&apos;s spending as cashback. Cashback can be received as a statement credit, a direct deposit to a bank account, or a physical check.
                  They are a popular choice for individuals who prefer straightforward rewards or want rewards for everyday spending.</li>
                <li>Balance Transfer Credit Cards: These cards allow cardholders to transfer high-interest credit card debt to a new card with a lower or zero introductory interest rate (typically 12-18 months). This can
                  help individuals save on interest charges and pay off their debt more quickly.</li>
                <li>Secured Credit Cards: Designed for individuals with limited or poor credit history, secured cards require a security deposit that serves as collateral. They help individuals build or rebuild their
                  credit by demonstrating responsible card usage. Over time, with consistent and timely payments, individuals may qualify for unsecured credit cards.</li>
                <li>Student Credit Cards: Tailored for college students or young adults, these cards are designed to help students build credit responsibly. They often have lower credit limits and may offer features like
                  rewards for student-related expenses or tools to monitor spending habits.</li>
                <li>Business Credit Cards: Specifically designed for business owners, these cards offer features tailored to business needs. They provide tools for expense tracking, employee card management, and may offer
                  rewards on business-related spending categories. Business credit cards help separate personal and business expenses while providing financial flexibility for business operations.</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Credit card churning is a technique people use to extract maximum benefits from credit card rewards programs. The basic concept involves opening new credit card accounts, meeting the
            spending requirements to earn lucrative sign-up bonuses, and then closing the accounts before annual fees or interest charges apply. By continuously cycling through different credit cards, churners aim to amass
            a significant number of rewards points, miles, or cash back.</p>
            <p className="mt-4 mb-2">To effectively churn credit cards, individuals typically develop strategies to meet the spending thresholds within the required time frame. This may involve timing major purchases, prepaying
            expenses, or utilizing manufactured spending techniques. Churners also carefully monitor and keep track of their rewards programs, staying updated on promotional offers, bonus categories, and redemption options.</p>
            <p className="mt-4 mb-2">While credit card churning can be financially rewarding for those who can responsibly manage their credit and spending, there are potential downsides to consider. Some issuers may have specific
            terms and restrictions, such as limitations on eligibility for sign-up bonuses based on previous card relationships. Frequent credit card applications can also lead to inquiries on credit reports, which may temporarily
            lower credit scores. Moreover, keeping track of multiple cards, payment due dates, and potential fees is time-consuming.</p>
            <p className="mt-4 mb-2">It&apos;s worth noting that credit card churning is a controversial practice, and some credit card issuers actively discourage or restrict it. They may implement policies such as limiting sign-up
            bonuses to once per lifetime or imposing penalties for abusing rewards programs. Therefore, you should review the terms and conditions of each credit card agreement and remain informed about any policy changes.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p>Responsible credit card usage is crucial for maintaining a healthy financial life and maximizing the benefits of credit cards while minimizing potential risks. Here are some key principles to follow:</p>
              <ul className="list-disc ml-6">
                <li>Pay your bills on time to avoid late fees, penalties, and negative impacts on your credit score. Set up automatic payments or reminders to ensure you never miss a due date.</li>
                <li>Aim to keep your credit card balances well below the credit limit. High credit utilization can negatively affect your credit score.</li>
                <li>Ideally, pay your credit card balance in full each month to avoid accruing interest charges. If you can&apos;t pay the full balance, at least pay the minimum amount required.</li>
                <li>Use your credit cards wisely and avoid excessive spending. Only charge what you can afford to pay off within a reasonable timeframe.</li>
                <li>Regularly review your credit card statements to track your spending, identify any errors or unauthorized charges, and detect any potential fraudulent activity. Report any discrepancies to your credit card issuer promptly.</li>
                <li>Familiarize yourself with the terms and conditions of your credit card, including interest rates, fees, and rewards programs. This knowledge will help you make informed decisions and avoid unexpected surprises.</li>
                <li>Having multiple credit cards can be beneficial for managing expenses and earning rewards, but it&apos;s essential to keep the number of cards manageable.</li>
                <li>Safeguard your credit card details and personal information. Be cautious when making online purchases, and only provide your card information on secure and trusted websites. Report any lost or stolen cards immediately to
                  your card issuer so you do not get charged for purchases you didn&apos;t make.</li>
                <li>Obtain free copies of your credit report from the major credit bureaus (Equifax, Experian, and TransUnion) and review them for accuracy. Report any errors or discrepancies promptly to have them corrected.</li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 4,
      name: 'Leveraging Credit',
      href: '#',
      imageSrc: '/images/brown-leather-wallet.png',
      imageAlt: "hand holding leather wallet with credit card",
      step: '4',
      description: 'Maximze wealth creation',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Credit Cards</Tab>
            <Tab>Insurance Premiums</Tab>
            <Tab>Refinancing</Tab>
            <Tab>Real Estate</Tab>
          </TabList>
          <TabPanel>
            <p className="mt-4 mb-2">When using credit, there is good debt and bad debt. Good debt helps you generate income and increase your net worth down the line. Examples include higher education, real estate, and business loans. On the other
            hand, bad debt is typically used for depreciating assets or consumption, such as an expensive car or credit card debt.</p>
            <p className="mt-4 mb-2">When you have a very good or excellent credit score (750+), you are more likely to get better terms and conditions when applying for credit. This can include perks like higher credit limits, lower interest rates,
            and access to a broader range of financial tools.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">If you can manage your debt responsibly, use your credit cards for all your purchases. They can be a great way to build your credit history while getting paid for your everyday expenses.</p>
            <p className="mt-4 mb-2">To make the most of your credit cards, maximize your welcome bonuses. Before applying for a credit card, make sure you can meet the minimum spend requireement and pay off the balance in a reasonable amount of time.
            Depending on your monthly expenses, you may need to strategically plan ahead.</p>
            <p className="mt-4 mb-2">When choosing credit cards, evaluate the rewards structure and benefits carefully. Ideally, you want to choose credit cards that fit into your lifestyle. For example, if you spend a lot of money on restaurants and
            takeout, choose a card that awards you for dining. Note that while some credit cards come with hefty annual fees, their benefits may help you recoup most, if not all, of the costs.</p>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">When you sign up for an insurance policy, such as for healthcare or life insurance, your insurer charges you a premium. This premium is how much you have to pay for the policy, which can vary depending on your age,
            coverage, location, and other factors.</p>
            <p className="mt-4 mb-2">If you have been spending a lot of time rebuilding your credit and it is now much higher than it was when you first purchased your current policies, you can renegotate the price with your insurance companies. But,
            before going to your agent, shop around and get quotes from other insurance companies so you can find the best rate.</p>
          </TabPanel>

          <TabPanel>
            <div className="card-paragraph mb-2">
              <p className="font-medium">Auto Loans</p>
              <p>The rates for auto loans can vary anywhere from 0% to 20%. If you have a credit score above 750 and are paying 10% or more in interest, reach out to your lender to see if you can refinance to a lower rate. That way,
              you can cut down your interest significantly while putting the extra money towards other financial goals.</p>
            </div>

            <div className="card-paragraph mb-2">
              <p className="font-medium">Student Loans</p>
              <p>There is no limit to how many times you can refinance student loans. If any of your student loans have high interest rates, consider refinancing them to potentially save thousands of dollars over the life of your loan.</p>
            </div>

            <div className="card-paragraph mb-2">
              <p className="font-medium">Mortgages</p>
              <p>If you currently have a 30-year mortgage, you may want to refinance to a 15-year mortgage to lower your interest payments and pay off your balance quicker. If the current market is more favorable than when you first took out the mortgage,
                you may want to refinance to a lower interest rate to lower your monthly payments. If you started with an adjustable-rate mortgage (ARM), you may want to switch to a fixed mortgage to stabilize your interest rates. Or, if your home&apos;s value
                has significantly increased since you purchased it, you can do a cash-out refinance and use the money for home renovations or debt consolidation.</p>
            </div>
          </TabPanel>

          <TabPanel>
            <p className="mt-4 mb-2">Purchasing real estate is a tried and true strategy to acquire assets that appreciate over time and gradually build wealth.</p>
            <p className="mt-4 mb-2">Becoming a homeowner allows you to build equity while the value of your house appreciates over time. Unlike renting, where you pay your landlord, once you pay off your mortgage, the house is yours to keep. By then, its value
            will probably have appreciated significantly.</p>
            <p className="mt-4 mb-2">Buying investment properties can give you extra cash flow for generating wealth. If you are new to the investment property business, conduct research on how to purchase investment properties and grow your capital sustainably.</p>
            <p className="mt-4 mb-2">If you can manage your finances well, consider opening a home equity line of credit (HELOC) for emergencies. A HELOC is secured by your home equity and you can typically borrow 60-85% of the assessed value of your home minus the
            amount owed on your mortgage.</p>
          </TabPanel>
        </Tabs>
      ),
    },
  ]

export default function HomePage() {
  const navigation = [
    { name: 'Learn', href: 'learn' },
    { name: 'Dictionary', href: 'dictionary' },
    { name: 'About', href: 'about' },
  ]

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar navigation={navigation} />

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          {/* Setting Yourself Up For Success Series */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Setting Yourself Up For Financial Success</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault(); // prevent the default behavior of the hyperlink
                  setSelectedProduct(product);
                }}
              >
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 px-4 pb-2 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700 font-semibold">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Budgeting Strategies */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Budgeting Strategies to Reclaim Control Over Your Finances</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products2.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              onClick={(e) => {
                e.preventDefault(); // prevent the default behavior of the hyperlink
                setSelectedProduct(product);
              }}
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 px-4 pb-2 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700 font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.step}</p>
              </div>
            </div>
            ))}
          </div>

          {/* Credit 101 */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Breaking Down Credit</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products3.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              onClick={(e) => {
                e.preventDefault(); // prevent the default behavior of the hyperlink
                setSelectedProduct(product);
              }}
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 px-4 pb-2 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700 font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.step}</p>
              </div>
            </div>
            ))}
          </div>

          {selectedProduct && selectedProduct.hasTabs !== undefined && selectedProduct.hasTabs && (
            <Dialog
              open={selectedProduct !== null}
              onClose={() => setSelectedProduct(null)}
              className="fixed inset-0 z-50 overflow-y-auto"
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
            >
              <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="inset-0 bg-black opacity-10 static" />

                <div className="bg-white rounded-lg max-w-5xl mx-auto p-6 shadow-lg">
                  <Dialog.Title id="dialog-title" className="text-lg font-medium text-gray-900">{selectedProduct.name}</Dialog.Title>

                  <div className="mt-4 flex justify-between">
                    <p className="text-gray-800">{selectedProduct?.cardContent}</p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={() => setSelectedProduct(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          )}

        </div>
      </div>

      <Footer />
    </div>
  )
}
