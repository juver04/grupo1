import './Tareas.css'

const Tarea = ({ tarea, completarTarea, eliminarTarea}) =>{
    const { id, nombre, completada} = tarea;

    const completar = () =>{
        completarTarea(id);
    };
    const eliminar = () =>{
        eliminarTarea(id);
    };

    return (
        <div className="tarea">
            <span className={completada ? 'completada' : ''}>
                {nombre}</span>
            <button onClick={completar}>
                {completada ? 'Incompleta' : 'Completar'}
            </button>
            <button onClick={eliminar}>Eliminar</button>
        </div>
    )
}

export default Tarea;