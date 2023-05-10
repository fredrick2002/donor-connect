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
app.use(bodyParser.json());

//Hospital Registration
app.post("/api/hSubmitReg/",(req,res) =>{
    
    const hospi_id = req.body.hospi_id;
    const hospi_name = req.body.hospi_name;
    const email = req.body.email;
    const hospi_addr = req.body.hospi_addr;
    const hospi_area = req.body.hospi_area;
    const pincode = req.body.pincode;
    const city = req.body.city;
    const state = req.body.state;
    const isi_code = req.body.isi_code;
    const ph_no = req.body.ph_no;
    const password = req.body.password;
    
    
    const sqlHRegInsert = "INSERT INTO hospi_reg(`hospi_id`, `hospi_name`, `email`, `hospi_addr`, `hospi_area`, `pincode`, `city`, `state`, `isi_code`, `ph_no`, `password`)VALUES(?,?,?,?,?,?,?,?,?,?,?);";
    db.query(sqlHRegInsert,[hospi_id,hospi_name,email,hospi_addr,hospi_area,pincode,city,state,isi_code,ph_no,password], (err,result)=>{
        console.log(err);
        // console.log(hospi_id);
        // console.log(password);
        // res.send("Hello");
        // console.log(result);
    });
})

//User Registration Form
app.post("/api/submitReg",(req,res) =>{
    
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dob = req.body.dob;
    const ph_no = req.body.ph_no;
    const email = req.body.email;
    const flat_no = req.body.flat_no;
    const area = req.body.area;
    const pincode = req.body.pincode;
    const gender = req.body.gender;
    const bloodgrp = req.body.bloodgrp;
    const city = req.body.city;
    const state = req.body.state;
    const donate_blood = req.body.donate_blood;
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
    const sqlProfile=`SELECT * FROM user_reg WHERE idUser_reg=?`
    db.query(sqlProfile,[idUser], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        } else {
            res.json(results);
        }
        // console.log(results);
    });
})

//For Update User Details
app.post("/api/updateProfile",(req,res) =>{
    const idUser=req.body.idUser;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dob = req.body.dob;
    const ph_no = req.body.ph_no;
    const email = req.body.email;
    const flat_no = req.body.flat_no;
    const area = req.body.area;
    const pincode = req.body.pincode;
    const gender = req.body.gender;
    const bloodgrp = req.body.bloodgrp;
    const city = req.body.city;
    const state = req.body.state;

    console.log(req);
    const sqlRegUpdate= `UPDATE user_reg SET first_name = ?,last_name = ?,dob= ?,ph_no= ?,email= ?,flat_no= ?,area= ?,pincode= ?,gender= ?,blood_grp= ?,city= ?,state= ? WHERE idUser_reg='${idUser}'`;
    db.query(sqlRegUpdate,[first_name,last_name,dob,ph_no,email,flat_no,area,pincode,gender,bloodgrp,city,state], (err,result)=>{
        console.log(result);
    });
})


//Hospital ID Validation
app.get("/api/hospiVal", (req,res)=>{
    const hospi_id = req.query.hospi_id

    const sqlHospiVal="SELECT hospi_id FROM hospi_reg WHERE hospi_id=?"
    db.query(sqlHospiVal,[hospi_id], (err,result)=>{
        console.log(result);
        res.json(result);
    });
})


app.listen(3001, () =>{
    console.log("running on port 3001");
});