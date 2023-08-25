import React from 'react'

interface Props {
    label: string;
    id: string;
    inputType: string;
    value: string;
    onInputChange: (e: any) => void
    required?: true;
}
function Input ({label, id, inputType, value, required, onInputChange}: Props) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label" style={{fontWeight: "bold"}}>{label}</label>
        <input id={id} type={inputType} value={value} required={required} className="form-control" onChange={onInputChange}/>
    </div>
  )
}

export default Input