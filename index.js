const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`app is listing on Port ${port}`); 
});

let num = 1 ;


app.get("/home", (req, res) => {
    num = 1;
    res.render("home.ejs");
});

app.get("/quiz", (req, res) => {
    const data = require("./data.json");
    let quiz = data[num];
    
    res.render("quiz.ejs", { quiz,num });
});

app.post("/check", (req, res) => {
    const data = require("./data.json");
    const answer = req.body.answer;
    let q = data[num];
    if (answer === q.answer) {
        if(num == Object.keys(data).length){
            res.render("completed.ejs",{num});
        }
        else{
            res.render("correct.ejs");
        }
    }
    else {
        res.render("incorrect.ejs");
    }
});

app.get("/next",(req,res)=>{
    num = num+1;
    res.redirect("/quiz");
});

app.get("/back",(req,res)=>{
    res.redirect("/quiz");
});

app.get("/quit",(req,res)=>{
    res.render("quit.ejs",{num});
});



