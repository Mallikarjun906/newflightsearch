const express=require('express');
const app=express();
const {port}=require('../flightsearch/src/config/serverconfig')
const {cityrepository}=require('./src/repository/city-repository')
app.listen(port,()=>{
    console.log(`The Server is running on ${port}`);
    const cityrepo= new cityrepository();
    // cityrepo.createcity({name:"bhilai"});
    cityrepo.deletecity(10);
})