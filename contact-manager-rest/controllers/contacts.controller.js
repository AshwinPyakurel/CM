import Contacts from "../models/contact.model.js";
import { validationResult } from "express-validator";
import uploadImage from "../config/cloudinary.config.js";
import { multerUploads, dataUri } from '../config/multer.config.js';

const addContact = (req,res)=>{     
  const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(401).json({message:"Entered data is incorrect"});
    } 
    const file = dataUri(req).content;                        
    const iData = uploadImage(file);
    iData.then((result)=>{
      const contact = new Contacts({
        name:req.body.name,
        photo:result.publicId,
        imageUrl: result.url,
        phone:{
            mobileNumber: req.body.mobileNumber,
            workNumber:req.body.workNumber,
            homeNumber:req.body.homeNumber,
        },
        address: req.body.address,
        email:req.body.email,        
        ownerUser: res.locals.user
    });    
    contact.save().then(()=>{
        return res.status(200).json({message:"Contact has been saved sucessfully"}); 
    }).catch((err)=>{
        console.log(err);
    })
    })    
}
const readContact = (req,res)=>{  
    Contacts.find({ownerUser:res.locals.user})
    .then((contacts) => {
      return res.status(200).json(contacts);
    })
    .catch((err) => {
      console.log(err);
    });
}
const updateContact = (req,res)=>{  
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }
  const file = dataUri(req).content;                        
  const iData = uploadImage(file);

  iData.then((result)=>{
    Contacts.findByIdAndUpdate(req.params.id,{
      name:req.body.name,
      photo:result.publicId,
      imageUrl:result.url,
      phone:{
          mobileNumber: req.body.mobileNumber,
          workNumber:req.body.workNumber,
          homeNumber:req.body.homeNumber,
      },
      address: req.body.address,
      email:req.body.email,        
      ownerUser: res.locals.user
  })    
  .then(()=>{
      return res.status(200).json({message:"Contact has been updated sucessfully"}); 
  }).catch((err)=>{
      console.log(err);
  })
  })      
}
const deleteContact = (req,res)=>{
    Contacts.findByIdAndRemove(req.params.id)
    .then(() => {
      return res.status(200).send('Contact deleted successfully.');
    })
    .catch((err) => console.log(err));
}
const isFavourite = (req,res)=>{
    let id = req.params.id;    
    Contacts.findByIdAndUpdate(req.params.id,{
      favourite:true,
    }).then(()=>{
      return res.status(200).json({message:"Success made favourite"})
    })
  }

  
  const isUnFavourite = (req,res)=>{
    let id = req.params.id;    
    Contacts.findByIdAndUpdate(req.params.id,{
      favourite:false,
    }).then(()=>{
      return res.status(200).json({message:"Success Ok!"})
    })
  }
export {addContact,readContact,updateContact,deleteContact,isFavourite,isUnFavourite};