import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"
import { Dialog } from '@headlessui/react'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
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
    name: 'Banking Basics',
    href: '#',
    imageSrc: '/images/plant-in-money.png',
    imageAlt: "Plant in rolled up euro",
    step: '1',
    description: "A beginner's guide to banking",
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Money</Tab>
          <Tab>Interest</Tab>
          <Tab>Compound Interest</Tab>
          <Tab>Annual Percentage Yield</Tab>
          <Tab>FDIC</Tab>
          <Tab>ATMs and Cards</Tab>
        </TabList>
        <TabPanel>
          <p className="font-medium">What is money?</p>
          <p>Money is anything you use to buy or sell goods and services and to store value, deriving its worth from the collective agreement of its users. It can take various forms, including physical or electronic currencies and financial
            accounts. The flexibility of money stems from its social nature, allowing it to be any item that holds agreed-upon value.</p>

          <p className="font-medium mt-4">How does money work?</p>
          <p className="mb-2">Money functions as a medium of exchange, facilitating efficient trade between parties who recognize its value. Additionally, it serves as a store of value, enabling individuals to preserve funds until they are
          needed for future purchases. Unlike the barter system, where goods and services are directly traded, money offers greater convenience and flexibility in economic transactions.</p>
          <p>Modern money typically lacks inherent value beyond its agreed-upon worth. While historical forms of money, such as natural resources or precious metals, held intrinsic utility, today&apos;s currencies rely on their societal acceptance.</p>

          <p className="font-medium mt-4">Why not just barter?</p>
          <p>Bartering, while suitable for limited exchanges, presents challenges on a larger scale. It requires finding individuals with mutually desired goods or services, creating complexities in matching needs and timing. Moreover, barter-based
            value storage is often impractical, as perishable goods can spoil or lose value over time, hindering the ability to afford essential necessities.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">What is interest?</p>
          <p className="mb-2">Interest is the price of debt. When you take out a loan, you accrue debt and pay interest. When you lend money to someone (such as a bank), you extend credit and receive interest.</p>
          <p className="mb-2">Typically quoted as an annual rate, interest requires additional repayments beyond the loan amount or deposit, resulting in the borrower repaying more than the borrowed sum and making loans profitable for lenders.</p>
          <p>For example, if you borrow $10,000 with a 6% interest rate, you will need to repay the principal amount along with an additional $600 in interest. Conversely, if you deposit $10,000 in an account with a 6% interest rate, you will earn
          an extra $600.</p>

          <p className="font-medium mt-4">Interest on installment vs. revolving debt</p>
          <p className="mb-2">In the case of installment debt, such as home, auto, and student loans, the interest costs are included in your monthly payment. Each month, a portion of your payment is allocated towards reducing the debt, while another
          portion covers the interest charges. These loans have a set repayment period, such as a 15-year mortgage or a 5-year auto loan.</p>
          <p>On the other hand, revolving debt, like credit cards, allows you to borrow repeatedly as long as you stay within your credit limit. The calculation of interest and payment structure may vary, so it&apos;s important to refer to your loan
          agreement for specific details.</p>

          <p className="font-medium mt-4">How do you earn interest?</p>
          <p>To earn interest, you can either lend money to others or deposit funds into an interest-bearing bank account, such as a savings account. When you deposit money, the bank utilizes it to provide loans and make investments, earning revenue in
          the process. A portion of that revenue is then passed on to you in the form of interest at regular intervals, such as monthly or quarterly.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is compound interest?</p>
          <p className="mb-2">Compound interest is the phenomenon where you earn interest not only on your initial deposit but also on the accumulated interest over time. With compound interest, your money grows at an accelerated rate as the interest
          compounds on itself.</p>
          <p>For example, if you deposit $100 with a 5% annual interest rate, you earn $5 in the 1st year. In the 2nd year, you earn interest not just on the $100 but also on the $5 you earned previously. This compounding effect continues to accelerate
          your earnings over time. However, when borrowing money, compounding works against you as you pay interest on both the principal amount and the accrued interest.</p>

          <p className="font-medium mt-4">What does it mean for you?</p>
          <p className="mb-2">The longer you leave your money invested, the more it benefits from compounding. Even small monthly deposits over a long period can generate significant returns.</p>
          <p className="mb-2">If you are borrowing money, to mitigate interest costs, it&apos;s essential to pay off debts as quickly as possible. Making only the minimum payments on credit cards can lead to substantial interest charges and a growing
          balance. For student loans, paying the interest as it accrues prevents it from being added to the principal amount.</p>
          <p>The interest rates on loans significantly impact the growth of debt and the time it takes to repay. High-interest credit cards can be particularly challenging to manage. Consider consolidating debts and exploring opportunities to lower interest
          rates, which can accelerate the debt payoff process and save you money in the long run.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">What is annual percentage yield?</p>
          <p className="mb-2">Annual Percentage Yield (APY) is the rate of return earned on an investment over a 12-month period, taking into account the impact of compounding interest. When you deposit funds into a savings account, money market, or CD, you
          accrue interest. APY helps determine the amount of interest you would earn on the account annually. It considers the interest rate, compounding frequency, and calculates interest on both the principal and earnings.</p>

          <p className="font-medium mt-4">Why is APY unique?</p>
          <p className="mb-2">Compared to a simple interest rate, APY provides a more accurate indication of earnings on a deposit account by considering compounding. In a scenario with a $1,000 deposit and a 5% simple annual interest rate, a single annual
          payment would result in a $50 addition to the account. However, with monthly compounding, the balance would reach $1,051.16 at the end of the year, exceeding the 5% quoted interest rate.</p>
          <p className="mb-2">Over time, the impact of compounding becomes more significant, especially with larger deposits. Earnings gradually increase each month, contributing to higher overall returns.</p>

          <p className="font-medium mt-4">How do you maximize APY?</p>
          <p className="mb-2">Maximizing APY involves choosing accounts with more frequent compounding periods, such as daily or quarterly, and checking the APY for each account. Select investments that compound interest more frequently and consider
          automatically reinvesting interest earnings to maximize compounding and earn more interest on interest.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">What is the FDIC?</p>
          <p className="mb-2">The Federal Deposit Insurance Corporation (FDIC) is a U.S. government agency created to safeguard consumers in the financial system. The FDIC insures deposits, oversees financial institutions, and promotes trust in the banking
          system by conducting oversight and supervision. It provides deposit insurance to protect customer deposits in the event of a bank failure.</p>
          <p>When your deposits are FDIC-insured, it means the U.S. government guarantees the availability of your deposited money. When you deposit money into a bank, it is invested to generate revenue. If a bank fails and cannot return your deposits, the FDIC steps
          in to provide the cash. FDIC insurance generally covers up to $250,000 per account holder per institution. This limit was raised from $100,000 during the 2008 financial crisis and made permanent by the Dodd-Frank Wall Street Reform Act in 2010.</p>

          <p className="font-medium mt-4">What does the FDIC cover?</p>
          <p className="mb-2">FDIC insurance covers deposit products held at member financial institutions, including checking and savings accounts, CDs, and official payments. Credit unions have similar protection through the NCUA. However, FDIC and NCUA insurance
          do not cover securities, investment accounts, life insurance or annuity products, or safe deposit box contents.</p>

          <p className="font-medium mt-4">How do you confirm if a bank has FDIC status?</p>
          <p className="mb-2">To confirm if a bank is FDIC-insured, visit the FDIC&apos;s website and use their search feature. Enter the bank&apos; name, location, and web address to see if it is FDIC-insured. You can also look for the FDIC logo on the bank&apos;s front
          door and inside the bank. Ask the bank for its FDIC certificate number, which can help you find information about the bank&apos;s insurance status on the FDIC website.</p>
        </TabPanel>

        <TabPanel>
          <p>When you open a checking account, you receive a free ATM card that allows you to withdraw cash, make deposits, transfer funds, and check balances. Some ATM cards also double as debit cards, enabling online and in-store purchases with visible logos from Visa,
          Mastercard, Discover, or American Express. While they can be similar to credit cards, there are differences between them.</p>

          <p className="font-medium mt-4">ATM Cards</p>
          <p className="mb-2">ATM cards, offered by banks and some credit unions, are primarily used for cash withdrawals and basic banking transactions at ATMs. They are not typically accepted for in-store purchases and lack major credit card network logos.</p>

          <p className="font-medium mt-4">Debit Cards</p>
          <p className="mb-2">Debit cards offer the same functionalities as ATM cards, but they can also be used for everyday purchases at any location accepting credit cards. The funds are deducted directly from your checking account and you can withdraw money at any time
          from ATMs.</p>

          <p className="font-medium mt-4">Prepaid Debit Cards</p>
          <p className="mb-2">Prepaid debit cards function like standard debit cards, but instead of using funds from a checking account, you load money onto the card. This can be done through various methods such as direct deposit or electronic transfers. Prepaid cards are
          a viable option for individuals who have trouble opening a bank account, although they often come with fees.</p>

          <p className="font-medium mt-4">Credit Cards</p>
          <p className="mb-2">Credit cards allow you to borrow money from the card issuert. You&apos;ll have a loan balance that must be repaid later, usually with interest charges. By paying the full balance on time each month, you can avoid interest and late fees. While
          credit cards offer greater consumer protection against fraud compared to debit cards, they can encourage overspending and lead to high-interest debt.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 2,
    name: 'Checking Accounts',
    href: '#',
    imageSrc: '/images/coin-bank.png',
    imageAlt: "pink piggy bank with coins around it",
    step: '2',
    description: 'A fundamental personal finance tool',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>Types</Tab>
          <Tab>Money Orders</Tab>
          <Tab>Checks</Tab>
          <Tab>Joint Checking</Tab>
        </TabList>
        <TabPanel>
          <p className="font-medium mt-4">Checking Account Basics</p>
          <p className="mb-2">Checking accounts are a vital component of everyday banking, used to store cash for spending and depositing income. A checking account is a transactional account used for regular money inflow and outflow. It provides easy access to your funds
          for receiving and spending money. Direct deposit is commonly used for income deposits, including pay, tax refunds, and stimulus payments.</p>
          <p className="mb-2">Checking accounts typically have minimal or no interest earnings, so it&apos;s best to keep only the funds needed for immediate use. For longer-term goals, consider transferring excess funds to savings, retirement, or investment accounts.</p>

          <p className="font-medium mt-4">Do you need to pay to use a checking account?</p>
          <p className="mb-2">Using the funds in your checking account for payments and expenses is free. However, some checking accounts may have monthly fees, which can often be waived by meeting specific criteria such as maintaining a minimum balance or setting up direct
          deposit. Overdraft fees may apply if you spend more than what&apos;s available in your account, but you can avoid them by managing your finances responsibly and setting up overdraft protection.</p>

          <p className="font-medium mt-4">What are the different ways you can spend money from your checking account?</p>
          <p className="mb-2">You can withdraw cash from a bank teller or an ATM, though you may incur potential fees. You can write a check to transfer funds from your account to the recipient&apos;s bank. You can make purchases directly from your account using a debit card
          or pay your bills using online payment services. You can provide your routing and account numbers to authorize one-time or recurring payments to be deducted from your account. You can also link apps like Venmo and PayPal to your checking account for direct payment
          from available funds.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">Basic Checking Accounts</p>
          <p className="mb-2">A basic checking account is a straightforward option offered by most brick-and-mortar banks and credit unions. It provides essential features for everyday banking. You can access and transfer funds, withdraw cash from ATMs, use a debit card for
          purchases, write and deposit checks, pay your bills, and manage your account online or through a mobile app.</p>

          <p className="font-medium mt-4">Online-Only Checking Accounts</p>
          <p className="mb-2">Online accounts, typically offered by online banks, are an alternative to brick-and-mortar bank accounts. These accounts don&apos;t have physical branches and require you to manage your finances online or over the phone. With an online-only account,
          you can set up direct deposits, deposit checks through your phone or by mail, and access your funds using a debit card, ATM, online bill payments, electronic transfers, or P2P payments. Note that brick-and-mortar banks may also offer online checking accounts.</p>

          <p className="font-medium mt-4">Interest Checking Accounts</p>
          <p className="mb-2">Interest checking accounts, also known as high-yield or interest-bearing checking accounts, provide the same features as basic accounts but also offer interest on your deposits. This means you can earn a small amount of money each month just by
          keeping your funds in the account. Interest rates and earnings are determined by the annual percentage yield (APY), which considers the interest rate and compounding frequency. While the earnings may not be substantial, it&apos;s still better than nothing.</p>

          <p className="font-medium mt-4">Reward Accounts</p>
          <p className="mb-2">Reward accounts offer additional benefits and incentives to customers. These accounts often pay interest, usually at a higher annual percentage yield (APY) compared to regular interest checking accounts. Some banks may also provide preferred
          interest rates on loans or fee discounts for reward account holders, such as overdraft protection. But, you may need to meet certain requirements to qualify for one.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is a money order?</p>
          <p className="mb-2">A money order is a secure and convenient alternative to cash that can be purchased with cash, debit cards, or other guaranteed funds. It functions like a prepaid check and can be deposited in a bank account or exchanged for cash.</p>
          <p className="mb-2">Similar to a check, a money order is intended for a specific recipient and cannot be cashed or deposited by anyone else. However, unlike a check, a money order is paid for in advance. Money orders can be used for various purposes,
          including purchasing items, paying bills, or sending money locally or internationally.</p>

          <p className="font-medium mt-4">How do you buy a money order?</p>
          <p className="mb-2">To obtain a money order, you typically need to visit a physical location, such as a U.S. Post Office, bank, or credit union, to purchase it. As the sender, you can deliver it in person or send it via mail. As the recipient, you can cash or
          deposit the money order at most banks, either in person or online in some cases.</p>
          <p className="mb-2">Keep in mind that if you spend over $3,000 on money orders in a day, you&apos;ll need to provide identification and complete a special form. Additionally, you may need to pay a small fee to buy a money order in addition to the cash amount for
          the money order itself.</p>

          <p className="font-medium mt-4">What are the pros and cons?</p>
          <p className="mb-2">Money orders offer several advantages, including being a safer alternative to cash, not requiring a bank account, providing anonymity, being demanded by some sellers, and being convenient for overseas transfers. On the other hand, money orders cannot
          be reversed once issued, may be prone to scams, have limits on transaction amounts, are not universally accepted, and may take longer to complete.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is a check?</p>
          <p className="mb-2">A check is a written document that authorizes the transfer of funds from the account holder&apos;s bank account to the recipient or payee. It serves as a form of payment, allowing individuals and businesses to make transactions without using cash.</p>
          <p className="mb-2">When writing a check, the account holder fills in the recipient&apos;s name, the date, the amount to be paid in both numbers and words, and signs it. The recipient can then deposit or cash the check, receiving the specified amount from the account
          holder&apos;s bank. Checks provide a record of payment and are commonly used for bill payments, purchases, and transferring money between individuals or businesses.</p>

          <p className="font-medium mt-4">How do you cash a check?</p>
          <p>To cash a check, you need to endorse the check by flipping the check over and signing your name in the designated endorsement area. You can either deposit the check online via the bank&apos;s website or mobile app or visit a physical branch. If you deposit the check
          in-person, you may need to provide ID, such as a driver&apos;s license or a passport. Depending on the bank or institution&apos;s policies, you may need to fill out a deposit slip or a check-cashing form. Once the bank verifies the check&apos;s authenticity, they will
          provide you with the cash equivalent of the check amount or deposit the funds into your account.</p>

          <p className="font-medium mt-4">What happens when a check bounces?</p>
          <p className="mb-2">When a check bounces, it means that the bank is unable to honor the payment because there are insufficient funds in the account of the person who wrote the check. Bounced checks are also known as returned checks or dishonored checks. When a recipient
          or payee tries to deposit or cash a bounced check, the bank will reject the transaction and mark the check as unpaid. The payee&apos;s bank will typically charge a fee for the returned check, and the payee may also incur additional fees from their own bank.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is joint checking?</p>
          <p className="mb-2">Joint checking is a type of bank account shared between 2+ individuals. It allows multiple account holders to deposit, withdraw, and manage funds collectively. Each account holder has equal access and control over the funds in the joint checking account.</p>

          <p className="font-medium mt-4">Who uses joing checking accounts?</p>
          <p className="mb-2">Joint checking accounts are commonly used by couples, family members, or business partners who need to manage their finances together. With a joint account, all account holders have the ability to write checks, make electronic transfers, use a debit card,
          and perform other banking transactions associated with the account.</p>

          <p className="font-medium mt-4">What are the advantages of joint checking?</p>
          <p className="mb-2">The primary advantage of a joint checking account is that it enables convenient and transparent financial management among the account holders. It simplifies the process of sharing expenses, paying bills, and managing shared finances. It can also be useful
          for tracking and monitoring joint expenses, such as household bills or business expenses.</p>

          <p className="font-medium mt-4">What are the potential risks to consider?</p>
          <p className="mb-2">All account holders are equally liable for any overdrafts, debts, or fees associated with the account. Furthermore, any account holder can withdraw funds from the account without the consent of the others, which requires a high level of trust and
          communication between the joint account holders.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 3,
    name: 'Savings Accounts',
    href: '#',
    imageSrc: '/images/savings-coins.png',
    imageAlt: "person holding a jar labelled savings",
    step: '3',
    description: 'A fundamental personal finance tool',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>HYSAs</Tab>
          <Tab>HSAs</Tab>
          <Tab>Money Market Accounts</Tab>
        </TabList>
        <TabPanel>
          <p className="font-medium mt-4">What is a savings account?</p>
          <p className="mb-2">A savings account is a type of bank account that is designed for individuals to deposit and save their money while earning interest on the balance. It provides a safe and secure way to store funds and build savings over time.</p>

          <p className="font-medium mt-4">Why do you need a savings account?</p>
          <p className="mb-2">The primary purpose of a savings account is to accumulate funds and earn interest over time. Unlike a checking account, which is typically used for everyday transactions, a savings account is intended for storing your money. It allows you to set
          aside money for emergencies, future expenses, or specific financial objectives, such as buying a house or funding a vacation.</p>

          <p className="font-medium mt-4">How do you get a savings account?</p>
          <p className="mb-2">Start by researching different banks or financial institutions that offer savings accounts. Compare factors such as interest rates, fees, minimum balance requirements, convenience of access, and customer reviews to find the best fit for your needs.</p>
          <p className="mb-2">Typically, you&apos;ll need to provide certain documents to open a savings account. These may include a valid form of ID (such as a driver&apos;s license or passport), proof of address (such as a utility bill or bank statement), and your Social
          Security number or taxpayer identification number.</p>
          <p className="mb-2">Once you&apos;ve chosen a bank, you can visit their branch in person or apply online through their website. You&apos;ll need to fill out an application and fund your account once it gets approved.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is a high-yield savings account?</p>
          <p className="mb-2">A high-yield savings account (HYSA) is a type of savings account that offers a higher interest rate than traditional savings accounts. The term &quot;high yield&quot; refers to the higher percentage of interest earned on the deposited funds. These accounts
          are typically offered by online banks or financial institutions that can provide competitive interest rates due to their lower operating costs.</p>

          <p className="font-medium mt-4">How does a HYSA work?</p>
          <p className="mb-2">HYSAs work very similarly to traditional savings accounts, but they offer higher interest rates. This means that the money you deposit in the account earns more interest over time, allowing your savings to grow at a faster rate.</p>
          <p className="mb-2">You can deposit money into a high-yield savings account just like you would with a regular savings account. Most accounts allow you to make deposits through various methods, including direct deposit, electronic transfers, or mobile check deposits. However,
          there are often limitations on the number of withdrawals or transfers you can make per month due to federal regulations.</p>

          <p className="font-medium mt-4">What are the pros and cons?</p>
          <p className="mb-2">HYSAs typically do not have monthly fees or minimum balance requirements. They are insured by the FDIC (currently $250,000 per depositor, per insured bank) and allow you to earn more interest. However, the interest rates constantly fluctuate and are meant
          to help with short-term savings goals rather than long-term investing.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is a health savings account?</p>
          <p className="mb-2">A health savings account (HSA) is a type of savings account specifically designed to help individuals with high-deductible health insurance plans save money for medical expenses. HSAs are meant to cover eligible medical expenses, which include a wide range
          of healthcare costs such as doctor visits, prescription medications, hospital stays, and certain medical procedures.</p>
          <p className="mb-2">HSAs are portable, meaning the funds in the account are yours to keep even if you change jobs or switch health insurance plans. The account stays with you, and you can continue to use the funds for eligible medical expenses.</p>
          <p>The funds in your HSA grow tax-free. This means that any interest, dividends, or capital gains earned within the account are not subject to federal income tax. Additionally, when you use the funds for qualified medical expenses, withdrawals are tax-free as well.</p>

          <p className="font-medium mt-4">How do you open a HSA?</p>
          <p className="mb-2">To open and contribute to an HSA, you must have a high-deductible health insurance plan, which is defined by the IRS as a plan with a minimum annual deductible and maximum out-of-pocket expenses.</p>
          <p>The money you contribute to an HSA is typically made on a pre-tax basis, which means it is deducted from your gross income before taxes are applied. This reduces your taxable income and can result in potential tax savings.</p>

          <p className="font-medium mt-4">Are there contribution limits?</p>
          <p className="mb-2">Each year, there are contribution limits set by the IRS that determine how much you can contribute to your HSA. These limits may change over time. Additionally, contributions to an HSA can be made by both you and your employer, if applicable.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">What is a money market account?</p>
          <p className="mb-2">A money market account (MMA) is a high-interest savings account that comes with certain features of checking accounts. They generally offer higher interest rates than standard savings accounts and are designed to help your savings grow at a faster rate.
          However, MMAs may require a higher minimum deposit compared to regular savings accounts.</p>

          <p className="font-medium mt-4">Do you need a money market account?</p>
          <p className="mb-2">MMAs are popular for individuals who have short-term goals or want to maintain an emergency fund. They provide easy access to your funds and are generally considered low-risk investments.</p>

          <p className="font-medium mt-4">What are the pros and cons?</p>
          <p className="mb-2">Money market accounts typically pay more interest, with rates between those of a certificate of deposit (CD) and a traditional savings account. As long as you bank at an FDIC-insured financial institution or an NCUA insured credit union, your money market
          account will be insured for up to $250,000. Most accounts also allow you to write checks and withdraw cash, and some even offer a debit card.</p>
          <p>However, some banks may limit the number of transactions you can have on the account every month. Additionally, the interest rates may fluctuate, so confirm that the rates offered are permanent and not a promotional rate. Additionally, MMAs may not be insured at certain institutions.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 4,
    name: 'Certificates of Deposit',
    href: '#',
    imageSrc: '/images/hundred-bills.png',
    imageAlt: "hundreds spread around",
    step: '4',
    description: 'Low-risk deposit accounts',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>Types</Tab>
          <Tab>Strategies</Tab>
        </TabList>
        <TabPanel>
          <p className="font-medium mt-4">What is a certificate of deposit?</p>
          <p className="mb-2">A certificate of deposit (CD) is a financial product offered by banks and credit unions. It is a type of time deposit where you deposit a fixed amount of money for a specified period, known as the term or maturity. In return for depositing your money, the
          financial institution pays you interest on the CD.</p>
          <p>You choose the term or duration of the CD, which can range from a few months to several years. Common terms include 6 months, 1 year, 2 years, and 5 years. Once the CD reaches its maturity date, the term ends. At this point, you can choose to withdraw the money or
          renew the CD for another term. If you decide to withdraw the money, you&apos;ll receive the initial deposit amount plus the interest earned.</p>

          <p className="font-medium mt-4">What are the pros and cons?</p>
          <p>CDs offer safety and a fixed interest rate, providing predictable returns. They are considered low-risk investments as they are insured by the FDIC (Federal Deposit Insurance Corporation) up to certain limits, providing protection for your principal deposit. However, CDs have
          limited liquidity as funds are typically locked in for the duration of the term, and early withdrawal penalties may apply. There is also a potential opportunity cost if interest rates rise during the CD term, and minimum deposit requirements may exist.</p>

          <p className="font-medium mt-4">What are CDs best for?</p>
          <p>They are suitable for individuals looking to save money for a specific financial goal and are willing to have their funds locked in for a set period of time.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium mt-4">Liquid CD</p>
          <p>This type of CD offers flexibility and early access to funds. While there may be a waiting period before you can withdraw your money, typically around 6 days, it allows you to reinvest or withdraw your funds without incurring penalties. However, liquid CDs often
          have shorter terms and may offer lower interest rates compared to traditional CDs.</p>

          <p className="font-medium mt-4">Add-On CD</p>
          <p>An add-on CD allows you to make additional deposits to your existing CD over time. This feature is beneficial if you want to increase your savings gradually. Some banks may require minimum deposit amounts or that the funds come from another account you hold with
          them. Add-on CDs generally have lower interest rates and may have different opening deposit requirements.</p>

          <p className="font-medium mt-4">Step-Up CD</p>
          <p>Step-up CDs offer the advantage of potentially increasing interest rates over the CD&apos;s term. This means that if market rates rise, your CD&apos;s interest rate will also increase accordingly, providing better returns. However, if market rates do not go up,
          you may not benefit from higher rates and could end up with a lower return compared to a fixed-rate CD.</p>

          <p className="font-medium mt-4">IRA CD</p>
          <p>IRA CDs are designed specifically for retirement savings. They can be either traditional or Roth IRAs. Traditional IRA CDs offer potential tax benefits such as deferring taxes on contributions and the ability to deduct qualifying contributions. However, early
          withdrawals before the minimum retirement age may incur tax penalties. Roth IRA CDs provide the advantage of tax-free withdrawals during retirement as long as the account has been open for at least 5 years.</p>
        </TabPanel>

        <TabPanel>
          <p className="mb-2">When it comes to investing in CDs, there are different strategies you can consider to optimize your earnings and flexibility.</p>

          <p className="font-medium mt-4">Laddering</p>
          <p>This strategy involves purchasing multiple CDs with staggered maturity dates. By diversifying your investments across different time frames, you can ensure that you have access to funds periodically. Short-term CDs provide liquidity, while longer-term CDs offer potentially higher interest rates. Laddering helps you avoid investing all your money at once and allows you to take advantage of changing interest rate environments.</p>

          <p className="font-medium mt-4">Bullet Strategy</p>
          <p>With this approach, you invest your money in a single CD that aligns with your specific financial goal or timeline. The CD matures when you need the funds, allowing you to have a lump sum available for a major expense or investment opportunity. This strategy provides the potential for higher returns compared to a regular savings account, while still maintaining accessibility to your funds at a specific date.</p>

          <p className="font-medium mt-4">Barbell Approach</p>
          <p>The barbell strategy involves investing in both short-term and long-term CDs while skipping medium-term CDs. This approach allows you to take advantage of attractive short-term interest rates while still benefiting from the potentially higher yields of long-term CDs. By avoiding medium-term CDs, you have the flexibility to adjust your investments based on market conditions and interest rate fluctuations.</p>
        </TabPanel>
      </Tabs>
    ),
  },
]

