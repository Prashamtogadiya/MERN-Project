const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiiz");

// Create a new quiz
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Get all quizzes
router.get("/", async (req, res) => {
  try {
    console.log("Fetching quizzes from MongoDB...");
    const quizzes = await Quiz.find(); // Fetch all quizzes
    console.log("Fetched quizzes:", quizzes);
    res.status(200).json(quizzes); // Send quizzes as a response
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get a quiz by ID
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a quiz
router.put("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete a quiz
router.delete("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
