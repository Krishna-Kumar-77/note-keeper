const express = require("express");
const router = express.Router();
const {
  getNote,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require('../middleware/authMiddleware')
router.route("/note").get(protect,getNote).post(protect,addNote);
router.route("/note/:id").put(protect,updateNote).delete(protect,deleteNote);

module.exports = router;
