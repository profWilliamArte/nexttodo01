import Card from "@/components/Card";
import Cardbase from "@/components/Cardbase";
import { pool } from "@/libs/mysql";



async function page() {
  

  const preparedQuery = `SELECT * FROM porhacer ORDER BY id desc `; // Placeholder for order
  const result = await pool.query(preparedQuery);

  return (
    <div className="container">
      <h3 className="text-center py-4">Todas las Tareas ({result.length})</h3>

      <div className="row">
        {result.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}



export default page;
