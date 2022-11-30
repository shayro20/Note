import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {nanoid} from "nanoid";

function FormArea({addNote}) {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

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
    setNoteText("")
    setNoteTitle("")
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column">
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
        Add
      </Button>
    </Form>
  );
}

export default FormArea;