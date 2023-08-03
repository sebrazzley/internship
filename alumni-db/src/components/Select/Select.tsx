import React, { useState } from 'react';

interface SelectProps {
    listName: string;
    items: string[];
}

const Select = ({listName, items}: SelectProps) => {
    return(
        <div>
            <select className="form-select" aria-label="Default select example" style={{width: "500px"}}>
                <option selected>Choose a {listName}</option>
                {items.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
