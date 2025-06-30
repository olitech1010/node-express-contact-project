import expressAsyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc Get all conntacts
//@route Get /api/contacts
//@access public
const getContacts = expressAsyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Get  conntact
//@route Get /api/contacts/:id
//@access public
const getContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404);
        throw new Error("Contact Not found");
    }

    res.status(200).json(contact)
});

//@desc create  conntact
//@route POST /api/contacts/
//@access public
const createContact = expressAsyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
});

//@desc update  conntact
//@route put /api/contacts/:id
//@access public
const updateContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error(" Contact does not exist")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact)
});
//@desc delete  conntact
//@route delete /api/contacts/:id
//@access public

const deleteContact = expressAsyncHandler(async (req, res) => {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    if (!deletedContact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    res.status(200).json(deletedContact)
})

export  {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};