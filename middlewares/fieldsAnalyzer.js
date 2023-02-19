



const fieldsAnalyzer=(req,res,next)=>{
    const{dish_name,price,cuisine,rating}=req.body;

    if(req.method==="POST"){
        if(dish_name && price && cuisine && rating){
            next()
         }else{
             res.send({
                 "err": "Few fields are missing, cannot process the request"
             })
         }
         
    }
    else{
        next()
     }
}

module.exports={fieldsAnalyzer}