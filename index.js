const express = require("express");
const app = express();
const format = require('date-format')
const PORT = 4000 || process.env.PORT;
app.get("/", (req, res) => {
    res.status(200).send("Hello from LCO")
});
app.get("/api/v1/instagram" , (req , res)=>{
    const instaAccount = {
        userName : 'Bharat Ruidas',
        followers : 300,
        follow : 32,
        date: format.asString(  new Date())
    }
    res.status(200).json({instaAccount})
})
app.get("/api/v1/facebook" , (req , res)=>{
    const instaAccount = {
        userName : 'Bharat Ruidas',
        followers : 100,
        follow : 32,
        date: format.asString("dd MM yy" , new Date())
    }
    res.status(200).json({instaAccount})
})
app.get("/api/v1/lindin" , (req , res)=>{
    const instaAccount = {
        userName : 'Bharat Ruidas',
        followers : 500,
        follow : 32,
        date: format.asString("dd MM yy" , new Date())
    }
    res.status(200).json({instaAccount})
})
app.get("/api/v1/:token" , (req , res ) => {
    console.log(req.params.token)
    res.status(200).json({params : req.params.token})
})
app.get("/api/v1/:token/:another" , (req , res ) => {
    console.log(req.params.token)
    res.status(200).json({params : req.params.another})
})
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
