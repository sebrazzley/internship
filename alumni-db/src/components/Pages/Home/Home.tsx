import "./Home.style.css";
import { useEffect, useState } from "react";
import { Alumni, PageEnum } from "../../AlumniList/alumni.type";
import AlumniList from "../../AlumniList/AlumniList";
import CreateAlumni from "../CreateAlumni/CreateAlumni";
import EditAlumni from "../EditAlumni/EditAlumni";
import SearchBar from "../../SearchAlum/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  let gradClass = [2019, 2020, 2021, 2022, 2023];
  let states = ["Alabama", "Alaska", "Georgia"];
  let cities = ["Tuscaloosa", "Birmingham", "Atlanta", "Chicago"];
  let industries = ["Tech Consulting", "Web Dev", "Internal IT", "App Dev"];

  const [alumniList, setAlumniList] = useState([] as Alumni[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as Alumni);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const listInString = window.localStorage.getItem("AlumniList");
    if (listInString) {
      setAlumniList(JSON.parse(listInString));
    }
  }, []);

  const onAddAlumnusClick = () => {
    setShownPage(PageEnum.add);
  };

  const backButton = () => {
    setShownPage(PageEnum.list);
  };

  const _setAlumniList = (list: Alumni[]) => {
    setAlumniList(list);
    window.localStorage.setItem("AlumniList", JSON.stringify(list));
  };

  const searchBar = () => {
    setShownPage(PageEnum.search);
  };
  const goToSearch = (list: Alumni[]) => {
    return list.filter(
      (item) =>
        item.firstName.toLowerCase().includes(query) ||
        item.lastName.toLowerCase().includes(query)
    );
  };

  const addAlumHome = (data: Alumni) => {
    _setAlumniList([...alumniList, data]);
  };

  const editAlumniData = (data: Alumni) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: Alumni) => {
    const filteredData = alumniList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = alumniList.indexOf(filteredData);
    const tempData = [...alumniList];
    tempData[indexOfRecord] = data;
    _setAlumniList(tempData);
  };

  const deleteEmployee = (data: Alumni) => {
    const indexToDelete = alumniList.indexOf(data);
    const tempAlumniList = [...alumniList];
    tempAlumniList.splice(indexToDelete, 1);
    _setAlumniList(tempAlumniList);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>UA Alumni Database</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Alumnus"
              onClick={onAddAlumnusClick}
              className="add-employee-btn"
            />
            <article className="article-header-blank">
              {/* <div>
                <input type="text" 
                placeholder="Search..." 
                className="search"
                onChange={(e) => setQuery(e.target.value)} />
            </div> */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Industry
                    </a>
                    <a className="dropdown-item" href="#">
                      City
                    </a>
                    <a className="dropdown-item" href="#">
                      State
                    </a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Text input with dropdown button"
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>
            </article>
            <AlumniList
              list={goToSearch(alumniList)}
              onEdit={editAlumniData}
              onDelete={deleteEmployee}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <CreateAlumni
            gradClass={gradClass}
            states={states}
            cities={cities}
            industries={industries}
            onSubmitClick={addAlumHome}
            onBackClick={backButton}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditAlumni
            gradClass={gradClass}
            states={states}
            cities={cities}
            industries={industries}
            data={dataToEdit}
            onBackClick={backButton}
            onUpdateClick={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
