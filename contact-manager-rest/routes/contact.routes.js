import express from 'express';
import multer from 'multer';
import {addContact,readContact,updateContact,deleteContact,isFavourite, isUnFavourite} from '../controllers/contacts.controller.js';
import {authenticate} from '../middleware/auth.middleware.js';
import { multerUploads } from '../config/multer.config.js';
const router = express.Router();

router.get('/contacts',authenticate,readContact);
router.post('/contacts',authenticate,multerUploads,addContact);
router.put('/contacts/:id',authenticate,multerUploads,updateContact);
router.delete('/contacts/:id',authenticate,multerUploads,deleteContact);
router.patch('/contacts/isFavourite/:id',authenticate,multerUploads,isFavourite);
router.patch('/contacts/isUnFavourite/:id',authenticate,multerUploads,isUnFavourite);

export{router as CONTACT_API_ROUTE};