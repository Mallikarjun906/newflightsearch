const { where } = require('sequelize');
const {City}=require('../models/index');
class cityrepository{
  async createcity({name}){
    try {
       const city= await City.create({name})
       return city;
    } catch (error) {
        throw error;
    }  
  }

  async deletecity(cityid){
    try {
       const city= await City.destroy({where:{
        id:cityid
       }})
       return city;
    } catch (error) {
        throw error;
    }  
  }

}
module.exports={
    cityrepository
}