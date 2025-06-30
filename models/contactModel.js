import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact name"]
    },

    email: {
        type: String,
        required: [true, "Please add contact email"]
    },

    phone: {
        type: String,
        required: [true, "Please add phone number"]
    }
},
    {
        timestamps: true,
        

    }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
