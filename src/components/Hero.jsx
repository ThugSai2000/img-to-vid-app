import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'

const Hero = () =>
{
    return (
        <div className='text-white relative overflow-hidden bg-black'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30 opacity-75' />
            </div>

            <div className='relative min-h-screen flex flex-col  justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center text-center gap-8'>
                    <div className='inline-flex items-center gap-2 bg-white/10 backdrop:blur-sm px-4 py-2 rounded-full'>
                        <Sparkles className='w-4 h-4' />
                        <span className='text-sm'>Revolutionizing AI Creation</span>
                    </div>

                    <h1 className='text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white t0-gray-300'>Create Stunnig AI Content in Minutes</h1>

                    <p className='text-xl text-gray-300 max-w-xl'>
                        Tranform your creative process with our AI-powered platform.
                    </p>

                    <div className='flex sm:flex-grow gap-4 mt-8'>
                        <button className='bg-white text-black px-4 py-2 rounded-md  text-sm font-medium hover:bg-gray-200 transition-colors inline-flex gap-2'>
                            Start Creating
                            <ArrowRight />
                        </button>
                        <button className='bg-white text-black px-4 py-2 rounded-md  text-sm font-medium hover:bg-gray-200 transition-colors inline-flex gap-2'>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
