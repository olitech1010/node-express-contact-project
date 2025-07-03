import express from 'express';

const router = express.Router();
import { registerUser, loginUser, logoutUser, getUser, currentUser, getAllUsers, updateUser, deleteUser } from '../controllers/userController.js';

router.route("/")
    .get(getAllUsers)
    .post(registerUser)


router.route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)


router.route("/login").post(loginUser)

router.route("/logout").post(logoutUser)
router.route("/current").post(currentUser)


    


export default router


