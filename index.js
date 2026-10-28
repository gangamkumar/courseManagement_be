const jsonServer = require('json-server')

const server = jsonServer.create()

server.use(jsonServer.defaults())

const route = jsonServer.router('db.json')

server.use(route)

server.listen(3000,()=>{
    console.log('server is running on port no 3000')
})