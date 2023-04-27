import books from "../models/Book.js"

class BookController {
    static getAll = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })  
    }

    static getById = (req, res) => {
        let id = req.params.id
        books.findById(id, (err, books) => {
            if (err) {
                res.status(404).send({message: err.message})
            } else {
                res.status(200).send(books)
            }            
        })  
    } 

    static create = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static update = (req, res) => {
        let id = req.params.id 
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})            
            } else {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }

    static delete = (req, res) => {
        let id = req.params.id

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Livro excluido com sucesso'})
            }
        })
    }
}

export default BookController