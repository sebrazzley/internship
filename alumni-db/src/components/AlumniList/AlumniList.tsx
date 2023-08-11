import "./AlumniList.style.css"
import { Alumni } from "./alumni.type"


interface Props {
    list: Alumni[];
};

const AlumniList = ({list}: Props) =>{
    return (
        <div>
            <table>
                <tr>
                    <th>Alumnus</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                {list.map((alumni) => (
                    <tr key={alumni.id}>
                        <td>{alumni.firstName+" "+alumni.lastName}</td>
                        <td>{alumni.companyName}</td>
                        <td>{alumni.location}</td>
                        <td><div>
                            <input type="button" value="View"/>
                            <input type="button" value="Edit"/>
                            <input type="button" value="Delete"/>
                            </div>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default AlumniList;