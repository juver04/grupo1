import React ,{ useState } from "react";

const FormularioTareas = ({ agregarTarea}) => {
 
    const [ nuevaTarea, setNuevaTarea ] = useState('');

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if (nuevaTarea.trim() !== ''){
            agregarTarea(nuevaTarea);
            setNuevaTarea('');
            }
    };
    return(
        <form onSubmit={handlerSubmit}>
            <input 
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea (e.target.value)}
            placeholder="Nueva Tarea" 
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default FormularioTareas;