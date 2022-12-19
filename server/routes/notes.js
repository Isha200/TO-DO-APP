const express = require("express");
const { createNote,getNotes,getNote, deleteNote, updateNote  } = require("../controllers/notesController");
const router = express.Router();

//GET all the TO DO list
router.get("/", getNotes);

//GET only one TO DO task
router.get("/:id", getNote);

//POST a new TO DO task
router.post("/", createNote);

//DELETE a TO DO task
router.delete("/:id", deleteNote);

//UPDATE
router.patch("/:id", updateNote);

module.exports = router;
