//@desc Get all conntacts
//@route Get /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    });
}

//@desc Get  conntact
//@route Get /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({
        message : `Get Contaact for ${req.params.id}`
    })
}
//@desc create  conntact
//@route POST /api/contacts/:id
//@access public
const createContact = (req, res) => {
    const requestBody = req.body
    const { name, email, phone } = requestBody
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory");
        
    }
    console.log(requestBody)
    res.status(201).json({
        message : "Create contact"
    })
}

//@desc update  conntact
//@route put /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({
        message : `Update Contaact for ${req.params.id}`
    })
}
//@desc delete  conntact
//@route delete /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({
        message : `Delete Contaact for ${req.params.id}`
    })
}

export  {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};