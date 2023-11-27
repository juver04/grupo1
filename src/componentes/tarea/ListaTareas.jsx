import Tarea from './Tarea';

const ListaTareas = ({ tareas, completarTarea, eliminarTarea}) => {
  return(
    <div>
        <h2>Lista de Tareas</h2>
        {tareas.map((tarea) =>(
        <Tarea 
        key={tarea.id}
        tarea={tarea}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
        />))}
    </div>
  )
}

export default ListaTareas;