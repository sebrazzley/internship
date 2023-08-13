import "./Home.style.css"
import {useState} from "react"
import { Alumni, PageEnum, fakeAlumniList } from "../../AlumniList/alumni.type";
import AlumniList from "../../AlumniList/AlumniList";
import CreateAlumni from "../CreateAlumni/CreateAlumni";
import EditAlumni from "../EditAlumni/EditAlumni";


const Home = () => {

    let gradClass = [2019,2020,2021,2022,2023]
    let states=["Alabama","Alaska","Georgia"];
    let cities=["Tuscaloosa", "Birmingham", "Atlanta","Chicago"];
    let industries=["Tech Consulting","Web Dev", "Internal IT", "App Dev"]

    const [alumniList, setAlumniList] = useState(
        fakeAlumniList as Alumni[]
    );
    
    const [shownPage, setShownPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as Alumni)
    
    const onAddAlumnusClick = () => {
        setShownPage(PageEnum.add)
    }

    const backButton = () => {
        setShownPage(PageEnum.list)
    }

    const addAlumHome = (data: Alumni) => {
        setAlumniList([...alumniList, data])
    }

    const editAlumniData = (data: Alumni) => {
        setShownPage(PageEnum.edit)
        setDataToEdit(data)
    }

    const updateData = (data: Alumni) => {
        const filteredData = alumniList.filter(x => x.id === data.id)[0]
        const indexOfRecord = alumniList.indexOf(filteredData)
        const tempData = [...alumniList]
        tempData[indexOfRecord] = data
        setAlumniList(tempData)
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
                <input 
                type="button" 
                value="Add Alumnus" 
                onClick={onAddAlumnusClick}
                className="add-employee-btn"/>
                <AlumniList list = {alumniList} 
                onEdit={editAlumniData} />
            </>
            )}

            {shownPage === PageEnum.add && <CreateAlumni gradClass={gradClass} states={states} cities={cities} industries={industries} onSubmitClick={addAlumHome} onBackClick={backButton}/>}
            
            {shownPage === PageEnum.edit && <EditAlumni gradClass={gradClass} states={states} cities={cities} industries={industries} data={dataToEdit} onBackClick={backButton} onUpdateClick={updateData}/>}
        </section>
    </>

    );
        
};

export default Home;