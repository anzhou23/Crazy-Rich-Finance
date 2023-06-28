import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function audit() {
    const navigation = [
        { name: 'Learn', href: 'learn' },
        { name: 'Dictionary', href: 'dictionary' },
        { name: 'About', href: 'about' },
    ];

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar navigation={navigation} />

            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mb-4 text-sm">
                    <Link href="/" class="text-green-500 font-medium underline">Home</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <Link class="text-green-500 font-medium underline" href="/dictionary/">Dictionary</Link>
                    <span className="px-2" aria-hidden="true">/</span>
                    <span className="text-gray-700">Audit</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Audit</h1>
                    <p className="mt-4">An audit is a systematic examination, review, or inspection of financial records, statements, and other relevant documents to ensure accuracy, compliance with regulations and
                    laws, and adherence to accounting principles. It is typically conducted by an independent and qualified professional known as an auditor.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">The primary objectives of an audit are to provide assurance and enhance the credibility and reliability of financial information presented by an organization. Audits can be conducted
                    by internal auditors within an organization or by external auditors hired from independent accounting firms, such as EY or Deloitte.</p>
                    <p className="mt-2">During an audit, the auditor examines financial statements, supporting documentation, and internal control systems to assess the accuracy and fairness of financial reporting. They review
                    financial transactions, verify the existence and valuation of assets and liabilities, assess the effectiveness of internal controls, and ensure compliance with relevant laws and regulations. Audits can vary
                    in scope and purpose, covering financial statements, internal controls, operational processes, or specific areas of concern based on the needs and objectives of the audit engagement.</p>
                    <p className="mt-2">Audits promote transparency and provide stakeholders with reliable financial information they can use to make informed decisions about an organization&apos;s financial health and performance.
                    They ensure compliance with accounting standards, legal requirements, and industry regulations, helping organizations fulfill their obligations and avoid penalties or legal consequences. By assessing internal
                    controls and identifying potential weaknesses or irregularities, organizations can manage risks and prevent fraud, errors, and financial misstatements. Audits hold organizations accountable for their financial
                    activities and promote ethical behavior, integrity, and responsible financial management.</p>
                </section>
            </div>
        </div>
    )
}