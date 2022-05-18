import { Link } from 'react-router-dom'

export default function Navigation(props) {
  return(
    <nav className="navbar bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand" >
          TusCompras
        </Link>
        <div className="border rounded">
          <ul className="nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/carro" className="nav-link">Carro Compra</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Iniciar Sesion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}