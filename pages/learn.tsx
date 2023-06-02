import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  step: string;
  description: string;
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
    cardContent: (
      <>
        <p className="mt-4 mb-2">Before you start investing, it&apos;s crucial to build a financial safety net to protect yourself.
        This is where emergency funds and sinking funds come in.</p>

        <p className='font-medium'>Emergency Funds</p>
        <div className="card-paragraph mb-2">
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

        <p className='font-medium'>Sinking Funds</p>
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
      </>
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
      cardContent: (
        <>
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
        </>
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
      cardContent: (
        <>
          <p className='font-medium'>What Good Credit Does For You</p>
          <div className="card-paragraph mb-2">
            <p>Your credit score is like your grade for being a financially responsible adult.
              Having a strong credit score (≥720) and credit history opens up better financial opportunities for you —
              mainly favorable terms and conditions and better product offerings.
              Some of the benefits we&apos;ve had in the past that you can cash-in on include:</p>
              <ul className="list-decimal ml-6">
                <li>automatic increases in credit card limits</li>
                <li>sign-up offers for select rewards credit cards</li>
                <li>low-interest rate on personal loans</li>
                <li>lower auto insurance fees and rates</li>
                <li>credit check approval for rental applications</li>
              </ul>
          </div>

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
            <p>Waiting even 5 or 10 years to start saving can make a significant difference in your wealth trajectory.
              For example, if you set aside $1,000 today in an index fund like VOO or SPY, 20 years from now, that $1,000 would be worth ~$3,869.68.
              However, if you wait 10 years before investing the $1,000, you would only have $1,967.15, a nearly ~50% reduction!</p>
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
          <div className="card-paragraph mb-2">
            <p className="font-medium">Measuring Credit Scores</p>
            <p>Credit scores range from 300-850 points, though specific scores, such as for auto loans have different ranges.
              FICO credit scores fall within 1 of 5 ranges:</p>
              <ul className="list-decimal ml-6">
                <li>Excellent/Exceptional: 800-850</li>
                <li>Very Good: 740-799</li>
                <li>Good: 670-739</li>
                <li>Fair: 580-669</li>
                <li>Poor: 300-579</li>
              </ul>
            <p>FICO reports that the average U.S. credit score is 716, falling under the “Good” credit range.
              Even moving from the “Fair” to “Good” credit range by earning a score of 670 will lead to much more favorable
              financial offerings for various types of loans and rewards credit cards.</p>
          </div>
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
        </>
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
      cardContent: (
        <>
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
        </>
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
      cardContent: (
        <>
          <div className="card-paragraph mb-2">
            <p>Connecting the concepts we&apos;ve covered works like Lego bricks — you build something better by putting them together.
              Creating a financial plan will organize your financial life and help you realize your vision of future financial health.
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
        </>
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
      cardContent: (
        <>
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
        </>
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
      cardContent: (
        <>
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

          <p className='font-medium'>Needs</p>
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

          <p className='font-medium'>Wants</p>
          <div className="card-paragraph mb-2">
            <p>Next up on the list is wants. That will include anything you can reasonably live without, such as video games,
              new clothes, plane tickets, streaming services, amusement parks, etc.
              Whatever you consider as fun or has entertainment value falls in this category.</p>
          </div>
          <p className="mt-4 mb-2">While it may not seem like it, wants are all optional.
              They are things in our life that bring us pleasure and joy.</p>

          <p className='font-medium'>Savings and Debt</p>
          <div className="card-paragraph mb-2">
            <p>Finally, there are savings and debt.
              In terms of savings, this encompasses retirement accounts, emergency funds, and investment accounts.
              Debt would include anything that has charges interest, such as credit card debt or student loans.
              You can budget your income between savings and debt however you&apos;d like depending on your financial circumstances.</p>
          </div>
          <p className="mt-4 mb-2">Financial experts recommend keeping 3-6 months of your expenses in an emergency fund as a general
          rule of thumb. While the amount you decide to stash away will largely depend on your personal circumstances, having a bit
          of cash on the side will allow you to have the bandwidth to accommodate any unforeseen expenses.</p>
        </>
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
      cardContent: (
        <>
          <p className="mt-4 mb-2">The 80/20 budget is a simplified version of the 50/30/20, but it takes a “pay yourself first” approach to the budget process.
          Instead of setting aside money after all your expenses get paid, you put 20% of your after-tax income immediately into your savings and investments
          accounts before spending the rest, or 80%.</p>

          <p className="mt-4 mb-2">For people who don&apos;t want to have a rigid structure or constantly track their spending, the 80/20 budget is a great
          way to get started. With this plan, you do not need to identify all your needs and wants line by line, which can be pretty subjective from person
          to person anyways.</p>

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
        </>
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
      cardContent: (
        <>
          <p className="mt-4 mb-2">The envelope system is an old-school and hands-on cash approach with budgeting.
          As the name implies, you are essentially putting spending limits on various categories.
          The “envelope” portion refers to physically putting cash into envelopes and marking them with a particular expense category, such as groceries, rent,
          restaurants, entertainment, etc.</p>

          <p className="mt-4 mb-2">By stashing a set amount of cash into each envelope, you will know exactly how much you spend in each category every month
          and how much you have left at the end of the month. If you tend to overspend in a specific category, such as restaurants, having this system will force
          you to spend less.</p>

          <p className="mt-4 mb-2">Using the envelope system keeps you on track and enforce discipline. Once you spend all the cash in each envelope, that&apos;s
          it for the month. By aggressively sticking to only the amount in each envelope, you can hold yourself accountable and make it less likely for you to overspend.</p>

          <p className="mt-4 mb-2">This strategy is a common practice when it comes to gambling.
          Let&apos;s say that you are in Las Vegas and plan to have a gambling budget of $300 in cash.
          To ensure that you stick to your allotted amount, you would withdraw $300 in cash, stick it in an envelope, and strictly play with that amount of money.</p>

          <p className="mt-4 mb-2">While this wouldn&apos;t necessarily make sense to apply for other expense categories, such as a mortgage payment or car payment,
          there are plenty of digital envelope apps that can assist you in marking expense category data and putting a spending cap on them.</p>

          <p className="mt-4 mb-2">You can use both the envelope system and the 50/30/20 rule at the same time.
          Once you budget your expenses under each category of the 50/30/20, you can then put cash in different envelopes that fall under those three buckets.
          Remember, the purpose of doing this is to carefully track any changes and be more critical of your spending habits.</p>
        </>
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
      cardContent: (
        <>
          <p className="mt-4 mb-2">Zero-based budgeting, or zero-sum budgeting, is a time-consuming process.
          It was created by Peter Pyhrr, a former Texas Instruments account manager, in the 1960s.
          Under this plan, you start from a “zero base” and then take a strategic, high-level approach to your budget process.
          Each penny of your income is accounted for as you give a purpose to every expense.</p>

          <p className="mt-4 mb-2">When you use a zero-based budget, you will know exactly how much you are spending and where your money is going.
          Rather than spending mindlessly every month, use this as a framework to prioritize your most important expenses and gain visibility into your
          spending habits. That includes figuring out how much to budget for your needs, wants, debt, investments, etc.</p>

          <p className="mt-4 mb-2">The goal here is to follow this simple equation:</p>
          <p className="mt-4 mb-2">After-tax income — Expenditures (Expenses + Savings & Investments) = 0</p>

          <p className="mt-4 mb-2">The downsides of using a zero-based budget are that it can be time-consuming to create and does not work well if you
          have unpredictable income or variable expenses. With this budgeting plan, you are tracking every last dollar of your take-home pay, which can be
          difficult if your income fluctuates monthly or if you have frequent unexpected expenses.</p>
        </>
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
      cardContent: (
        <>
          <p className="mt-4 mb-2">Value proposition budgeting is geared towards those who want to be very frugal with their money and spending habits.
          Budgeting will now involve questioning each spending choice with this simple challenge: “Is this expenditure providing me with any value?”</p>

          <p className="mt-4 mb-2">There are many ways to look at this. For example, would you rather purchase a $6 cup of coffee or make one at home for
          less than $1? Would you rather buy a brand new car or do some due diligence and purchase a well-maintained used, older car for thousands of dollars less?
          Would you rather wear limited edition designer brand clothing or head to your nearest Goodwill or vintage shop?</p>

          <p className="mt-4 mb-2">Once you apply these types of questions in your everyday budgeting and spending activities, you will begin to see minor savings
          stack up over time. Value proposition budgeting is more of a money mindset than anything.
          Although it may mold you to become a stickler with your money, it is worth adding to your budget guidelines to help you achieve your financial goals.</p>

          <p className="mt-4 mb-2">Value proposition budgeting (and budgeting in general) is all about spending intentionally and not keeping with the Joneses.
          With that said, it&apos;s not necessarily about being as cheap as possible.
          Nobody wants to be known as a cheapskate or penny pincher.</p>

          <p className="mt-4 mb-2">Find the right balance for you while keeping your big-picture dreams in focus.
          You do not need to deprive yourself of things that bring you joy to save money or mull over a $10 or $20 expense.
          Life is way too short for that!
          Instead, think about the value of the things you are spending your money on and intentionally choose what you want to keep in your life and what
          you want to give away.</p>
        </>
      ),
    },
    {
      id: 6,
      name: 'Best Budgeting Apps',
      href: '#',
      imageSrc: '/images/budgetApps.png',
      imageAlt: "Person holding a phone showing expenses",
      step: '6',
      description: 'An old-school approach to budgeting',
      cardContent: (
        <>
          <p className='font-medium'>Mint</p>
          <div className="card-paragraph mb-2">
            <p>Mint allows you to connect all your financial accounts, including cash accounts, credit cards, loans, investments, and properties.
              Once all your accounts get added, you&apos;ll be able to see all your recent transactions on one screen and add notes or tags to them.
              You can also create monthly budgets in specific categories and get alerts when you overspend or whenever there are any suspicious
              activities on your account.</p>
          </div>
          <p className="mt-4 mb-2"></p>

          <p className='font-medium'>Personal Capital</p>
          <div className="card-paragraph mb-2">
            <p>Similar to Mint, Personal Capital allows you to link your cash accounts, investments, and credit cards to the app.
              However, Personal Capital is primarily an investment app rather than a budgeting app. While you can create monthly budgets,
              its more powerful features include a net worth tracker, cash flow monitoring, portfolio breakdowns, holdings and allocations
              recommendations, and retirement planning.
              It also displays charts of your net worth and the aggressiveness of your portfolio allocation based on your data.</p>
          </div>

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

          <p className='font-medium'>Goodbudget</p>
          <div className="card-paragraph mb-2">
            <p>If you want to take a modern approach to the envelope system, Goodbudget is your best bet.
              With Goodbudget, you can assign your after-tax income to virtual envelopes to keep track of your finances.
              The app allows you to connect multiple devices to the same account, which is helpful for families who share a budget.</p>
          </div>
          <p className="mt-4 mb-2">Unlike the apps mentioned above, you have to manually add account balances and assign money to each spending category, or envelope.
          However, you can create weekly, monthly, and six-month envelopes, track your debt payoff process, and set aside money for big-ticket expenses.</p>

          <p className='font-medium'>Spreadsheets</p>
          <div className="card-paragraph mb-2">
            <p>If you&apos;re a stickler for details, many of these apps will not be able to do everything you want.
              One option is to build your own spreadsheet or look for one online on a site like Reddit or Etsy.
              With spreadsheets, you can go all out and customize it to your liking.</p>
          </div>
        </>
      ),
    },
  ]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                onClick={() => setSelectedProduct(product)}
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
            onClick={() => setSelectedProduct(product)}
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

          {selectedProduct && (
            <Dialog
              open={true}
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
                    <p className="text-sm text-gray-500">{selectedProduct.cardContent}</p>
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
