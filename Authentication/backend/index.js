const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
const port=8080
const connect=require("./src/config/db.config")
const register=require("./src/controler/Registermyself")
const login=require("./src/controler/Login")
const User=require("./src/controler/todo.controler")
app.use("",User)

app.use("/register", register)
app.use("/login", login)

app.listen(port,async()=>{
try {
    await connect()
    console.log(`i am connect with port ${port}`)
} catch (err) {
    console.log(err.message)
}
})