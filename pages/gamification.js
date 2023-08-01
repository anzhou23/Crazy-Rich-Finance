import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function gamification() {
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
                    <span className="text-gray-700">Gamification</span>
                </div>

                <section>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gamification</h1>
                    <p className="mt-4">Gamification is the process of integrating elements of game design and mechanics into non-game contexts to engage and motivate individuals to achieve specific goals.
                    It takes advantage of human psychology and our natural inclination towards play and competition to drive desired behaviors, learning, or problem-solving.</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">What You Need To Know</h2>
                    <p className="mt-2">In gamification, various game-like elements are used, such as points, badges, levels, leaderboards, challenges, and rewards, to create an immersive and interactive
                    experience. These elements provide immediate feedback, a sense of achievement, and a feeling of progress, which can boost motivation and engagement.</p>
                    <p className="mt-2">Businesses, educational institutions, and other organizations often use gamification to enhance employee productivity, customer engagement, and learning outcomes. For
                    example, fitness apps like Strava use gamification to encourage users to exercise regularly by awarding points for completing workouts or achieving fitness milestones and incorporating social
                    elements to the app. Similarly, educational platforms like Duolingo incorporate quizzes, challenges, badges, and leadership boards to make learning more enjoyable.</p>
                </section>
            </div>
        </div>
    )
}