const products2: Product[] = [
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
          <p>The word &quot;credit&quot; has many meanings, with the most common being a contractual arrangement where a borrower receives funds or assets and agrees to repay the lender
            later, often with interest.</p>

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
          <p>Revolving credit allows borrowers to access funds up to a predetermined credit limit and make flexible repayments based on their
          outstanding balance. Credit cards and lines of credit are common examples of revolving credit. With revolving credit, borrowers can repeatedly borrow and
          repay within the credit limit. Minimum monthly payments are typically required, but the borrower has the option to carry a balance and pay interest on the
          remaining debt. It is best suited for short-term borrowing and managing fluctuating expenses.</p>
        </TabPanel>

        <TabPanel>
          <p>Installment credit involves borrowing a fixed amount of money and repaying it in regular installments over a predetermined period. Examples
          of installment credit include auto loans, mortgages, and personal loans. The loan amount, interest rate, and repayment term are agreed upon upfront. Borrowers make
          fixed monthly payments that include both principal and interest, ensuring that the debt is fully repaid by the end of the term. It is commonly used for long-term
          financing needs</p>
        </TabPanel>

        <TabPanel>
          <p>Service credit refers to the credit agreements individuals have with service providers such as gas and electric utilities, cable and internet
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
    imageSrc: '/images/build-credit.png',
    imageAlt: "UI of credit builder app",
    step: '2',
    description: 'A measure of your creditworthiness',
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
          <p>Your credit score holds significant importance in your financial life. It serves as a measure of your creditworthiness
          and plays a crucial role in determining your eligibility for loans, credit cards, and other forms of credit. Lenders use your credit score to assess
          the risk associated with lending you money and to determine the interest rates and terms they offer.</p>

          <p className="mt-4 mb-2">The higher your credit score, the higher your chances of being approved for various financial products. It can also help you
          secure more favorable terms, such as lower interest rates and higher credit limits. Moreover, a solid credit score can positively impact other aspects
          of your life, such as renting an apartment, getting insurance coverage, or even landing certain job opportunities.</p>
        </TabPanel>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
          <p>There are multiple credit scoring models, including FICO, VantageScore, and others. Credit score ranges may vary
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
          <p>Your credit score affects many aspects of your life, from qualifying for a mortgage to getting an auto loan at a favorable rate. Whether you are
          searching for your forever home or simply applying for a new credit card, having good credit is key to your financial success.</p>

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
          <p className="font-medium">Auto Loans</p>
          <p>The rates for auto loans can vary anywhere from 0% to 20%. If you have a credit score above 750 and are paying 10% or more in interest, reach out to your lender to see if you can refinance to a lower rate. That way,
          you can cut down your interest significantly while putting the extra money towards other financial goals.</p>

          <p className="font-medium">Student Loans</p>
          <p>There is no limit to how many times you can refinance student loans. If any of your student loans have high interest rates, consider refinancing them to potentially save thousands of dollars over the life of your loan.</p>

          <p className="font-medium">Mortgages</p>
          <p>If you currently have a 30-year mortgage, you may want to refinance to a 15-year mortgage to lower your interest payments and pay off your balance quicker. If the current market is more favorable than when you first took out the mortgage,
            you may want to refinance to a lower interest rate to lower your monthly payments. If you started with an adjustable-rate mortgage (ARM), you may want to switch to a fixed mortgage to stabilize your interest rates. Or, if your home&apos;s value
            has significantly increased since you purchased it, you can do a cash-out refinance and use the money for home renovations or debt consolidation.</p>
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

const products3: Product[] = [
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
          <p>Popularized by Elizabeth Warren in her book, All Your Worth: The Ultimate Lifetime Money Plan,
          the 50/30/20 is a simple and intuitive way to build a financial budget.
          Think of the 50/30/20 as a rough guideline or template to help you manage and save money.
          It is not a hard-and-fast rule and does not track your budgeting process down to the wire for you.</p>

          <p className="mt-4 mb-2">This particular rule divides your after-tax income into three categories:</p>
          <ul className="list-decimal ml-6">
            <li>50% of your income: Needs</li>
            <li>30% of your income: Wants</li>
            <li>20% of your income: Savings and Debt</li>
          </ul>

          <p className="mt-4 mb-2">Let&apos;s dive into what each category means!</p>
        </TabPanel>

        <TabPanel>
          <p>Needs are things that you absolutely cannot live without, your “must-haves.” They include rent or mortgage payments, groceries, healthcare,
            insurance, utilities, etc. To reiterate, these are expenditure types that you can&apos;t avoid and are necessary for your survival.</p>
          <p className="mt-4 mb-2">The “needs” category does not include any extras in your life, such as boba, entertainment, subscriptions, vacations, etc.
          Per this guideline, you should spend roughly half of your take-home income to cover all your needs. If you are spending more than 50%, it may be
          time to cut down on some expenses or downsize your lifestyle. For example, if you live alone, consider getting roommates to lower the cost of the rent.
          If your family has multiple cars, consider downsizing to one or two cars instead or taking public transportation more often.</p>
        </TabPanel>

        <TabPanel>
          <p>Next up on the list is wants. That will include anything you can reasonably live without, such as video games, new clothes, plane tickets,
            streaming services, amusement parks, etc. Whatever you consider as fun or has entertainment value falls in this category.</p>
          <p className="mt-4 mb-2">While it may not seem like it, wants are all optional. They are things in our life that bring us pleasure and joy.</p>
        </TabPanel>

        <TabPanel>
          <p>Finally, there are savings and debt. In terms of savings, this encompasses retirement accounts, emergency funds, and
            investment accounts. Debt would include anything that has charges interest, such as credit card debt or student loans.
            You can budget your income between savings and debt however you&apos;d like depending on your financial circumstances.</p>
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
          <p>The 80/20 budget is a simplified version of the 50/30/20, but it takes a “pay yourself first” approach to the budget process.
          Instead of setting aside money after all your expenses get paid, you put 20% of your after-tax income immediately into your savings and investments
          accounts before spending the rest, or 80%.</p>

          <p className="mt-4 mb-2">For people who don&apos;t want to have a rigid structure or constantly track their spending, the 80/20 budget is a great
          way to get started. With this plan, you do not need to identify all your needs and wants line by line, which can be pretty subjective from person
          to person anyways.</p>
        </TabPanel>

        <TabPanel>
          <p>To apply this to your finances, first multiply your take-home pay by 0.2, which is how much you should set aside for your
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
          <p>The envelope system is an old-school and hands-on cash approach with budgeting. As the name implies, you are essentially putting spending
          limits on various categories. The “envelope” portion refers to physically putting cash into envelopes and marking them with a particular expense category, such as
          groceries, rent, restaurants, entertainment, etc.</p>

          <p className="mt-4 mb-2">By stashing a set amount of cash into each envelope, you will know exactly how much you spend in each category every month
          and how much you have left at the end of the month. If you tend to overspend in a specific category, such as restaurants, having this system will force
          you to spend less.</p>
        </TabPanel>

        <TabPanel>
          <p>Using the envelope system keeps you on track and enforce discipline. Once you spend all the cash in each envelope, that&apos;s
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
          <p>Zero-based budgeting, or zero-sum budgeting, is a time-consuming process. It was created by Peter Pyhrr, a former Texas
          Instruments account manager, in the 1960s. Under this plan, you start from a “zero base” and then take a strategic, high-level approach to your
          budget process. Each penny of your income is accounted for as you give a purpose to every expense.</p>

          <p className="mt-4 mb-2">When you use a zero-based budget, you will know exactly how much you are spending and where your money is going.
          Rather than spending mindlessly every month, use this as a framework to prioritize your most important expenses and gain visibility into your
          spending habits. That includes figuring out how much to budget for your needs, wants, debt, investments, etc.</p>
        </TabPanel>

        <TabPanel>
          <p>The goal here is to follow this simple equation:</p>
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
          <p>Value proposition budgeting is geared towards those who want to be very frugal with their money and spending habits.
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
          <p>Mint allows you to connect all your financial accounts, including cash accounts, credit cards, loans, investments, and properties. Once all your accounts get added, you&apos;ll
          be able to see all your recent transactions on one screen and add notes or tags to them. You can also create monthly budgets in specific categories and get alerts when you overspend
          or whenever there are any suspicious activities on your account.</p>
        </TabPanel>

        <TabPanel>
          <p className='font-medium'>Personal Capital</p>
          <p>Similar to Mint, Personal Capital allows you to link your cash accounts, investments, and credit cards to the app. However, Personal Capital is primarily an investment
          app rather than a budgeting app. While you can create monthly budgets, its more powerful features include a net worth tracker, cash flow monitoring, portfolio breakdowns,
          holdings and allocations recommendations, and retirement planning. It also displays charts of your net worth and the aggressiveness of your portfolio allocation based on your data.</p>
        </TabPanel>

        <TabPanel>
          <p className='font-medium'>You Need a Budget (YNAB)</p>
          <p>If you are serious about budgeting, YNAB is the perfect choice for you as the platform uses the zero-based budgeting strategy. When you use YNAB, the money will go
          directly into a “To be budgeted” bucket whenever you get paid. Then from there, you need to assign a purpose to every dollar. If you overspend in one category, you
          need to compensate by moving money out of another area.</p>
          <p className="mt-4 mb-2">For example, if your friend invites you to a fancy dinner party, but you used your budget for restaurants already,
          you would move money from another category, such as entertainment, into the restaurant bucket.</p>
          <p className="mt-4 mb-2">You can connect all your accounts, set goals, personalize spending categories, contribute to your savings accounts, and access resources such as
          budgeting tips and free daily workshops. Note that YNAB will cost $11.99 a month or $84 a year. However, you can sign up for a 34-day free trial and students can get a
          1-year subscription for free.</p>
        </TabPanel>

        <TabPanel>
          <p className='font-medium'>Goodbudget</p>
          <p>If you want to take a modern approach to the envelope system, Goodbudget is your best bet. With Goodbudget, you can assign your after-tax income to virtual envelopes
          to keep track of your finances. The app allows you to connect multiple devices to the same account, which is helpful for families who share a budget.</p>
          <p className="mt-4 mb-2">Unlike the apps mentioned above, you have to manually add account balances and assign money to each spending category, or envelope.
          However, you can create weekly, monthly, and six-month envelopes, track your debt payoff process, and set aside money for big-ticket expenses.</p>
        </TabPanel>

        <TabPanel>
          <p className='font-medium'>Spreadsheets</p>
          <p>If you&apos;re a stickler for details, many of these apps will not be able to do everything you want. One option is to build your own spreadsheet or look for one online
            on a site like Reddit or Etsy. With spreadsheets, you can go all out and customize it to your liking.</p>
        </TabPanel>
      </Tabs>
    ),
  },
]

