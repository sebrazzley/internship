import { Alumni } from "../AlumniList/alumni.type";
import "./SearchAlum.style.css"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript



const Search = () => {

  return (
    <div className="input-group mb-3">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >Filter</button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Industry</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  )
}

export default Search