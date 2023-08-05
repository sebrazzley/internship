import React from 'react'
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button';
import styles from './Form.css'

interface SelectProps {
  gradClass: number[];
  states: string[];
  cities: string[];
  industries: string[];
}
const Form = ({gradClass, states, cities, industries}: SelectProps) => {
  return (
    <form>
        <h1>CREATE NEW PROFILE</h1>
        <h2>About You</h2>
        <Input label="First Name: " id="first-name" inputType="text" required></Input>
        <Input label="Last Name: " id="last-name" inputType="text" required></Input>      
        <Input label="Short Self-Introduction: " id="bio" inputType="text"></Input>
        <Select listName={"Graduation Class"} items={gradClass}></Select>

        {/* CURRENT JOB SECTION: */}
        <h2>Your Current Job</h2>
        <Input label="Current Job Title: " id="job-title" inputType="text" required></Input>
        <Input label="Company's Name: " id="company-name" inputType="text" required></Input>
        {/* Dropdown for industry */}
        <Select listName={"Industry"} items={industries}></Select>        
        <div>
          <p>Location:</p>
          <Select listName={"State"} items={states}></Select>
          <Select listName={"Cities"} items={cities}></Select>
        </div>

        {/* Contact info- Optional */}
        <h2>Contact information</h2>
        <Input label="LinkedIn:" id="linkedin" inputType="text"></Input>
        <Input label="Email:" id="email" inputType="text"></Input>

        {/* Photo upload */}
        {/* SUBMIT BUTTON: */}
        {/* --> check if there's any duplicate */}
        {/* --> if no dup, new profile pushed to the database */}
        {/* --> if there's dup, allow user to see the existed one(s); if the existed one is theirs, ask if they want to update instead or discard*/}
        <div>
        <Button children='Submit Profile' onClick={()=> console.log("submitted")}></Button>
        <span style={{marginRight: "20px"}}></span>
        <Button children='Back' onClick={()=> console.log("Go Back to Homepage")}></Button>
        </div>
    </form>
  )
}

export default Form