

const express=require("express");
const{FoodModel}=require("../models/food.model");
const foodRouter=express.Router();

// get /foods 

foodRouter.get("/",async(req,res)=>{
    const{cuisine,min=-Infinity,max=Infinity,price}=req.query;
    const queryObj={};

    if(cuisine){
        queryObj.cuisine={$regex:cuisine,$options:"i"}
    }
    
    let apiResult=FoodModel.find(queryObj);
    
    if(min && max){
        apiResult=apiResult.where("rating").gte(min).lte(max).exec();
    }
//    if(price){
//     apiResult=apiResult.where("price").gte(min).lte(+price).exec();
//    }



    try {
    
        const foods=await apiResult;
        res.send(foods)


    } catch (error) {
        res.send(error)
    }
})

// get /foods/:id 

foodRouter.get("/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const food=await FoodModel.findById(_id);
        res.send(food);
       
    } catch (error) {
        res.send(error);
    }
})

// post /foods 

foodRouter.post("/",async(req,res)=>{
    try {
        const food=new FoodModel(req.body);
        await food.save();
        res.send("One food item is added to data base")
    } catch (error) {
        res.send(error);

    }
})

// put /foods/:id 

foodRouter.put("/:id",async(req,res)=>{
    try {
       const _id=req.params.id;
       const payload=req.body ;
       await FoodModel.findByIdAndUpdate({_id},payload);
       res.send(`The document having id :${_id} has been updated`);
    } catch (error) {
        res.send(error);
    }
})


// patch /foods/:id 

foodRouter.patch("/:id",async(req,res)=>{
    try {
       const _id=req.params.id;
       const payload=req.body ;
       await FoodModel.findByIdAndUpdate({_id},payload);
       res.send(`The document having id :${_id} has been updated`);
    } catch (error) {
        res.send(error);
    }
})

// delete /foods/:id 

foodRouter.delete("/:id",async(req,res)=>{
    try {
       const _id=req.params.id;
       
       await FoodModel.findByIdAndDelete({_id});
       res.send(`The document having id :${_id} has been Deleted`);
    } catch (error) {
        res.send(error);
    }
})

module.exports={foodRouter}