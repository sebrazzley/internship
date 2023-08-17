import React, { useState } from 'react';

interface SelectProps {
    items: string[] | number[];
    listName: string;
    onOptionChange: (e: any) => void
}

const Select = ({listName, items, onOptionChange}: SelectProps) => {
    return(
        <div style={{marginBottom: "15px"}}>
            <select className="form-select" onChange={onOptionChange} aria-label="Default select example" style={{color: "grey", fontStyle: "italic"}}>
                <option selected style={{color: "black"}}>[Please select an option]</option>
                {items.map((item, index) => (
                    <option key={index} value={item} style={{color: "black"}}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
