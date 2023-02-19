



// dish_name ==> String, for Example Butter Chicken
// price => Number, for Example 2000
// cuisine => String, for Example Indian
// rating => Number, for Example 4.2


const mongoose=require("mongoose");



const foodSchema=mongoose.Schema({
    dish_name:String,
    price:Number,
    cuisine:String,
    rating:Number
})


const FoodModel=mongoose.model("food",foodSchema);

module.exports={FoodModel}