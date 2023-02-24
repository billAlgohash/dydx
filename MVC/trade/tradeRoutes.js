import express from 'express'
import { cancelActiveOrders, cancelAllOrders, cancelOrder, createAccount, createFastWithdrawal, createOrder, getAccount, getAccounts, getActiveOrders, getFills, getFundingPayments, getOrders, getPositions, getProfilePrivate, getTransfers } from './tradeControllers.js'

export const tradeRoutes = express.Router()

tradeRoutes.get('/getAccount/:ethAddress',getAccount)
tradeRoutes.get('/getAccounts',getAccounts)
tradeRoutes.get('/getPositions',getPositions)
tradeRoutes.get('/getTransfers',getTransfers)
tradeRoutes.get('/getOrders',getOrders)
tradeRoutes.get('/getActiveOrders',getActiveOrders)
tradeRoutes.get('/getFills',getFills)
tradeRoutes.get('/getFundingPayments',getFundingPayments)
tradeRoutes.get('/getProfilePrivate',getProfilePrivate)


tradeRoutes.post('/createAccount',createAccount)
tradeRoutes.post('/createFastWithdrawal',createFastWithdrawal)
tradeRoutes.post('/createOrder',createOrder)

tradeRoutes.delete('/cancelOrder/:id',cancelOrder)
tradeRoutes.delete('/cancelAllOrders/:market',cancelAllOrders)
tradeRoutes.delete('/cancelActiveOrders',cancelActiveOrders)