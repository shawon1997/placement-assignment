const express = require("express")
const router = express.Router()
const User = require("../model/todo.model")
router.get("/todo", async (req, res) => {
    try {
        const user = await User.find().lean().exec()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

router.post("/todo", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

router.patch("/todo/:id", async (req, res) => {
    try {
        const id=req.params.id
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router