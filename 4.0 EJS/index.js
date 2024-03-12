import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    const d = new Date();
    let day = d.getDay();
    res.render("index.ejs",{
        today: day
    });
});


app.listen(port, (req,res) => {
    console.log(`The port is listening at ${port}`)
})