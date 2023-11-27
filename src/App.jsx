import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer.jsx';
import Pet from './componentes/Pet';
import pets from './componentes/datosPets';
import GestionTareas from './componentes/tarea/GestionTareas';
import Menu from './componentes/menu/Menu'


function App() {
 
   return (
   <Router>
    <div> 
      <Header />
     <Menu />
      <main>
        <Routes>
          <Route path="/tareas" element={<GestionTareas />} />
        </Routes>
        <div>
            {pets.map((pet, index) => (
              <Pet
              key={index}
              nombre={pet.nombre}
              color={pet.color}
              edad={pet.edad}
              
              />
            ))}
          </div> 
      </main>     
      <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
                <h1>Un Amigo por siempre</h1>
            </div>
            <Footer />
      
    </div>
   // </Router>
    )
}

export default App
