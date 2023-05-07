const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");


const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "password",
    database : "donorblood",
});

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

//User Registration Form
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
    const donate_blood = req.body.donate_blood
    const password = req.body.password;

    
    const sqlRegInsert= "INSERT INTO user_reg(`first_name`,`last_name`,`dob`,`ph_no`,`email`,`flat_no`,`area`,`pincode`,`gender`,`blood_grp`,`city`,`state`,`donate_blood`,`password`)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlRegInsert,[first_name,last_name,dob,ph_no,email,flat_no,area,pincode,gender,bloodgrp,city,state,donate_blood,password], (err,result)=>{
        console.log(result);
    });
})



//Email Validation
app.get("/api/emailVal", (req,res)=>{
    const email = req.query.email

    const sqlEmailVal="SELECT email FROM user_reg WHERE email=?"
    db.query(sqlEmailVal,[email], (err,result)=>{
        console.log(result);
        res.json(result);
    });
})

//Login Validation
app.post("/api/loginVal", (req,res)=>{
    const { email, password } = req.body;
    console.log(req.body);
    const sqlLogin = `SELECT idUser_reg FROM user_reg WHERE email = '${email}' AND password = '${password}'`;
    db.query(sqlLogin, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        } else {
            res.json(results);
        }
        console.log(results);
    });
})

//For Profile Data View
app.get("/api/profile",(req,res)=>{
    const idUser = req.query.idUser;
    const sqlProfile=`SELECT first_name,last_name,dob,ph_no,email,gender,blood_grp FROM user_reg WHERE idUser_reg=?`
    db.query(sqlProfile,[idUser], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        } else {
            res.json(results);
        }
        console.log(results);
    });
})

app.listen(3001, () =>{
    console.log("running on port 3001");
});