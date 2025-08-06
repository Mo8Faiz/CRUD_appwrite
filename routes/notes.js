const express = require('express');
const router = express.Router();
const { databases } = require('../appwrite');
require('dotenv').config();

const DB_ID = process.env.DATABASE_ID;
const COL_ID = process.env.COLLECTION_ID;

// Create Note
router.post('/', async (req, res) => {
  try {
    const note = await databases.createDocument(DB_ID, COL_ID, 'unique()', req.body);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Notes
router.get('/', async (req, res) => {
  try {
    const notes = await databases.listDocuments(DB_ID, COL_ID);
    res.json(notes.documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Note
router.put('/:id', async (req, res) => {
  try {
    const updated = await databases.updateDocument(DB_ID, COL_ID, req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Note
router.delete('/:id', async (req, res) => {
  try {
    await databases.deleteDocument(DB_ID, COL_ID, req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
