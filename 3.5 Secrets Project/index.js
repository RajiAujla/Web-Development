//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";

//to access the full file path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
//body Parser will parse the incoming request body to an object
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var path = "";

/* app.use to use the Middleware that is bodyparser */
app.use(bodyParser.urlencoded({extended: true}));

/* 
@author: `Rajwinder`
@purpose: to validate the password
*/
function validatePassword(req,res,next){
  if (req.body["password"] == "ILoveProgramming")
    path = __dirname+"/public/secret.html";
  else 
    path = __dirname+"/public/index.html";
   next();
}

/* call your own middleware to validate the password */
app.use(validatePassword);

/* GET method to receive the request
SendFile method used to send an file in response*/
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html");
});

/* POST on submit validate the password and return the response */
app.post("/check",(req,res)=>{
  res.sendFile(path);
});

/*Set the port listening on 3000*/
app.listen(port,()=>{
    console.log(`Port is listening on ${port}`)
})