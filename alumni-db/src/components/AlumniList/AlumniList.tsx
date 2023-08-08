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
                    <th>Alumn</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                {list.map((alumni) => (
                    <tr key={alumni.id}>
                        <td>{alumni.firstName+" "+alumni.lastName}</td>
                        <td>{alumni.companyName}</td>
                        <td>{alumni.location}</td>
                        <td>Action</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default AlumniList;