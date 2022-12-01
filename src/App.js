import React, {useState} from "react";
import FormCreate from "./FormCreate";
import Note from "./Note";
import "./style.css";
const App = () => {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    //const noteCreate = noteList.concat(newNote);
    const noteCreate = [newNote, ...noteList];
    setNoteList(noteCreate);
  }
  function deleteNote(id) {
    if (!window.confirm("Are you sure you want to delete your note?")) {
      return;
    }
    const deleteArr = noteList.filter((note) => note.id !== id);
    console.log(deleteArr);
    setNoteList(deleteArr);
  }
  function updateNote(updatedNote) {
    const addUpdate = noteList.map((note) => {
      if (note.id === updatedNote.id) {
        note.noteText = updatedNote.noteText;
        note.title = updatedNote.title;
        note.newSuffix = updatedNote.newSuffix;
        note.newTime = updatedNote.newTime;
        note.newDate = updatedNote.newDate;
        updatedNote.date = note.date;
        updatedNote.time = note.time;
        updatedNote.suffix = note.suffix;
        return updatedNote;
      } else {
        return note;
      }
    });
    setNoteList(addUpdate);
  }
  return (
    <div className="container d-flex justify-content-center flex-column">
      <FormCreate addNote={addNote} note={{noteText: "", title: ""}} />
      <Note
        deleteNote={deleteNote}
        noteList={noteList}
        updateNote={updateNote}
      />
    </div>
  );
};
export default App;
