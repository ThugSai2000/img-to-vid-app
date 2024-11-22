import { X } from 'lucide-react'
import React, { useState } from 'react'

const ImageGenerator = () =>
{
    const [prompt, setPrompt] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedImage, setGeneratedImage] = useState(false)



    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
            <div className='bg-gray-900  rounded-2xl w-full max-w-xl overflow-hidden'>
                <div className='p-6 border-b border-gray-800 flex items-center justify-between'>
                    <h3>AI Image Generation</h3>
                    <button>
                        <X />
                    </button>

                </div>

                {/* text box */}
                <div className='p-6'>

                    <div className='space-y-4'>
                        <div className='text-left'>
                            <label htmlFor="prompt" >
                                Enter Your Prompt
                            </label>
                            <textarea
                                className='w-full bg-gray-900 border border-gray-800 rounded-lg p-2'
                                value={prompt}
                                rows={3}
                                placeholder='Describe your image'
                            />
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            {/* <div> */}
                            <button className='text-sm bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full'
                                onClick={() => setPrompt(' A scenery of a forest with a waterfall in the background')}

                            >
                                A scenery of a forest with a waterfall in the background
                            </button>
                            <button className='text-sm bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full'
                                onClick={() => setPrompt('A futuristic city skyline with flying cars')}
                            >
                                A futuristic city skyline with flying cars
                            </button>
                            <button className='text-sm bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full'

                                onClick={() => setPrompt('A group of friends having a barbecue in a park')}
                            >
                                A group of friends having a barbecue in a park
                            </button>
                            <button className='text-sm bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full'

                                onClick={() => setPrompt('A pink blosson tree')}
                            >

                                A pink blosson tree
                            </button>
                            {/* </div> */}


                        </div>
                        <button className='w-full bg-purple-600 text-white py-3 rounded-lg font-medium'
                            onClick={() => setGeneratedImage(true)}
                        >
                            Generate Image
                        </button>
                    </div>

                    {
                        generatedImage && (
                            <div>
                                <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="Generated" className='w-full h-auto rounded-lg mt-4' />
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ImageGenerator
