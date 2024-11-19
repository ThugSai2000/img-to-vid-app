import React, { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const Navbar = () =>
{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='fixed w-full bg-black/95 backdrop:-blur-sm z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:p-6 lg:px-8 '>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <div className='flex items-center gap-2 text-white'>
                                {/* logo */}
                                <Zap className='w-8 h-8' />
                                <span className='text-xl font-bold'>NeuralForge</span>
                            </div>
                        </div>
                        {/* nav sections */}
                        <div className='hidden md:block'>
                            <div>
                                <a href="/" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Features</a>
                                <a href="/" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>ShowCase</a>
                                <a href="/" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Pricing</a>
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors'>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button
                            className='inline-flex items-center  justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className='block w-6 h-6' /> : <Menu className='block w-6 h-6' />}

                        </button>
                    </div>
                    <div>

                    </div>
                    {isOpen && (<div className="md:hidden mt-52">
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a href="/" className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium'>Features</a>
                            <a href="/" className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium'>ShowCase</a>
                            <a href="/" className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium'>Pricing</a>
                            <button className='bg-white text-black px-4 py-2 rounded-md block text-sm font-medium hover:bg-gray-200 transition-colors'>
                                Get Started
                            </button>
                        </div>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
