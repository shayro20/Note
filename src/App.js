import React, {useState} from "react";
import FormArea from "./Form";
import Note from "./Note";
import "./style.css";
const App = () => {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    const noteCreate = noteList.concat(newNote);
    setNoteList(noteCreate);
  }
  function deleteNote(id) {
    if (!window.confirm("Are you sure you want to delete your note?")) {return
    }
      const deleteArr = noteList.filter((note) => note.id !== id);
      console.log(deleteArr);
      setNoteList(deleteArr);
  }
  console.log(noteList);
  return (
    <div className="container d-flex justify-content-center flex-column">
      <FormArea addNote={addNote} />
      <Note deleteNote={deleteNote} noteList={noteList} />
    </div>
  );
};
export default App;
