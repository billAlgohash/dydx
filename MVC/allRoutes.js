import express from 'express'
import { connectToWebSocket, getRegistration, historicalPNLTicks, registerApiKey } from './allControllers.js'
import { tradeRoutes } from './trade/tradeRoutes.js'
import { userRoutes } from './user/userRoutes.js'

export const routes = express.Router()

// routes.get('/connect',connectToWebSocket)
// routes.get('/registerApiKey', registerApiKey)
// routes.get('/getRegistration', getRegistration)

// routes.get('/historicalPNLTicks', historicalPNLTicks)

routes.use('/user',userRoutes)
routes.use('/trade',tradeRoutes)