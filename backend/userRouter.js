import express from "express"
import userModel from "./usermodels.js";

const userRouter = express.Router();

// userRouter.get("/new", async (req, res) => {
//     const existingUser = await userModel.find({})
//     console.log(existingUser[0]);
 
// })



userRouter.post("/new", async (req, res) => {
    const { first, last , phone ,age ,dob,message } = req.body
    const newUser = new userModel({
        // id: id,
        first: first,
        last: last,
        phone: phone,
        age: age,
        dob: dob,
        message:message,

    })

    const result = await newUser.save()
    res.status(201).json(result)
})




    
export default userRouter;