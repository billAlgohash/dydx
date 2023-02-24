import { client } from "../helperFunctions.js";

export async function getUser(req, res){
   
    try{
        const {user} = await client.private.getUser();
        // console.log(user)

        return res.status(200).json(user)
    }catch(err){

        return res.status(err.status).json(err)
    }
   

}

export async function updateUser(req, res){

    const userData = req.body
    console.log('userData: ',userData)
    try{
        const result = await client.private.updateUser(userData)

        res.status(200).json(result)


    }catch(err){
        // console.log(err)
        res.status(err.status).json(err)

    }
}

export async function getUserActiveLinks(req, res){

    try{
        const result = await client.private.getUserLinks();

        res.status(200).json(result)


    }catch(err){
        // console.log(err)
        res.status(err.status).json(err)

    }
}

export async function sendUserLinkRequest(req, res){

    const {action,address} = req.body
    // console.log(action,address)

    try{
        const result = await client.private.sendLinkRequest({
            action: action,
            address: address
          });

        res.status(200).json(result)


    }catch(err){
        // console.log(err)
        res.status(err.status).json(err)

    }

}

export async function getUserPendingLinkRequests(req, res){
    
    try{
        const result = await client.private.getUserPendingLinkRequests()

        res.status(200).json(result)


    }catch(err){
        // console.log(err)
        res.status(err.status).json(err)

    }

}