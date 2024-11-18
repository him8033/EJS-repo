const express= require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
})

app.get("/",(req,res) => {
    res.render("home.ejs")
    console.log("requesting ejs...")
})

app.get("/home",(req,res) => {
    res.send("hello")
    console.log("requesting...")
})

app.get("/:username",(req,res) => {
    let {username} = req.params;
    res.render("instagram.ejs",{username});
    console.log("requesting...");
})

app.get("/ig/:username",(req,res) => {
    const followers = ["adam","bob","steve","john"];
    let {username} = req.params;
    res.render("forloop.ejs",{username,followers});
    console.log("requesting...");
})

app.get("/rolldice",(req,res) => {
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceValue});
    console.log("requesting...");
})