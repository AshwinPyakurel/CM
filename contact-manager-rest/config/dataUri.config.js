import path from 'path';
import DataURIParser from 'datauri/parser.js';
const parser = new DataURIParser();
let formatBufferTO64;
export default formatBufferTO64 = file =>parser.format(path.extname(file.originalname).toString(),file.buffer)
