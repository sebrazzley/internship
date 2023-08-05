import React from 'react'
import Form from '../Form/Form';
const CreateAlumni = () => {
  let gradClass = [2019,2020,2021,2022,2023]
  let states=["Alabama","Alaska","Georgia"];
  let cities=["Tuscaloosa", "Birmingham"];
  let industries=["Tech Consulting","Web Dev"]
  return (
    <Form gradClass={gradClass} states={states} cities={cities} industries={industries}></Form>
  )
}

export default CreateAlumni