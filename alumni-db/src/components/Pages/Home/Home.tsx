import "./Home.style.css"
import {useState} from "react"
import { Alumni, PageEnum, fakeAlumniList } from "../../AlumniList/alumni.type";
import AlumniList from "../../AlumniList/AlumniList";
import CreateAlumni from "../CreateAlumni/CreateAlumni";


const Home = () => {

    const [alumniList, setAlumniList] = useState(
        fakeAlumniList as Alumni[]
        );
    
    const [shownPage, setShownPage] = useState(PageEnum.list)
    
    const onAddAlumnusClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    return(
         <>
        <article className="article-header">
            <header>
                <h1>UA Alumni Database</h1>
            </header>
        </article>

        <article className="article-header-blank">
            <div>This is where the search bar should be</div>
            <div>This is where the filters should be</div>
        </article>

        <section className="section-content">  
            
            {shownPage === PageEnum.list && (
            <>
                <input type="button" value="Add Alumnus" onClick={onAddAlumnusClick}/>
                <AlumniList list = {alumniList} />
            </>
            )}

            {shownPage === PageEnum.add && <CreateAlumni />}
            
        </section>
    </>

    );
        
};

export default Home;