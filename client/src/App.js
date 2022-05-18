import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Navigation from "./components/Navigation";
import ProductsList from './components/ProductsList'
import Sesion from './components/Sesion'
import CarroCompra from './components/CarroCompra'

function App() {

  const [ingreso, SetIngreso] = useState(false)
  const [user, setUser] = useState({id: "", email: "", password: ""})

  const updateIngreso = (ingresoState) => {
    SetIngreso(ingresoState)
    console.log('Cambio estado: '+ingresoState)
  }

  const updateUser = (user) => {
    setUser(user)
    console.log('Cambio usuario: '+ JSON.stringify(user))
  }

  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container border rounded bg-light mx-auto mt-2 p-4">
        <Routes>
          <Route
            index path="/"
            element={<ProductsList ingreso={ingreso} user={user}/>}
          />
          <Route
            path="/login"
            element={<Sesion ingreso={ingreso} user={user}
              updateIngreso={updateIngreso} updateUser={updateUser} />}
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
