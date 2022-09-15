import React from "react";

function CreateNote(props){

    const [note, setNote] = React.useState({title:"", content:""});
    function handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        });
        
    }


    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />
                <textarea name="content" rows="3" placeholder="Make a note of..." value={note.content} onChange={handleChange} />
                <button onClick={
                    (event) => {
                        props.add(note);
                        event.preventDefault();
                        setNote({title:"", content:""});
                    }
                }><span class="material-icons">
                note_add
                </span></button>
            </form>
        </div>
    );
}
export default CreateNote;