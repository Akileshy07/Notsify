import style from "./NotesL.module.css"
import Notes from "./Notes"
import { NotesList  } from "../Store/Notes-provider";
import { useContext } from "react";
const NotesL = () =>{
    const {notesList} = useContext(NotesList);
   
    return(
<>
<div className={style.cardContent}>

    {notesList.map((notes) =>       <Notes key={notes} notes={notes}>{notes}</Notes>
 )}

      
       </div>
       </>
    )
}
export default NotesL