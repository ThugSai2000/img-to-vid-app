import React from 'react'

const Creations = () =>
{
    return (
        <section id='showcase' className='py-24 bg-black'>
            <div className='max-w-7xl mx-auto px-y sm:px-6 lg:px-8'>
                {/* heading */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white'>Featured Creation's</h2>
                    <p className='mt-4 text-xl text-gray-400'>Discover whats possible with our AI tools</p>
                </div>
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='group relative over-hidden rounded-xl aspect-[4/3]'>
                        <img
                            className='w-full h-full object-cover transform group-hover:Scale-110 transition-transform duration-500'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s" alt="" srcset="" />

                    </div>
                    <div className='group relative over-hidden rounded-xl aspect-[4/3]'>
                        <img
                            className='w-full h-full object-cover transform group-hover:Scale-110 transition-transform duration-500'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s" alt="" srcset="" />

                    </div>
                    <div className='group relative over-hidden rounded-xl aspect-[4/3]'>
                        <img
                            className='w-full h-full object-cover transform group-hover:Scale-110 transition-transform duration-500'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s" alt="" srcset="" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creations
