import style from "./Notes.module.css";
import { BsFillCalendar2EventFill } from "react-icons/bs";

import { NotesList } from "../Store/Notes-provider"; 
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

const Notes = ({notes}) =>{
  const { deleteNotes } = useContext(NotesList);
  
return(
    <>
    
    <div class={`card ${style.cardd}`}>
  <div class="card-header">
    Featured

    <span
                className={`position-absolute translate-middle badge rounded-pill ${style.delete} `}
              >
                <AiFillDelete onClick={() => deleteNotes(notes.id)} />
              </span>
  </div>
  <div class="card-body">
    <h5 class="card-title">{notes.title}</h5>
  
    <p class="card-text">{notes.description}</p>
    <h6></h6>
  </div>
  <div class="card-footer">
                <div class="d-flex align-items-center justify-content-between note-text note-text-info">
                <a href="#" class="text-decoration-none text-dark fw-bold">
                    <i class="las la-user-friends mr-2 font-size-20 "></i>Priority : {notes.priority}
                  </a>
                  <a href="#" class="p-2 text-decoration-none text-dark fw-bold">
                    <i class="las la-calendar mr-2 font-size-20 "></i>
                    <span id="note-reminder-date"><BsFillCalendar2EventFill
                      style={{
                        color: "#1c1c1c",
                        marginRight: "8px",
                        fontSize:"20px"
                      }}
                    /> {notes.date}</span>
                  </a>
                </div>
              </div>
</div>

    </>
)
}
export default Notes