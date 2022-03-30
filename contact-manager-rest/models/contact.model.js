import mongoose from "mongoose";

const Phone = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
      },
      workNumber: {
        type: String,
      },
      homeNumber: {
        type: String,
      },
});
const Contacts = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },    
    imageUrl:{
      type: String,
      required:true,
    },
    phone: {
      type: Phone,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ownerUser:{
      type: String,
      required:true,
    },
    favourite:{
      type: Boolean,
      default: false,
    }
  });
export default mongoose.model("Contacts",Contacts);
