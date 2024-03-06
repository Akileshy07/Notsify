import style from "./Sidebar.module.css"
const Sidebar = ({selectedTab,setSelectedTab}) =>{
    return(
        <>
        <div className="col-md-3 h-100" >
        <div className={`d-flex flex-column flex-shrink-0 p-3  ${style.sidebar}`}  style={{width: "320px", height:"80vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4 text-white">Notesify</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>(setSelectedTab("notes"))}>
        <a href="#" className={`nav-link text-white fw-bold ${selectedTab==="notes" && "active"}`} aria-current="page" >
          <svg className="bi pe-none me-2" width="16" height="16" ><use xlinkHref="#home"></use></svg>
           Your Notes
        </a>
      </li>
      <li className="nav-item" onClick={()=>(setSelectedTab("addNotes"))}>
        <a href="#" className={`nav-link text-white fw-bold ${selectedTab==="addNotes" && "active"}`} >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Add Notes
        </a>
      </li>
      
    </ul>
    <hr/>
   
  </div>
  </div>
        </>
    )
}
export default Sidebar