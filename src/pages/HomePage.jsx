import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Creations from '../components/Creations'
import Pricing from '../components/Pricing'

const HomePage = () =>
{
    return (
        <div >
            <Navbar />
            <Hero />
            <Features />
            <Creations />
            <Pricing />
        </div>
    )
}

export default HomePage
