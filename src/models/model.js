import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : "String",
        required : true
    },
    subject : {
        type : "String",
        required : true
    },
    msg : {
        type : "String",
        required : true
    }
},{timestamps : true})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;