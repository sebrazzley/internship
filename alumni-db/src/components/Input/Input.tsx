import React from 'react'

interface Props {
    label: string;
    id: string;
    inputType: string;
    required?: true;
}
function Input ({label, id, inputType, required}: Props) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input id={id} type={inputType} style={{width: "500px"}} className="form-control"/>
    </div>
  )
}

export default Input