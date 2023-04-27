import express from "express"
import BookController from "../controllers/booksController.js"

const router = express.Router()

router.get('/books', BookController.getAll)
router.get('/books/:id', BookController.getById)
router.post('/books', BookController.create)
router.put('/books/:id', BookController.update)
router.delete('/books/:id', BookController.delete)

export default router