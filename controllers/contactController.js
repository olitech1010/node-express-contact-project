import expressAsyncHandler from "express-async-handler";

//@desc Get all conntacts
//@route Get /api/contacts
//@access public
const getContacts = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    });
});

//@desc Get  conntact
//@route Get /api/contacts/:id
//@access public
const getContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Get Contaact for ${req.params.id}`
    })
});

//@desc create  conntact
//@route POST /api/contacts/:id
//@access public
const createContact = expressAsyncHandler(async (req, res) => {
    const requestBody = req.body
    const { name, email, phone } = requestBody
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory");
        
    }
    console.log(requestBody)
    res.status(201).json({
        message: "Create contact"
    })
});

//@desc update  conntact
//@route put /api/contacts/:id
//@access public
const updateContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update Contaact for ${req.params.id}`
    })
});
//@desc delete  conntact
//@route delete /api/contacts/:id
//@access public
const deleteContact = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete Contaact for ${req.params.id}`
    })
});

export  {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};