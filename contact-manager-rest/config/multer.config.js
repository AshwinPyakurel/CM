import DataURIParser from 'datauri/parser.js';
import multer from 'multer';

import path from 'path';
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('photo');
const dUri = new DataURIParser(); 
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
export { multerUploads , dataUri};