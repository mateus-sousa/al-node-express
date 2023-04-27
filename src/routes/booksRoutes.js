import express from "express"
import BooksController from "../controllers/booksController.js"

const router = express.Router()

router.get('/books', BooksController.getAll)
router.get('/books/get', BooksController.getByPublisher)
router.get('/books/:id', BooksController.getById)
router.post('/books', BooksController.create)
router.put('/books/:id', BooksController.update)
router.delete('/books/:id', BooksController.delete)
export default router