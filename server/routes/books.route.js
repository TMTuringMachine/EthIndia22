import express from 'express';
const router = express.Router();
import { uploadBook } from '../controllers/books.controller.js';
router.post('/uploadBook', uploadBook);

export default router;
