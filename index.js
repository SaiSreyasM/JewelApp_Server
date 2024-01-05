const jsonServer=require('json-server')
const cors=require('cors')


const JewelServer=jsonServer.create()

const router=jsonServer.router('data.json')

const middleware=jsonServer.defaults()
 
JewelServer.use(cors())
JewelServer.use(middleware)
JewelServer.use(router)


const PORT=4000
JewelServer.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
}) 