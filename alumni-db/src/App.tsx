import React from 'react'
import Form from './components/Form/Form';
import Dropdown from './components/Select/Select';
const App = () => {
  let states=["Alabama","Alaska","Georgia"];
  let cities=["Tuscaloosa, Birmingham"];
  let industries=["Tech Consulting","Web Dev"]
  return (
    <Form states={states} cities={cities} industries={industries}></Form>


  )
}

export default App