import express from 'express';

const router = express.Router();
import { registerUser, getUser, getAllUsers, updateUser, deleteUser } from '../controllers/userController.js';

router.route("/")
    .get(getAllUsers)
    .post(registerUser)

router.route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
    


export default router


