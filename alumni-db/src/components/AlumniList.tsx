import "./AlumniList.style.css"
import { Alumni } from "./alumni.type"


type Props = {
    list: Alumni[];
};

const AlumniList = (props: Props) =>{
    
    const { list } = props;
    return (
        <div>
            This is alumni List page
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
    
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
            </table>
                </div>
    )
}

export default AlumniList;