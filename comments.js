// Create web server

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.json', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Internal Server Error' }))
        return
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(data)
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Not Found' }))
  }
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
// The server is now listening for requests on port 3000. When a request comes in, it checks the URL. If the URL is /comments, it reads the comments.json file and sends it back as a response. If the URL is anything else, it sends back a 404 Not Found error. This is a simple web server that can be used to serve a JSON file. You can test it by running the server and making a request to http://localhost:3000/comments in your browser or with a tool like curl or Postman.

