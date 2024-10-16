import React, { useState } from 'react'
import Slider from './Slider'
import img1 from '../Assets/1copy.png'
import { Checkbox } from "@/components/ui/checkbox"
const Down = ({ password, length, useUppercase, setUseUppercase, useLowercase, setUseLowercase, useNumbers, setUseNumbers, useSymbols, setUseSymbols }) => {

    const [passwordLength, setPasswordLength] = useState(15); // Initial password length state


    return (
        <>
            {/* image --- */}
            <div className='flex justify-evenly mt-20 mx-16'>
                <div className="flex items-center justify-center h-96 w-96 mb-20">
                    <img src={img1} alt="Description of image" className="w-full h-full object-cover" />
                </div>

                <div>
                    <h1 className='text-black text-2xl text-center'>Password length: {passwordLength}</h1>
                    <Slider onChangeLength={setPasswordLength} />

                    {/* <h1 className='mt-20 text-black text-2xl text-center'>Characters Used:</h1>
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
                    </div> */}

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Characters used:</label>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <Checkbox id="uppercase" checked={useUppercase} onCheckedChange={setUseUppercase} />
                                <label htmlFor="uppercase" className="ml-2 text-sm">ABC</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="lowercase" checked={useLowercase} onCheckedChange={setUseLowercase} />
                                <label htmlFor="lowercase" className="ml-2 text-sm">abc</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="numbers" checked={useNumbers} onCheckedChange={setUseNumbers} />
                                <label htmlFor="numbers" className="ml-2 text-sm">123</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="symbols" checked={useSymbols} onCheckedChange={setUseSymbols} />
                                <label htmlFor="symbols" className="ml-2 text-sm">#$&</label>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Down
