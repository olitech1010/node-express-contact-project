import express from 'express';
const router = express.Router();
import {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} from "../controllers/contactController.js";

router.route("/")
    .get(getContacts)
    .post(createContact);

router.route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);


export default router;