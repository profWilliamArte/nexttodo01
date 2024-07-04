import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json('Mostrar una lista de datos de la tabla')
}
export function POST(){
    return NextResponse.json('Permite insertar datos en la base de datos')
}