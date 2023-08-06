const express = require('express')
const axios = require('axios')

const app= express() 

class Block{
    constructor(timeStamp,blockReward){
        this.timeStamp= timeStamp;
        this.blockReward = Boolean
    }
}

// https://api.etherscan.io/api
  // ?module=block
  // &action=getblockreward
  // &blockno=2165403
  // &apikey=YourApiKeyToken

  const fetchData = async ()=>{
    try{
      const listOFBlocks = [];
      for(let blockNumber=174698523; blockNumber< 174698540; blockNumber++ ){

      }
    }
    catch(error){
        console.error(error)
    }
  }


app.listen(3000,()=> {
    console.log("Server is Running ");
})