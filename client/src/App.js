import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Navigation from "./components/Navigation";
import ProductsList from './components/ProductsList'
import Sesion from './components/Sesion'
import CarroCompra from './components/CarroCompra'

function App() {

  const [carroCompra, setCarroCompra] = useState([]);
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

  const updateCarroCompra = (product) => {
    const productValid = validarProducto(product)
    if(productValid)
      setCarroCompra([...carroCompra, product])
  }

  const validarProducto = (product) => {
    if (carroCompra.length == 0)
      return true
    const productoValido = carroCompra.find((compra) => {
      return compra.id == product.id
    })
    if(productoValido){
      console.log("El producto ya se agrego al carro de compras")
      return false
    }else{
      console.log("El producto agregado al carro de compras")
      return true
    }
    console.log(productoValido)
  }

  const deleteCarroCompra = (product) => {
    setCarroCompra(carroCompra.filter((compra) => compra.id !== product.id))
  }

  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container border rounded bg-light mx-auto mt-2 p-4">
        <Routes>
          <Route
            index path="/"
            element={<ProductsList ingreso={ingreso} user={user}
              updateCarroCompra={updateCarroCompra} />}
          />
          <Route
            path="/login"
            element={<Sesion ingreso={ingreso} user={user}
              updateIngreso={updateIngreso} updateUser={updateUser} />}
          />
          <Route
            path="/carro"
            element={<CarroCompra 
              carroCompra={carroCompra}
              deleteCarroCompra={deleteCarroCompra} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
