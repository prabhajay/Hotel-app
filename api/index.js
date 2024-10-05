require('dotenv').config();
const credential = JSON.parse(process.env.CREDENTIALS_JSON);
const uuid=require('uuid')
const express=require('express')
//firebase-admin
const fs = require('fs');
const admin= require('firebase-admin')
const PORT=process.env.PORT || 3000;
const app = express()
const cookieParser =require('cookie-parser')
const authRoute=require('../api/routes/auth.js')
const usersRoute=require('../api/routes/users.js')
const hotelsRoute=require('../api/routes/hotels.js')
const roomsRoute=require('../api/routes/rooms.js')
const cors=require('cors');
const bodyparser=require("body-parser")
const connectDB=require('./DB/index.js')
connectDB();

//firebase
const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
)
admin.initializeApp({
    credential:admin.credential.cert(credentials),
})

app.use(cors());
app.use(express.json());
app.use(cookieParser());
/*
app.get("/",(req,res)=>{
    res.send("hello World")
})
app.get('/api/hotels',(req,res)=>{
    res.send("ngjdfjgdjfgb")
})
app.post('/api/hotels',(req,res)=>{
//const customer=req.body;
res.send()
})*/



//middlewares

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.listen(PORT,()=>{
    console.log(`Connected the Server ${PORT}`);
})


