import connectToDatabase from "@/utils/db";
import Contact from "@/models/model";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        const body = req.json();
        await connectToDatabase();

        await Contact.create(body);

        return NextResponse.json({message : "Message sent succesfully"}, {status : 500})
    } catch (error) {
        console.log(error);
    }
}