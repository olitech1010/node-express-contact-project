import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt'
//@desc Create  User
//@route Post /api/users/
//@access public
const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, username, email, password } = req.body
    if (!name || !username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({email})
    if (userAvailable) {
        res.status(400)
        throw new Error('User already registered')
    }
    try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, username, email, password:hashedPassword })
    res.status(201).json({_id:user.id, name:user.name, username:user.username, eemail:user.email})
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }

    })
    


//@desc find All Users
//@route get /api/users/
//@access private only admin

const getAllUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(201).json(users)

})

//@desc find User
//@route get /api/users/:id
//@access private 
const getUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    res.status(200).json(user)
})

//@desc Update User
//@route PUT /api/users/:id
//@access private 

const updateUser = expressAsyncHandler(async (res, req) => {
    const user = User.findOne(req.params.id)
    if (!user) {
        res.status(404)
        throw new Error('User not available')
    }

    const updatedUser = User.findOneAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json(updatedUser)


})

//@desc delete  User
//@route Delete /api/users/:id
//@access private 

const deleteUser = expressAsyncHandler(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) {
        res.status(404)
        throw new Error('User not found')
    }
    res.status(201).json(deletedUser)
})



export {registerUser, getAllUsers, getUser, updateUser, deleteUser }