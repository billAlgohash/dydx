import express from 'express'
import { getUser, getUserActiveLinks, getUserPendingLinkRequests, sendUserLinkRequest, updateUser } from './userControllers.js'


export const userRoutes = express.Router()

userRoutes.get('/getUser', getUser)
userRoutes.get('/getUserActiveLinks', getUserActiveLinks)
userRoutes.get('/getUserPendingLinkRequests', getUserPendingLinkRequests)

userRoutes.post('/updateUser', updateUser)
userRoutes.post('/sendUserLinkRequest', sendUserLinkRequest)