const products4: Product[] = [
  {
    id: 1,
    name: 'Getting Started',
    href: '#',
    imageSrc: '/images/keys-on-hand.png',
    imageAlt: "hand holding a key to a house",
    step: '1',
    description: 'Your home buying journey at a glance',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>Pre-approval</Tab>
          <Tab>Contingencies</Tab>
          <Tab>Closing Costs</Tab>
          <Tab>Escrow</Tab>
        </TabList>
        <TabPanel>
          <p className="mt-4 mb-2">The home buying journey can be an exciting, but overwhelming and stressful experience.</p>

          <div className="card-paragraph mb-2">
            <p>Here&apos;s what you can expect when getting started:</p>
            <ul className="list-decimal ml-6">
              <li>Set criteria for what you are looking for. Consider what your goal is for buying the property, your price range, the number of bedrooms and bathrooms you want, your timeline, and location you want to buy in. Other considerations include the age
                of the home, square footage, HOA fees and regulations (if any), nearby school districts, and noise levels.</li>
              <li>Once you have a good idea of what you are looking for, reach out to a lender to get a mortgage pre-approval. Without a pre-approval letter, your offer will be much less competitive.</li>
              <li>With your pre-approval letter in hand, you can start your search for your dream home. While not required, having the right real estate agent will help make your home buying journey smoother and easier to navigate. Most real-estate agents have in-depth
                knowledge of the local market, including current trends, pricing, and inventory. They are also skilled negotiators who can advocate on your behalf and provide access to a host of professionals and resources.</li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <p className="mt-4 mb-2">The pre approval process from a mortgage broker is your first step before you begin your home search - 85% of sellers prefer to accept an offer from a buyer that is pre-approved.</p>
          <p className="mt-4 mb-2">After you submit an application, the lender will review your financial information to determine if you are eligible for a loan and how much they are willing to lend you. This can give you better an idea of what price range of homes you
          should be looking at and also gives sellers confidence that you will be able to obtain financing.</p>
          <p className="mt-4 mb-2">To get pre-approved, lenders will look at your credit score, employment history, income and debts. They may also require some additional documentation such as tax returns or bank statements.</p>
        </TabPanel>

        <TabPanel>
          <p className="mt-4 mb-2">When you&apos;re buying a home, there are a lot of things that can happen that are out of your control. That&apos;s why it&apos;s important to have contingencies in place to protect yourself and your home.</p>
          <p className="mt-4 mb-2">Contingencies are time periods agreed upon in the purchase agreement that allow you to investigate the property, obtain the necessary financing, verify the property&apos;s value (appraisal), and exit the contract if necessary.</p>
          <p className="mt-4 mb-2">Think of contingencies as a plan for what to do if something goes wrong. For example, let&apos;s say you&apos;re buying a home and the general inspection reveals some major problems with the property. If you don&apos;t have contingencies
          in place, you could be stuck with those repairs - or worse, stuck living in a house that isn&apos;t up to your standards.</p>
          <p className="mt-4 mb-2">But if you do have a contingency plan, then you can back out of the deal without losing any money (or at least very little money). Contingencies give you an &quot;out&quot; if things aren&apos;t going as planned, and they help to keep everyone happy -
          buyers and sellers alike.</p>
        </TabPanel>

        <TabPanel>
          <p className="mt-4 mb-2">When you purchase a home, there are additional costs outside a property&apos;s sale price that must be paid in order to complete the transaction. These are typically referred to as &quot;closing costs.&quot; Closing costs can vary significantly,
          but typically range from 2% - 5% of the total purchase price.</p>
          <p className="mt-4 mb-2">The largest closing cost is usually the loan origination fee, which is charged by the lender for processing your loan application. Other common closing costs include appraisal fees, title insurance, and escrow fees. In some cases, you may also
          be responsible for paying property taxes and homeowners insurance at closing.</p>
        </TabPanel>

        <TabPanel>
          <p className="mt-4 mb-2">Escrow is a process where a neutral third party holds and regulates the exchange of money or documents between two parties from when your offer gets accepted through closing. An escrow company ensures that both buyers and sellers uphold their
          end of the deal in the transaction. Using escrow protects both parties and gives peace of mind to everyone involved since it takes away the risk of one party not following through on their obligations.</p>
          <p className="mt-4 mb-2">In order for escrow to get established, both parties must agree to use it and sign an escrow agreement. Once this happens, the buyer will deposit money with the escrow company (or agent), who will then hold onto it until all conditions of sale
          are met by both sides.</p>
          <p className="mt-4 mb-2">When everything is completed satisfactorily, the funds are released to the seller. If either party backs out or doesn&apos;t fulfill their obligations, the other may be protected financially.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 2,
    name: 'Breaking Down the Home-Buying Process',
    href: '#',
    imageSrc: '/images/modern-home.png',
    imageAlt: "outdoor lamps turned on outside of home",
    step: '2',
    description: 'The phases of buying a home',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Phase 1</Tab>
          <Tab>Phase 2</Tab>
          <Tab>Phase 3</Tab>
          <Tab>Phase 4</Tab>
          <Tab>Phase 5</Tab>
        </TabList>
        <TabPanel>
          <p className="font-medium">Defining Your Goals</p>
          <ul className="list-decimal ml-6">
            <li>What is your motivation for buying?</li>
            <li>What is your timeframe?</li>
            <li>What type of property are you looking for?</li>
            <li>What are the ideal features of your home and non-negotiables?</li>
            <li>What neighborhood attributes are you looking for?</li>
          </ul>

          <p className="font-medium mt-4">Financials</p>
          <p>Before looking for homes, you should get your finances in order and understand your purchasing power. Reach out to a lender to do a full analysis of what you can realistically afford,
          issue pre-approval, and determine your price range.</p>

          <p className="font-medium mt-4">Market Analysis</p>
          <p>Research which neighborhoods you are interested in. Spend some time walking or driving around your desired neighborhoods to get a feel for the environment and community. Analyze active,
          pending, and sold homes in your neighborhoods of interest. This will give you a better sense of the comparables and how the market is doing. Pay attention to seasonal nuances. For example,
          the market typically slows down around Thanksgiving and Christmas so there will be less inventory available. But, you may also face less competition from other buyers in the market.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">Begin the Home Search</p>
          <ul className="list-decimal ml-6">
            <li>If you are working with an agent, set communication expectations, including frequency of updates, preferred method of communication, communication cadence, etc.</li>
            <li>Go on sites like Zillow, Realtor.com, and Redfin to create a collection of potential homes that meet your needs.</li>
            <li>View properties together with your agent, including private showings and open houses.</li>
          </ul>

          <p className="font-medium mt-4">Finding Your Dream Home</p>
          <ul className="list-decimal ml-6">
            <li>Once you find your dream home, discuss your main objectives with your agent and the steps of putting an offer in.</li>
            <li>Review the purchase contract, market conditions advisory, comparables report, etc.</li>
            <li>See if your agent can work with the listing agent to negotiate the best deal for you.</li>
          </ul>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">Escrow Process</p>
          <p>If the seller accepts your offer, you are expected to deliver the earnest deposit money (EMD) to the escrow company agreed up on in the purchase agreement within 3 days of acceptance. Typically, the
          initial deposit is 3% of the total purchase price. </p>
          <p className="mt-4 mb-2">This deposit is held by an the escrow agent until all conditions of the sale are met. Once everything is in order and both parties are satisfied, the funds are released and exchanged accordingly.</p>
          <p className="mt-4 mb-2">After reviewing the contract, the escrow officer will prepare the escrow instructions and generate packages for both parties to sign and complete. Your agent will help with connecting with escrow,
          notifying your lender, getting the appraisal, verifying all documents, and reviewing reports and disclosures with you.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">Inspections and Disclosures</p>
          <p>Upon opening escrow, go over all inspections and disclosures for the property. A home inspection is an objective examination of the physical structure and systems of a house, from the roof to
          the foundation. A qualified inspector will take note of any major defects or problems, as well as any necessary repairs or maintenance items. </p>
          <p className="mt-4 mb-2">In addition to a home inspection, there are also other types of inspections that may be required depending on the subject property, such as pest inspections and pool/spa inspections.</p>
          <p className="mt-4 mb-2">Your agent will obtain the preliminary title report and full disclosures from the seller about anything that could potentially affect your decision to purchase the property. This includes things like
          outstanding liens or code violations, which could become your responsibility if not disclosed upfront.</p>
          <p className="mt-4 mb-2">Based on the inspection findings, you can either approve the property condition as is or use this information to negotiate with the seller for repair credits or a reduction in price before moving
          forward with the purchase.</p>
        </TabPanel>

        <TabPanel>
          <p className="font-medium">Closing</p>
          <p>Review the closing statement by escrow and meet with them to sign all final documents, including the loan agreement, deed of trust/mortgage, and any other necessary paperwork. The closing process involves
          signing a lot of paperwork, so review all documents thoroughly before signing anything. If you have any questions, ask your agent or the escrow officer for clarification.</p>
          <p className="mt-4 mb-2">Have your down payment ready. You will need to bring your down payment (usually in the form of a cashier&apos;s check) with you on the closing day. Be sure to get this money together well in advance so
          that there are no last-minute surprises.</p>
          <p className="mt-4 mb-2">Conduct a final walk-through at the property to verify the property condition and ensure that everything is as expected prior to officially taking possession of the property. You should also schedule
          a transfer of utilities to your new home.</p>
          <p className="mt-4 mb-2">Once the title records, escrow will notify you. Your agent will coordinate key delivery and then you can celebrate - you are officially a Homeowner! </p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 3,
    name: 'First-Time Homebuyers Programs',
    href: '#',
    imageSrc: '/images/white-wooden-dresser.png',
    imageAlt: "white wooden dress with mirror across from a bed",
    step: '3',
    description: 'Achieve your goal of owning a home',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>FHA Loans</Tab>
          <Tab>VA Loans</Tab>
          <Tab>State and Local</Tab>
          <Tab>Conventional Loans</Tab>
          <Tab>Down Payment Assistance</Tab>
        </TabList>
        <TabPanel>
          <p>Buying a home is a big commitment and often requires a large upfront cost in the form of a down payment. Generally, the recommended down payment is 20% of the cost of the home. But there are several types of
          first-time homebuyers programs available that can help you achieve your goal of homeownership even without a 20% down payment.</p>
        </TabPanel>

        <TabPanel>
          <p>The FHA offers loans specifically designed for first-time homebuyers. These loans are insured by the FHA, allowing lenders to offer more lenient qualification criteria, lower down payment requirements (as low
          as 3.5% of the purchase price), and competitive interest rates. FHA loans are a popular choice for individuals with limited savings or lower credit scores.</p>
        </TabPanel>

        <TabPanel>
          <p>VA loans are available to eligible veterans, active-duty service members, and surviving spouses. These loans are guaranteed by the U.S. Department of Veterans Affairs and provide various benefits, including
          no down payment requirement, flexible credit requirements, and limited closing costs. VA loans are a great option for those who have served or are serving in the military.</p>
        </TabPanel>

        <TabPanel>
          <p>Many states and local governments provide assistance programs specifically tailored for first-time homebuyers. These programs vary widely by location and can include down payment assistance, closing cost
          assistance, or low-interest loans. Some programs also offer educational resources, counseling, and workshops to help buyers navigate the homebuying process.</p>
        </TabPanel>

        <TabPanel>
          <p>Conventional loan programs are offered by private lenders and backed by government-sponsored enterprises like Fannie Mae and Freddie Mac. Some conventional loan programs provide options for first-time homebuyers,
          such as low down payment requirements (as low as 3% of the purchase price) and more flexible credit criteria. These programs often require private mortgage insurance (PMI) for borrowers with a down payment less than 20%.</p>
        </TabPanel>

        <TabPanel>
          <p>Many organizations, nonprofits, and employers offer down payment assistance programs to help first-time homebuyers overcome the hurdle of saving for a down payment. These programs may provide grants, forgivable
          loans, or deferred payment loans that can be used toward the down payment or closing costs. Down payment assistance programs vary widely in eligibility requirements, funding availability, and geographical limitations.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
    id: 4,
    name: 'Now What?',
    href: '#',
    imageSrc: '/images/brown-wooden-framed.png',
    imageAlt: "Modern minimalist home design",
    step: '4',
    description: 'Final tips as a new homeowner',
    hasTabs: true,
    cardContent: (
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>Keep Saving</Tab>
          <Tab>Maintenance</Tab>
          <Tab>Focus</Tab>
          <Tab>Diversify</Tab>
        </TabList>
        <TabPanel>
          <p>Congratulations on becoming a homeowner! While you may have completed the initial steps of buying a home, there are still important considerations to ensure a successful homeownership experience. Beyond the upfront
          expenses like down payments and monthly mortgage payments, it&apos;s crucial to be aware of ongoing homeownership costs and take steps to protect your investment.</p>
        </TabPanel>

        <TabPanel>
          <p>Owning a home can bring unexpected expenses, such as roof repairs or replacing essential appliances. It&apos;s essential to proactively plan for these inevitable costs by establishing an emergency fund dedicated to
          your home. By consistently saving for unforeseen repairs and maintenance, you can avoid financial surprises and ensure that you&apos;re well-prepared to handle any unexpected home-related expenses that may arise.</p>
        </TabPanel>

        <TabPanel>
          <p>By implementing a routine maintenance schedule, you can minimize repair expenses and address issues promptly while they are still small and manageable. Regular maintenance not only helps to preserve the value and
          functionality of your home but also reduces the likelihood of costly repairs down the line. By staying proactive and attentive to the upkeep of your home, you can enjoy long-term savings and a well-maintained living space.</p>
        </TabPanel>

        <TabPanel>
          <p>Instead of fixating on the ever-changing housing market, keep your eye on the bigger picture. By having the flexibility to choose the optimal time to sell, rather than being compelled by external factors like job
          changes or financial difficulties, you have a greater chance of maximizing your investment and achieving a solid profit. Remember that your long-term goals and personal circumstances should guide your decision to sell, allowing you to make
          strategic choices that align with your financial objectives.</p>
        </TabPanel>

        <TabPanel>
          <p>While owning a home can be a valuable asset, you should not solely rely on selling it to fund your retirement. Instead, focus on maximizing contributions to your retirement accounts on a consistent basis. While the
          housing market can be unpredictable, banking on a significant windfall from selling your home is not a guaranteed retirement strategy.</p>
        </TabPanel>
      </Tabs>
    ),
  },
]

