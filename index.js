

const express=require("express");
const {connection}=require("./config/db");
const {fieldsAnalyzer}=require("./middlewares/fieldsAnalyzer");
const{record}=require("./middlewares/record")
require("dotenv").config();
const{FoodModel}=require("./models/food.model");
const { foodRouter } = require("./routes/food.routes");



const port=process.env.PORT || 4001 ;




const app=express();

app.use(express.json());
app.use(fieldsAnalyzer);
app.use(record);
app.get("/",(req,res)=>{
    res.send("This is Home Page")
})


app.use("/foods",foodRouter)


app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at port ${port}`)
})