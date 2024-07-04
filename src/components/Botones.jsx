"use client"
import { useRouter } from "next/navigation";

const Botones = ({id, completado}) => {
    const router = useRouter();
    async function eliminar(id){
        if (confirm('¿Estás seguro de eliminar este Todo?')) {
            try {
              const response = await fetch(`/api/todo/${id}`, {
                method: 'DELETE',
              });
      
              if (response.ok) {
                console.log('Todo eliminado exitosamente');
                window.location.reload();
              } else {
                console.error('Error al eliminar el Todo');
              }
            } catch (error) {
              console.error('Error al eliminar la categoría:', error);
            }
          }
     }
    function editar(id){
        router.push(`/crear/edit/${id}`);
    }
    const completarTarea = async (id) => {
      alert("completando la tarea "+id);
      
  }; 
    
    
    
  return (
    <>
    <button type="button" className="btn btn-outline-info btn-sm me-1"
        onClick={() => (editar(id))}>Editar
    </button>
    {completado === 'No' && (
        <button href="#" className='btn btn-success btn-sm me-1'
        onClick={() => (completarTarea(id))}>Completado</button>
    )}
       
    <button type="button" className="btn btn-outline-danger btn-sm"
        onClick={() => (eliminar(id))}>Eliminar
    </button>
    
    </>
  )
}

export default Botones