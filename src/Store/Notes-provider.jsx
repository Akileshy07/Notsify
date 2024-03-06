import { createContext, useReducer } from "react";

export const NotesList = createContext(
   {
    notesList:[],
    addNotes : () =>{},
    deleteNotes: () =>{}
   }
);

const createReducer = (currNotes,action) =>{
    let newNotes = currNotes;
    if(action.type === "NEW_NOTES"){
        newNotes = [action.payload,...currNotes];
    }
    else if(action.type === "DELETE_NOTES"){
        newNotes = currNotes.filter(notes => notes.id !== action.payload.id);
    }
    return newNotes;

}

const NotesListProvider = ({children}) =>{
    const [notesList ,dispatchNotesList] = useReducer(createReducer,dummyNotes)
   
    const addNotes = (title,description,date,priority) =>{
       dispatchNotesList({
        type:"NEW_NOTES",
        payload:{
            id:Date.now(),
            title:title,
            description: description,
            date: date,
            priority : priority
        }
       })

    }

    const deleteNotes = (id) =>{
        dispatchNotesList({
            type:"DELETE_NOTES",
            payload : {
                id
            }
        })

    }
return(

    <NotesList.Provider value={{notesList,addNotes,deleteNotes}}>{children}</NotesList.Provider>
)
};

let dummyNotes = [
    {
        title: "Homework",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque officia suscipit nam tenetur voluptatem blanditiis ipsa ipsam aperiam asperiores esse.",
        date : "03/10/2024",
        priority: "High"
    }
]

export default NotesListProvider
