import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import userRouter from './userRouter.js'

// const connection = mongoose.connect("mongodb://localhost:27017/newfolder5")
const connection = mongoose.connect("mongodb+srv://avinashsinghjuly897:"password"@cluster0.ahewjur.mongodb.net/?retryWrites=true&w=majority")


const port = 4000
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:"http://localhost:5173"}))

app.use("/use",userRouter)


connection.then(() => {
    app.listen(port, () =>
        console.log(`Server is running on ${port}`)
    )
})

    .catch((err) => console.log("error not running" + err))

