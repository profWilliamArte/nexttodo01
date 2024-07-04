import { NextResponse } from "next/server";
import {pool} from '@/libs/mysql'; 
export async  function GET(){
    try {
        const result = await pool.query("SELECT * FROM porhacer order by id desc");
        return NextResponse.json(result)
    } catch (error) {
        console.log('Error al listar los todo', error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
export async function POST(request){
    try {
        const {tarea} = await request.json();
        const completado='No';
        const fechacreacion = new Date();
        const fecharealizacion = new Date();
        const result = await pool.query("INSERT INTO porhacer SET ?", {
            tarea: tarea,
            completado: completado,
            fechacreacion: fechacreacion,
            fecharealizacion: fecharealizacion
        });
        //console.log(result)
        return NextResponse.json(
            {
                id: result.insertId,
                tarea: tarea,
                completado: completado,
                fechacreacion: fechacreacion,
                fecharealizacion: fecharealizacion,
                message: 'Creado correctamente',
            },
            {
                status: 200,
            }
        ) 
   } catch (error) {
    console.log(error)
        console.log('Error al crear erl todo', error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
   }
}