import authors from "../models/Author.js"

class AuthorsController {
    static getAll = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })  
    }

    static getById = (req, res) => {
        let id = req.params.id
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(404).send({message: err.message})
            } else {
                res.status(200).send(authors)
            }            
        })  
    } 

    static create = (req, res) => {
        let author = new authors(req.body)
        author.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static update = (req, res) => {
        let id = req.params.id 
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})            
            } else {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }

    static delete = (req, res) => {
        let id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Livro excluido com sucesso'})
            }
        })
    }
}

export default AuthorsController