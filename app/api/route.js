import { ConnectDb } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () =>{
    await ConnectDb();
}

LoadDB();

export async function GET(request) {
    
    return NextResponse.json({msg:"getmethod hit"})
}

export async function POST(request) {

    const {title,description} = await request.json();

    await TodoModel.create({
        title,
        description,
    })

    return NextResponse.json({msg:"Todo Created"})
}