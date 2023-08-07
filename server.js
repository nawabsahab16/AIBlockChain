const express = require('express')
const axios = require('axios')
require('dotenv').config()   

const app= express() 
const apiKey= process.env.API_KEY
class Block{
    constructor(timeStamp,blockReward){
        this.timeStamp= timeStamp;
        this.blockReward = blockReward;
    }
}



  const fetchData = async ()=>{
    try{
      const listOFBlocks = [];
      for(let blockNumber=174698523; blockNumber<174698525; blockNumber++ ){
           const apiUrl = `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${blockNumber}&apikey=${apiKey}`
 
             const response = await axios.get(apiUrl);
             console.log(response.data.result.blockReward)              


      }
    }
    catch(error){
        console.error(error)
    }
  }


fetchData()
app.listen(3000,()=> {
    console.log("Server is Running ");
})