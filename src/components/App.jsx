import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App(){

    const [notes, setNotes]=React.useState([]);

    function addNote(note){
        setNotes((prevValue)=>
        {
            return [...prevValue, note];
        });
    }

    function deleteNote(id){
        setNotes((prevValue)=>
        {
            return prevValue.filter((note,index)=>{
                return index!=id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateNote add={addNote} />
            {notes.map(
                (noteEntry,index) => <Note key={index} index={index} title={noteEntry.title} content={noteEntry.content} delete={deleteNote} />
            )}
            <Footer />
        </div>
    );
}
export default App;