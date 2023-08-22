require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workout')
const app=express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONG_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connect to db and listening on port ",process.env.PORT)
    })
})
.catch((error)=>{ 
    console.log(error)
})


