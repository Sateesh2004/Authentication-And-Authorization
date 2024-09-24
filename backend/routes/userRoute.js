import {registerUser,signin,logout} from "../controllers/userController.js";
import express from "express"
const router = express.Router();
router.post('/register', registerUser);
router.post('/signin', signin);
router.post('/logout', logout);
export default router;