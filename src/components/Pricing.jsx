import React from 'react'

const Pricing = () =>
{
    return (
        <section id='pricing' className='py-24 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-y sm:px-6 lg:px-8'>
                {/* heading */}
                <div className='text-center mb-16'>

                    <h2 className='text-4xl font-bold text-white'>Simple Pricing</h2>
                    <p className='mt-4 text-xl text-gray-400'>Choose the perfect paln for your needs</p>
                </div>
                {/* pricing cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className={`relative rounded-2xl ${false ? 'bg-purple-800' : 'bg-black-900 backdrop-blur-sn border border-gray-800'} `}>
                        {/* most popular */}
                        <div className='abosulte -top-14 left-1/2 transform -translate-x-1/2'>
                            {/* <div className='bg-purple-500 text-white text-sm font-medium py-1 px-4 rounded-full'>
                                Most Popular
                            </div> */}
                        </div>
                        {/* plan features */}

                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-white'>Plan Name</h3>
                            <div className='mt-4 flext items-baseline justify-center'>
                                <span className='text-5xl font-extrabold text-white'>$99</span>
                                <span className='ml-1 text-xl text-gray-400'>/month</span>
                            </div>
                        </div>
                        {/* points */}
                        <ul className='mt-8 space-y-4'>
                            <li>Benefit 1</li>
                            <li>Benefit 2</li>
                            <li>Benefit 3</li>
                            <li>Benifit 4</li>
                        </ul>
                        <button className='mt-8 w-full py-3 px-6 bg-purple-500 text-white font-medium'>
                            Get Started
                        </button>
                    </div>
                    <div className={`relative rounded-2xl ${true ? 'bg-purple-800' : 'bg-black-900 backdrop-blur-sn border border-gray-800'} `}>
                        {/* most popular */}
                        <div className='abosulte -top-14 left-1/2 transform -translate-x-1/2'>
                            <div className='bg-purple-500 text-white text-sm font-medium py-1 px-4 rounded-full'>
                                Most Popular
                            </div>
                        </div>
                        {/* plan features */}

                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-white'>Plan Name</h3>
                            <div className='mt-4 flext items-baseline justify-center'>
                                <span className='text-5xl font-extrabold text-white'>$99</span>
                                <span className='ml-1 text-xl text-gray-400'>/month</span>
                            </div>
                        </div>
                        {/* points */}
                        <ul className='mt-8 space-y-4'>
                            <li>Benefit 1</li>
                            <li>Benefit 2</li>
                            <li>Benefit 3</li>
                            <li>Benifit 4</li>
                        </ul>
                        <button className='mt-8 w-full py-3 px-6 bg-purple-500 text-white font-medium'>
                            Get Started
                        </button>
                    </div>
                    <div className={`relative rounded-2xl ${false ? 'bg-purple-800' : 'bg-black-900 backdrop-blur-sn border border-gray-800'} `}>
                        {/* most popular */}
                        <div className='abosulte -top-14 left-1/2 transform -translate-x-1/2'>
                            {/* <div className='bg-purple-500 text-white text-sm font-medium py-1 px-4 rounded-full'>
                                Most Popular
                            </div> */}
                        </div>
                        {/* plan features */}

                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-white'>Plan Name</h3>
                            <div className='mt-4 flext items-baseline justify-center'>
                                <span className='text-5xl font-extrabold text-white'>$99</span>
                                <span className='ml-1 text-xl text-gray-400'>/month</span>
                            </div>
                        </div>
                        {/* points */}
                        <ul className='mt-8 space-y-4'>
                            <li>Benefit 1</li>
                            <li>Benefit 2</li>
                            <li>Benefit 3</li>
                            <li>Benifit 4</li>
                        </ul>
                        <button className='mt-8 w-full py-3 px-6 bg-purple-500 text-white font-medium'>
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Pricing
