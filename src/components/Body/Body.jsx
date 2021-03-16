import React, { useState } from 'react'
import Select from 'react-select'
import Button from '../Button/Button'
import SelectBar from '../SelectBar/SelectBar'

const Body = () => {
    const tirads = [
        { value: 'tirad1', label: 'tr1' },
        { value: 'tirad2', label: 'tr2' },
        { value: 'tirad3', label: 'tr3' },
        { value: 'tirad4', label: 'tr4' },
        { value: 'tirad5', label: 'tr5' },
    ]

    const fnas = [
        { value: 'benign', label: 'Benign' },
        { value: 'malign', label: 'Malign' },
    ]

    const typeCategories = [
        { value: 'thyroid', label: 'Thyroid' },
        { value: 'skin', label: 'Skin' },
    ]

    const [selectedOption, setSelectedOption] = useState(false)

    const handle = (val) => {
        setSelectedOption(val)
        console.log(val)
    }

    return (
        <div className="body bg-white h-auto rounded-2xl">
            <div className="flex flex-col p-4">
                <h1 className="font-bold text-4xl text-center">
                    VTMED-AI Diagnosis
                </h1>
                <h2 className="text-2xl font-medium text-center text-gray-800">
                    Upload your image bellow and the AI will diagnose it.
                </h2>
                <div className="flex justify-evenly items-center py-4">
                    <input type="file" />
                    <SelectBar
                        title="Type"
                        options={typeCategories}
                        onChange={val => setSelectedOption(val)}
                        value={selectedOption}
                    />
                </div>
                <Button label="Diagnosis by AI" onClick={() => console.log(selectedOption)}/>
                <div className="flex w-2/4 mx-auto">
                    <div className="flex w-full justify-between">
                        <p className="">TIRADS Level:</p>
                        {tirads.map((tirad, idx) => (
                            <div key={idx} className="flex items-center">
                                <label
                                    className="uppercase pr-1 font-semibold"
                                    htmlFor={tirad.value}
                                >
                                    {tirad.label}
                                </label>
                                <input
                                    name="tirads"
                                    type="radio"
                                    value={tirad.value}
                                ></input>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-2/4 mx-auto">
                    <div className="flex w-full justify-between">
                        <p className="">Benign/Malign Prediction:</p>
                        {fnas.map((fna, idx) => (
                            <div key={idx} className="flex items-center">
                                <label
                                    className="pr-1 font-semibold"
                                    htmlFor={fna.value}
                                >
                                    {fna.label}
                                </label>
                                <input
                                    name="fnas"
                                    type="radio"
                                    value={fna.value}
                                ></input>
                            </div>
                        ))}
                    </div>
                </div>
                <Button label="Modification by Expert" />
            </div>
        </div>
    )
}

export default Body
