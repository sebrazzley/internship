import { Alumni } from "../AlumniList/alumni.type";
import "./SearchAlum.style.css"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript


const Search = () => {
  return (
    <div className="input-group mb-3">
    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
    <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
  </div>
  )
}

export default Search