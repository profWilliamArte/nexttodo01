


const Cardbase = ({item}) => {
    return (
        <div  className='col-md-4 col-xl-3 mb-4'>
            <div className='card h-100' data-bs-theme="dark">
                <div className='card-header text-center h-100 d-flex align-items-center justify-content-center'>
                    <p className='fs-5 fw-bold'>{item.tarea}</p>
                </div>
                <div className='card-body text-center'>
                    <p>
                        Fecha de Creación:<br />
                        {new Date(item.fechacreacion).toLocaleString()}
                    </p>
                    <h1 className={`badge ${item.completado === 'Si' ? 'bg-success' : 'bg-danger'} fs-5`}>
                        {item.completado === 'Si' ? 'Completado' : 'Sin Completar'}
                    </h1>

                    {item.completado === 'Si' && (
                        <> 
                            <hr/>
                           
                           
                            <p>
                                Fecha de Realización:<br />
                                {new Date(item.fecharealizacion).toLocaleString()}
                            </p>
                        </>
                    )}
                </div>
                <div className='card-footer text-center'>
            
                        <button type="button" className="btn btn-outline-info btn-sm me-1">Editar</button>
                        {item.completado === 'No' && (
                            <button href="#" className='btn btn-success btn-sm me-1'>Completado</button>
                        )}
                        <button type="button" className="btn btn-outline-danger btn-sm">Eliminar</button>
                </div>

            </div>
        </div>
    )
}

export default Cardbase