import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Navigation from "./components/Navigation";
import ProductsList from './components/ProductsList'
import Sesion from './components/Sesion'
import CarroCompra from './components/CarroCompra'

function App() {

  const [ingreso, SetIngreso] = useState(false)

  const updateIngreso = (ingresoState) => {
    SetIngreso(ingresoState)
    console.log('Cambio estado: '+ingresoState)
  }

  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container border rounded bg-light mx-auto mt-2 p-4">
        <Routes>
          <Route
            index path="/"
            element={<ProductsList ingreso={ingreso} />}
          />
          <Route
            path="/login"
            element={<Sesion ingreso={ingreso} updateIngreso={updateIngreso}/>}
          />
          <Route
            path="/carro"
            element={<CarroCompra />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
