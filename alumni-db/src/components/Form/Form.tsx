import React from 'react'
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button';

interface SelectProps {
  states: string[];
  cities: string[];
  industries: string[];
}
const Form = ({states, cities, industries}: SelectProps) => {
  return (
    <form>
        <h1>CREATE NEW PROFILE</h1>
        <h2>About You</h2>
        <Input label="First Name: " id="first-name" inputType="text" required></Input>
        <Input label="Last Name: " id="last-name" inputType="text" required></Input>
        {/* Checkbox for MIS program(s) attended at UA (MIS/ MSMIS/ Accelerated) */}
        <Input label="Program attended at UA: " id="program" inputType="text" required></Input>

        <Input label="Graduation Class:" id="graduating-class" inputType="number" required></Input>
        <Input label="Short Self-Introduction: " id="bio" inputType="text"></Input>

        {/* CURRENT JOB SECTION: */}
        <h2>Your Current Job</h2>
        <Input label="Current Job Title: " id="job-title" inputType="text" required></Input>
        <Input label="Company's Name: " id="company-name" inputType="text" required></Input>
        {/* Dropdown for industry */}
        <Select listName={"Industry"} items={industries}></Select>
        {/* Dropdown for state selection; then, dropdown for city selection within that state */}
        <div style={{
          
        }}>
          <h5>Location:</h5>
          <Select listName={"State"} items={states}></Select>
          <Select listName={"Cities"} items={cities}></Select>
        </div>

        {/* PAST JOB(S) SECTION: */}
        <h2>Other past experiences</h2>
        {/* Button to add other previous job experiences; pop out fields for the same information (job title, company, industry, location)  */}
        <Button children='Add another past experience' onClick={()=> console.log("pop out fields for input")}></Button>

        {/* Contact info- Optional */}
        <h2>Contact information</h2>
        <Input label="LinkedIn:" id="linkedin" inputType="text"></Input>
        <Input label="Email:" id="email" inputType="text"></Input>

        {/* Photo upload */}
        {/* SUBMIT BUTTON: */}
        {/* --> check if there's any duplicate */}
        {/* --> if no dup, new profile pushed to the database */}
        {/* --> if there's dup, allow user to see the existed one(s); if the existed one is theirs, ask if they want to update instead or discard*/}
        <Button children='Submit Profile' onClick={()=> console.log("submitted")}></Button>

    </form>
  )
}

export default Form