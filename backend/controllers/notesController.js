const Note = require("../models/notesModel");
const User = require('../models/userModel');

const getNote = async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  console.log(notes);
  res.status(200).json(notes);
};
const addNote = async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const note = await Note.create({
    title: req.body.title,
    message: req.body.message,
    date: req.body.date,
    user: req.user.id,
  });

  res.status(200).json(note);
};
 

const updateNote = async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Please Enter note ID");
  }

  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw Error({ message: "note not Found" });
  }
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
  }
    // Make sure the logged in user matches the goal user
    if (note.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
  }
  
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedNote);
};

const deleteNote = async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Please Enter note ID");
  }

  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw Error({ message: "note not Found" });
  }
  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (note.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await note.remove();
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getNote,
  addNote,
  updateNote,
  deleteNote,
};
