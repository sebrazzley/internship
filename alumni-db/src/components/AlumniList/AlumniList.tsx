import "./AlumniList.style.css";
import { Alumni } from "./alumni.type";
import { useState } from "react";

interface Props {
  list: Alumni[];
  onEdit: (data: Alumni) => void;
  onDelete: (data: Alumni) => void;
}

const AlumniList = (props: Props) => {
  const { list, onEdit, onDelete } = props;

  return (
    <div>
      <article>
        <h3 className="list-header">Alumni List</h3>
      </article>
      <table>
        <tr>
          <th>Alumnus</th>
          <th>Company</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
        {list.map((alumni) => (
          <tr key={alumni.id}>
            <td>{alumni.firstName + " " + alumni.lastName}</td>
            <td>{alumni.companyName}</td>
            <td>{alumni.state}</td>
            <td>
              <div>
                <input type="button" value="View" />
                <input
                  type="button"
                  value="Edit"
                  onClick={() => onEdit(alumni)}
                />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => onDelete(alumni)}
                />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AlumniList;
