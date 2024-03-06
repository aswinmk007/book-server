const jsonServer = require('json-server')
const BKServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('book.json')
const PORT = 3000 || process.env.PORT

BKServer.use(middleware)
BKServer.use(router)

BKServer.listen(PORT,()=>{
    console.log(`Book server started at port ${PORT}`);
})