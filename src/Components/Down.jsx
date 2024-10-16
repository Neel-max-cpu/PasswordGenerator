import React, { useState } from 'react'
import Slider from './Slider'
import img1 from '../Assets/1copy.png'
const Down = () => {

    const [passwordLength, setPasswordLength] = useState(15); // Initial password length state


    return (
        <>
            <div className='flex justify-evenly mt-20 mx-16'>
                <div className="flex items-center justify-center h-96 w-96 mb-20">
                    <img src={img1} alt="Description of image" className="w-full h-full object-cover"/>
                </div>
                <div>
                    <h1 className='text-black text-2xl text-center'>Password length: {passwordLength}</h1>
                    <Slider onChangeLength={setPasswordLength} />
                    <h1 className='mt-20 text-black text-2xl text-center'>Characters Used:</h1>
                    <div className="mt-10 flex justify-center items-center space-x-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox p-4 h-4 w-4 text-blue-500" />
                            <h1 className="text-black text-2xl font-bold">ABC</h1>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox p-4 h-4 w-4 text-blue-500" />
                            <h1 className="text-black text-2xl font-bold">abc</h1>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox p-4 h-4 w-4 text-blue-500" />
                            <h1 className="text-black text-2xl font-bold">123</h1>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox p-4 h-4 w-4 text-blue-500" />
                            <h1 className="text-black text-2xl font-bold">#$&</h1>
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Down
