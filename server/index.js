const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { application } = require("express");

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "password",
    database : "donorblood",
});

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/submitReg",(req,res) =>{
    
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const dob = req.body.dob
    const ph_no = req.body.ph_no
    const email = req.body.email
    const flat_no = req.body.flat_no
    const area = req.body.area
    const pincode = req.body.pincode
    const gender = req.body.gender
    const bloodgrp = req.body.bloodgrp
    const city = req.body.city
    const state = req.body.state
    // const donate_blood = req.body.donate_blood

    
    const sqlRegInsert= "INSERT INTO user_reg(`first_name`,`last_name`,`dob`,`ph_no`,`email`,`flat_no`,`area`,`pincode`,`gender`,`blood_grp`,`city`,`state`)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlRegInsert,[first_name,last_name,dob,ph_no,email,flat_no,area,pincode,gender,bloodgrp,city,state], (err,result)=>{
        console.log(result);

    });
})


// app.get("/", (req,res) =>{
//     const sqlInsert = "INSERT INTO user_login (iduser_login,user_name) VALUES ('1','Fred');"
//     db.query(sqlInsert, (err, result) => {
//         res.send("hello")
//     })
   
// });

app.listen(3001, () =>{
    console.log("running on port 3001");
});