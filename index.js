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