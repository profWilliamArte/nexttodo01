

"use client"
import { useRouter,useParams } from "next/navigation";
import { useEffect, useState } from "react"


const page = () => {

  const params = useParams();
  console.log(params.id)

  const [tarea, setTarea] = useState("")
  const [message, setMessage] = useState("");


  useEffect(() => {
    async function fetchData() {
        if (params.id) {
            const res = await fetch(`/api/todo/${params.id}`);
            const data = await res.json();
            console.log("desde el use effect")
            console.log(data)
            setTarea(data.tarea);
        }
    }
    fetchData();
}, [params.id]);

  const manejoTarea = (e) => {
    setTarea(e.target.value)
    //console.log(tarea)
  }

  const handleSudmit = async (e) => {
    e.preventDefault();


    if (!params.id) {
   
      // crear la tarea
      try {
          const res = await fetch("/api/todo", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({ tarea }),
      });
      const data = await res.json();
      setMessage(data.message);
      console.log(data);
      setTarea("");
    } catch (err) {
      setMessage("Error al crear la tarea");
      console.log(err)
    }

  } else {
      // editar la tarea
      try {
        const res = await fetch(`/api/todo/${params.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tarea }),
        });
        const data = await res.json();
        setMessage("Actualizado Correctamente");
        console.log(data);
        //setTarea("");
        //router.push("/inicio");
      } catch (err) {
        setMessage("Error Actualizar la Tarea");
        console.log(err)
      }

  }
    
  }
  return (
    <div className="container">
      <h4 className="text-center py-4">
      {params.id ? "Actualizar la Tarea"  : " Crear un Nueva Tarea"}
       
        
        </h4>
      <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card" data-bs-theme="dark">
            <form onSubmit={handleSudmit} >
                <div className="card-header">
                  <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Tarea</label>
                    <textarea className="form-control" value={tarea} placeholder="indique la tarea" id="tarea" rows="4" onChange={manejoTarea}  required></textarea>
                  </div>
                    </div>
                  <div className="card-footer text-center"> 
                    <button type="submit" className="btn btn-outline-success">
                      {params.id ? "Actualizar" : "Crear"}
                    </button>
                    {message && (
                      <div className="alert alert-info mt-3">{message}</div>
                    )}
                  </div>
            </form>
            </div>
          </div>
        </div>
    </div>

  )
}

export default page