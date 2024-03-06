
import './App.css'
import AddNotes from './Components/AddNotes'
import Sidebar from './Components/Sidebar'
import NotesL from './Components/NotesL'
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext, useState } from 'react'
import { NotesList } from './Store/Notes-provider'
import NotesListProvider from './Store/Notes-provider'

function App() {


  const [selectedTab,setSelectedTab] = useState("notes")

  return (
    
    <NotesListProvider>
    <div className="container-fluid content">
      <div className="row">
<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>

<div className={`col-md-9 addNotes`}>

{selectedTab === "notes" ?

<NotesL></NotesL>
:<AddNotes></AddNotes>}

</div>
        
      </div>
    </div>
    </NotesListProvider>
   
  )
}

export default App
