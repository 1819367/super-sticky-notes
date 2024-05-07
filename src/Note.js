import React from "react";

const Note = (props) => {

    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", updatedValue)
    }
    
    const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "description", updatedValue)
    }
    
    const clickDelete = () => {
        props.removeNote(props.note.id);
    }
 
    return (
        <li className="note">
            {console.log(props.note)}
            <input
                className="note__title"
                type="text"
                placeholder="Title"
                value={props.note.title}
                onChange={updateTitle} />
            <textarea
                className="note__description"
                placeholder="Description..."
                value={props.note.description}
                onChange={updateDescription} />
            <span onClick={clickDelete} className="note__delete"> 
                X    
            </span>
        </li>
    );
}

export default Note;