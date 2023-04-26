import express from "express"

const app = express()

app.use(express.json())
const books = [
    {id: 1, "title": "Senhor dos Aneis"},
    {id: 2, "title": "IT, A Coisa"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.status(200).json(books[index])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/books/:id', (req, res) => {
    let index = getBook(req.params.id)
    books[index].title = req.body.title
    res.status(200).json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params
    let index = getBook(id)
    books.splice(index, 1)
    res.status(200).send(`Livro ${id} removido com sucesso`)
})

function getBook(id) {
    return books.findIndex(book => book.id == id)
}
export default app