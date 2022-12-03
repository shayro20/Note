import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {nanoid} from "nanoid";

function FormArea({addNote, note, updateNote, handleClose}) {
  const [noteText, setNoteText] = useState(note.noteText);
  const [noteTitle, setNoteTitle] = useState(note.title);

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  function nth(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const optionsForDate = {
      month: "short",
      day: "numeric",
    };

    let day = date.getDate();

    const dateToday = date.toLocaleDateString("en-US", optionsForDate);
    const dateTime = date.toLocaleTimeString("en-US", options);

    addNote({
      noteText,
      suffix: nth(day),
      time: dateToday,
      date: dateTime,
      id: nanoid(),
      title: noteTitle,
    });
    setNoteText("");
    setNoteTitle("");
  };
  const handleSubmitOfNote = (e) => {
    e.preventDefault();
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const optionsForDate = {
      month: "short",
      day: "numeric",
    };

    let day = date.getDate();

    const dateToday = date.toLocaleDateString("en-US", optionsForDate);
    const dateTime = date.toLocaleTimeString("en-US", options);
    updateNote({
      noteText,
      newSuffix: nth(day),
      newTime: dateToday,
      newDate: dateTime,
      id: note.id,
      title: noteTitle,
    });
    handleClose();
  };

  return (
    <Form
      onSubmit={!note.noteText ? handleSubmit : handleSubmitOfNote}
      className="d-flex flex-column"
    >
      <Form.Group className="mb-3">
        <Form.Control
          className="text-center"
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
          value={noteTitle}
        />
      </Form.Group>
      <FloatingLabel className="mb-3" controlId="floatingTextarea2 m-0">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{height: "100px"}}
          className="p-0"
          onChange={handleTextChange}
          required
          value={noteText}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        {!note.noteText ? "Add" : "Save Changes"}
      </Button>
    </Form>
  );
}
export default FormArea;
