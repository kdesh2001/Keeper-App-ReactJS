import React from "react";

function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={
                (event)=>{
                props.delete(props.index);
                // event.preventDefault();
            }}><span class="material-icons">
            delete_outline
            </span></button>
        </div>
        
    );
}
export default Note;