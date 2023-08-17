// import React from 'react'
// import Form from '../../Form/Form';
// import { Alumni, fakeAlumniList, } from '../../AlumniList/alumni.type';
// import AlumniList from "../../AlumniList/AlumniList";
// import Home from '../Home/Home';

// interface CreateProps {
//   addAlumniHome: (data: Alumni) => void
//   backClick: () => void
// }


// const CreateAlumni = ({addAlumniHome, backClick} : CreateProps) => {
//   let gradClass = [2019,2020,2021,2022,2023]
//   let states=["Alabama","Alaska","Georgia"];
//   let cities=["Tuscaloosa", "Birmingham", "Atlanta","Chicago"];
//   let industries=["Tech Consulting","Web Dev", "Internal IT", "App Dev"]
  
//   const addAlumni = (data: Alumni) => {
//     addAlumniHome(data)
//   }

//   return (
//     <div style={{width: "700px", margin: "0 auto", backgroundColor: "lightgrey", paddingLeft: "50px", paddingRight: "50px", paddingBottom: "20px", paddingTop: "20px"}}>
//       <Form gradClass={gradClass} states={states} cities={cities} industries={industries} onSubmitClick={addAlumni} onBackClick={backClick}></Form>
//     </div>
//   )
// }

// export default CreateAlumni

import React, {useState} from 'react'
import Form from '../../Form/Form';
import { Alumni} from '../../AlumniList/alumni.type.ts';
import AlumniList from "../../AlumniList/AlumniList";
import Select from '../../Select/Select';
import Input from '../../Input/Input';
import Button from '../../Button';
import styles from './Button.module.css'

interface CreateProps {
  gradClass: number[];
  states: string[];
  cities: string[];
  industries: string[];
  onSubmitClick: (data: Alumni) => void
  onBackClick: () => void
}


const CreateAlumni = ({gradClass, states, cities, industries, onSubmitClick, onBackClick} : CreateProps) => {

  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [intro, setIntro]= useState("")
  const [jobTitle, setJobTitle]= useState("")
  const [companyName, setCompanyName]= useState("")
  const [linkedIn, setLinkedIn]= useState("")
  const [email, setEmail]= useState("")
  const [inClass, setGradClass]= useState("")
  const [industry, setIndustry]= useState("")
  const [state, setState]= useState("")
  const [city, setCity]= useState("")
  
  
  const onFirstNameChange = (e: any) => {
    setFirstName(e.target.value)
  }
  const onLastNameChange = (e: any) => {
    setLastName(e.target.value)
  }
  const onIntroChange = (e: any) => {
    setIntro(e.target.value)
  }
  const onTitleChange = (e: any) => {
    setJobTitle(e.target.value)
  }
  const onCompNameChange = (e: any) => {
    setCompanyName(e.target.value)
  }
  const onLinkedChange = (e: any) => {
    setLinkedIn(e.target.value)
  }
  const onEmailChange = (e: any) => {
    setEmail(e.target.value)
  }
  const onClassChange = (e: any) => {
    setGradClass(e.target.value) 
  }
  const onIndustryChange = (e: any) => {
    setIndustry(e.target.value) 
  }
  const onStateChange = (e: any) => {
    setState(e.target.value) 
  }
  const onCityChange = (e: any) => {
    setCity(e.target.value) 
  }

  const onSubmitBtnClick = (e: any) => {
    e.preventDefault()
    const data: Alumni = {
      id: new Date().toJSON.toString(),
      firstName: firstName,
      lastName: lastName,
      bio: intro,
      gradClass: inClass,
      jobTitle: jobTitle,
      companyName: companyName,
      industry: industry,
      state: state,
      city: city,
      linkedIn: linkedIn,
      email: email
    };
 
    onSubmitClick(data)
    onBackClick()
  }


  return (
    <form onSubmit={onSubmitBtnClick}>
        <h1 style={{color: "blue", textAlign: "center"}}>CREATE NEW PROFILE</h1>
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>About You</h3>
        <Input label="First Name: " id="first-name" inputType="text" value={firstName} required onInputChange={onFirstNameChange}></Input> 
        <Input label="Last Name: " id="last-name" inputType="text" value={lastName} required onInputChange={onLastNameChange}></Input>   
        <Input label="Short Self-Introduction: " id="bio" value={intro} inputType="text" onInputChange={onIntroChange}></Input>
        {/* Dropdown for industry */}
        <p style={{fontWeight: "bold"}}>Graduation Class:</p>
        <Select listName="Graduation Class" onOptionChange={onClassChange} items={gradClass}></Select>

        {/* CURRENT JOB SECTION: */}
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>Your Current Job</h3>
        <Input label="Current Job Title: " id="job-title" inputType="text" value={jobTitle} required onInputChange={onTitleChange}></Input>
        <Input label="Company's Name: " id="company-name" inputType="text"  value={companyName} required onInputChange={onCompNameChange}></Input>
        {/* Dropdown for industry */}
        <p style={{fontWeight: "bold"}}>Industry:</p>
        <Select listName="Industry" onOptionChange={onIndustryChange} items={industries}></Select>
        {/* Dropdown for state */}    
        <p style={{fontWeight: "bold"}}>State:</p>
        <Select listName="State" onOptionChange={onStateChange} items={states}></Select>
        {/* Dropdown for city */}
        <p style={{fontWeight: "bold"}}>City:</p>
        <Select listName="City" onOptionChange={onCityChange} items={cities}></Select>

        {/* Contact info- Optional */}
        <h3 style={{color: "white", backgroundColor: "darkblue", textAlign: "center", padding: "2px"}}>Contact Information</h3>
        <Input label="LinkedIn:" id="linkedin" inputType="text" value={linkedIn} onInputChange={onLinkedChange}></Input>
        <Input label="Email:" id="email" inputType="text" value={email} onInputChange={onEmailChange}></Input>

        {/* Photo upload */}
        {/* SUBMIT BUTTON: */}
        {/* --> check if there's any duplicate */}
        {/* --> if no dup, new profile pushed to the database */}
        {/* --> if there's dup, allow user to see the existed one(s); if the existed one is theirs, ask if they want to update instead or discard*/}
        
        <div style={{marginLeft: "200px"}}>
        <input type="submit" value="Submit" style={{backgroundColor: "#0d6efd", color: "white"}} />
        <span style={{marginRight: "20px"}}></span>
        <Button children='Back' onClick={onBackClick} color="secondary"></Button>
        </div>
    </form>
  )
}

export default CreateAlumni