
import Cardbase from "@/components/Cardbase";
import Card from "@/components/Card";
import { pool } from "@/libs/mysql"
async function page(){
    // consulta d ela base de datos
    const result = await pool.query(`SELECT * FROM porhacer where completado = 'Si' order by id desc`);

  return (
    <div className="container">
        <h3 className="text-center py-4">Tareas Realizadas ({result.length})</h3>
        <div className="row">
            {result.map((item) => (
              <Card key={item.id} item={item} />
            ))}
        </div>
    </div>
   
  )
}

export default page