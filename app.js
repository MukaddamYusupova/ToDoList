// jshint esversion6
const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname+"/data.js")

let items=["Buy food", "Cook food", "Eat food"];
let workItems =[];



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.set("view engine", "ejs");

// date

app.get ("/", function(req, res){

    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items})
})

app.post("/", function(req, res){
    let item= (req.body.newItem);

    if (req.body.list==="Work"){
        workTtems.push(item);
        res.redirect("/work");
    } else {
        items.push(item)
        res.redirect("/");
    }
     
})


// work
app.get ("/work", function(req, res){

    res.render("list", {listTitle: "Work List", newListItems: workItems})
    
})

app.post ("/work", function(req, res){
    let item = req.body.newItems;
    workItems.push(item);
    res.render("/work")
});

app.get ("/about", function(req, res){

    res.render("about")
    
})



app.listen (4000, function (){
    console.log("Server is working!");
});
