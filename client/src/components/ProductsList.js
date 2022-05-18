import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsList(props) {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({id:"", contenido:"", titulo:""})
  const [ingreso, SetIngreso] = useState(props.ingreso)
  const [user, setUser] = useState(props.user)
  
  const navigate = useNavigate();

  const loadProducts = async () => {
    const response = await fetch("http://localhost:9000/products");
    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const agregarCompra = async (producto) => {
    //console.log(product)
    const product_id = producto.id
    const user_id = user.id
    console.log(product_id, user_id)
    setProduct(producto)
    props.updateCarroCompra(producto)
  }

  var mostrarCompra = ingreso ? "d-block" : "d-none"

  return (
    <>
      <h1>Productos</h1>
      <div className="row">
        {
          products.map((product) => (
            <div className="col-md-6 p-2 mt-1" key={product.id}>
              <div className="card">
                <div className="card-header">
                  <h5>{product.titulo}</h5>
                </div>
                <div className="card-body">
                  <img src={product.contenido} />
                </div>
                <div className={"card-header " + mostrarCompra}>
                  <button
                    className="btn btn-warning"
                    //onClick={() => console.log(product.id)}
                    //onClick={() => navigate(`/${product.id}`)}
                    onClick={() => agregarCompra(product)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
