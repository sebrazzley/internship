import React from 'react'
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button';

interface SelectProps {
  gradClass: number[];
  states: string[];
  cities: string[];
  industries: string[];
}

const Form = ({gradClass, states, cities, industries}: SelectProps) => {
  return (
    <form>
        <h1 style={{color: "blue", textAlign: "center"}}>CREATE NEW PROFILE</h1>
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>About You</h3>
        <Input label="First Name: " id="first-name" inputType="text" required></Input> 
        <Input label="Last Name: " id="last-name" inputType="text" required></Input>   
        <Input label="Short Self-Introduction: " id="bio" inputType="text"></Input>
        {/* Dropdown for industry */}
        <p style={{fontWeight: "bold"}}>Graduation Class:</p>
        <Select listName="Graduation Class" items={gradClass}></Select>

        {/* CURRENT JOB SECTION: */}
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>Your Current Job</h3>
        <Input label="Current Job Title: " id="job-title" inputType="text" required></Input>
        <Input label="Company's Name: " id="company-name" inputType="text" required></Input>
        {/* Dropdown for industry */}
        <p style={{fontWeight: "bold"}}>Industry:</p>
        <Select listName="Industry" items={industries}></Select>
        {/* Dropdown for state */}    
        <p style={{fontWeight: "bold"}}>State:</p>
        <Select listName="State" items={states}></Select>
        {/* Dropdown for city */}
        <p style={{fontWeight: "bold"}}>City:</p>
        <Select listName="City" items={cities}></Select>

        {/* Contact info- Optional */}
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>Contact Information</h3>
        <Input label="LinkedIn:" id="linkedin" inputType="text"></Input>
        <Input label="Email:" id="email" inputType="text"></Input>

        {/* Photo upload */}
        {/* SUBMIT BUTTON: */}
        {/* --> check if there's any duplicate */}
        {/* --> if no dup, new profile pushed to the database */}
        {/* --> if there's dup, allow user to see the existed one(s); if the existed one is theirs, ask if they want to update instead or discard*/}
        
        <div style={{marginLeft: "200px"}}>
        <Button children='Submit Profile' onClick={()=> console.log("submitted")}></Button>
        <span style={{marginRight: "20px"}}></span>
        <Button children='Back' onClick={()=> console.log("Go Back to Homepage")} color="secondary"></Button>
        </div>
    </form>
  )
}

export default Form