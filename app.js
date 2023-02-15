const express=require("express")
const app=express()

//middleware
// app.use('/posts',()=>{
//     console.log("this is a middleware running")
// })
app.use('/posts', require('./routes/posts'))
app.use(express.json())
//ROUTES


app.listen(3000)