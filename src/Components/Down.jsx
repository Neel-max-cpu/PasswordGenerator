import React from 'react'
import Slider from './Slider'

const Down = () => {
    return (
        <>
            <div className='mt-20'>
                <div className="flex items-center justify-center h-50 w-50 mb-20">
                    <img src="/image/1.png" alt="Description of image" className="w-1/2 h-auto" />
                </div>
                <h1 className='text-white text-2xl text-center'>Password length: 7</h1>
                <Slider />
                <h1 className='mt-20 text-white text-2xl text-center'>Characters Used:</h1>
                <div className="mt-10 flex justify-center items-center space-x-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-blue-500" />
                        <h1 className="text-white text-2xl font-bold">ABC</h1>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox p-4 h-4 w-4 text-blue-500" />
                        <h1 className="text-white text-2xl font-bold">abc</h1>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-blue-500" />
                        <h1 className="text-white text-2xl font-bold">123</h1>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-blue-500" />
                        <h1 className="text-white text-2xl font-bold">#$&</h1>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Down
