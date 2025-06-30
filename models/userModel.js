import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trime: true,
        required: [true, 'Please add Fullname']

    },
    
    username: {
        type: String,
        required: [true, 'Please add username'],
        trim: true,
        unique: [true, 'Username taken']

    },

    email: {
        type: String,
        required: [true, 'Please add email'],
        trim: true,
        lowercase: true,
        validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
        unique: [true, 'Email already exist']
        
    },

    password: {
        type: String,
        required: [true, 'Pleasee add password'],
        minlength: [8, 'Password must be at least 6 characters']
    }

},
{timestamps: true}
)

const User = mongoose.model("User", userSchema)
export default User;