const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./model/User')
const bcrypt = require('bcrypt');
const bcryptSalt  =bcrypt.genSaltSync(10);
const cors = require('cors')
const jwt = require('jsonwebtoken');
const jwtSecret = '12iovdodyshfnusdhuci';
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.MONGO_URL)
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "PUT", "DELETE"],

}))




app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post('/register', async (req,res) =>{
  const {name,email,password} = req.body
  const userDoc = await User.create({
    name,
    email,
    password:bcrypt.hashSync(password,bcryptSalt)
  });
  res.json(userDoc)
})

app.post('/login', async(req,res) =>{
  const {email,password} = req.body;
  const userDoc = await User.findOne({email})
  if(userDoc){
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
      jwt.sign({email:userDoc.email,id:userDoc._id},
        jwtSecret, {}, (err,token) =>{
        if (err) throw err
        res.cookie('token',token).json(userDoc)
      })
    
  }else{
    res.json('not found')
  }
}else{
  res.json('user not found')
}
})

app.get('/login', async(req,res) =>{

  const {token} = req.cookies
  if(token){
    jwt.verify(token, jwtSecret, {},async (err,userData) =>{
      if (err) throw err
      const {name, email,_id} = await User.findById(userData.id)
      res.json({name,email,_id})
    })
  }else{
    res.json(null) 
  }
})

app.post('/logout', (req,res) =>{
  res.cookie('token', '').json(true);
});


app.listen(3000)