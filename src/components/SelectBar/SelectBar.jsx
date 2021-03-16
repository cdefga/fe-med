import React from 'react'
import Select from 'react-select'

const SelectBar = ({ title, options, onChange, value }) => {
    return (
        <div className="flex items-center">
            <p>{title + ':'}</p>
            <div className="pl-2 select z-10">
                <Select value={value} onChange={onChange} options={options} />
            </div>
        </div>
    )
}

export default SelectBar
