import express from 'express';
import multer from 'multer';
import {signIn,signUp} from '../controllers/auth.controller.js';

const router = express.Router();
const upload = multer();

router.post('/signup',upload.none(), signUp);
router.post('/signin',upload.none(),signIn);
export{router as AUTH_API_ROUTE};