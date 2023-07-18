const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://agarwalanshuman56:anshuman001@cluster0.r8q0ixp.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


