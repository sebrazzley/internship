import "./Home.style.css"
import {useState} from "react"
import { Alumni, fakeAlumniList } from "./alumni.type";
import AlumniList from "./AlumniList";
import CreateAlumni from "./CreateAlumni/CreateAlumni";

//madi
const Home = () => {

    const [alumniList,setAlumniList] = useState(
        fakeAlumniList as Alumni[]
        );
    return(
    //      <>
    //     <article className="article-header">
    //         <header>
    //             <h1>UA Alumni Database</h1>
    //         </header>
    //     </article>

    //     <article className="article-header-blank">
    //         <header>
    //             <h1></h1>
    //         </header>
    //     </article>

    //     <section className = "section-content">
    //         <div>This is a content part</div>
    //         <AlumniList list = {alumniList} />
    //     </section>
        
    //o
    // </>
    <CreateAlumni></CreateAlumni>

    );
        
};

export default Home;