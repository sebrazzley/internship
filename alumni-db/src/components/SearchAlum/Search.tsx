import { Alumni } from "../AlumniList/alumni.type";
import "./SearchAlum.style.css"
import React, { useState } from "react";

interface SearchProps {
    data: Alumni;
}

const SearchBar = ({} : SearchProps) => {
    return (
        <div>
            <input type="text" placeholder="Search..." className="search" />
        </div>
        
    )
}

export default SearchBar;