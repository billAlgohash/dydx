import express from 'express';
import dotenv from 'dotenv';
import { routes } from './MVC/allRoutes.js';
dotenv.config();



const {PORT} = process.env
const app = express()

app.use(express.json())
app.use(routes)


app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}...`,)
})
