const fs=require("fs")

const record=(req,res,next)=>{
   const method=req.method;
   const id=req.url.split("/")[2];
   
   if(method==="PUT" || method==="PATCH"){
    let date=new Date();
    fs.appendFileSync("records.txt",`The dish with id: ${id} has been updated | ${date} \n`)
    next();
   }
   else if(method==="DELETE"){
    let date=new Date();
    fs.appendFileSync("records.txt",`The dish with id: ${id} has been deleted | ${date} \n`)
    next();
   }
   else{
    next();
   }
}


module.exports={record}