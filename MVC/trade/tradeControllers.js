import { client } from "../allControllers.js"


export async function getAccount (req, res){

    const ethAddress = req.params.ethAddress

    try{
        const result = await client.private.getAccount(ethAddress)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getAccounts (req, res){

    try{
        const result = await client.private.getAccounts()

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getPositions (req, res){

    const params = req.query

    try{
        const result = await client.private.getPositions(params)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}




export async function getOrders (req, res){

    const data = req.query
  

    try{
        const result = await client.private.getOrders(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getActiveOrders (req, res){

    const data = req.query

    try{
        const result = await client.private.getActiveOrders(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getFills (req, res){

    const data = req.query

    try{
        const result = await client.private.getFills(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getFundingPayments (req, res){

    const data = req.query

    try{
        const result = await client.private.getFundingPayments(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function getProfilePrivate (req, res){

    const data = req.query

    try{
        const result = await client.private.getProfilePrivate(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}


export async function getTransfers (req, res){

    const params = req.query

    try{
        const result = await client.private.getTransfers(params)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function createAccount (req, res){

    const {starkKey,starkKeyYCoordinate} = req.body

    try{
        const result = await client.private.createAccount(starkKey,starkKeyYCoordinate)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function createFastWithdrawal (req, res){

    const data = req.body

    try{
        const result = await client.private.createFastWithdrawal(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}


export async function createOrder (req, res){

    let {data,positionId} = req.body

    const {signature} = await client.private.getRegistration()

    data = {...data,signature:signature}

    // console.log(data)


    try{
        const result = await client.private.createOrder(data,positionId)

        res.status(200).json(result)

    }catch(err){
        console.log(err)

        res.status(err.status).json(err)
    }

}

export async function cancelOrder (req, res){

    const orderId = req.params.id


    try{
        const result = await client.private.cancelOrder(orderId)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function cancelAllOrders (req, res){

    const market = req.params.market


    try{
        const result = await client.private.cancelAllOrders(market)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}

export async function cancelActiveOrders (req, res){

    const data = req.body
    // console.log(data)


    try{
        const result = await client.private.cancelActiveOrders(data)

        res.status(200).json(result)

    }catch(err){

        res.status(err.status).json(err)
    }

}