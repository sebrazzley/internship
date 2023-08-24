import React, { useState } from "react";
import Form from "../../Form/Form";
import { Alumni } from "../../AlumniList/alumni.type";
import AlumniList from "../../AlumniList/AlumniList";
import Select from "../../Select/Select";
import Input from "../../Input/Input";
import Button from "../../Button";
import styles from "./Button.module.css";
import "./ViewAlumniStyle.css"

interface ViewProps {
  data: Alumni;
  onBackClick: () => void;
}

const ViewAlumni = ({ data, onBackClick }: ViewProps) => {
  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>VIEW PROFILE</h1>
      <h3
        style={{
          color: "white",
          backgroundColor: "darkblue",
          textAlign: "center",
          padding: "2px",
        }}
      >
        {data.firstName + " " + data.lastName}
      </h3>
      <div className="alumInfo">
        <p><h4>Biography: </h4><span>{data.bio}</span></p>
        <p><h4>Graduating Class: </h4><span>{data.gradClass}</span></p>
        <p><h4>Job Title: </h4><span>{data.jobTitle}</span></p>
        <p><h4>Company Name: </h4><span>{data.companyName}</span></p>
        <p><h4>Industry: </h4><span>{data.industry}</span></p>
        <p><h4>State: </h4><span>{data.state}</span></p>
        <p><h4>City: </h4><span>{data.city}</span></p>
        <p><h4>LinkedIn: </h4><span>{data.linkedIn}</span></p>
        <p><h4>Email: </h4><span>{data.email}</span></p>
      </div>

      <Button
          children="Back"
          onClick={onBackClick}
          color="secondary"
        ></Button>
    </div>
  );
};

export default ViewAlumni;
