import React from "react";

function Note({noteList, deleteNote}) {
  return (
    <div className="grid-container">
      {noteList.map((note) => {
        return (
          <div key={note.id} className="item">
            <div className="d-flex justify-content-between">
              <span className="time">
                {note.time}
                {note.suffix}
              </span>
              <span className="date">{note.date}</span>
            </div>
            <div>
              <u>{note.title}</u>
            </div>
            <div className="text">{note.noteText}</div>
            <button onClick={() => deleteNote(note.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default Note;
