import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// Create a new transaction
router.post("/create", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all transactions
router.get("/fetch", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ visitDate: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get transactions filtered by date range
router.get("/filter", async (req, res) => {
  try {
    const { from, to } = req.query;
    const query = {};

    // Build query based on the provided dates
    if (from) query.visitDate = { $gte: new Date(from) };
    if (to) query.visitDate = { ...query.visitDate, $lte: new Date(to) };

    // Fetch transactions from database
    const transactions = await Transaction.find(query).sort({ visitDate: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
