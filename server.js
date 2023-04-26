const http = require("http")
const port = 3000

const routes = {
    '/': 'Curso de Node',
    '/books': 'Inside books page',
    '/authors': 'authors list',
    '/about': 'about project'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(routes[req.url])
})

server.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`)
})