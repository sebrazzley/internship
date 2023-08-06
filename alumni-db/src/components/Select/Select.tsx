import React, { useState } from 'react';

interface SelectProps {
    items: string[] | number[];
    listName: string;
}

const Select = ({listName, items}: SelectProps) => {
    return(
        <div style={{marginBottom: "15px"}}>
            <select className="form-select" aria-label="Default select example" style={{color: "grey", fontStyle: "italic"}}>
                <option selected style={{color: "black"}}>[Please select an option]</option>
                {items.map((item, index) => (
                    <option key={index} style={{color: "black"}}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
