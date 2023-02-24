import { DydxClient } from '@dydxprotocol/v3-client';
import WebSocket from 'ws'
import dotenv from 'dotenv';
import Web3 from 'web3'
dotenv.config();

const {ETHEREUM_PRIVATE_KEY} = process.env



const HTTP_HOST = 'https://api.dydx.exchange'
const WS_HOST = 'wss://api.dydx.exchange/v3/ws'


const address ="0xC955AaF9D123cBf42B5419bD111eaa302feCAdD0"


const web3 = new Web3()


web3.eth.accounts.wallet.add(ETHEREUM_PRIVATE_KEY)

export const client = new DydxClient(HTTP_HOST, { web3 })
const apiCreds = await client.onboarding.recoverDefaultApiCredentials(address)
client.apiKeyCredentials = apiCreds
// console.log(client)

async function httpRequest (endpoint,method="GET",data){

    const fullendpoint = HTTP_HOST+endpoint

    console.log(fullendpoint,method,data)

    var config = {
        method: method,
        url: fullendpoint,
        headers: {
            "apiKey": {
              "key": apiCreds.key,
              "passphrase":apiCreds.passphrase,
              "secret": apiCreds.secret
            }
          },
        data:data
       
        };

        let result

        await axios(config)
        .then(function (response) {
            
            result = JSON.stringify(response.data)
            // console.log(result)
            
        })
        .catch(function (error) {
            console.log('failed to fetch', error.code);
            result = error
        });
        return result

}

export async function connectToWebSocket (req, res) {


  
    const timestamp = new Date().toISOString()
    const signature = client.private.sign({
      requestPath: '/ws/accounts',
      method: 'GET',
      isoTimestamp: timestamp,
    })
    
    const msg = {
      type: 'subscribe',
      channel: 'v3_accounts',
      accountNumber: '0',
      apiKey: apiCreds.key,
      signature,
      timestamp,
      passphrase: apiCreds.passphrase
    }
  
    const ws = new WebSocket(WS_HOST)
  
    ws.on('message', (message) => {
      console.log('< ', message)
    })
  
    ws.on('open', () => {
      console.log('>', msg)
      ws.send(JSON.stringify(msg))
    })
  
    ws.on('error', (error) => {
      console.log('< error: ', error)
    })
  
    ws.on('close', () => {
      console.log('Connection closed')
    })

    
    res.status(200).json('connected to web socket...')
}

export async function registerApiKey (req, res){

    const {address} = req.query
    try{

        await client.ethPrivate.createApiKey(address);
        return res.status(200).json(`registered api key ${address}...`)
    }catch(err){
        // console.log(err)
        return res.status(400).json(`error: cannot register the key ${address}`)
    }


}

export async function getRegistration(req, res){

    try{
        const {signature} = await client.private.getRegistration()

        return res.status(200).json(`signature: ${signature}...`)
    }catch(err){

        return res.status(400).json(`error: cannot fetch registration status`)
    }

}

export async function historicalPNLTicks(req, res){

    const {createdBeforeOrAt, createdOnOrAfter} = req.query
    // console.log(req.query)


    try{
        if(createdOnOrAfter){

            const {historicalPnl} = await client.private.getHistoricalPnl({createdOnOrAfter:createdOnOrAfter});

            return res.status(200).json(historicalPnl)

        }else if(createdBeforeOrAt){

            const {historicalPnl} = await client.private.getHistoricalPnl({createdBeforeOrAt:createdBeforeOrAt});

            return res.status(200).json(historicalPnl)

        }
    

    }catch(err){

        return res.status(400).json(err)
    }
   

}

