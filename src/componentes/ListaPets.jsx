import React from 'react';
import pets from './datosPets'
import Pet from './Pet';

const ListaPets = ({ pets }) => {
    return(

<div>
<h2>Nuestras Mascotas</h2>
{pets.map((pet, index) => (
  <Pet
  key={index}
  nombre={pet.nombre}
  color={pet.color}
  edad={pet.edad}
  
  />
))}
</div> 
)
 }
 
 export default ListaPets;