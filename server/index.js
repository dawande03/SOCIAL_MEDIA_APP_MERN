const express = require("express")
const mongoose =  require("mongoose")
const app = express()
const cors = require("cors")
mongoose.set('strictQuery', false)
const userRouter = require("./routes/user")
const postRouter = require('./routes/post')



// middleware
app.use(cors())
app.use(express.json({limit:"25mb"}))
app.use(express.urlencoded({extended:false}))

app.use('/api/post/',postRouter)
app.use('/api/users/',userRouter)

const DB_URL = "mongodb://0.0.0.0:27017/"

mongoose.connect(DB_URL,{ useNewUrlParser: true },()=>{
    console.log("DB connected");
})  

app.get("/",(req,res)=>{
    res.send("testing")
})

app.listen(8005,()=>{
console.log("server is connected on 8005");
})