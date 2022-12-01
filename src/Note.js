import React from "react";
import NoteCreate from "./NoteCreate";

function Note({noteList, deleteNote, updateNote}) {
  return (
    <div className="grid-container">
      {noteList.map((note) => {
        return (
          <NoteCreate
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        );
      })}
    </div>
  );
}

export default Note;
