import { NextResponse } from "next/server";

export function GET(request){
    const pathname = request.nextUrl.pathname;
    const id = pathname.split('/').pop();
    return NextResponse.json('Nos permite obtener un registro '+ id)
}

export async function PUT(request){
    const pathname = request.nextUrl.pathname;
    const id = pathname.split('/').pop();
    return NextResponse.json('Nos permite actualizar un registro '+ id)
}
export async function DELETE(request){
    const pathname = request.nextUrl.pathname;
    const id = pathname.split('/').pop();
    return NextResponse.json('Nos permite eliminar un registro '+ id)
}