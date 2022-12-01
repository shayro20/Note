import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormCreate from "./FormCreate";

function NoteCreate({note, deleteNote, updateNote}) {
  console.log(note);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="item">
      <div className="d-flex justify-content-between">
        <span className="time">
          {!note.time ? note.time : note.time}
          {!note.suffix ? note.suffix : note.suffix}
        </span>
        <span className="date">{note.date}</span>
      </div>
      <div>
        <u onClick={handleShow}>{note.title}</u>
      </div>
      <div onClick={handleShow} className="text">
        {!note.noteText ? note.noteText : note.noteText}
      </div>
      <button onClick={() => deleteNote(note.id)}>X</button>
      <div>
        {`${!note.newTime ? "" : "Edited"}
        ${!note.newTime ? "" : note.newTime}${
          !note.newSuffix ? "" : note.newSuffix
        }
        ${!note.newDate ? "" : note.newDate}`}
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              ></Form.Group>
            </Form>
            <FormCreate note={note} updateNote={updateNote} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default NoteCreate;
