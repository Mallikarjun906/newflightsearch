const express=require('express');
const app=express();
const {port}=require('../flightsearch/src/config/serverconfig')
app.listen(port,()=>{
    console.log(`The Server is running on ${port}`);
})