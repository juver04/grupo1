import React,{useState, useEffect} from "react";
import ListaTareas from "./ListaTareas";
import FormularioTareas from "./FormularioTareas";
import './Tareas.css'

const GestionTareas = () =>{
 //estado para almacenar tareas
 const [ tareas, setTareas] = useState ([]);
  
 //estado inicial
 useEffect(() => {
   const tareasGuardadas =JSON.parse(localStorage.getItem('tareas'));
   console.log('Tareas Cargadas:', tareasGuardadas);
   if(tareasGuardadas){
     setTareas(tareasGuardadas)
   }  //catch (error) {
      //console.error('Error al cargar desde localStorage:', error);  }
 }, []);
//almacena las tareas cuando cambia de estado
 useEffect(() => {
   localStorage.setItem('tareas', JSON.stringify(tareas))
 }, [tareas]);
 
 const completarTarea = (id) => {
   const nuevasTareas = tareas.map((tarea) =>
   tarea.id == id ? { tarea, completada : !tarea.completada} : tarea
   );
   setTareas(nuevasTareas);
 };

//eliminar tareas
 const eliminarTarea = (id) => {
   const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
   setTareas(nuevasTareas);
 };
 //agregar tarea
 const agregarTarea = (nombre) => {
   const nuevaTarea = {
     id: Date.now(),
     completada: false,
     }
     setTareas([ ...tareas, nuevaTarea]);
 };
 return(
    <div className="contenedor-tareas">
        <h1 className="titulo">Gestion de Tareas</h1>
         <ListaTareas 
        tareas={tareas}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
        /> 
    <FormularioTareas agregarTarea={agregarTarea} />

    </div>
 )

}

export default GestionTareas;
