import express from 'express';
import dotenv from 'dotenv';
import { routes } from './MVC/allRoutes.js';
dotenv.config();
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'


const {PORT} = process.env
const swaggerDocument = YAML.load('./swagger.yaml')
const app = express()

app.use(express.json())
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

app.use(routes)

app.use('/',(req, res)=>res.send('<h1>API Docs</h1> <a href = "/api-docs">Documentation</a>'))

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}...`,)
})
