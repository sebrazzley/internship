import React from 'react'
import Form from '../Form/Form';

const CreateAlumni = () => {
  let gradClass = [2019,2020,2021,2022,2023]
  let states=["Alabama","Alaska","Georgia"];
  let cities=["Tuscaloosa", "Birmingham", "Atlanta","Chicago"];
  let industries=["Tech Consulting","Web Dev", "Internal IT", "App Dev"]
  return (
    <div style={{width: "700px", margin: "0 auto", backgroundColor: "lightgrey", paddingLeft: "50px", paddingRight: "50px", paddingBottom: "20px", paddingTop: "20px"}}>
      <Form gradClass={gradClass} states={states} cities={cities} industries={industries}></Form>
    </div>
  )
}

export default CreateAlumni