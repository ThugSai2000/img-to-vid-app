import { Video } from 'lucide-react'
import React from 'react'
import { features } from '../utils/data'

const Features = () =>
{
    return (
        <section id='features' className='py-24 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* heading */}
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-white mb-16'>Powerful Features</h2>
                </div>

                {/* cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>


                    {features.map((feature, index) => (
                        <button className='text-left relative group bg-black/50 backdrop-blur-sm p-8  rounded-xl border border-gray-800 hover:border-purple-500 transition-colors' key={index}>
                            <div className='abosolute inset-0 bg-gradient-to-r from-purple-500/10 to blue-500/10 rounded-xl p-2'>
                                <feature.icon className='w-12 h-12 text-purple-500 mb-4' />
                                <h3 className='text-xl font-semibold text-white mb-2'>
                                    {feature.title}
                                    <span className='ml-2 text-xs bg-purple-500/20 px-2 py-1 rounded-full'>Soon</span>
                                </h3>
                                <p className='text-gray-400'>{feature.description}</p>
                            </div>
                        </button>
                    ))}





                </div>
            </div>
        </section>
    )
}

export default Features
