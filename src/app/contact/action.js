"use server";
import Contact from "@/models/model";
import connectToDatabase from "@/utils/db";
const submitContact = async (data) =>{
    try {
        await connectToDatabase();

        await Contact.create(data)
    } catch (error) {
        console.log(error);
    }
}

export default submitContact;