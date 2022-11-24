import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../features/notes/noteSlice";

function AddNote() {
  const [note, setNote] = useState({
    title: "",
    message: "",
    date: "",
  });
  const dispatch = useDispatch();
  const { title, message, date } = note;
  const onChange = (e) => {
    setNote((preNote) => ({
      ...preNote,
      [e.target.name]: e.target.value,
    }));
  };
  const addNotes = (e) => {
    e.preventDefault();
    if (!title || !message || !date) {
      alert("Enter All the fields");
    } else {
      const noteData = {
        title,
        message,
        date,
      };
      dispatch(createNote(noteData));
      setNote({
        title: "",
        message: "",
        date: "",
      });
    }
  };
  return (
    <section className="form">
      <form onSubmit={addNotes}>
        <div className="form-group">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Enter Your Title"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message : </label>
          <textarea
            name="message"
            value={message}
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter Your Message"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date : </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            placeholder="Date"
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddNote;