const products5: Product[] = [
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
            <p className="mt-4 mb-2">Before you start investing, it&apos;s crucial to build a financial safety net to protect yourself.
            This is where emergency funds and sinking funds come in.</p>
            <p>An emergency fund is made up of money you set aside for unplanned expenses, such as job loss, medical bills, or car repairs.
            Think of it as your backup for when something goes wrong in your life and you need money ASAP.
            The rule of thumb is to save at least 3-6 months of your monthly expenses.</p>

            <p className="mt-4 mb-2">To determine how much you should save:</p>
            <ol className="list-decimal ml-6">
              <li>Go through your last few months of expenses and calculate your average monthly spending.</li>
              <li>Separate your expenses by needs (rent, mortgage, utilities, groceries, etc.) and wants (concert tickets, dining out, etc.).</li>
              <li>Calculate how much you spend on your needs each month and use that to find out how much money to hold in your emergency fund for
                how long you want it to last.</li>
            </ol>
        </TabPanel>

        <TabPanel>
          <p className="mt-4 mb-2">A sinking fund is strategic and meant for known expenses, such as a vacation or home down payment.
            Think of it as a way to save money and track your progress toward specific financial goals.</p>
          <p  className="mt-4 mb-2">By using a sinking fund, you can avoid dipping into your emergency fund or checking account. For example, if you are planning a trip to South Korea in 6
            months and know it will cost $1800, you should save $300 per month for the next 6 months.</p>

          <p className="mt-4 mb-2">To build a sinking fund:</p>
          <ol className="list-decimal ml-6">
            <li>Decide what you are saving for, whether its an upcoming wedding, school tuition, home renovations, a new car, etc.</li>
            <li>Calculate how much to allocate to your sinking fund, which will depend on your finances and goal.</li>
            <li>Incorporate your sinking fund into your monthly budget to keep yourself accountable.</li>
          </ol>

          <p className="mt-4 mb-2">Once you have a number in mind for your funds, open a savings account and start making regular deposits to it. We recommend keeping your emergency fund
          and sinking funds separate from your checking account so you won&apos;t be tempted to spend the money. Instead, open a high-yield savings account (HYSA) with
          an online bank like Marcus by Goldman Sachs or Ally Bank to earn some interest as you save.</p>
          <p className="mt-4 mb-2">Emergency funds and sinking funds are powerful tools you can use to fulfill your financial goals.
          With a bit of patience and planning, you can set your future self up for financial success.</p>
        </TabPanel>
      </Tabs>
    ),
  },
  {
      id: 2,
      name: 'Paying Off Debt vs. Saving Money',
      href: '#',
      imageSrc: '/images/savings.png',
      imageAlt: "person holding a jar labeled savings",
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
            <p>If you are tight on cash, you may have to make a difficult choice between saving money for emergencies or paying off high-interest debt.</p>

            <p className='font-medium mt-4'>The Argument For Saving First</p>
            <p>While you may be tempted to pay off your debts as soon as possible, stashing away a sizeable emergency fund can provide financial security during tough times, such as job
              loss or car repairs. Knowing that you have money set aside for unexpected situations can also give you peace of mind and reduce stress as you focus on more pressing issues.</p>
            <p className="mt-4 mb-2">The earlier you start saving, the more time you have to leverage the power of compound interest. Compound interest is the interest
            you earn on your interest gained from depositing money into a high-yield savings account like Marcus by Goldman Sachs, investment portfolios, bonds, etc.</p>
            <p className="mt-4 mb-2">Waiting even 5 or 10 years to start saving can make a significant difference in your wealth trajectory.
              For example, if you set aside $1,000 today in an index fund like VOO or SPY, 20 years from now, that $1,000 would be worth ~$3,869.68.
              However, if you wait 10 years before investing the $1,000, you would only have $1,967.15, a nearly ~50% reduction!</p>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>The Argument For Paying Down Debt First</p>
            <p>If you have a lot of high-interest debt, that can prevent you from achieving other financial goals as your debt snowballs. In particular,
            most credit cards come with high-interest rates, sometimes upwards of 26%. So, the longer you wait to pay off your balances, the more interest
            your debt will accrue.</p>
            <p className="mt-4 mb-2">Aggressively paying down high-interest debt makes it more manageable and can also improve your credit score, which lenders use to gauge your
            riskiness as a borrower. The higher your credit score, the more likely you are to qualify for better financial products and terms.</p>
            <p className="mt-4 mb-2">Additionally, carrying large balances can be extremely stressful and feel like a huge weight on your shoulders.
            Focusing on tackling debt can remove this emotional burden and free up your mind to focus on achieving other goals.</p>
          </TabPanel>

          <TabPanel>
            <p className='font-medium'>Even Better — Balancing Both</p>
            <p>The best strategy is to simultaneously tackle high-interest debt while saving money, which is possible through
              careful budgeting and planning. Review your monthly expenses and categorize your wants and needs. Look for areas where you can cut back
              or eliminate certain expenses to reallocate the money towards saving or paying off debt.</p>
            <p className="mt-4 mb-2">By doing both simultaneously, you can set a better financial foundation and pay the way toward financial
              security and freedom.</p>
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
            <p className="mt-4 mb-2">Your credit score is like your grade for being a financially responsible adult.
              Having a strong credit score (≥720) and credit history opens up better financial opportunities for you —
              mainly favorable terms and conditions and better product offerings. Some potential benefits you can cash-in on include:</p>
              <ul className="list-decimal ml-6">
                <li>Automatic increases in credit card limits</li>
                <li>Sign-up offers for select rewards credit cards</li>
                <li>Low interest rate on personal loans</li>
                <li>Lower auto insurance fees and rates</li>
                <li>Credit check approval for rental applications</li>
              </ul>

            <p className="mt-4 mb-2">Credit scores range from 300-850 points, though specific scores, such as for auto loans have different ranges.
              FICO credit scores fall within 1 of 5 ranges:</p>
              <ul className="list-decimal ml-6">
                <li>Excellent/Exceptional: 800-850</li>
                <li>Very Good: 740-799</li>
                <li>Good: 670-739</li>
                <li>Fair: 580-669</li>
                <li>Poor: 300-579</li>
              </ul>
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
              <p className="mt-4 mb-2">Now that we&apos;ve covered budgeting, saving, and building credit, let&apos;s talk about retirement investing.
                The typical timeframe for investing in preparation for retirement is 30-40 years, with many people aiming to retire at age 67.
                However, due to longer lifespans, people&apos;s retirement age may get postponed until their early 70s, expanding the time horizon.</p>

              <p className="mt-4 mb-2">Designed for retirement saving, there are several investment accounts with special tax advantages (i.e. tax breaks) that reward you
                for contributing towards your retirement. These advantages typically take 1 of 2 forms:</p>
                <ol className="list-decimal ml-6">
                  <li>Pre-Tax Benefits: Each contribution qualifies as a pre-tax deduction, reducing your federal tax bill for the year you made it.
                    When you withdraw in retirement, you will pay taxes on the growth of your investment through income tax.</li>
                  <li>Post-Tax Benefits: You make contributions using post-tax money, so Uncle Sam has already taken their share.
                    But, when you withdraw your funds in retirement, you do not pay any income taxes on the capital gains.</li>
                </ol>

              <p className="mt-4 mb-2">It&apos;s recommended to use both pre- and post-tax accounts to give yourself financial flexibility and options in your retirement years.</p>
          </TabPanel>

          <TabPanel>
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
            <p>Creating a financial plan will organize your financial life and help you realize your vision of future financial health.
              Here&apos;s a primer on our 7-step take to make your own financial plan:</p>

            <p className="font-medium mt-4">1. Calculate Your Net Worth</p>
            <p>To find your net worth, subtract your total liabilities from your total assets. Your assets include things like your house, stocks, and retirement
              accounts while your liabilities include student loans, credit card debt, auto loans, etc.</p>

            <p className="font-medium mt-4">2. Budgeting / Cash Flow Planning</p>
            <p>By knowing what you earn and how you spend, you can find ways to better save, invest, or payoff debt. Use an app like Mint or Personal Capital
              to automate the process or check out our personal finance resources if you want to do it yourself.</p>

            <p className="font-medium mt-4">3. Set Financial Goals</p>
            <p>By laying out what you want to accomplish, you can work backwards to make a roadmap of what success looks like for you.
              Make sure to attach a specific dollar value and a target date to your goals. Prioritize them based on which are most important.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">4. Build an Emergency Fund</p>
            <p>If you lose your job or your car breaks down, having money saved can help you make ends meet.
              Save enough to cover 3-6 months of your basic living expenses (rent, food, utilities) and store it in a high-yield savings account.</p>

            <p className="font-medium mt-4">5. Manage Your Debt</p>
            <p>If you have any high-interest debt, make sure to pay it off as soon as possible. Every dollar you pay in interest
              accrued is one dollar less towards your goals. If you struggle with credit card debt, consider using 0% APR credit cards.</p>

            <p className="font-medium mt-4">6. Start Investing</p>
            <p>Investors have many assets to choose from (e.g., stocks, bonds, real estate). Passive investors build wealth over time while
            active investors grow their money as fast as possible. Investing can be as simple or difficult as you make it.</p>

            <p className="font-medium mt-4">7. Track Your Progress</p>
            <p>Once you have a plan, you need to track your progress and adjust as you go. Tinker with your budget and investments as needed.</p>
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
            <p>Let&apos;s be real — you want to learn personal finance to get richer. Don&apos;t we all.</p>
            <p className="mt-4 mb-2">The bad news? Unfortunately, for most of us, there&apos;s no way to get rich quick overnight — it&apos;s all
              about the long game.</p>
            <p className="mt-4 mb-2">We&apos;re capping off this series by focusing on 8 ways to build your net worth (the difference between your
              assets minus liabilities). The goal is to increase the value of your assets and reduce that of your liabilities.</p>
          </TabPanel>

          <TabPanel>
            <p>1. Pay off high-interest debt quickly, starting with the balance with the highest interest rate.
              Carrying high-interest debt month over month can cause your debt to snowball and make it a nightmare to manage —
              preventing you from achieving other financial goals.</p>
            <p className="mt-4 mb-2">2. Debt is not always your enemy. Taking on a loan strategically to acquire income-generating assets,
              such as a duplex for house-hacking or an established business, can allow you to grow your net worth quickly.</p>
            <p className="mt-4 mb-2">3. Pursue opportunities to refinance loans as they come up to lower the amount of money you pay over the loan&apos;s
              lifetime. It makes sense if you can reduce your interest by at least 2%.</p>
            <p className="mt-4 mb-2">4. Adopt a pay-yourself-first mentality.
              Set aside money for investing and saving every paycheck to build a safety net and achieve your financial goals faster.</p>
            <p className="mt-4 mb-2">5. Align your spending with your values and interests.
              You&apos;ll appreciate your purchases more and reduce the likelihood of overspending or buying things you don&apos;t need.</p>
            <p className="mt-4 mb-2">6. Advocate for yourself and negotiate for rate increases or a raise when you are performing at the next level.
              Focus on high-profile tasks with meaningful impact and document your results to build your case.</p>
            <p className="mt-4 mb-2">7. Spend a few years honing your expertise in your profession, then perform independent consulting or coaching as a side hustle or
              full-fledged business to earn additional income.</p>
            <p className="mt-4 mb-2">8. Keep up with the latest trends in your field and set aside time to learn new skills/tools to ensure you are constantly growing
              and learning. Many online platforms like Udemy, Coursera, or LinkedIn offer a wide variety of content.
              Even leading universities like MIT and Harvard offer free online classes.</p>
            </TabPanel>
        </Tabs>
      ),
    },
  ]

  const products6: Product[] = [
    {
      id: 1,
      name: 'Cash',
      href: '#',
      imageSrc: '/images/holding-hundreds.png',
      imageAlt: 'Person holding hundreds of dollars',
      step: '1',
      description: 'Why cash is king',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Investments</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What is cash?</p>
            <p>Cash is legal tender issued by a government or central bank and typically denominated in the currency of a specific country, such as dollars, euros, or yen. The primary function of cash is to facilitate transactions by providing a
            universally accepted means of payment. When making a cash payment, the buyer hands over the appropriate amount of cash to the seller, who accepts it as payment for the goods or services exchanged.</p>

            <p className="font-medium mt-4">How does cash work?</p>
            <p className="mb-2">Cash works based on the principle of trust and mutual agreement. It carries an inherent value widely recognized and accepted by individuals, businesses, and institutions within a specific economic system. The value
            of cash is typically regulated by a central authority, such as a central bank, which ensures its stability and manages its supply.</p>
            <p className="mb-2">Cash also serves as a store of value. Individuals can hold cash as a means of preserving wealth or as a precautionary measure for unforeseen expenses. However, cash does not generate additional income or interest on
            its own, unlike other financial instruments such as savings accounts or investments.</p>
            <p className="mb-2">In terms of circulation, cash moves through various channels, including banks, retailers, and individuals. Banks provide individuals and businesses with access to cash through withdrawals from their accounts or by
            exchanging other forms of funds for physical currency. Retailers and businesses receive cash as payment for products or services, and they may deposit it in their bank accounts or use it to replenish their cash registers.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What is a cash investment?</p>
            <p className="mb-2">A cash investment refers to the allocation of funds into low-risk, liquid financial instruments that aim to preserve capital and generate modest returns. It involves placing money in instruments such as savings accounts,
            money market accounts, certificates of deposit (CDs), or short-term government securities.</p>
            <p>Cash investments are known for their stability and high liquidity, meaning that they can be readily converted into cash without significant loss of value. They are considered a conservative investment option suitable for individuals and
            organizations seeking to preserve their capital and prioritize safety over higher returns.</p>

            <p className="font-medium mt-4">What are the pros and cons?</p>
            <p className="mb-2">Cash investments provide a safe haven for funds, as they are generally backed by government guarantees or reputable financial institutions. They also offer ease of access, allowing investors to quickly convert their holdings
            into cash when needed, providing financial flexibility and meeting short-term financial obligations.</p>
            <p className="mb-2">However, cash investments typically generate lower returns compared to other types of investments, such as stocks or bonds. In times of low-interest rates or inflation, cash investments may struggle to keep pace with rising
            costs, potentially resulting in a loss of purchasing power over time.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding cash?</p>
            <p className="mb-2">While cash is often considered a safe and liquid asset, it is not without its risks when held as part of an investment portfolio. Cash typically earns very low or no interest, and if the rate of inflation exceeds the rate of
            return on cash, the purchasing power of that cash decreases over time. In other words, the value of cash can erode due to inflation, leading to a loss of purchasing power.</p>
            <p className="mb-2">Holding cash means missing out on potential investment opportunities that could generate higher returns. If the returns on other asset classes, such as stocks or bonds, outpace the returns on cash over the long term, not being
            invested in those assets can result in missed growth and wealth accumulation.</p>
            <p className="mb-2">If you hold cash in a foreign currency, there is a risk of currency fluctuations. Changes in exchange rates can affect the value of your cash holdings when converted back to your home currency, potentially resulting in gains or losses.</p>
            <p className="mb-2">While cash held in insured bank accounts is generally considered safe, there is still a level of counterparty risk involved. In the event of a bank failure or financial crisis, there may be a risk of losing some or all of the cash
            held beyond the insured limits.</p>
            <p>It&apos;s important to strike a balance between holding cash for liquidity needs, emergencies, and short-term expenses, while also considering the potential risks and opportunities of other asset classes. Diversification across various investments can help
            manage risks and optimize returns in a portfolio.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">How much cash should you keep in your porfolio?</p>
            <p className="mb-2">The amount of cash you should keep in your portfolio depends on several factors, including your financial goals, risk tolerance, and investment strategy. Here are some considerations to help determine an appropriate cash allocation:</p>
            <ul className="list-disc ml-6">
              <li>Emergency Fund: Experts recommend having an emergency fund that covers 3-6 months&apos; worth of living expenses. This cash reserve provides a financial safety net for unexpected events or income disruptions.</li>
              <li>Short-Term Financial Needs: Assess your short-term financial obligations, such as upcoming expenses or planned major purchases. Set aside enough cash to meet these needs without relying on investment liquidation or incurring debt.</li>
              <li>Risk Tolerance: Evaluate your comfort level with market volatility and potential losses. Some individuals prefer to hold a larger cash position as a buffer against market downturns, providing peace of mind and the ability to capitalize on investment
              opportunities during market dips.</li>
              <li>Investment Strategy: Consider your overall investment strategy and asset allocation. If you have a long-term investment horizon and are primarily focused on growth, you may allocate a smaller percentage to cash. Conversely, if you have a more conservative
              approach or are nearing retirement, you may opt for a larger cash allocation to prioritize capital preservation.</li>
              <li>Market Conditions: Assess prevailing market conditions, interest rates, and inflation rates. In periods of high market uncertainty or when attractive investment opportunities are limited, individuals may choose to hold higher cash positions temporarily.</li>
            </ul>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 2,
      name: 'Bonds',
      href: '#',
      imageSrc: '/images/capitol-rotunda.png',
      imageAlt: 'U.S. Capitol Rotunda in Washington DC',
      step: '2',
      description: 'A low-risk investment',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What are bonds?</p>
            <p>Bonds are debt securities or fixed-income investments. When you invest in a bond, you are essentially lending money to an entity, typically a government or a corporation, in exchange for regular interest payments and the return of the principal amount at maturity.
            Bonds are considered relatively low-risk investments compared to stocks.</p>

            <p className="font-medium mt-4">What are the elements of bonds?</p>
            <ul className="list-disc ml-6">
              <li>Issuer: Bonds can be issued by governments, municipalities, corporations, and other entities looking to raise capital to fund new projects or investments, or to expand operations.</li>
              <li>Face value: Bonds have a face value or par value, which is the amount of money the bondholder will receive when the bond matures.</li>
              <li>Coupon rate: Bonds typically pay periodic interest payments, known as coupon payments, at a fixed rate. The coupon rate is expressed as a % of the bond&apos;s face value and determines the amount of interest income the bondholder will receive.</li>
              <li>Maturity date: Bonds have a specific maturity date, which is when the issuer repays the bond&apos;s face value to the bondholder. Maturities can range from short-term (a few months) to long-term (several decades).</li>
              <li>Yield: The yield of a bond is the total return an investor can expect to receive from holding the bond until maturity. It takes into account the coupon payments, the bond&apos;s price in the market, and the time remaining until maturity.</li>
              <li>Bond ratings: Credit rating agencies assign bonds ratings based on the issuer&apos;s creditworthiness and likelihood of default. Higher-rated bonds are considered safer but offer lower yields, while lower-rated bonds carry higher risk but offer potentially higher yields.</li>
              <li>Bond market: Bonds are traded in the bond market, which includes both primary and secondary markets. The primary market is where new bonds are issued and sold to investors, while the secondary market allows investors to buy and sell existing bonds.</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">The main types of bonds include:</p>
            <ul className="list-disc ml-6">
              <li>Government bonds are issued by national governments to raise funds for various purposes. They are generally considered low-risk investments because governments have the ability to raise taxes or print money to fulfill their obligations. Examples include U.S. Treasury
              bonds, UK Gilts, and German Bunds.</li>
              <li>Corporate Bonds are issued by corporations to finance their operations, expansion, or other financial needs. They offer higher yields than government bonds but also carry more risk. Examples include bonds issued by companies like Apple, Microsoft, and Coca-Cola.</li>
              <li>Municipal Bonds, also known as munis, are issued by state and local governments or government agencies to fund public projects such as schools, hospitals, and infrastructure. Munis are generally exempt from federal income tax and may also be exempt from state and local taxes.
              They can be attractive for investors seeking tax-advantaged income.</li>
              <li>Treasury Inflation-Protected Securities (TIPS) are issued by the U.S. Treasury and are designed to protect investors against inflation. The principal value of TIPS adjusts with changes in the Consumer Price Index (CPI), providing a hedge against inflation. TIPS pay interest
              semiannually and the adjusted principal value is paid at maturity.</li>
              <li>Agency Bonds are issued by government-sponsored entities (GSEs) such as Fannie Mae, Freddie Mac, and the Federal Home Loan Banks. Agency bonds carry higher yields than government bonds but still have lower default risk compared to corporate bonds. They are not
              directly backed by the government but may have an implicit guarantee.</li>
              <li>International Bonds are issued by foreign governments, supranational organizations, or corporations in countries other than the investor&apos;s home country. They offer the opportunity to diversify investments globally and potentially earn higher yields, but they also carry currency
              and geopolitical risks.</li>
              <li>High-Yield Bonds, also known as junk bonds, are issued by companies with lower credit ratings or higher risk profiles. They offer higher yields to compensate investors for the increased risk of default and come with greater volatility.</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding bonds?</p>
            <p className="mb-2">Bond prices and interest rates have an inverse relationship. When interest rates rise, bond prices tend to fall, and vice versa. If you own a bond and interest rates increase, the value of your bond may decline if you decide to sell it before maturity.</p>
            <p className="mb-2">Bonds issued by entities with lower credit ratings or higher perceived risk carry a higher risk of default. This risk can result in the loss of principal or reduced interest payments.</p>
            <p className="mb-2">Inflation erodes the purchasing power of future interest and principal payments. If the interest rate on a bond does not keep pace with inflation, the real return (adjusted for inflation) on the investment may be diminished.</p>
            <p className="mb-2">Some bonds may have limited liquidity, meaning they may be difficult to buy or sell quickly at a fair price. Illiquid bonds can result in challenges when trying to sell them before maturity, especially during market downturns.</p>
            <p>Callable bonds give the issuer the right to redeem the bonds before the scheduled maturity date. If interest rates decline, issuers may choose to call and refinance the bonds at a lower rate, leaving investors with reinvestment risk and potentially lower yields.</p>
            <p>Investing in bonds denominated in foreign currencies exposes investors to currency risk. Fluctuations in exchange rates can affect the value of the bond&apos;s interest payments and principal when converted back to the investor&apos;s home currency.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in bonds?</p>
            <p className="mb-2">How much of your portfolio you allocate for bonds depends on several factors, including:</p>
            <ul className="list-disc ml-6">
              <li>Asset Allocation: Bond allocation is often determined by an investor&apos;s asset allocation strategy, which involves dividing investments among different asset classes (e.g., stocks, bonds, cash). The appropriate bond allocation depends on factors such as age, time horizon,
              risk tolerance, and financial goals.</li>
              <li>Risk Tolerance: Bonds are generally considered low-risk but are not risk-free. Conservative investors with a lower risk tolerance may allocate a higher percentage of their portfolio to bonds for stability and capital preservation. More aggressive investors with a higher risk
              tolerance may have a lower allocation to bonds and focus more on growth assets like stocks.</li>
              <li>Investment Goals and Time Horizon: If you have a shorter investment horizon or specific financial commitments in the near term, a higher bond allocation can provide more stability and liquidity.</li>
              <li>Diversification: Allocating a portion of your portfolio to bonds can help offset the volatility of other assets like stocks. Diversifying across different types of bonds (e.g., government, corporate, municipal) and maturities can further enhance diversification benefits.</li>
              <li>Interest Rate Environment: Consider the prevailing interest rate environment. When interest rates are low, bond yields may be less attractive, which could impact the potential returns on bond investments. Conversely, when interest rates are high, bond prices may be lower, offering
              opportunities for higher yields.</li>
              <li>Investment Research: Conduct thorough research on the bonds you are considering, including the credit quality of the issuers, interest rate sensitivity, and any specific risks associated with the bonds or sectors they represent.</li>
            </ul>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 3,
      name: 'Stocks',
      href: '#',
      imageSrc: '/images/stocks-on-phone.png',
      imageAlt: 'UI of different stocks on app',
      step: '3',
      description: 'Basics of stock investing',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium mt-4">How does the stock market work?</p>
            <ul className="list-disc ml-6">
              <li>The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies.</li>
              <li>Companies that want to raise capital can choose to go public by issuing shares of stock through an initial public offering (IPO). This process involves offering a portion of the company&apos;s ownership to the public.</li>
              <li>Stock exchanges, such as the New York Stock Exchange (NYSE) or Nasdaq, are organized marketplaces where buyers and sellers come together to trade stocks. These exchanges provide the infrastructure, technology, and regulations for orderly trading.</li>
              <li>Companies that have gone public and issued shares are listed on stock exchanges. Each listed company has a unique ticker symbol that represents its stock. Investors can trade these stocks by placing buy or sell orders through brokerage firms.</li>
              <li>Investors, including individuals, institutional investors, and traders, can buy and sell stocks through brokerage accounts. They can place market orders to buy or sell at the prevailing market price or use limit orders to specify a desired price at which to buy or sell.</li>
              <li>The stock market operates on the principles of supply and demand, which can be influenced by factors like company performance, economic conditions, industry trends, and investor sentiment. When more people want to buy a stock, its price tends to rise. Conversely, when
              more people want to sell, the price may decline.</li>
              <li>Stock market indexes, such as the S&P 500 or Dow Jones Industrial Average, track the performance of a specific group of stocks and serve as benchmarks for the overall market. They provide insights into market trends and are used as performance indicators.</li>
              <li>The stock market involves various participants, including individual investors, institutional investors (such as pension funds and mutual funds), traders, market makers, and stockbrokers. These participants contribute to the liquidity and functioning of the market.</li>
              <li>Stock markets are regulated by regulatory bodies like the Securities and Exchange Commission (SEC) (U.S.) to ensure fairness, transparency, and investor protection.</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium mt-4">What are the different types of stocks?</p>
            <ul className="list-disc ml-6">
              <li>Common stocks represent ownership in a company and provide shareholders with voting rights and potential dividends. These stocks offer the potential for capital appreciation and can be volatile in price.</li>
              <li>Preferred stocks have characteristics of both stocks and bonds. They typically pay fixed dividends, and holders have priority over common stockholders in receiving dividends and liquidation proceeds. However, preferred stockholders generally do not have voting rights.</li>
              <li>Growth stocks belong to companies expected to grow at an above-average rate compared to other companies in the market. These stocks may not pay regular dividends as the companies reinvest their earnings to fuel expansion.</li>
              <li>Value stocks are shares of companies that are considered undervalued based on fundamental analysis. Investors look for stocks trading at a lower price relative to their intrinsic value, often with lower price-to-earnings ratios or price-to-book ratios.</li>
              <li>Dividend stocks are issued by companies that regularly distribute a portion of their profits to shareholders in the form of dividends. These stocks can provide a steady income stream, particularly for income-oriented investors.</li>
              <li>Blue-chip stocks are shares of large, well-established, and financially stable companies with a history of reliable performance. These companies often have a strong market presence and are considered less risky than smaller or less-established companies.</li>
              <li>Stocks are categorized based on their market capitalization, representing the total value of a company&apos;s outstanding shares. Small-cap stocks have a smaller market cap, mid-cap stocks fall in the middle range, and large-cap stocks have the highest market cap.</li>
              <li>Cyclical stocks are tied to the economic cycle and tend to perform well when the economy is growing, such as stocks in sectors like consumer discretionary, technology, or industrials. Defensive stocks, on the other hand, are less sensitive to economic fluctuations and
              are often found in sectors like utilities, healthcare, or consumer staples.</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding stocks?</p>
            <p className="mb-2">Stocks are subject to market volatility, meaning their prices can fluctuate daily based on various factors such as economic conditions, political events, and investor sentiment. The value of stocks can go up or down, and there is a possibility of losing a
            portion or all of your investment.</p>
            <p className="mb-2">Individual stocks carry company-specific risks. Factors such as poor financial performance, management issues, legal or regulatory problems, or changes in the competitive landscape can negatively impact the value of a specific company&apos;s stock. For example,
            if a company underperforms during an earnings call, that can cause investors to lose confidence in them and sell their stock.</p>
            <p className="mb-2">Stocks within a specific sector may be influenced by factors that affect that sector as a whole, such as economic conditions, industry trends, or regulatory changes. For example, if the government imposes additional regulations on a specific industry, that can
            lead to investors panicking and selling their stock.</p>
            <p className="mb-2">Some stocks may have low trading volumes or be illiquid, which means there may not be enough buyers or sellers in the market. This can make it difficult to buy or sell shares at desired prices, potentially leading to increased transaction costs or difficulty in
            exiting a position.</p>
            <p>Dividend-paying stocks may be subject to dividend risk if the company reduces or eliminates its dividend payments. This can impact investors who are rely on dividends as a form on passive income.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in stocks?</p>
            <p className="mb-2">Generally, a common rule of thumb is to consider your age as a starting point for determining the percentage of your portfolio allocated to stocks. Subtracting your age from 100 can give you a rough estimate of the percentage you might allocate to stocks, with the
            remainder allocated to other asset classes like bonds or cash. For example, if you are 30 years old, you might consider allocating around 70% (100 - 30) of your portfolio to stocks.</p>
            <p className="mb-2">However, this rule of thumb is just a guideline and should be adjusted based on your risk tolerance and specific financial goals. If you have a higher risk tolerance and a longer investment horizon, you might be comfortable with a larger allocation to stocks. On the
            other hand, if you have a lower risk tolerance or a shorter investment horizon, you might choose a lower allocation to stocks and opt for a more conservative investment approach.</p>
            <p className="mb-2">Investors who are focused on capital preservation and income generation may allocate a higher percentage to lower-risk assets, such as bonds and cash equivalents, with around 20-40% allocated to stocks. Investors seeking a moderate level of growth while still maintaining a
            balanced level of risk may allocate 50% to stocks and 50% to bonds and cash. A growth-oriented portfolio may allocate 70-80% to stocks while an aggressive portfolio seeking maximum capital appreciation may allocate 80% or more to stocks, with a smaller portion allocated to bonds and cash equivalents.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 4,
      name: 'Investment Funds',
      href: '#',
      imageSrc: '/images/iphone-6.png',
      imageAlt: "Person holding iphone 6 with stocks on the screen",
      step: '4',
      description: 'Different types of funds',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Mutual Funds</Tab>
            <Tab>Index Funds</Tab>
            <Tab>ETFs</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What are mutual funds?</p>
            <p className="mb-2">Mutual funds are investment vehicles that pool money from multiple investors to collectively invest in a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on
            behalf of the investors.</p>
            <p className="mb-2">There are different types of mutual funds, catering to different investment goals and risk tolerances. Equity funds primarily invest in stocks or equities while index funds track a specific market index, such as the S&P 500 or FTSE 100. Sector funds
            concentrate their investments in a specific industry or sector, such as tech, healthcare, energy, or financial services while balance funds invest in a mix of stocks, bonds, and sometimes cash equivalents. Target-date funds are designed for retirement and automatically
            adjust their asset allocation over time and international or global funds invest in securities from foreign markets.</p>
            <p className="mb-2">When investors buy shares of a mutual fund, they are allocated units or shares in proportion to their investment. The value of these units fluctuates based on the performance of the underlying securities held by the fund.</p>
            <p className="mb-2">Mutual funds charge fees, such as management fees and operating expenses, which are deducted from the fund&apos;s assets. These fees can vary depending on the fund&apos;s investment strategy and the management company and can eat into returns.</p>
            <p></p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What are index funds?</p>
            <p className="mb-2">Index funds are a type of mutual fund or exchange-traded fund (ETF) that aim to replicate the performance of a specific market index, such as the S&P 500 or the Dow Jones Industrial Average. Instead of trying to outperform the market, index funds seek
            to match the returns of the chosen index by holding a diversified portfolio of securities that mirror the index&apos;s composition.</p>
            <p className="mb-2">Index funds follow a passive investment strategy, meaning they do not involve active stock selection or market timing. Instead, they typically hold all, or a representative sample, of the securities in the target index.</p>
            <p className="mb-2">Compared to actively managed funds, index funds tend to have much lower expense ratios. Since they do not require extensive research or ongoing trading, they have lower operating expenses, resulting in cost-efficient investing.</p>
            <p className="mb-2">Because index funds disclose their holdings regularly, investors always know exactly which securities they own and in what proportions. This transparency helps investors understand the fund&apos;s underlying investments.</p>
            <p>Index funds are best for long-term investors who seek steady, market-like returns over time. By holding a diversified portfolio and minimizing active trading, index funds offer a buy-and-hold approach for investors.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What are ETFs?</p>
            <p className="mb-2">Exchange-Traded Funds (ETFs) are investment funds traded on stock exchanges, similar to individual stocks. They are designed to track the performance of a specific index, commodity, sector, or asset class. ETFs combine the features of mutual funds and
            stocks, offering investors a convenient way to gain diversified exposure to various markets.</p>
            <p className="mb-2">Investors can trade ETFs similar to stocks, buying and selling shares at market prices. This provides liquidity and flexibility compared to traditional mutual funds, which are priced at the end of the trading day.</p>
            <p className="mb-2">ETFs disclose their holdings on a daily basis, enabling investors to see the underlying securities held by the fund. This transparency allows investors to make informed decisions about their investments.</p>
            <p className="mb-2">Because ETFs follow a passive investment strategy, they tend to have lower expense ratios, which make them attractive to investors seeking cost-effective investment options.</p>
            <p> ETFs offer flexibility in trading, allowing investors to buy or sell shares throughout the trading day at market prices. This flexibility provides the opportunity to react quickly to market movements and implement various investment strategies.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding investment funds?</p>
            <p className="mb-2">Mutual funds, index funds, and ETFs are all subject to market risk, which refers to the potential for the value of the investments held within the fund to fluctuate based on market conditions. If the overall market experiences a downturn, the fund&apos;s
            value may drop.</p>
            <p className="mb-2">As with any investment, there is always a risk of losing some or all of the principal investment. While diversification can help mitigate this risk, it does not guarantee against losses.</p>
            <p className="mb-2">Index funds and ETFs may not perfectly replicate the index&apos;s returns due to factors such as fees, tracking errors, and market liquidity. This tracking error can result in underperformance compared to the index.</p>
            <p className="mb-2">Because mutual funds are actively managed, the fund&apos;s performance depends on the fund manager&apos;s skills and decision-making. If the manager makes poor investment decisions or fails to adapt to changing market conditions, it can hurt the
            fund&apos;s performance.</p>
            <p className="mb-2">ETFs and some mutual funds trade on exchanges, which means their liquidity is subject to market demand. During periods of high market volatility or economic stress, it may be more difficult to buy or sell shares at favorable prices.</p>
            <p>Some funds may be concentrated in specific sectors, industries, or asset classes. This concentration can increase the fund&apos;s vulnerability to adverse events affecting those sectors or asset classes.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in investment funds?</p>
            <p className="mb-2">The specific allocation to these funds can vary based on individual preferences and investment strategies. Some investors may choose to allocate a significant portion of their equity holdings to index funds or ETFs, while others may prefer a mix of actively
            managed mutual funds and passive funds.</p>
            <p className="mb-2">A common range for mutual fund allocation within the equity portion of a portfolio is around 10% to 30%, depending on factors such as risk tolerance and investment objectives. Because of their low expense ratios and broad range of holdings, investors often
            allocate a significant portion of their portfolio to index funds. A range of 30% to 70% allocation to index funds within the equity portion of a portfolio is not uncommon. Meanwhile, a range of 20% to 50% allocation to ETFs within the equity portion of a portfolio is common.</p>
            <p>Note that these allocation ranges are general guidelines and should be tailored to individual circumstances. The overall asset allocation of a portfolio should take into account other asset classes, such as fixed income, cash, and alternative investments, to maintain a
            well-diversified and balanced portfolio.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 5,
      name: 'Commodities',
      href: '5',
      imageSrc: '/images/assorted-food.png',
      imageAlt: "Assorted foods in barrels",
      step: '4',
      description: 'Metals, gold, and more',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What are commodities?</p>
            <p className="mb-2">Commodities are raw materials or primary agricultural products that can be bought and sold in the marketplace. They are tangible goods used in the production of other goods or consumed directly. Common examples of commodities include metals (gold, silver, copper),
            energy resources (crude oil, natural gas), agricultural products (wheat, corn, soybeans), and livestock (cattle, hogs).</p>
            <p className="mb-2">Commodities are often traded on exchanges and can be bought and sold through futures contracts or exchange-traded funds (ETFs). Investors can participate in commodity markets to gain exposure to price movements and potentially profit from fluctuations in supply and demand.</p>
            <p>There are several ways to invest in commodities, including buying physical commodities, trading commodity futures contracts, investing in commodity-focused mutual funds or ETFs, or participating in commodity-related stocks of companies involved in commodity production or exploration.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What are the different types of commodities?</p>
            <p className="mb-2">Energy commodities include crude oil, natural gas, heating oil, and gasoline. They are essential for powering industries, transportation, and residential needs. Prices of energy commodities are influenced by factors like global demand, geopolitical events,
            production levels, and weather patterns.</p>
            <p className="mb-2">Precious metals like gold, silver, platinum, and palladium are considered storehouses of value and are used in various industries, including jewelry, electronics, and automotive. Industrial metals like copper, aluminum, zinc, and nickel are used in construction,
            manufacturing, and infrastructure projects.</p>
            <p className="mb-2">Agricultural commodities consist of crops and livestock. Crops include wheat, corn, soybeans, rice, coffee, cocoa, and sugar. Livestock commodities include cattle, hogs, and poultry. Factors such as weather conditions, crop yields, global supply and demand, and
            government policies impact the prices of agricultural commodities.</p>
            <p className="mb-2">Soft commodities refer to commodities derived from plants or other natural sources. They include cotton, lumber, rubber, wool, and palm oil. Soft commodities are used in industries such as textiles, furniture, and food production.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding commodities?</p>
            <p className="mb-2">Commodities can experience significant price volatility due to various factors such as supply and demand imbalances, geopolitical events, weather conditions, and economic indicators. Additionally, some commodity markets can be relatively illiquid, meaning there
            may be limited buyers or sellers at certain times, which can impact the ability to buy or sell commodities at desired prices.</p>
            <p className="mb-2">Many commodities are affected by seasonal patterns and weather conditions. Droughts, floods, or pest infestations can lead to crop failures and supply disruptions. Energy commodities can be influenced by hurricanes, geopolitical tensions, or production disruptions.</p>
            <p className="mb-2">Government policies and regulations can significantly impact commodity prices and market dynamics. Changes in tax policies, trade restrictions, or environmental regulations can affect commodity supply chains and investment returns.</p>
            <p className="mb-2">Some commodities, such as oil or agricultural products, require storage and transportation infrastructure. Issues like storage costs, logistical challenges, and disruptions in transportation networks can impact commodity prices and profit margins.</p>
            <p>Unlike stocks or bonds, commodities typically do not generate income in the form of dividends or interest. Investors rely on capital appreciation or price appreciation to earn returns on their investments, which can be uncertain and unpredictable.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in commodities?</p>
            <p className="mb-2">Financial advisors often recommend allocating 5-10% of a well-diversified portfolio to commodities. This allocation provides exposure to the potential benefits of commodities, such as diversification, inflation hedging, and the potential for attractive returns.</p>
            <p className="mb-2">However, commodities can be volatile and carry unique risks. Therefore, some investors may choose to have a smaller allocation or none at all, while others with a higher risk appetite or specific investment strategies may opt for a larger allocation.</p>
            <p className="mb-2">Commodities investments, particularly those involving futures contracts, can be more suitable for shorter-term trading strategies. If you have a longer investment horizon, you may consider a more conservative allocation to commodities.</p>
            <p>It&apos;s essential to have a good understanding of the specific commodities you&apos;re investing in and the underlying factors that drive their prices. Different commodities have unique characteristics, each with its own supply and demand dynamics,
            which can impact performance.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 6,
      name: 'Real Estate',
      href: '#',
      imageSrc: '/images/living-room.png',
      imageAlt: "Beige living room setup",
      step: '6',
      description: 'A tried and true investment',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What is real estate?</p>
            <p className="mb-2">Real estate refers to property consisting of land, buildings, and natural resources such as water, minerals, or crops. It is a tangible asset that encompasses residential, commercial, and industrial properties, and can include houses, apartments,
            offices, retail spaces, warehouses, and vacant land.</p>
            <p className="mb-2">Investing in real estate involves acquiring, owning, managing, and selling real estate properties with the expectation of generating income or capital appreciation. Real estate investments can be made directly by purchasing properties or indirectly
            through real estate investment trusts (REITs), real estate mutual funds, or real estate crowdfunding platforms.</p>
            <p className="mb-2">Renting out properties can provide a steady cash flow stream, especially for residential and commercial properties. Over time, these properties may appreciate in value due to factors such as market demand, improvements in infrastructure, economic
            growth, and development in the surrounding area.</p>
            <p className="mb-2">Real estate investments can act as a hedge against inflation. As the cost of living rises, rents and property values tend to increase, providing potential protection against the eroding effects of inflation.</p>
            <p>Additionally, real estate often allows for the use of leverage, or borrowing funds to finance the purchase of properties. Through leverage, investors can control a larger asset base with a smaller initial investment, potentially amplifying returns.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What are the different types of real estate?</p>
            <p className="mb-2">Residential real estate includes properties designed for people to live in, such as single-family homes, condominiums, townhouses, apartments, and vacation homes.</p>
            <p className="mb-2">Commercial properties are intended for business purposes and include office buildings, retail stores, shopping centers, warehouses, hotels, and restaurants.</p>
            <p className="mb-2"> Industrial properties are used for manufacturing, production, storage, and distribution activities. Examples include factories, industrial parks, distribution centers, and logistics facilities.</p>
            <p className="mb-2">Mixed-use properties combine different types of real estate within a single development. For instance, a building might have retail spaces on the ground floor and apartments on the upper floors.</p>
            <p className="mb-2">Agricultural properties consist of farmland, ranches, orchards, vineyards, and livestock farms. These properties are used for agricultural activities, including crop cultivation, animal rearing, and food production.</p>
            <p className="mb-2">Special purpose properties are designed to serve specific functions. Examples include hospitals, schools, religious buildings, government facilities, sports stadiums, and entertainment venues.</p>
            <p>While not a specific type of property, REITs are investment vehicles that allow investors to pool funds together to invest in income-generating real estate assets without directly owning properties.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding real estate?</p>
            <p className="mb-2">Real estate prices and demand can be affected by economic conditions, interest rates, and local factors. During economic downturns or recessions, the real estate market may experience reduced demand, increased vacancies, and declining property values.</p>
            <p className="mb-2">Investing in real estate often involves borrowing funds through mortgages or loans. If interest rates rise significantly or financing becomes difficult to obtain, it can impact the affordability and profitability of investments.</p>
            <p className="mb-2">Each property has its own unique risks, such as location risks (e.g., neighborhood deterioration, lack of amenities), property condition risks (e.g., maintenance issues, unexpected repairs), and tenant-related risks (e.g., vacancies, non-payment of rent).</p>
            <p className="mb-2">Compared to stocks or bonds, where you can easily sell them in the markets, real estate investments are generally less liquid. Selling a property can take time and may be subject to market conditions, limiting the ability to quickly access cash.</p>
            <p className="mb-2">Real estate investments are subject to various laws and regulations, including zoning, building codes, landlord-tenant laws, and tax regulations. Changes in regulations or legal disputes can impact the profitability and operations of real estate investments.</p>
            <p className="mb-2">Managing real estate investments requires active involvement, including property maintenance, tenant management, and dealing with operational challenges. Inefficient management or unexpected events can affect investment performance.</p>
            <p>Real estate can be influenced by external factors beyond the investor&apos;s control, such as natural disasters, environmental risks, or changes in government policies that impact property values or rental regulations.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in real estate?</p>
            <p className="mb-2">Conventional wisdom suggests that investors should hold between 25% and 40% of personal wealth in real estate. Real estate offers wealth-producing traits such as appreciation, equity, and rental income potential. Some homeowners generate
            income by renting out parts of their homes or owning multiple properties.</p>
            <p className="mb-2">Homeowners who don&apos;t want to be house-rich and cash-poor may feel comfortable with no more than 25% of their wealth tied up in their homes. The ideal allocation varies based on factors such as age, income, and personal preferences. It&apos;s
            advised to have a diversified investment portfolio rather than disproportionately allocating wealth to a home.</p>
            <p>Within the real estate asset class, diversification can be achieved by investing in different types of properties (residential, commercial, industrial), geographic locations, and investment vehicles (direct ownership, real estate investment trusts (REITs), real
            estate mutual funds, etc.).</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 7,
      name: 'Collectibles',
      href: '#',
      imageSrc: '/images/collectibles.png',
      imageAlt: "Major U.S. sports cards",
      step: '7',
      description: 'Items of value',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What are collectibles?</p>
            <p className="mb-2">Collectibles are items that have value or appeal to collectors due to their rarity, uniqueness, historical significance, aesthetic appeal, or cultural importance. They can include a wide range of items from various categories such as art, coins, stamps,
            antiques, sports memorabilia, rare books, vintage toys, autographs, and more.</p>
            <p className="mb-2">One aspect that makes collectibles appealing is their ability to evoke emotions, nostalgia, or personal interest. Collecting items of personal significance or cultural importance can provide a sense of fulfillment and enjoyment. Additionally, collectibles
            can serve as tangible representations of history, artistry, and human creativity.</p>
            <p>Collectibles are often sought after by enthusiasts who have a passion for specific items or categories and are willing to pay a premium for them. The value of collectibles can fluctuate based on factors such as demand, condition, rarity, and market trends.</p>
         </TabPanel>

          <TabPanel>
            <p className="font-medium">What are the different types of collectibles?</p>
            <ul className="list-disc ml-6">
              <li>Arts and Antiques: Paintings, sculptures, ceramics, furniture, and other objects of historical or artistic significance</li>
              <li>Coins and Stamps: Rare coins or stamps with historical value, rarity, or unique attributes</li>
              <li>Sports Memorabilia: Autographed jerseys, trading cards, game-used equipment, championship memorabilia</li>
              <li>Comic Books and Trading Cards: Vintage comic books or trading cards featuring popular characters, superheroes, or sports figures</li>
              <li>Toys and Action Figures: Vintage toys, action figures, and dolls from specific eras or franchises</li>
              <li>Books and Manuscripts: Rare books, first editions, signed copies, or manuscripts with historical, literary, or cultural significance</li>
              <li>Wine and Spirits: Rare or fine wines, whiskies, or other spirits</li>
              <li>Memorabilia and Historical Artifacts: Items related to historical events, celebrities, or significant moments in history, such as autographs, letters, artifacts, or clothing</li>
              <li>Musical Instruments: Vintage guitars, pianos, violins, and other musical instruments highly regarded for their craftsmanship, historical importance, or association with renowned musicians</li>
              <li>Jewelry and Watches: Rare or antique jewelry pieces, gemstones, or unique timepieces</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding collectibles?</p>
            <p className="mb-2">The collectibles market can be relatively illiquid. Finding the right buyer or the appropriate marketplace can be time-consuming and may result in a lower-than-expected sale price.</p>
            <p className="mb-2">The value of collectibles is often influenced by trends and fads, which can change over time. What may be highly desirable and valuable today could lose popularity in the future, impacting the potential return on investment.</p>
            <p className="mb-2">Minor damage, restoration, or missing components can significantly diminish an item&apos;s worth. It requires expertise and careful evaluation to determine the authenticity, condition, and market demand.</p>
            <p className="mb-2">Collectibles, like many other investments, are subject to market volatility. Their prices can fluctuate based on factors such as economic conditions, changing consumer preferences, and market sentiment.</p>
            <p className="mb-2">Collectibles often require proper storage, climate control, and maintenance to preserve their condition and value. These costs can add up over time and should be factored into the overall investment analysis.</p>
            <p className="mb-2">The collectibles market is not immune to counterfeits and fraudulent activities. Buyers must be vigilant and knowledgeable to avoid purchasing fake or misrepresented items. Authenticity verification and dealing with reputable sellers or experts are crucial.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in collectibles?</p>
            <p className="mb-2">Collectibles are generally considered alternative investments and are often recommended as a smaller portion of a well-diversified portfolio. As a general guideline, many financial advisors suggest allocating no more than 5-10% of your
            total investment portfolio to collectibles.</p>
            <p className="mb-2">It&apos;s important to note that collectibles, due to their unique nature and risks, should not be the primary or sole component of an investment strategy. They are typically considered more speculative and less liquid than traditional asset classes such as stocks and bonds.</p>
            <p className="mb-2">To maximize your chances of profitability, it is advised to create a diverse collection within your chosen item category, covering various market segments. This approach helps mitigate the risk of a significant decline in value if a particular sector
            experiences a downturn. For instance, wine investors starting with around $100 to $150 per bottle can allocate their initial investment across different regions, ensuring a more balanced portfolio.</p>
            <p>However, even with careful research and diversification, there is no guarantee that market trends will align with your interests. Therefore, it is recommended to invest in items that you genuinely love and have a passion for. This approach acknowledges the unpredictable
            nature of the market and the absence of assured returns.</p>
          </TabPanel>
        </Tabs>
      ),
    },
    {
      id: 8,
      name: 'Cryptocurrency',
      href: '#',
      imageSrc: '/images/crypto-coins.png',
      imageAlt: "Different crypto coins",
      step: '8',
      description: 'A new financial tool',
      hasTabs: true,
      cardContent: (
        <Tabs>
          <TabList>
            <Tab>Intro</Tab>
            <Tab>Types</Tab>
            <Tab>Risks</Tab>
            <Tab>Allocation</Tab>
          </TabList>
          <TabPanel>
            <p className="font-medium">What is cryptocurrency?</p>
            <p className="mb-2">Cryptocurrency has revolutionized the financial landscape, introducing a new form of digital currency that operates independently of traditional banking systems. Cryptocurrencies are decentralized digital assets that use cryptography for
            security and rely on blockchain technology to record transactions. Unlike traditional currencies issued by central banks, cryptocurrencies are not controlled by any central authority, making them immune to government interference and manipulation.</p>
            <p className="mb-2">The most well-known cryptocurrency is Bitcoin (BTC), which was introduced in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto. Since then, numerous other cryptocurrencies, often referred to as altcoins, have emerged,
            each with its own unique features and functionalities.</p>
            <p>Cryptocurrencies have gained popularity due to their potential for decentralized transactions, lower transaction fees, faster settlement times, and increased privacy. They also offer investment opportunities for those seeking to capitalize
            on the volatility and potential growth of the cryptocurrency market.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What are the different types of crypto?</p>
            <ul className="list-disc ml-6">
              <li>Bitcoin remains the most well-known and widely accepted crypto. It serves as a digital currency and store of value.</li>
              <li>Altcoins refer to all cryptos other than Bitcoin. This category includes well-known cryptocurrencies like Ethereum (ETH), Solana (SOL), Dogecoin (DOGE), among many others.</li>
              <li>Stablecoins are designed to have a stable value by pegging them to a reserve asset like fiat currency (e.g., U.S. dollar). Examples include Tether (USDT), USD Coin (USDC), and Binance USD (BUSD).</li>
              <li>Security tokens represent ownership in a real-world asset, such as company shares, real estate, or commodities. They are subject to securities regulations and provide investors with certain rights and benefits.</li>
              <li> Utility tokens provide access to a specific product or service within a blockchain-based ecosystem. They are often used for decentralized applications (DApps) and smart contracts. Examples include Ethereum&apos;s Ether (ETH), which is used to fuel transactions
              and execute smart contracts on the Ethereum network.</li>
              <li>Privacy coins focus on enhancing user privacy and anonymity by implementing advanced cryptographic techniques. Examples include Monero (XMR) and Zcash (ZEC).</li>
              <li>Interoperability coins aim to facilitate communication and interaction between different blockchain networks that may use different protocols and standards. Examples include Polkadot (DOT) and Cosmos (ATOM).</li>
            </ul>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">Are there risks to holding crypto?</p>
            <p className="mb-2">Cryptocurrencies are known for their high price volatility. Their values can experience significant fluctuations within short periods, which can lead to rapid gains or losses. The volatility makes it challenging to predict and time the market accurately.</p>
            <p className="mb-2">The regulatory environment surrounding crypto is still evolving in many countries. Government regulations and policies can impact the legality, trading, and use of crypto, potentially leading to restrictions or increased scrutiny.</p>
            <p className="mb-2">Cryptocurrencies are susceptible to security breaches, including hacking attacks, thefts, and scams. If you do not properly secure your holdings, you may risk losing your assets.</p>
            <p className="mb-2">Unlike traditional financial systems, cryptocurrencies are not backed by a central authority or covered by deposit insurance. If you encounter fraud, hacking, or other issues, it can be challenging to seek recourse or recover lost funds.</p>
            <p className="mb-2">The crypto market is still relatively small and can be susceptible to market manipulation. Pump-and-dump schemes, fake trading volumes, and price manipulation by large holders, known as &quot;whales,&quot; can distort the market and affect prices.</p>
            <p className="mb-2">Cryptocurrencies rely on blockchain technology, which is still developing and may have vulnerabilities or technical flaws. Issues such as network congestion, software bugs, or blockchain forks can impact the functionality and stability of specific cryptocurrencies.</p>
            <p>While there is growing acceptance of crypto, limited acceptance by merchants, regulatory hurdles, and scalability challenges can hinder mainstream adoption and impact long-term value.</p>
          </TabPanel>

          <TabPanel>
            <p className="font-medium">What percentage of your portfolio should be invested in crypto?</p>
            <p className="mb-2">Financial experts often suggest having a small portion, typically ranging from 1% to 5%, of your portfolio for speculative investments like cryptocurrencies. This allows for potential gains if the market performs well while limiting the potential impact
            on your overall portfolio in case of losses.</p>
            <p className="mb-2">Cryptocurrency investments are highly speculative and can be subject to extreme price swings. Therefore, it is crucial to carefully assess your risk tolerance and only invest an amount that you are comfortable with potentially losing entirely.</p>
            <p className="mb-2">When determining your cryptocurrency portfolio, you need to decide which crypto assets to buy and how much to hold. One option is to own Bitcoin only, as it is the oldest and largest digital asset with high market dominance. However, diversifying your position
            beyond Bitcoin is crucial to capture the full crypto opportunity set and mitigate risk.</p>
            <p>Ethereum is a popular alternative to Bitcoin, known for its utility in global commerce and its impact on other tokens relying on the Ethereum blockchain. A balanced portfolio could include a mix of Bitcoin and Ethereum, with a 50-50 or 60-40 split. While larger coins may
            dominate your portfolio, keeping smaller proportions of other crypto assets can enhance long-term returns.</p>
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
          {/* How to Bank */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">How to Bank</h2>
          <ProductList products={products} setSelectedProduct={setSelectedProduct} />

          {/* Credit 101 */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Breaking Down Credit</h2>
          <ProductList products={products2} setSelectedProduct={setSelectedProduct} />

          {/* Budgeting Strategies */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Budgeting Strategies to Reclaim Control Over Your Finances</h2>
          <ProductList products={products3} setSelectedProduct={setSelectedProduct} />

          {/* The First-Time Homebuyer's Journey */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">The First-Time Homebuyer&apos;s Journey</h2>
          <ProductList products={products4} setSelectedProduct={setSelectedProduct} />

          {/* Setting Yourself Up For Success Series */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Setting Yourself Up For Financial Success</h2>
          <ProductList products={products5} setSelectedProduct={setSelectedProduct} />

          {/* Assets and Markets */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">Assets and Markets</h2>
          <ProductList products={products6} setSelectedProduct={setSelectedProduct} />

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
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        setSelectedProduct(null);
                      }}
                    >
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
