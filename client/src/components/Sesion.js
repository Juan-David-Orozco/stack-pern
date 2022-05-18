import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import '/node_modules/font-awesome/css/font-awesome.css'

export default function Sesion(props) {

  const [users, setUsers] = useState([])
  const [ingreso, SetIngreso] = useState(props.ingreso)
  const [user, setUser] = useState(props.user)

  const loadUsers = async () => {
    const response = await fetch("http://localhost:9000/users");
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const validarIngreso = (usuario) => {
    setUser(usuario)
    SetIngreso(true)
    props.updateIngreso(true)
    props.updateUser(usuario)
  }

  const salir = () => {
    setUser({id: "", email: "", password: ""})
    SetIngreso(false)
    props.updateIngreso(false)
    props.updateUser({id: "", email: "", password: ""})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const pass = document.getElementById('clave').value;
    console.log(email, pass)
    console.log(users)
    const valido = validarCredenciales(email, pass)
    console.log(valido)
    if(valido){
      validarIngreso(valido)
    }
  }

  const validarCredenciales = (correo, clave) => {
    const usuarioValido = users.find((user) => {
      return user.email == correo && user.password == clave
    })
    if(usuarioValido == undefined){
      console.log("Datos invalidos")
      return undefined
    }
    else{
      console.log("Bienvenido al sitema")
      return usuarioValido
    }
  }

  if(ingreso){
    return(
      <>
        <div className="row my-2">
          <div className="col-5">
            Bienvenido al sistema
          </div>
          <div className="col-7 border rounded mx-auto">
            <i className="fa fa-user pr-2"></i> <b>Usuario: </b>
            <i> {user.email} </i>
          </div>
        </div>
        <button className="btn btn-danger mr-2" onClick={salir}>
          Salir
        </button>
      </>
    )
  } else {
    return (
      <>
        <h2 className='text-primary text-center'><small>Inicio Sesion</small></h2>
        <div className=' rounded bg-dark mt-2 p-2'>
          <form onSubmit={handleSubmit}>
            <div className="input-group pb-3">
              <div className="input-group-prepend my-auto">
                <span className="input-group-text">
                <i className="fa fa-envelope-o fa-fw py-1"></i></span>
              </div>
              <input className="form-control" id='email'
                type="email" placeholder="Correo Electrónico"
              />
            </div>
            <div className="input-group pb-3">
              <div className="input-group-prepend my-auto">
                <span className="input-group-text">
                <i className="fa fa-key fa-fw py-1"></i></span>
              </div>
              <input className="form-control" id='clave'
                type="password" placeholder="Contraseña"
              />
            </div>
            <button className="btn btn-primary mr-2" type="submit">
              Acceder
            </button>
          </form>
        </div>
      </>
    )
  }
}
