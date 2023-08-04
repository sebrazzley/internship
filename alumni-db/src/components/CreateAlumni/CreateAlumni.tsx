import React from 'react'
import Form from '../Form/Form';
const CreateAlumni = () => {
  let states=["Alabama","Alaska","Georgia"];
  let cities=["Tuscaloosa, Birmingham"];
  let industries=["Tech Consulting","Web Dev"]
  return (
    <Form states={states} cities={cities} industries={industries}></Form>
  )
}

export default CreateAlumni