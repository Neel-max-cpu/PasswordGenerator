import React, { useState } from 'react'
import Slider from './Slider'
import img1 from '../Assets/1copy.png'
import Checkbox from './Checkbox'
const Down = ({ useUppercase, setUseUppercase, useLowercase, setUseLowercase, useNumbers, setUseNumbers, useSymbols, setUseSymbols, passwordLength, setPasswordLength }) => {

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

                    <div className="space-y-2">
                        <h1 className="mt-20 text-black text-2xl text-center">Characters used:</h1>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <Checkbox id="uppercase" checked={useUppercase} onCheckedChange={setUseUppercase} />
                                <label htmlFor="uppercase" className="text-black text-2xl font-bold">ABC</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="lowercase" checked={useLowercase} onCheckedChange={setUseLowercase} />
                                <label htmlFor="lowercase" className="text-black text-2xl font-bold">abc</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="numbers" checked={useNumbers} onCheckedChange={setUseNumbers} />
                                <label htmlFor="numbers" className="text-black text-2xl font-bold">123</label>
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="symbols" checked={useSymbols} onCheckedChange={setUseSymbols} />
                                <label htmlFor="symbols" className="text-black text-2xl font-bold">#$&</label>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Down
