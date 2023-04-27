import express from "express"
import AuthorsController from "../controllers/authorsController.js"

const router = express.Router()

router.get('/authors', AuthorsController.getAll)
router.get('/authors/:id', AuthorsController.getById)
router.post('/authors', AuthorsController.create)
router.put('/authors/:id', AuthorsController.update)
router.delete('/authors/:id', AuthorsController.delete)

export default router