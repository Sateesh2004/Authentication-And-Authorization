import {registerUser,signin} from "../controllers/userController.js";
import express from "express"
const router = express.Router();
router.post('/register', registerUser);
router.post('/signin', signin);
export default router;