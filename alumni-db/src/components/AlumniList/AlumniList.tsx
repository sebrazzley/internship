import AlumModal from "../AlumModal/AlumModal";
import "./../AlumModal/AlumModal.style.css";
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
  const [showModal, setShowModal] = useState(false);
  const viewAlum = () => {
    setShowModal(true);
  };

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
        {list.map((alumni) => {
          return (
            <tr key={alumni.id}>
              <td>{alumni.firstName + " " + alumni.lastName}</td>
              <td>{alumni.companyName}</td>
              <td>{alumni.state}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    className="viewButton"
                    //onClick={viewAlum}
                  />
                  <input
                    type="button"
                    value="Edit"
                    className="editButton"
                    onClick={() => onEdit(alumni)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="deleteButton"
                    onClick={() => onDelete(alumni)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <AlumModal></AlumModal>
    </div>
  );
};

export default AlumniList;
