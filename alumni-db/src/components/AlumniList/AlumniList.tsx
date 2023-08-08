import "./AlumniList.style.css"
import { Alumni } from "./alumni.type"


interface Props {
    list: Alumni[];
};

const AlumniList = ({list}: Props) =>{
    return (
        <div>
            This is alumni List page
            <table>
                <tr>
                    <th>Alumn</th>
                    <th>Company</th>
                    <th>Location</th>
                </tr>
                {list.map((alumni) => (
                    <tr key={alumni.id}>
                        <td>{alumni.firstName+" "+alumni.lastName}</td>
                        <td>{alumni.companyName}</td>
                    </tr>
                ))}
                {/* <tr> */}
                    {/* <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr> */}
            </table>
        </div>
    )
}

export default AlumniList;