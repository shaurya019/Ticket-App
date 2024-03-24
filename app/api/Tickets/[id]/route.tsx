import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";


export async function GET(request:any, { params }:any) {

const {id} = params;

const foundTicket = await Ticket.findOne({ _id: id });
return NextResponse.json({ foundTicket }, { status: 200 });
}


export async function PUT(req:any, { params }:any) {
    try {
        const { id } = params;
        const body = await req.json();

        return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
        const ticketData = body.formData;
        const updateTicketData = await Ticket.findByIdAndUpdate(id,{...ticketData})
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function DELETE(request:any, { params }:any) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    
    }
}