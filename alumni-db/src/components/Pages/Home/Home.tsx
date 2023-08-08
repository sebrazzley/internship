import "./Home.style.css"
import {useState} from "react"
import { Alumni, fakeAlumniList } from "../../AlumniList/alumni.type";
import AlumniList from "../../AlumniList/AlumniList";


const Home = () => {

    const [alumniList,setAlumniList] = useState(
        fakeAlumniList as Alumni[]
        );
    return(
         <>
        <article className="article-header">
            <header>
                <h1>UA Alumni Database</h1>
            </header>
        </article>

        <article className="article-header-blank">
            <header>
                <h1></h1>
            </header>
        </article>

        <section className="section-content">
            <div>This is where the search bar should be</div>
            <div>This is where the filters should be</div>
            <AlumniList list = {alumniList} />
        </section>
    </>

    );
        
};

export default Home;