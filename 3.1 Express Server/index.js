import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("Hello!!");
})

app.get("/about",(req,res)=>{
  res.send("About");
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}.`)
})

