const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a book
router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update book
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ msg: "Book deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
